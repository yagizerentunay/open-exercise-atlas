/**
 * Controlled vocabulary shared by the JSON Schema, TypeScript types, the
 * translation tables and the explorer. tests/vocabulary.test.ts keeps these
 * lists, `schemas/exercise.schema.json` and `data/translations/*.json` in sync.
 * Adding a code is an additive (minor) change; renaming or removing one is breaking.
 */
export const muscles = ['chest', 'upper-back', 'lats', 'shoulders', 'biceps', 'triceps', 'forearms', 'abdominals', 'obliques', 'lower-back', 'glutes', 'quadriceps', 'hamstrings', 'calves', 'adductors', 'abductors', 'traps', 'neck', 'hip-flexors', 'tibialis-anterior'] as const
export const equipment = ['bodyweight', 'barbell', 'dumbbell', 'kettlebell', 'cable', 'machine', 'band', 'bench', 'pull-up-bar', 'mat', 'ez-bar', 'exercise-ball', 'other'] as const
export const movementPatterns = ['squat', 'hinge', 'push', 'pull', 'lunge', 'carry', 'rotation', 'core', 'isolation'] as const
export const categories = ['strength', 'mobility', 'cardio'] as const
export const difficulties = ['beginner', 'intermediate', 'advanced'] as const
export const mediaRoles = ['start', 'finish', 'animation', 'reference'] as const
/** Licenses accepted for a media asset. Adding another value needs a schema change. */
export const mediaLicenses = ['CC0-1.0', 'MIT'] as const
