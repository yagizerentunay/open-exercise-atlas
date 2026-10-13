# Monk Mode integration plan

This repository does not modify Monk Mode. Analysis used its remote commit `7126936` on 2026-10-13. The current local work PC checkout was older and did not contain the listed data pipeline files.

Monk Mode reads a pinned free-exercise-db snapshot via `scripts/build-exercise-data.ts`, emits a slim `public/data/exercises.json` and deferred `instructions.json`, then merges curated exercises in `src/lib/exercises.ts`. `src/store/schema.ts` keeps `exId` in routine settings and workout entries; muscle corrections are keyed by the same ID. These IDs are persistent user data.

1. Pin an Atlas release and verify its `metadata.json` and schema version.
2. Build a reviewed `legacyIds` map by comparing movement identity, not just names. No mappings are claimed in this first draft.
3. At Monk Mode's data-loading boundary, pass its existing list and Atlas records into `mergeForMonkMode` from `src/monkAdapter.ts`. For a verified mapping, the adapter emits the **legacy ID** with refreshed fields. Unmatched legacy records remain, so existing history still resolves. New Atlas entries get an `atlas:` prefix.
4. Keep Monk Mode's user `customEx`, `muscleFix`, routine and workout state unchanged. Do not bulk-rewrite `exId` values. Confirm backup/restore and offline behavior with a copy of real backup data, keeping that data private.
5. Only after a release-level ID map and regression tests are ready should Monk Mode replace its source build step. Maintain its split instruction loading and pinned image behavior until Atlas supplies equivalent reviewed assets.

The sample adapter is deliberately narrow. It maps common muscle/equipment codes and falls back to existing fields when Atlas lacks an equivalent. It is not production-ready for every exercise category or the 876-record catalog. Add mappings and fixtures before adoption.
