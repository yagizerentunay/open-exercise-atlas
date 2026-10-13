import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { root } from './shared.ts'

for (const collection of ['exercises', 'muscles']) {
  const source = resolve(root, 'media', collection)
  if (existsSync(source)) cpSync(source, resolve(root, 'site/dist/media', collection), { recursive: true })
}
