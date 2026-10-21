import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { loadAndValidate } from '../scripts/shared.ts'
import type { Exercise } from '../src/types.ts'
import { makeExercise, makeMedia } from './fixtures.ts'

let base = ''
beforeEach(() => { base = mkdtempSync(join(tmpdir(), 'atlas-validate-')) })
afterEach(() => rmSync(base, { recursive: true, force: true }))

const put = (path: string, content: string) => {
  mkdirSync(dirname(join(base, path)), { recursive: true })
  writeFileSync(join(base, path), content)
}

/** Writes a small repository under `base`: one `<id>.json` per record, an ID registry (default: every record) and empty media files. */
function repo(records: Exercise[], options: { registry?: string[]; fileNames?: Record<string, string>; media?: string[] } = {}) {
  for (const record of records) put(`data/exercises/${options.fileNames?.[record.id] ?? record.id}.json`, JSON.stringify(record))
  put('data/id-registry.json', JSON.stringify(Object.fromEntries((options.registry ?? records.map((r) => r.id)).map((id) => [id, id]))))
  for (const path of options.media ?? []) put(path, 'x')
}

const a = makeExercise({ id: 'a-move', slug: 'a-move' })
const b = makeExercise({ id: 'b-move', slug: 'b-move' })
const image = 'media/exercises/a-move-start.webp'

describe('loadAndValidate', () => {
  it('accepts a clean repository, including media and relationships', () => {
    repo([{ ...a, media: [makeMedia('start', image)] }, { ...b, alternatives: ['a-move'] }], { media: [image] })
    expect(loadAndValidate(base).map((record) => record.id)).toEqual(['a-move', 'b-move'])
  })

  const broken: [string, () => void, RegExp][] = [
    ['a file name that differs from the ID', () => repo([a], { fileNames: { 'a-move': 'other' } }), /other\.json: filename must match ID/],
    ['a duplicate slug', () => repo([a, { ...b, slug: 'a-move' }]), /duplicate ID or slug/],
    ['a legacy ID owned by two records', () => repo([{ ...a, legacyIds: ['old'] }, { ...b, legacyIds: ['old'] }]), /duplicate legacy ID old/],
    ['an adapted record without a source URL', () => repo([{ ...a, source: { type: 'adapted', title: 'T', license: 'CC0-1.0' } }]), /adapted record needs source URL/],
    ['a muscle in both groups', () => repo([{ ...a, secondaryMuscles: ['chest'] }]), /muscle appears in both groups/],
    ['a media file that does not exist', () => repo([{ ...a, media: [makeMedia('start', image)] }]), /missing media/],
    ['the same media path twice', () => repo([{ ...a, media: [makeMedia('start', image), makeMedia('finish', image)] }], { media: [image] }), /duplicate media path/],
    ['an alternative that does not exist', () => repo([{ ...a, alternatives: ['ghost'] }]), /broken relationship ghost/],
    ['a record that lists itself as a variation', () => repo([{ ...a, variations: ['a-move'] }]), /broken relationship a-move/],
    ['a registered ID that has no record', () => repo([a], { registry: ['a-move', 'gone'] }), /ID registry changed or removed: gone/],
    ['a record missing from the registry', () => repo([a, b], { registry: ['a-move'] }), /ID missing from registry: b-move/],
  ]
  it.each(broken)('rejects %s', (_name, build, message) => {
    build()
    expect(() => loadAndValidate(base)).toThrow(message)
  })
})
