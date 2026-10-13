import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { root } from '../scripts/shared.ts'
import { muscleTiles } from '../src/muscleGallery.ts'
import { muscles } from '../src/vocabulary.ts'

describe('muscle gallery', () => {
  it('returns one tile per muscle code, in vocabulary order', () => {
    expect(muscleTiles(muscles, []).map((tile) => tile.muscle)).toEqual([...muscles])
  })
  it('gives a muscle without an illustration a null image but keeps its tile', () => {
    const tiles = muscleTiles(muscles, ['chest.png', 'lats.png'])
    expect(tiles.find((t) => t.muscle === 'chest')?.illustration).toBe('media/muscles/chest.png')
    expect(tiles.find((t) => t.muscle === 'neck')).toEqual({ muscle: 'neck', illustration: null })
    expect(tiles.find((t) => t.muscle === 'hip-flexors')).toEqual({ muscle: 'hip-flexors', illustration: null })
  })
  it('only links illustration files that exist in media/muscles', () => {
    const files = readdirSync(resolve(root, 'media/muscles'))
    const tiles = muscleTiles(muscles, files)
    for (const tile of tiles) if (tile.illustration) expect(files).toContain(`${tile.muscle}.png`)
    // every shipped file belongs to a known muscle code (no orphans)
    for (const file of files.filter((name) => name.endsWith('.png'))) expect(muscles as readonly string[]).toContain(file.replace(/\.png$/, ''))
  })
})
