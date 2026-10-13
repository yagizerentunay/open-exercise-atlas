import type { categories, difficulties, equipment, mediaLicenses, mediaRoles, movementPatterns, muscles } from './vocabulary.ts'

export type Locale = 'en' | 'tr'
export type Localized<T> = { en: T; tr?: T }
export type Muscle = (typeof muscles)[number]
export type Equipment = (typeof equipment)[number]
export type MovementPattern = (typeof movementPatterns)[number]
export type Category = (typeof categories)[number]
export type Difficulty = (typeof difficulties)[number]
export type MediaRole = (typeof mediaRoles)[number]
export type MediaLicense = (typeof mediaLicenses)[number]
export interface MediaAsset {
  path: string
  role: MediaRole
  alt: Localized<string>
  creator: string
  sourceUrl: string
  license: MediaLicense
  redistributionEvidenceUrl: string
}
export interface Source { type: 'original' | 'adapted'; title: string; url?: string; license: string; reviewedBy?: string; reviewedAt?: string }
export interface Exercise {
  schemaVersion: 1
  id: string
  slug: string
  name: Localized<string>
  /** Other English names. Used only to match imports, never shown as a title. */
  aliases?: string[]
  description: Localized<string>
  category: Category
  movementPattern: MovementPattern
  force?: 'push' | 'pull' | 'static'
  mechanic?: 'compound' | 'isolation'
  difficulty: Difficulty
  /** Empty means no equipment is needed. */
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
