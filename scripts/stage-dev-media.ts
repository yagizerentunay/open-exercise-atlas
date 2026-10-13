import { cpSync, existsSync, rmSync } from 'node:fs'
import { relative, resolve, sep } from 'node:path'
import { root } from './shared.ts'

const publicRoot = resolve(root, 'site/public')
const target = resolve(publicRoot, 'media/exercises')
const relativeTarget = relative(publicRoot, target)
if (!relativeTarget || relativeTarget === '..' || relativeTarget.startsWith(`..${sep}`)) {
  throw new Error('Dev media target must stay inside site/public')
}

rmSync(target, { recursive: true, force: true })
const source = resolve(root, 'media/exercises')
if (existsSync(source)) cpSync(source, target, { recursive: true })
