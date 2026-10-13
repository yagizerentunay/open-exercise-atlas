import { resolve } from 'node:path'
import { copyMedia } from './media.ts'
import { root } from './shared.ts'

copyMedia(resolve(root, 'site/public'), { clean: true })
