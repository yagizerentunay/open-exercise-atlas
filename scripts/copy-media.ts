import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { root } from './shared.ts'

const source = resolve(root, 'media/exercises')
if (existsSync(source)) cpSync(source, resolve(root, 'site/dist/media/exercises'), { recursive: true })
