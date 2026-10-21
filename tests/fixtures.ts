import type { Exercise, MediaAsset } from '../src/types.ts'

/** A minimal valid record. Tests override only what they care about, so they do not depend on repository data. */
export function makeExercise(overrides: Partial<Exercise> = {}): Exercise {
  return {
    schemaVersion: 1,
    id: 'test-move',
    slug: 'test-move',
    name: { en: 'Test Move' },
    description: { en: 'A fixture movement.' },
    category: 'strength',
    movementPattern: 'push',
    difficulty: 'beginner',
    equipment: ['bodyweight'],
    primaryMuscles: ['chest'],
    secondaryMuscles: [],
    instructions: { en: ['Do the first step.', 'Do the second step.'] },
    source: { type: 'original', title: 'Fixture', license: 'CC0-1.0' },
    ...overrides,
  }
}

export function makeMedia(role: MediaAsset['role'], path = `media/exercises/test-move-${role}.webp`, license: MediaAsset['license'] = 'MIT'): MediaAsset {
  return {
    path,
    role,
    alt: { en: `Fixture ${role} image`, tr: `Örnek ${role} görseli` },
    creator: 'Monk Mode (AI-assisted original illustration)',
    sourceUrl: 'https://github.com/yagizerentunay/monk-mode/blob/main/public/exercises/example.webp',
    license,
    redistributionEvidenceUrl: 'https://github.com/yagizerentunay/monk-mode/blob/main/LICENSE',
  }
}
