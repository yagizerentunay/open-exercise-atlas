import { describe, expect, it } from 'vitest'
import { NO_EQUIPMENT, filterExercises, localize, pickIllustration } from '../src/catalog.ts'
import { loadAndValidate } from '../scripts/shared.ts'
import { makeExercise, makeMedia } from './fixtures.ts'

describe('repository data', () => {
  const records = loadAndValidate()
  it('validates independent source documents with unique stable IDs', () => {
    expect(records.length).toBeGreaterThanOrEqual(30)
    expect(new Set(records.map((e) => e.id)).size).toBe(records.length)
    expect(new Set(records.map((e) => e.slug)).size).toBe(records.length)
  })
  it('keeps every legacy ID owned by exactly one record', () => {
    const legacy = records.flatMap((e) => e.legacyIds ?? [])
    expect(new Set(legacy).size).toBe(legacy.length)
  })
})

describe('localize', () => {
  it('falls back to English for missing Turkish fields', () => {
    const record = makeExercise({ name: { en: 'Push-Up', tr: 'Şınav' } })
    const resolved = localize(record, 'tr')
    expect(resolved.name).toBe('Şınav')
    expect(resolved.description).toBe('A fixture movement.')
    expect(resolved.instructions).toEqual(record.instructions.en)
  })
  it('uses Turkish instructions when present', () => {
    const resolved = localize(makeExercise({ instructions: { en: ['Step.'], tr: ['Adım.'] } }), 'tr')
    expect(resolved.instructions).toEqual(['Adım.'])
  })
})

describe('filterExercises', () => {
  const records = [
    makeExercise({ id: 'push-up', slug: 'push-up', name: { en: 'Push-Up' }, equipment: ['bodyweight'], primaryMuscles: ['chest'] }),
    makeExercise({ id: 'incline-push-up', slug: 'incline-push-up', name: { en: 'Incline Push-Up' }, equipment: ['bodyweight', 'bench'], primaryMuscles: ['chest'], secondaryMuscles: ['triceps'] }),
    makeExercise({ id: 'shrug', slug: 'shrug', name: { en: 'Shrug' }, equipment: ['dumbbell'], primaryMuscles: ['traps'], secondaryMuscles: ['neck'], difficulty: 'intermediate' }),
    makeExercise({ id: 'neck-curl', slug: 'neck-curl', name: { en: 'Neck Curl' }, equipment: [], primaryMuscles: ['neck'], movementPattern: 'isolation' }),
    makeExercise({ id: 'ball-crunch', slug: 'ball-crunch', name: { en: 'Ball Crunch' }, equipment: ['exercise-ball'], primaryMuscles: ['abdominals'], secondaryMuscles: ['hip-flexors'] }),
  ].map((e) => localize(e, 'en'))
  const ids = (filters: Parameters<typeof filterExercises>[1]) => filterExercises(records, filters).map((e) => e.id)

  it('combines filters', () => {
    expect(ids({ muscle: 'chest', equipment: 'bodyweight', difficulty: 'beginner', query: 'push' })).toEqual(['push-up', 'incline-push-up'])
  })
  it('filters by the new muscle codes, as primary or secondary', () => {
    expect(ids({ muscle: 'neck' })).toEqual(['shrug', 'neck-curl'])
    expect(ids({ muscle: 'hip-flexors' })).toEqual(['ball-crunch'])
  })
  it('filters by the new equipment codes', () => {
    expect(ids({ equipment: 'exercise-ball' })).toEqual(['ball-crunch'])
    expect(ids({ equipment: 'ez-bar' })).toEqual([])
  })
  it('matches exercises without equipment through the "none" filter', () => {
    expect(NO_EQUIPMENT).toBe('none')
    expect(ids({ equipment: NO_EQUIPMENT })).toEqual(['neck-curl'])
  })
  it('finds Turkish names typed without Turkish letters, in any case', () => {
    const turkish = [
      makeExercise({ id: 'dumbbell-press', slug: 'dumbbell-press', name: { en: 'Dumbbell Press', tr: 'Dambıl Press' } }),
      makeExercise({ id: 'push-up', slug: 'push-up', name: { en: 'Push-Up', tr: 'Şınav' } }),
    ].map((e) => localize(e, 'tr'))
    const found = (query: string) => filterExercises(turkish, { query }).map((e) => e.id)
    expect(found('dambil')).toEqual(['dumbbell-press'])
    expect(found('DAMBIL')).toEqual(['dumbbell-press'])
    expect(found('dambıl')).toEqual(['dumbbell-press'])
    expect(found('sinav')).toEqual(['push-up'])
    expect(found('ŞINAV')).toEqual(['push-up'])
  })
  it('does not mutate its input', () => {
    const before = JSON.stringify(records)
    filterExercises(records, { muscle: 'chest' })
    expect(JSON.stringify(records)).toBe(before)
  })
})

describe('pickIllustration', () => {
  it('prefers reference, then finish, then start', () => {
    const start = makeMedia('start')
    const finish = makeMedia('finish')
    const reference = makeMedia('reference')
    expect(pickIllustration([start, finish, reference])).toBe(reference)
    expect(pickIllustration([start, finish])).toBe(finish)
    expect(pickIllustration([start])).toBe(start)
  })
  it('ignores animations and missing media', () => {
    expect(pickIllustration([makeMedia('animation')])).toBeUndefined()
    expect(pickIllustration([])).toBeUndefined()
    expect(pickIllustration(undefined)).toBeUndefined()
  })
})
