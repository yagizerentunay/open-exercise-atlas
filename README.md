# Open Exercise Atlas

An open-source, multilingual exercise database with structured JSON data, muscle targeting, equipment information, and visual exercise guides. The JSON data works without a server or the web explorer.

**Status: pre-release editorial draft.** All records are `reviewStatus: pending`: **0 technique-reviewed records**. The catalog includes the owner's own Monk Mode illustrated exercise library (Turkish steps and MIT-licensed illustrations, see [media provenance](docs/media-provenance.md)); `npm run translation:report` prints the current Turkish coverage. No third-party images are included.

## Quick start

Requires Node.js 24 and npm.

```sh
npm ci
npm run validate
npm run translation:report
npm run data:check
npm test
npm run build
npm run dev
```

The browser can be deployed as a static Vite site on GitHub Pages. To publish it, enable Pages in repository Settings with **GitHub Actions** as the source, then set the repository Actions variable `ENABLE_PAGES` to `true` and rerun the workflow. The deployment job stays skipped until this setup is complete. Source records live in `data/exercises/`; never hand-edit `dist/`. `npm run data:build` regenerates all six exports. The canonical records in `dist/exercises.json` retain locale objects. `exercises.en.json` and `exercises.tr.json` resolve locale strings, with per-field English fallback. `exercises.min.json` is compact canonical JSON. `exercises.ndjson` has one canonical object per line. `metadata.json` reports counts and translation coverage.

```ts
import { localize, filterExercises } from './src/catalog.ts'
import records from './dist/exercises.json'
const visible = filterExercises(records.map(record => localize(record, 'tr')), { muscle: 'chest' })
```

Consumers should pin a release tag or package version and persist `id`, never `slug` or translated name. There is no published npm package yet.

## Repository map

| Path | Role |
| --- | --- |
| `data/exercises/` | One authoritative JSON file per stable ID |
| `media/exercises/` | Exercise illustrations (`.webp`, `.png`), each with file-level provenance in its record |
| `data/id-registry.json` | Detects accidental ID deletion or slug reassignment |
| `data/translations/` | Locale labels for controlled codes |
| `schemas/` | Versioned JSON Schema |
| `src/` | Vocabulary, types, localization, filtering and the Monk Mode consumer adapter |
| `scripts/` | Independent validation, coverage and exports |
| `media/muscles/` | Original anatomy reference illustrations for the muscle filters (`neck` and `hip-flexors` have none yet) |
| `dist/` | Generated, committed consumer files |
| `site/` | Static React explorer |
| `tests/` | Data and adapter tests |
| `docs/` | Architecture, rights, model and migration policies |

Read [architecture](docs/architecture.md), [data model](docs/data-model.md), [rights policy](docs/rights.md), [contribution guide](CONTRIBUTING.md), and [Monk Mode integration](docs/monk-mode-integration.md).
The explorer's muscle reference art and asset provenance are documented in [docs/muscle-atlas.md](docs/muscle-atlas.md).

For interface work, use the [Atlas design system](ATLAS_DESIGN_SYSTEM.md) and [anti-slop rules](ANTI_SLOP_RULES.md). The [Codex/Claude design prompt](CODEX_CLAUDE_DESIGN_PROMPT.md) is a reusable starting point for a scoped design audit.
