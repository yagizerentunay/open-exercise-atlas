import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { relative, resolve, sep } from 'node:path'
import { root } from './shared.ts'

/** Media collections under `media/` that the explorer serves. Files are copied as-is, whatever their extension. */
export const mediaCollections = ['exercises', 'muscles'] as const

/**
 * Copies every file of each media collection into `<destination>/media/<collection>`.
 * With `clean`, the target collection directory is emptied first so removed files do not linger.
 */
export function copyMedia(destination: string, options: { clean?: boolean; source?: string } = {}): void {
  const sourceRoot = options.source ?? resolve(root, 'media')
  for (const collection of mediaCollections) {
    const source = resolve(sourceRoot, collection)
    const target = resolve(destination, 'media', collection)
    const relativeTarget = relative(destination, target)
    if (!relativeTarget || relativeTarget === '..' || relativeTarget.startsWith(`..${sep}`)) {
      throw new Error('Media target must stay inside the destination directory')
    }
    if (options.clean) rmSync(target, { recursive: true, force: true })
    if (!existsSync(source)) continue
    mkdirSync(target, { recursive: true })
    cpSync(source, target, { recursive: true })
  }
}
