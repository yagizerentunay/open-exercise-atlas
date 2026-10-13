import type { Exercise } from './types.ts'

/** Shape consumed by Monk Mode's current generated exercise list. */
export interface MonkExercise {
  id: string; name: string; level: string; equipment: string | null; category: string;
  primaryMuscles: string[]; secondaryMuscles: string[]; images: string[]
}

const equipmentMap: Record<string, string> = { bodyweight: 'body only', barbell: 'barbell', dumbbell: 'dumbbell', kettlebell: 'kettlebells', cable: 'cable', machine: 'machine', band: 'bands' }
const muscleMap: Record<string, string> = { 'upper-back': 'middle back', 'lower-back': 'lower back', quadriceps: 'quadriceps', lats: 'lats', glutes: 'glutes', chest: 'chest', biceps: 'biceps', triceps: 'triceps', shoulders: 'shoulders', hamstrings: 'hamstrings', calves: 'calves', abdominals: 'abdominals', obliques: 'abdominals', forearms: 'forearms', traps: 'traps', adductors: 'adductors', abductors: 'abductors' }

export function mergeForMonkMode(legacy: MonkExercise[], atlas: Exercise[]): MonkExercise[] {
  const result = new Map(legacy.map((exercise) => [exercise.id, exercise]))
  for (const exercise of atlas) {
    const ids = exercise.legacyIds?.length ? exercise.legacyIds : [`atlas:${exercise.id}`]
    for (const id of ids) {
      if (id.startsWith('custom-')) throw new Error(`Atlas cannot claim custom ID ${id}`)
      const old = result.get(id)
      result.set(id, {
        id,
        name: exercise.name.en,
        level: exercise.difficulty === 'advanced' ? 'expert' : exercise.difficulty,
        equipment: equipmentMap[exercise.equipment[0]] ?? old?.equipment ?? null,
        category: exercise.category,
        primaryMuscles: exercise.primaryMuscles.map((m) => muscleMap[m] ?? m),
        secondaryMuscles: exercise.secondaryMuscles.map((m) => muscleMap[m] ?? m),
        images: exercise.media?.filter((m) => m.role !== 'animation').map((m) => m.path) ?? old?.images ?? [],
      })
    }
  }
  return [...result.values()]
}
