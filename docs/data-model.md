# Data model and versioning

Each `data/exercises/<id>.json` validates against `schemas/exercise.schema.json`. Required fields: schema version, immutable ID, mutable slug, English name/description/instructions, category, movement pattern, difficulty, equipment list, primary/secondary muscles, source and review status. Turkish fields, `aliases`, technique cues, mistakes, alternatives, variations and media are optional. An empty `equipment` list is valid and means "no equipment". Empty media means no verified visual asset. Missing force or mechanic means unknown.

The schema and `src/types.ts` define the same controlled vocabulary. IDs survive renaming and removal of a display title. `id-registry.json` prevents unintentional deletion; semantic reassignment needs human review. Intentional retirement will need a tombstone and a major-version migration. Alternatives and variations are IDs and validated against the current collection. `legacyIds` represents separately verified old catalog identities, not aliases inferred from names.

## Controlled vocabulary

- Muscles (20): `chest`, `upper-back`, `lats`, `shoulders`, `biceps`, `triceps`, `forearms`, `abdominals`, `obliques`, `lower-back`, `glutes`, `quadriceps`, `hamstrings`, `calves`, `adductors`, `abductors`, `traps`, `neck`, `hip-flexors`, `tibialis-anterior`.
- Equipment (13): `bodyweight`, `barbell`, `dumbbell`, `kettlebell`, `cable`, `machine`, `band`, `bench`, `pull-up-bar`, `mat`, `ez-bar`, `exercise-ball`, `other`.
- Media roles: `start`, `finish`, `animation`, `reference`. `reference` is one illustration that is neither a start nor a finish frame; consumers that need a single image prefer `reference`, then `finish`, then `start`.
- Media licenses: `CC0-1.0` and `MIT` (a record-specific license needs a `redistributionEvidenceUrl`, see [rights](rights.md)). Adding a license means a reviewed schema change.
- `aliases` lists other English names of the same movement. They are for matching imports and are never a display title.

The list lives in `src/vocabulary.ts`; `tests/vocabulary.test.ts` keeps it identical to the schema enums and to `data/translations/{en,tr}.json`.

### Additive change (13 Oct 2026)

`neck`, `hip-flexors`, `ez-bar`, `exercise-ball`, `other`, the `aliases` field and the `reference` media role were added to schema version `1`. They only extend enums and add an optional property, so existing records and consumers keep validating; a consumer with a closed switch over codes must learn the new ones.

Schema `1` is independent of the repository version. Additive optional fields increment the minor release. A required field change, a code meaning change, or removal of an ID requires a major release with a migration map and consumer guidance. Generated files are sorted by ID and do not include timestamps, for byte-stable builds.

Review is an explicit state. `pending` records cannot pass the release quality gate. `reviewed` requires reviewer and review date, but the validator cannot establish clinical accuracy by itself.
