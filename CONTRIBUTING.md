# Contributing

Open an issue before a large data import. For a new exercise, add one `data/exercises/<id>.json` and register its immutable ID in `data/id-registry.json`. Use stable lowercase IDs, original text or documented compatible sources, and machine codes from the schema. English name, description and steps are required; Turkish fields may be omitted and will fall back to English. Never invent a translation, image, review, source or license.

Set `reviewStatus` to `pending` until a named reviewer checks the movement instructions and records `source.reviewedBy` and `source.reviewedAt`. An `adapted` record needs a source URL and a rights assessment. Every media asset needs a creator, source, license, redistribution evidence URL, local file, and meaningful alt text. See [rights policy](docs/rights.md).

Run `npm run validate`, `npm run translation:report`, `npm run data:build`, `npm run data:check`, `npm run lint`, `npm test`, and `npm run build`. Include generated exports in the same data change. Use small Conventional Commits such as `feat(data): add bodyweight squat`. A schema breaking change requires a migration document and a major version.
