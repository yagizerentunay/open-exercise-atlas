<div align="center">
  <h1>Open Exercise Atlas</h1>
  <p><strong>A free, open exercise library you can browse, download, and build with.</strong></p>
  <p>
    <a href="https://yagizerentunay.github.io/open-exercise-atlas/">Browse the live catalog</a>
    ·
    <a href="#use-the-data">Get the data</a>
    ·
    <a href="CONTRIBUTING.md">Contribute</a>
  </p>
  <p>
    <a href="https://github.com/yagizerentunay/open-exercise-atlas/actions/workflows/ci.yml"><img alt="Validate, test and build" src="https://github.com/yagizerentunay/open-exercise-atlas/actions/workflows/ci.yml/badge.svg"></a>
    <a href="LICENSE"><img alt="Code license: MIT" src="https://img.shields.io/badge/code-MIT-222222"></a>
    <a href="DATA-LICENSE.md"><img alt="Original data: CC0 1.0" src="https://img.shields.io/badge/original%20data-CC0%201.0-222222"></a>
  </p>
  <p><strong><a href="dist/metadata.json">401 exercises</a></strong> &nbsp;·&nbsp; <strong>20 muscle groups</strong> &nbsp;·&nbsp; <strong>English + Turkish</strong> &nbsp;·&nbsp; <strong>100% Turkish translation coverage</strong></p>
  <img src="media/exercises/assisted-pull-up.webp" alt="Assisted pull-up illustration with the working muscles highlighted" width="460">
</div>

## Explore

The [live catalog](https://yagizerentunay.github.io/open-exercise-atlas/) is a small static site for browsing exercises by name, muscle, equipment, difficulty, category, and movement pattern. Each record includes structured exercise details and a representative illustration. The data exports can also be used without the site.

## Run it locally

Requires Node.js 24 and npm.

```sh
git clone https://github.com/yagizerentunay/open-exercise-atlas.git
cd open-exercise-atlas
npm ci
npm run dev
```

## Use the data

The committed [`dist/`](dist/) directory contains ready-to-use exports. Pick the format that fits your project:

| Export | Contents |
| --- | --- |
| [`exercises.json`](dist/exercises.json) | Canonical records with English and optional Turkish fields |
| [`exercises.en.json`](dist/exercises.en.json) | English text resolved for each record |
| [`exercises.tr.json`](dist/exercises.tr.json) | Turkish text, with English fallback where needed |
| [`exercises.min.json`](dist/exercises.min.json) | Compact canonical JSON |
| [`exercises.ndjson`](dist/exercises.ndjson) | One canonical record per line |
| [`metadata.json`](dist/metadata.json) | Record count, translation coverage, and IDs |

Example record:

```json
{
  "id": "dumbbell-bench-press",
  "name": "Dambılla Bench Press",
  "equipment": ["dumbbell", "bench"],
  "primaryMuscles": ["chest"]
}
```

This excerpt is from [`exercises.tr.json`](dist/exercises.tr.json). IDs are stable; display names and slugs may change. Check the [ID registry](data/id-registry.json) before adding or renaming records.

In TypeScript, the catalog helpers can localize and filter records:

```ts
import { filterExercises, localize } from './src/catalog.ts'
import records from './dist/exercises.json'

const chestExercises = filterExercises(
  records.map((record) => localize(record, 'tr')),
  { muscle: 'chest' },
)
```

Pin a repository commit when consuming the exports so your app uses a known catalog version. There is no published npm package or release tag yet.

## Work with the source

Edit the source records in [`data/exercises/`](data/exercises/); regenerate `dist/` instead of editing generated files directly.

```sh
npm run validate            # Check records, IDs, relationships, media, and provenance
npm run translation:report  # Show Turkish text coverage
npm run data:build          # Regenerate the six exports
npm run data:check          # Check committed exports are current
npm run lint
npm test
npm run build
```

| Path | Purpose |
| --- | --- |
| [`data/`](data/) | Exercise records, ID registry, and facet translations |
| [`schemas/`](schemas/) · [`src/`](src/) | Schema, types, catalog helpers, and Monk Mode adapter |
| [`media/exercises/`](media/exercises/) | Exercise illustrations and their record-level rights details |
| [`media/muscles/`](media/muscles/) | Muscle-filter reference art ([guide](docs/muscle-atlas.md)) |
| [`site/`](site/) | Static React explorer |
| [`docs/`](docs/) | Data model, rights, architecture, and integration notes |

## Contribute

See the [contribution guide](CONTRIBUTING.md). New records need a stable ID, clear source information, and original or rights-cleared text. Media rights and attribution are recorded per asset; see the [rights policy](docs/rights.md) and [media provenance](docs/media-provenance.md).

## Licensing

- **Code:** [MIT](LICENSE)
- **Original exercise data and text:** [CC0 1.0](DATA-LICENSE.md)
- **Illustrations:** license is recorded per asset; see [media provenance](docs/media-provenance.md)

## Publish the explorer

GitHub Pages deployment is opt-in. In repository settings, choose **GitHub Actions** as the Pages source, set the `ENABLE_PAGES` Actions variable to `true`, then run the workflow. See the [release checklist](docs/release-checklist.md).

For more detail, see the [data model](docs/data-model.md), [architecture](docs/architecture.md), [design system](ATLAS_DESIGN_SYSTEM.md), and [Monk Mode integration guide](docs/monk-mode-integration.md).
