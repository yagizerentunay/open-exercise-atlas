import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { createRecordValidator, root } from '../scripts/shared.ts'
import { equipment, mediaLicenses, mediaRoles, movementPatterns, muscles } from '../src/vocabulary.ts'
import { makeExercise, makeMedia } from './fixtures.ts'

const json = (path: string) => JSON.parse(readFileSync(resolve(root, path), 'utf8'))
const schema = json('schemas/exercise.schema.json')
const validate = createRecordValidator()

describe('controlled vocabulary', () => {
  it('has the exact final lists', () => {
    expect([...muscles]).toEqual(['chest', 'upper-back', 'lats', 'shoulders', 'biceps', 'triceps', 'forearms', 'abdominals', 'obliques', 'lower-back', 'glutes', 'quadriceps', 'hamstrings', 'calves', 'adductors', 'abductors', 'traps', 'neck', 'hip-flexors'])
    expect([...equipment]).toEqual(['bodyweight', 'barbell', 'dumbbell', 'kettlebell', 'cable', 'machine', 'band', 'bench', 'pull-up-bar', 'mat', 'ez-bar', 'exercise-ball', 'other'])
    expect([...mediaRoles]).toEqual(['start', 'finish', 'animation', 'reference'])
    expect([...mediaLicenses]).toEqual(['CC0-1.0', 'MIT'])
  })
  it('matches the JSON Schema enums', () => {
    expect(schema.$defs.muscle.enum).toEqual([...muscles])
    expect(schema.properties.equipment.items.enum).toEqual([...equipment])
    expect(schema.properties.movementPattern.enum).toEqual([...movementPatterns])
    expect(schema.$defs.media.properties.role.enum).toEqual([...mediaRoles])
    expect(schema.$defs.media.properties.license.enum).toEqual([...mediaLicenses])
  })
  it('has an English and a Turkish label for every code', () => {
    for (const locale of ['en', 'tr']) {
      const labels = json(`data/translations/${locale}.json`)
      expect(Object.keys(labels.muscles)).toEqual([...muscles])
      expect(Object.keys(labels.equipment)).toEqual([...equipment])
      expect(Object.keys(labels.movementPatterns)).toEqual([...movementPatterns])
    }
  })
  it('uses the agreed Turkish labels', () => {
    const tr = json('data/translations/tr.json')
    expect(tr.muscles.neck).toBe('Boyun')
    expect(tr.muscles['hip-flexors']).toBe('Kalça fleksörleri')
    expect(tr.equipment['ez-bar']).toBe('EZ bar')
    expect(tr.equipment['exercise-ball']).toBe('Pilates topu')
    expect(tr.equipment.other).toBe('Diğer')
  })
})

describe('schema accepts the additive vocabulary', () => {
  it('accepts a minimal record', () => {
    expect(validate(makeExercise())).toBeNull()
  })
  it.each(['neck', 'hip-flexors'])('accepts muscle %s as primary and secondary', (muscle) => {
    expect(validate(makeExercise({ primaryMuscles: [muscle as never] }))).toBeNull()
    expect(validate(makeExercise({ secondaryMuscles: [muscle as never] }))).toBeNull()
  })
  it.each(['ez-bar', 'exercise-ball', 'other'])('accepts equipment %s', (code) => {
    expect(validate(makeExercise({ equipment: [code as never] }))).toBeNull()
  })
  it('accepts an empty equipment list', () => {
    expect(validate(makeExercise({ equipment: [] }))).toBeNull()
  })
  it('accepts aliases', () => {
    expect(validate(makeExercise({ aliases: ['Press-Up', 'Floor Press'] }))).toBeNull()
  })
  it('accepts a reference media asset in webp and png', () => {
    expect(validate(makeExercise({ media: [makeMedia('reference', 'media/exercises/test-move.webp')] }))).toBeNull()
    expect(validate(makeExercise({ media: [makeMedia('reference', 'media/exercises/test-move.png', 'CC0-1.0')] }))).toBeNull()
  })
})

describe('schema still rejects invalid data', () => {
  it.each([
    ['unknown muscle', { primaryMuscles: ['spleen'] }],
    ['unknown equipment', { equipment: ['trampoline'] }],
    ['duplicate equipment', { equipment: ['ez-bar', 'ez-bar'] }],
    ['empty alias', { aliases: [''] }],
    ['duplicate alias', { aliases: ['A', 'A'] }],
    ['unknown media role', { media: [makeMedia('thumbnail' as never)] }],
    ['media license outside the allow-list', { media: [makeMedia('reference', 'media/exercises/a.webp', 'CC-BY-4.0' as never)] }],
    ['media outside media/exercises', { media: [makeMedia('reference', 'media/elsewhere/a.webp')] }],
    ['unsupported media extension', { media: [makeMedia('reference', 'media/exercises/a.svg')] }],
    ['uppercase media file', { media: [makeMedia('reference', 'media/exercises/A.webp')] }],
  ])('rejects %s', (_label, overrides) => {
    expect(validate(makeExercise(overrides as never))).not.toBeNull()
  })
  it('keeps schemaVersion at 1', () => {
    expect(schema.properties.schemaVersion).toEqual({ const: 1 })
    expect(validate({ ...makeExercise(), schemaVersion: 2 })).not.toBeNull()
  })
})
