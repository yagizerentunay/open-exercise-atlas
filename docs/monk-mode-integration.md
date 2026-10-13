# Monk Mode integration

Atlas is the single source of truth for Monk Mode's exercise catalog. Monk Mode no longer hand-edits its exercise list: it **syncs** it from a pinned Atlas commit. This repository does not modify Monk Mode; it only provides the data and the reference adapter in `src/monkAdapter.ts`.

## Pinned-sync model

1. Monk Mode pins an Atlas commit in `data/atlas.lock.json`: the repository, the 40-hex commit and the sha256 of each synced file.
2. `scripts/sync-atlas.ts` in Monk Mode reads `dist/exercises.json` and the media files of that commit (from `raw.githubusercontent.com` or a local checkout with `--from`), verifies the hashes, and runs its own adapter (`src/lib/atlasAdapter.ts`, a port of the functions in `src/monkAdapter.ts`).
3. It writes `public/data/exercises.json`, `public/exercises/*` and prunes `public/data/legacy-exercises.json`: an id that a library record now owns is removed from the legacy table, and extra `legacyIds` of a record are added to the legacy table with that record's name and muscles.
4. Moving to new Atlas data is an explicit change of the pinned commit, never an implicit fetch at runtime.

Saved Monk Mode data (`exId` in routines and workout entries, muscle corrections, `customEx`) is persistent user data. Ids never change: a record keeps the id Monk Mode already used through `legacyIds`.

## Ids

The id of a record in Monk Mode is `legacyIds[0]` when present, otherwise `atlas:<id>`. `legacyIds` holds the old Monk Mode id exactly (for example `monk-chest-archer-push-up` or `Barbell_Curl`); a legacy id may be claimed by one record only, and `custom-*` ids can never be claimed. Further `legacyIds` entries are exposed separately as `extraLegacyIds` (legacy id -> runtime id of the owning record) so the consumer can keep old history resolving.

## Adapter output

`toMonkExercise(record)` returns:

```ts
{ id, name, aliases?, level, equipment, category, primaryMuscles, secondaryMuscles, illustration?, instructions }
```

| Field | Rule |
| --- | --- |
| `id` | `legacyIds[0]`, else `atlas:<id>` |
| `name` | `name.en` |
| `aliases` | `aliases`, only when not empty |
| `level` | `difficulty`; `advanced` becomes `expert` |
| `category` | `category` as stored (`strength`, `mobility`, `cardio`) |
| `instructions` | `instructions.tr`, else `instructions.en` |
| `illustration` | media path as stored: `reference`, else `finish`, else `start`; absent when none (animations are ignored) |

`toMonkCatalog(records)` converts a whole collection in input order and returns `{ exercises, extraLegacyIds }`. It fails if two records would share a Monk Mode id, including through an extra legacy id.

### Reverse mappings

These are the exact inverse of the migration tables.

| Atlas muscle | Monk Mode muscle |
| --- | --- |
| `upper-back` | `middle back` |
| `lower-back` | `lower back` |
| `hip-flexors` | `hip flexors` |
| `neck` | `neck` |
| every other code | same name |

| Atlas equipment | Monk Mode equipment |
| --- | --- |
| `bodyweight` | `body only` |
| `band` | `bands` |
| `kettlebell` | `kettlebells` |
| `ez-bar` | `e-z curl bar` |
| `exercise-ball` | `exercise ball` |
| `other` | `other` |
| `barbell`, `dumbbell`, `cable`, `machine` | same name |
| `[]` | `null` |

For records with several equipment codes the first code that is not `bench`, `mat` or `pull-up-bar` is used; if there is none, the value is `null`. Records migrated from Monk Mode carry exactly the single code that inverts to their original value.

## Rules for new Atlas data

- Do not reuse or renumber an Atlas `id`. Do not change a Monk Mode id that is already in `legacyIds`.
- Add a legacy id only after verifying that it is the same movement with the same equipment, and never an id owned by Monk Mode's curated library. When unsure, leave `legacyIds` out; Monk Mode shows the record as `atlas:<id>`.
- Media for a record: `media/exercises/<id>.webp`, role `reference`, license `MIT` or `CC0-1.0` with a redistribution evidence URL. See [media provenance](media-provenance.md).
- Bump the pin in Monk Mode only after `npm run validate`, `npm run data:check`, `npm test` and `npm run build` pass here.

## History

The first draft of this document (Monk Mode remote commit `7126936`, 2026-10-13) planned a merge adapter, `mergeForMonkMode`, that overlaid Atlas records on Monk Mode's free-exercise-db derived list. The pinned-sync model replaced it: Monk Mode's generated catalog is now derived entirely from Atlas plus its legacy table.
