# Data model and versioning

Each `data/exercises/<id>.json` validates against `schemas/exercise.schema.json`. Required fields: schema version, immutable ID, mutable slug, English name/description/instructions, category, movement pattern, difficulty, equipment list, primary/secondary muscles, source and review status. Turkish fields and technique cues, mistakes, alternatives, variations and media are optional. Empty media means no verified visual asset. Missing force or mechanic means unknown.

The schema and `src/types.ts` define the same controlled vocabulary. IDs survive renaming and removal of a display title. `id-registry.json` prevents unintentional deletion; semantic reassignment needs human review. Intentional retirement will need a tombstone and a major-version migration. Alternatives and variations are IDs and validated against the current collection. `legacyIds` represents separately verified old catalog identities, not aliases inferred from names.

Schema `1` is independent of the repository version. Additive optional fields increment the minor release. A required field change, a code meaning change, or removal of an ID requires a major release with a migration map and consumer guidance. Generated files are sorted by ID and do not include timestamps, for byte-stable builds.

Review is an explicit state. `pending` records cannot pass the release quality gate. `reviewed` requires reviewer and review date, but the validator cannot establish clinical accuracy by itself.
