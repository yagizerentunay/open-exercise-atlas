import { pickIllustration } from './catalog.ts'
import type { Equipment, Exercise, Muscle } from './types.ts'

/**
 * Monk Mode consumer adapter (pure, no I/O).
 *
 * Monk Mode pins an Atlas commit in `data/atlas.lock.json`, syncs `dist/exercises.json` plus the media files
 * and runs these functions to produce its own catalog. The id of a record is `legacyIds[0]` when present,
 * otherwise `atlas:<id>`; names are English; instructions are Turkish with English fallback.
 */

/** One entry of Monk Mode's generated exercise catalog. */
export interface MonkExercise {
  id: string
  name: string
  aliases?: string[]
  level: string
  equipment: string | null
  category: string
  primaryMuscles: string[]
  secondaryMuscles: string[]
  /** Media path as stored in the Atlas record (for example `media/exercises/<id>.webp`). */
  illustration?: string
  instructions: string[]
}

export interface MonkCatalog {
  exercises: MonkExercise[]
  /** Every legacy id after the first one of a record, mapped to the runtime id of the record that owns it. */
  extraLegacyIds: Record<string, string>
}

/** Atlas muscle code -> Monk Mode muscle name. Exact inverse of the Monk -> Atlas migration table. */
export const monkMuscleNames: Record<Muscle, string> = {
  chest: 'chest', 'upper-back': 'middle back', lats: 'lats', shoulders: 'shoulders', biceps: 'biceps', triceps: 'triceps',
  forearms: 'forearms', abdominals: 'abdominals', obliques: 'obliques', 'lower-back': 'lower back', glutes: 'glutes',
  quadriceps: 'quadriceps', hamstrings: 'hamstrings', calves: 'calves', adductors: 'adductors', abductors: 'abductors',
  traps: 'traps', neck: 'neck', 'hip-flexors': 'hip flexors',
}

/** Atlas equipment code -> Monk Mode equipment value, for the codes Monk Mode knows. */
export const monkEquipmentNames: Partial<Record<Equipment, string>> = {
  bodyweight: 'body only', barbell: 'barbell', dumbbell: 'dumbbell', cable: 'cable', machine: 'machine', band: 'bands',
  kettlebell: 'kettlebells', 'ez-bar': 'e-z curl bar', 'exercise-ball': 'exercise ball', other: 'other',
}

/** Codes that describe a supporting object rather than the main implement; the reverse rule skips them. */
const supportEquipment: readonly Equipment[] = ['bench', 'mat', 'pull-up-bar']

export function monkId(exercise: Pick<Exercise, 'id' | 'legacyIds'>): string {
  return exercise.legacyIds?.[0] ?? `atlas:${exercise.id}`
}

/** First code that is not bench/mat/pull-up-bar; `[]` (or only support codes) -> null. */
export function monkEquipment(codes: readonly Equipment[]): string | null {
  const main = codes.find((code) => !supportEquipment.includes(code))
  if (main === undefined) return null
  const name = monkEquipmentNames[main]
  if (name === undefined) throw new Error(`No Monk Mode equipment mapping for "${main}"`)
  return name
}

export function monkMuscle(code: Muscle): string {
  const name = monkMuscleNames[code]
  if (name === undefined) throw new Error(`No Monk Mode muscle mapping for "${code}"`)
  return name
}

export function toMonkExercise(exercise: Exercise): MonkExercise {
  for (const id of exercise.legacyIds ?? []) {
    if (id.startsWith('custom-')) throw new Error(`Atlas cannot claim custom ID ${id}`)
  }
  const illustration = pickIllustration(exercise.media)?.path
  return {
    id: monkId(exercise),
    name: exercise.name.en,
    ...(exercise.aliases?.length ? { aliases: [...exercise.aliases] } : {}),
    level: exercise.difficulty === 'advanced' ? 'expert' : exercise.difficulty,
    equipment: monkEquipment(exercise.equipment),
    category: exercise.category,
    primaryMuscles: exercise.primaryMuscles.map(monkMuscle),
    secondaryMuscles: exercise.secondaryMuscles.map(monkMuscle),
    ...(illustration ? { illustration } : {}),
    instructions: [...(exercise.instructions.tr ?? exercise.instructions.en)],
  }
}

/** Converts a whole Atlas collection, keeping input order. Throws when two records would share a Monk Mode id. */
export function toMonkCatalog(atlas: readonly Exercise[]): MonkCatalog {
  const exercises: MonkExercise[] = []
  const extraLegacyIds: Record<string, string> = {}
  const owners = new Map<string, string>()
  const claim = (id: string, owner: string) => {
    const previous = owners.get(id)
    if (previous !== undefined) throw new Error(`Monk Mode id "${id}" is claimed by both "${previous}" and "${owner}"`)
    owners.set(id, owner)
  }
  for (const record of atlas) {
    const converted = toMonkExercise(record)
    claim(converted.id, record.id)
    exercises.push(converted)
    for (const extra of record.legacyIds?.slice(1) ?? []) {
      claim(extra, record.id)
      extraLegacyIds[extra] = converted.id
    }
  }
  return { exercises, extraLegacyIds }
}
