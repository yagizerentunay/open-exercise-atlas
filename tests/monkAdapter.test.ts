import { describe, expect, it } from 'vitest'
import { monkEquipment, monkEquipmentNames, monkId, monkMuscle, monkMuscleNames, toMonkCatalog, toMonkExercise } from '../src/monkAdapter.ts'
import { equipment, muscles } from '../src/vocabulary.ts'
import { makeExercise, makeMedia } from './fixtures.ts'

describe('toMonkExercise', () => {
  it('produces the exact consumer shape from a fully migrated record', () => {
    const record = makeExercise({
      id: 'archer-push-up',
      slug: 'archer-push-up',
      name: { en: 'Archer Push-Up', tr: 'Okçu Şınavı' },
      aliases: ['Archer Pushup'],
      difficulty: 'intermediate',
      equipment: ['bodyweight'],
      primaryMuscles: ['chest'],
      secondaryMuscles: ['triceps', 'shoulders'],
      instructions: { en: ['Step one.'], tr: ['Birinci adım.'] },
      legacyIds: ['monk-chest-archer-push-up'],
      media: [makeMedia('reference', 'media/exercises/archer-push-up.webp')],
    })
    expect(toMonkExercise(record)).toEqual({
      id: 'monk-chest-archer-push-up',
      name: 'Archer Push-Up',
      aliases: ['Archer Pushup'],
      level: 'intermediate',
      equipment: 'body only',
      category: 'strength',
      primaryMuscles: ['chest'],
      secondaryMuscles: ['triceps', 'shoulders'],
      illustration: 'media/exercises/archer-push-up.webp',
      instructions: ['Birinci adım.'],
    })
  })

  it('uses atlas:<id> when there is no legacy id, English name and English instructions', () => {
    const result = toMonkExercise(makeExercise({ id: 'plank', name: { en: 'Plank', tr: 'Plank Duruşu' } }))
    expect(result.id).toBe('atlas:plank')
    expect(result.name).toBe('Plank')
    expect(result.instructions).toEqual(['Do the first step.', 'Do the second step.'])
  })

  it('falls back to English instructions when Turkish is missing and does not alias the record arrays', () => {
    const record = makeExercise({ instructions: { en: ['English.'] } })
    const result = toMonkExercise(record)
    expect(result.instructions).toEqual(['English.'])
    result.instructions.push('mutated')
    expect(record.instructions.en).toEqual(['English.'])
  })

  it('maps empty equipment to null', () => {
    expect(toMonkExercise(makeExercise({ equipment: [] })).equipment).toBeNull()
  })

  it('maps ez-bar, exercise-ball and other', () => {
    expect(toMonkExercise(makeExercise({ equipment: ['ez-bar'] })).equipment).toBe('e-z curl bar')
    expect(toMonkExercise(makeExercise({ equipment: ['exercise-ball'] })).equipment).toBe('exercise ball')
    expect(toMonkExercise(makeExercise({ equipment: ['other'] })).equipment).toBe('other')
  })

  it('takes the first equipment code that is not bench, mat or pull-up-bar', () => {
    expect(monkEquipment(['bench', 'barbell'])).toBe('barbell')
    expect(monkEquipment(['pull-up-bar', 'bodyweight'])).toBe('body only')
    expect(monkEquipment(['mat'])).toBeNull()
    expect(monkEquipment(['bench', 'pull-up-bar'])).toBeNull()
    expect(monkEquipment(['band'])).toBe('bands')
    expect(monkEquipment(['kettlebell'])).toBe('kettlebells')
  })

  it('maps hip-flexors, neck and upper-back/lower-back to Monk Mode names', () => {
    const result = toMonkExercise(makeExercise({ primaryMuscles: ['upper-back', 'neck'], secondaryMuscles: ['hip-flexors', 'lower-back', 'obliques'] }))
    expect(result.primaryMuscles).toEqual(['middle back', 'neck'])
    expect(result.secondaryMuscles).toEqual(['hip flexors', 'lower back', 'obliques'])
  })

  it('maps every muscle and equipment code with the documented tibialis fallback', () => {
    expect(Object.keys(monkMuscleNames).sort()).toEqual([...muscles].sort())
    expect(new Set(Object.values(monkMuscleNames)).size).toBe(muscles.length - 1) // tibialis maps to legacy calves
    const mapped = equipment.filter((code) => !['bench', 'mat', 'pull-up-bar'].includes(code))
    expect(Object.keys(monkEquipmentNames).sort()).toEqual([...mapped].sort())
    expect(new Set(Object.values(monkEquipmentNames)).size).toBe(mapped.length)
    for (const code of muscles) expect(monkMuscle(code)).toBe(monkMuscleNames[code])
  })

  it('maps advanced to expert and passes beginner and intermediate through', () => {
    expect(toMonkExercise(makeExercise({ difficulty: 'advanced' })).level).toBe('expert')
    expect(toMonkExercise(makeExercise({ difficulty: 'beginner' })).level).toBe('beginner')
    expect(toMonkExercise(makeExercise({ difficulty: 'intermediate' })).level).toBe('intermediate')
  })

  it('prefers reference over finish over start and keeps the stored path', () => {
    const start = makeMedia('start', 'media/exercises/a-start.webp')
    const finish = makeMedia('finish', 'media/exercises/a-finish.webp')
    const reference = makeMedia('reference', 'media/exercises/a.webp')
    expect(toMonkExercise(makeExercise({ media: [start, finish, reference] })).illustration).toBe('media/exercises/a.webp')
    expect(toMonkExercise(makeExercise({ media: [start, finish] })).illustration).toBe('media/exercises/a-finish.webp')
    expect(toMonkExercise(makeExercise({ media: [start] })).illustration).toBe('media/exercises/a-start.webp')
  })

  it('omits optional keys when absent', () => {
    const result = toMonkExercise(makeExercise({ aliases: [], media: [makeMedia('animation')] }))
    expect(result).not.toHaveProperty('illustration')
    expect(result).not.toHaveProperty('aliases')
    expect(Object.keys(result)).toEqual(['id', 'name', 'level', 'equipment', 'category', 'primaryMuscles', 'secondaryMuscles', 'instructions'])
  })

  it('refuses to claim a custom workout id', () => {
    expect(() => toMonkExercise(makeExercise({ legacyIds: ['custom-123'] }))).toThrow(/custom/)
  })

  it('exposes the runtime id helper', () => {
    expect(monkId({ id: 'a', legacyIds: ['Old_One', 'Old_Two'] })).toBe('Old_One')
    expect(monkId({ id: 'a' })).toBe('atlas:a')
  })
})

