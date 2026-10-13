import { describe, expect, it } from 'vitest'
import { filterExercises, localize } from '../src/catalog.ts'
import { loadAndValidate } from '../scripts/shared.ts'

const records = loadAndValidate()
describe('catalog', () => {
  it('validates 30 independent source documents with unique stable IDs', () => {
    expect(records).toHaveLength(30)
    expect(new Set(records.map((e) => e.id)).size).toBe(30)
  })
  it('falls back to English for missing Turkish fields', () => {
    const resolved = localize(records.find((e) => e.id === 'push-up')!, 'tr')
    expect(resolved.name).toBe('Şınav')
    expect(resolved.instructions).toEqual(records.find((e) => e.id === 'push-up')!.instructions.en)
  })
  it('combines filters without mutating source data', () => {
    const localized = records.map((e) => localize(e, 'en'))
    const result = filterExercises(localized, { muscle: 'chest', equipment: 'bodyweight', difficulty: 'beginner', query: 'push' })
    expect(result.map((e) => e.id)).toEqual(['incline-push-up', 'push-up'])
    expect(records).toHaveLength(30)
  })
})
