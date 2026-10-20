import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve, basename } from 'node:path'
import Ajv2020, { type AnySchema } from 'ajv/dist/2020.js'
import addFormats from 'ajv-formats'
import type { Exercise } from '../src/types.ts'

export const root = resolve(import.meta.dirname, '..')
const read = (path: string, base = root) => JSON.parse(readFileSync(resolve(base, path), 'utf8')) as unknown

/** Compiles the record schema. Returns a function that yields a readable error string, or null when the record is valid. */
export function createRecordValidator(): (record: unknown) => string | null {
  const schema = read('schemas/exercise.schema.json')
  const ajv = new Ajv2020({ allErrors: true })
  addFormats(ajv)
  const validate = ajv.compile(schema as AnySchema)
  return (record) => (validate(record) ? null : ajv.errorsText(validate.errors))
}

/** Loads and checks every record under `<base>/data`. `base` is the repository root, or a copy of it in tests. */
export function loadAndValidate(base = root): Exercise[] {
  const validate = createRecordValidator()
  const files = readdirSync(resolve(base, 'data/exercises')).filter((name) => name.endsWith('.json')).sort()
  const records: Exercise[] = []
  const ids = new Set<string>()
  const slugs = new Set<string>()
  const legacyIds = new Set<string>()
  for (const file of files) {
    const raw = read(`data/exercises/${file}`, base)
    const problem = validate(raw)
    if (problem) throw new Error(`${file}: ${problem}`)
    const ex = raw as Exercise
    if (basename(file, '.json') !== ex.id) throw new Error(`${file}: filename must match ID`)
    if (ids.has(ex.id) || slugs.has(ex.slug)) throw new Error(`${file}: duplicate ID or slug`)
    ids.add(ex.id); slugs.add(ex.slug)
    for (const legacy of ex.legacyIds ?? []) {
      if (legacyIds.has(legacy)) throw new Error(`${file}: duplicate legacy ID ${legacy}`)
      legacyIds.add(legacy)
    }
    if (ex.reviewStatus === 'reviewed' && (!ex.source.reviewedBy || !ex.source.reviewedAt)) throw new Error(`${file}: reviewed record needs reviewer and date`)
    if (ex.source.type === 'adapted' && !ex.source.url) throw new Error(`${file}: adapted record needs source URL`)
    if (ex.primaryMuscles.some((m) => ex.secondaryMuscles.includes(m))) throw new Error(`${file}: muscle appears in both groups`)
    const mediaPaths = new Set<string>()
    for (const media of ex.media ?? []) {
      if (mediaPaths.has(media.path)) throw new Error(`${file}: duplicate media path ${media.path}`)
      mediaPaths.add(media.path)
      if (!existsSync(resolve(base, media.path))) throw new Error(`${file}: missing media ${media.path}`)
    }
    records.push(ex)
  }
  for (const ex of records) for (const related of [...(ex.alternatives ?? []), ...(ex.variations ?? [])]) {
    if (related === ex.id || !ids.has(related)) throw new Error(`${ex.id}: broken relationship ${related}`)
  }
  const registry = read('data/id-registry.json', base) as Record<string, string>
  for (const [id, registeredId] of Object.entries(registry)) {
    const ex = records.find((item) => item.id === id)
    if (!ex || registeredId !== id) throw new Error(`ID registry changed or removed: ${id}`)
  }
  for (const ex of records) if (!registry[ex.id]) throw new Error(`ID missing from registry: ${ex.id}`)
  return records
}
