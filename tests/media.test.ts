import { mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { copyMedia } from '../scripts/media.ts'

let workdir = ''
beforeEach(() => { workdir = mkdtempSync(join(tmpdir(), 'atlas-media-')) })
afterEach(() => rmSync(workdir, { recursive: true, force: true }))

function seed(): string {
  const source = join(workdir, 'src-media')
  mkdirSync(join(source, 'exercises'), { recursive: true })
  mkdirSync(join(source, 'muscles'), { recursive: true })
  for (let i = 0; i < 40; i++) writeFileSync(join(source, 'exercises', `move-${i}.webp`), Buffer.from([0x52, 0x49, 0x46, 0x46, i, 0, 255]))
  writeFileSync(join(source, 'exercises', 'bench.png'), Buffer.from([0x89, 0x50, 0x4e, 0x47]))
  writeFileSync(join(source, 'muscles', 'chest.png'), Buffer.from([1, 2, 3]))
  return source
}

describe('copyMedia', () => {
  it('copies every exercise and muscle file byte-for-byte, whatever the extension', () => {
    const source = seed()
    const destination = join(workdir, 'out')
    copyMedia(destination, { source })
    const copied = readdirSync(join(destination, 'media/exercises')).sort()
    expect(copied).toEqual(readdirSync(join(source, 'exercises')).sort())
    expect(copied.filter((name) => name.endsWith('.webp'))).toHaveLength(40)
    expect(readFileSync(join(destination, 'media/exercises/move-7.webp'))).toEqual(readFileSync(join(source, 'exercises/move-7.webp')))
    expect(readdirSync(join(destination, 'media/muscles'))).toEqual(['chest.png'])
  })
  it('removes stale files when asked to clean', () => {
    const source = seed()
    const destination = join(workdir, 'out')
    mkdirSync(join(destination, 'media/exercises'), { recursive: true })
    writeFileSync(join(destination, 'media/exercises/stale.webp'), 'old')
    copyMedia(destination, { source, clean: true })
    expect(readdirSync(join(destination, 'media/exercises'))).not.toContain('stale.webp')
    expect(readdirSync(join(destination, 'media/exercises'))).toContain('move-0.webp')
  })
  it('tolerates a missing collection', () => {
    const source = join(workdir, 'empty')
    mkdirSync(source)
    expect(() => copyMedia(join(workdir, 'out'), { source })).not.toThrow()
  })
})