describe('toMonkCatalog', () => {
  const plain = makeExercise({ id: 'plain', slug: 'plain' })
  const owner = makeExercise({ id: 'owner', slug: 'owner', legacyIds: ['Old_Main', 'Old_Extra', 'Old_Other'] })

  it('keeps input order and exposes extra legacy ids with their owning runtime id', () => {
    const catalog = toMonkCatalog([plain, owner])
    expect(catalog.exercises.map((e) => e.id)).toEqual(['atlas:plain', 'Old_Main'])
    expect(catalog.extraLegacyIds).toEqual({ Old_Extra: 'Old_Main', Old_Other: 'Old_Main' })
  })

  it('does not leak the extra legacy ids into the exercise list', () => {
    expect(toMonkCatalog([owner]).exercises).toHaveLength(1)
  })

  it('throws when two records would share a Monk Mode id', () => {
    const clash = makeExercise({ id: 'clash', slug: 'clash', legacyIds: ['Old_Main'] })
    expect(() => toMonkCatalog([owner, clash])).toThrow(/Old_Main/)
    const extraClash = makeExercise({ id: 'other', slug: 'other', legacyIds: ['Old_Extra'] })
    expect(() => toMonkCatalog([owner, extraClash])).toThrow(/Old_Extra/)
  })

  it('returns an empty catalog for no records', () => {
    expect(toMonkCatalog([])).toEqual({ exercises: [], extraLegacyIds: {} })
  })
})
