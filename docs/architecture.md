# Architecture and research (2026-10-13)

## Reference audit

Examined `yuhonas/free-exercise-db` at `f00c92c` and `yagizerentunay/monk-mode` at `7126936`. The former stores 876 JSON records under `exercises/<id>.json`, with JPG files beside each record. Its Draft-04 `schema.json` constrains categorical values but permits null for force, mechanic, and equipment. `Makefile` uses `check-jsonschema` and `jq` to lint, check duplicate IDs, and build a combined JSON and NDJSON export. Its `site/` is a separate Vue/Vite browser with search, gallery, Vitest/Cypress tests; `.github/workflows/ci.yaml` builds and deploys Pages. These are useful patterns; the new implementation uses a single TypeScript toolchain and does not copy its interface.

The upstream README traces the dataset to `wrkout/exercises.json`, declares Unlicense, and documents remote image delivery. A repository-wide license statement alone does not establish each photo's ownership or redistribution permission. Atlas will not import those photos. Imported text needs record-level provenance and compatible reuse rights. Initial Atlas text is original and stored with its source and license.

Monk Mode's `scripts/build-exercise-data.ts` turns its pinned `data/free-exercise-db/exercises.json` into `public/data/exercises.json` and a separately loaded `instructions.json`. `src/lib/exercises.ts` merges curated entries and applies user muscle corrections. `src/store/schema.ts` stores `exId` in routines and workout entries, and corrections are keyed by that ID. The Atlas adapter must map new records to existing IDs at the loading boundary, retain unmatched legacy records, and never rewrite saved IDs merely because a title changes. Monk Mode is not modified here.

## Decisions

- Flat `data/exercises/<id>.json` files are authoritative. Stable IDs use lowercase ASCII tokens and are never recycled. Slugs may change. The ID registry catches accidental removal; maintainers keep each ID attached to the same movement.
- English is required for names, descriptions and steps. Turkish is optional and explicitly reported; consumers may fall back per field. Facet codes are language-neutral.
- `schemas/exercise.schema.json` validates document shape with Ajv. A second pass checks cross-record links, local media paths, provenance, translation coverage, IDs, and generated output freshness.
- `dist/` is deterministic, committed release data. Both CLI and browser consume it; the browser is never part of data generation.
- No media asset is accepted without file-level creator, source URL, license, and redistribution evidence. Empty media is valid. Code uses MIT; original data uses CC0-1.0; third-party data and media must carry their own approved license and attribution.
- Schema versions and package versions are separate. Breaking data changes require a major package version and a documented migration. Additive optional fields require a minor release.

## Delivery order

1. Define repository roles and quality gates.
2. Add schema, types and a small original seed set.
3. Build normalization, validation, translations and all six exports.
4. Build a static, accessible React browser on the generated exports.
5. Add tests and CI/Pages build.
6. Complete usage, contribution, rights and release documentation.
7. Supply a Monk Mode adapter and migration guide, with fixture tests for legacy IDs.

## Risks and release gates

Turkish translation coverage is reported from the data. Media is included only when its source and license are documented. The catalog is a reusable data library, not an individualized training or clinical service.

Sources: [free-exercise-db](https://github.com/yuhonas/free-exercise-db/tree/f00c92c), [upstream schema](https://github.com/yuhonas/free-exercise-db/blob/f00c92c/schema.json), [upstream Makefile](https://github.com/yuhonas/free-exercise-db/blob/f00c92c/Makefile), [Monk Mode](https://github.com/yagizerentunay/monk-mode/tree/7126936).
