import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { loadAndValidate, root } from './shared.ts'
import { coverage } from './translations.ts'
import { localize } from '../src/catalog.ts'

const records = loadAndValidate().sort((a, b) => a.id.localeCompare(b.id, 'en'))
const pretty = (value: unknown) => JSON.stringify(value, null, 2) + '\n'
const outputs: Record<string, string> = {
  'exercises.json': pretty(records),
  'exercises.en.json': pretty(records.map((e) => localize(e, 'en'))),
  'exercises.tr.json': pretty(records.map((e) => localize(e, 'tr'))),
  'exercises.min.json': JSON.stringify(records) + '\n',
  'exercises.ndjson': records.map((e) => JSON.stringify(e)).join('\n') + '\n',
  'metadata.json': pretty({ schemaVersion: 1, count: records.length, reviewed: records.filter((e) => e.reviewStatus === 'reviewed').length, translationCoverage: coverage(), ids: records.map((e) => e.id) }),
}
const directory = resolve(root, 'dist')
if (!process.argv.includes('--check')) mkdirSync(directory, { recursive: true })
for (const [name, content] of Object.entries(outputs)) {
  const path = resolve(directory, name)
  if (process.argv.includes('--check')) {
    if (!existsSync(path) || readFileSync(path, 'utf8') !== content) throw new Error(`Stale generated output: ${name}`)
  } else writeFileSync(path, content)
}
console.log(`${process.argv.includes('--check') ? 'Checked' : 'Built'} ${records.length} records, ${Object.keys(outputs).length} exports.`)
