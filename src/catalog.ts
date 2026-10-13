import type { Exercise, Locale, ResolvedExercise } from './types.ts'

export function localize(exercise: Exercise, locale: Locale): ResolvedExercise {
  const pick = <T>(value: { en: T; tr?: T } | undefined): T | undefined => value?.[locale] ?? value?.en
  return {
    ...exercise,
    name: pick(exercise.name)!,
    description: pick(exercise.description)!,
    instructions: pick(exercise.instructions)!,
    formCues: pick(exercise.formCues),
    commonMistakes: pick(exercise.commonMistakes),
  }
}

export interface Filters { query?: string; muscle?: string; equipment?: string; difficulty?: string; category?: string; movementPattern?: string }
export function filterExercises(exercises: ResolvedExercise[], filters: Filters): ResolvedExercise[] {
  const query = (filters.query ?? '').trim().toLocaleLowerCase()
  return exercises.filter((exercise) =>
    (!query || exercise.name.toLocaleLowerCase().includes(query)) &&
    (!filters.muscle || [...exercise.primaryMuscles, ...exercise.secondaryMuscles].includes(filters.muscle as never)) &&
    (!filters.equipment || exercise.equipment.includes(filters.equipment as never)) &&
    (!filters.difficulty || exercise.difficulty === filters.difficulty) &&
    (!filters.category || exercise.category === filters.category) &&
    (!filters.movementPattern || exercise.movementPattern === filters.movementPattern))
}
