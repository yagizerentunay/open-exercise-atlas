# Open Exercise Atlas

**An open exercise catalog you can browse, download, and build on.** Structured JSON records bring together exercise instructions, target muscles, equipment, translations, and illustrations. The data works independently of the web explorer.

[![Validate, test and build](https://github.com/yagizerentunay/open-exercise-atlas/actions/workflows/ci.yml/badge.svg)](https://github.com/yagizerentunay/open-exercise-atlas/actions/workflows/ci.yml)
[![Code: MIT](https://img.shields.io/badge/code-MIT-222222)](LICENSE)
[![Data: CC0 1.0](https://img.shields.io/badge/original%20data-CC0%201.0-222222)](DATA-LICENSE.md)

**Current catalog:** [186 exercises](dist/metadata.json) · [19 muscle groups](docs/data-model.md#controlled-vocabulary) · English and Turkish · [six ready-to-use exports](#use-the-data)

<p align="center">
  <img src="media/exercises/assisted-pull-up.webp" alt="Illustrated assisted pull-up with the target muscles highlighted" width="480">
</p>

> [!IMPORTANT]
> **Pre-release editorial draft.** Every exercise currently has `reviewStatus: pending`; **none has passed technique review**. Illustrations are visual guides, not evidence of reviewed exercise form. See the [data model](docs/data-model.md) and [media provenance](docs/media-provenance.md) before using the catalog in a training product.

## Explore the catalog

Clone the repository and run the browser locally with Node.js 24 and npm:

```sh
git clone https://github.com/yagizerentunay/open-exercise-atlas.git
cd open-exercise-atlas
npm ci
npm run dev
```

The browser lets you explore exercises by muscle, equipment, difficulty, and movement pattern. It is a static Vite site; the JSON exports also work without running a server. GitHub Pages deployment is [opt-in](#publish-the-explorer).

## Use the data

The committed [`dist/`](dist/) directory is ready for consumers. Pick an export that fits your application:

| File | Contents |
| --- | --- |
| [`exercises.json`](dist/exercises.json) | Canonical records with locale objects |
| [`exercises.en.json`](dist/exercises.en.json) | English strings resolved |
| [`exercises.tr.json`](dist/exercises.tr.json) | Turkish strings resolved, with English fallback per field |
| [`exercises.min.json`](dist/exercises.min.json) | Compact canonical JSON |
| [`exercises.ndjson`](dist/exercises.ndjson) | One canonical record per line |
| [`metadata.json`](dist/metadata.json) | Record counts and translation coverage |

For example, a localized record includes a stable ID and language-neutral filter codes:

```json
{
  "id": "dumbbell-bench-press",
  "name": "Dambılla Bench Press",
  "equipment": ["dumbbell", "bench"],
  "primaryMuscles": ["chest"],
  "reviewStatus": "pending"
}
```

This is an excerpt from [`exercises.tr.json`](dist/exercises.tr.json), not a complete record. In a TypeScript project using the source data, the catalog helpers can localize and filter records:

```ts
import { filterExercises, localize } from './src/catalog.ts'
import records from './dist/exercises.json'

const chestExercises = filterExercises(
  records.map((record) => localize(record, 'tr')),
  { muscle: 'chest' },
)
```

Persist an exercise's `id` in your application. Names and slugs can change; IDs are tracked in the [ID registry](data/id-registry.json). Pin a repository commit when consuming `dist/`; there is **no published npm package or release tag yet**. For the full schema and migration rules, see the [data model](docs/data-model.md).

## Work with the source

Each authoritative exercise lives in [`data/exercises/<id>.json`](data/exercises/). Generated exports live in `dist/`; regenerate them rather than editing them directly.

```sh
npm run validate            # schema, links, IDs, media, and provenance
npm run translation:report  # current Turkish coverage
npm run data:build          # regenerate all six exports
npm run data:check          # verify committed exports are current
npm run lint
npm test
npm run build
```

| Area | What it contains |
| --- | --- |
| [`data/`](data/) | Exercise records, ID registry, and controlled-code translations |
| [`schemas/`](schemas/) and [`src/`](src/) | JSON Schema, types, vocabulary, localization, filters, and consumer adapter |
| [`media/exercises/`](media/exercises/) | Exercise illustrations with asset-level provenance in their records |
| [`media/muscles/`](media/muscles/) | Muscle-filter reference art, described in the [muscle atlas](docs/muscle-atlas.md) |
| [`site/`](site/) | Static React explorer |
| [`docs/`](docs/) | Architecture, data model, rights, and integration guidance |

## Contribute

Start with the [contribution guide](CONTRIBUTING.md). New exercises need a stable ID, original or rights-cleared text, and documented sources. Media needs its own creator, license, source, redistribution evidence, and alt text. Leave `reviewStatus` as `pending` until a named reviewer has checked the movement instructions. The [rights policy](docs/rights.md) explains the requirements in detail.

## Publish the explorer

The browser can be deployed to GitHub Pages. In repository settings, select **GitHub Actions** as the Pages source, set the Actions variable `ENABLE_PAGES` to `true`, and rerun the workflow. The deploy job remains skipped until this is configured.

## License and project notes

Code is [MIT licensed](LICENSE). Original Atlas data is [CC0 1.0](DATA-LICENSE.md); illustration licenses vary by asset and are recorded in each exercise and the [media provenance](docs/media-provenance.md). No third-party images are included.

For design and integration work, see the [design system](ATLAS_DESIGN_SYSTEM.md), [interface rules](ANTI_SLOP_RULES.md), [architecture](docs/architecture.md), and [Monk Mode integration](docs/monk-mode-integration.md).
