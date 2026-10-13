import { cpSync, existsSync, rmSync } from 'node:fs'
import { relative, resolve, sep } from 'node:path'
import { root } from './shared.ts'

const publicRoot = resolve(root, 'site/public')
for (const collection of ['exercises', 'muscles']) {
  const source = resolve(root, 'media', collection)
  const collectionTarget = resolve(publicRoot, 'media', collection)
  const relativeTarget = relative(publicRoot, collectionTarget)
  if (!relativeTarget || relativeTarget === '..' || relativeTarget.startsWith(`..${sep}`)) {
    throw new Error('Dev media target must stay inside site/public')
  }
  rmSync(collectionTarget, { recursive: true, force: true })
  if (existsSync(source)) cpSync(source, collectionTarget, { recursive: true })
}
