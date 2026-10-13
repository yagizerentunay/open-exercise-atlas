import type { Muscle } from './types.ts'

export interface MuscleTile {
  muscle: Muscle
  /** Path relative to the site base, or null when the muscle has no reference illustration. */
  illustration: string | null
}

/** One tile per muscle code. A muscle without a file in `available` still gets a tile (the filter works) but no image. */
export function muscleTiles(codes: readonly Muscle[], available: Iterable<string>, directory = 'media/muscles'): MuscleTile[] {
  const files = new Set(available)
  return codes.map((muscle) => ({ muscle, illustration: files.has(`${muscle}.png`) ? `${directory}/${muscle}.png` : null }))
}
