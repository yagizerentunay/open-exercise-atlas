import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { loadAndValidate, root } from './shared.ts'

export function coverage(records = loadAndValidate()) {
  const fields = ['name', 'description', 'instructions', 'formCues', 'commonMistakes'] as const
  let present = 0; let total = 0
  for (const ex of records) for (const field of fields) {
    if (!ex[field]) continue
    total++
    if (ex[field].tr) present++
  }
  const en = JSON.parse(readFileSync(resolve(root, 'data/translations/en.json'), 'utf8')) as Record<string, Record<string, string>>
  const tr = JSON.parse(readFileSync(resolve(root, 'data/translations/tr.json'), 'utf8')) as Record<string, Record<string, string>>
  for (const group of Object.keys(en)) for (const code of Object.keys(en[group])) {
    if (!tr[group]?.[code]) throw new Error(`Missing Turkish facet translation: ${group}.${code}`)
  }
  return { tr: { present, total, percent: total ? Math.round(100 * present / total) : 100 } }
}

if (process.argv[1]?.endsWith('translations.ts')) console.log(JSON.stringify(coverage(), null, 2))
