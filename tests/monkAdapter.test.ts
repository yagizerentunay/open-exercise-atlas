import { expect, it } from 'vitest'
import { mergeForMonkMode, type MonkExercise } from '../src/monkAdapter.ts'
import { loadAndValidate } from '../scripts/shared.ts'

it('preserves legacy workout IDs and unmatched catalog entries', () => {
  const old: MonkExercise = { id: 'Push-Up', name: 'Push-Up', level: 'beginner', equipment: 'body only', category: 'strength', primaryMuscles: ['chest'], secondaryMuscles: [], images: [] }
  const other = { ...old, id: 'Historic_Movement' }
  const atlas = { ...loadAndValidate().find((e) => e.id === 'push-up')!, legacyIds: ['Push-Up'] }
  const result = mergeForMonkMode([old, other], [atlas])
  expect(result.find((e) => e.id === 'Push-Up')?.name).toBe('Push-Up')
  expect(result.find((e) => e.id === 'Historic_Movement')).toEqual(other)
  expect(result).toHaveLength(2)
})
