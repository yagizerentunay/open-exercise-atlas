export type Locale = 'en' | 'tr'
export type Localized<T> = { en: T; tr?: T }
export type Muscle = 'chest' | 'upper-back' | 'lats' | 'shoulders' | 'biceps' | 'triceps' | 'forearms' | 'abdominals' | 'obliques' | 'lower-back' | 'glutes' | 'quadriceps' | 'hamstrings' | 'calves' | 'adductors' | 'abductors' | 'traps'
export type Equipment = 'bodyweight' | 'barbell' | 'dumbbell' | 'kettlebell' | 'cable' | 'machine' | 'band' | 'bench' | 'pull-up-bar' | 'mat'
export type MovementPattern = 'squat' | 'hinge' | 'push' | 'pull' | 'lunge' | 'carry' | 'rotation' | 'core' | 'isolation'
export type Category = 'strength' | 'mobility' | 'cardio'
export type Difficulty = 'beginner' | 'intermediate' | 'advanced'
export interface MediaAsset {
  path: string
  role: 'start' | 'finish' | 'animation'
  alt: Localized<string>
  creator: string
  sourceUrl: string
  license: string
  redistributionEvidenceUrl: string
}
export interface Source { type: 'original' | 'adapted'; title: string; url?: string; license: string; reviewedBy?: string; reviewedAt?: string }
export interface Exercise {
  schemaVersion: 1
  id: string
  slug: string
  name: Localized<string>
  description: Localized<string>
  category: Category
  movementPattern: MovementPattern
  force?: 'push' | 'pull' | 'static'
  mechanic?: 'compound' | 'isolation'
  difficulty: Difficulty
  equipment: Equipment[]
  primaryMuscles: Muscle[]
  secondaryMuscles: Muscle[]
  instructions: Localized<string[]>
  formCues?: Localized<string[]>
  commonMistakes?: Localized<string[]>
  alternatives?: string[]
  variations?: string[]
  media?: MediaAsset[]
  source: Source
  reviewStatus: 'pending' | 'reviewed'
  legacyIds?: string[]
}
export type ResolvedExercise = Omit<Exercise, 'name' | 'description' | 'instructions' | 'formCues' | 'commonMistakes'> & {
  name: string; description: string; instructions: string[]; formCues?: string[]; commonMistakes?: string[]
}
