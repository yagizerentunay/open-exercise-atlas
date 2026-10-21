# Changelog

## Unreleased

- Add 19 original two-phase exercise illustrations and bilingual editorial records, one new movement for each muscle group; all remain pending technique review.
- Complete the muscle gallery with original `neck` and `hip-flexors` reference illustrations.
- Additive vocabulary for the Monk Mode migration (schema version stays `1`): muscles `neck` and `hip-flexors`; equipment `ez-bar`, `exercise-ball` and `other`; an empty `equipment` list now explicitly means "no equipment"; optional `aliases` (other English names, used only for import matching); media role `reference` (one illustration that is neither a start nor a finish frame). Media licenses are limited to the documented allow-list `CC0-1.0` and `MIT`; `.webp` and `.png` paths under `media/exercises/` are accepted.
- Turkish labels for the new codes: Boyun, Kalça fleksörleri, EZ bar, Pilates topu, Diğer; the explorer shows "No equipment" / "Ekipmansız" and a `none` equipment filter.
- The explorer's muscle gallery permits a text-only tile when a muscle has no artwork; all 20 current muscle codes have an illustration.
- Add `tibialis-anterior` as a distinct anterior-shin muscle code and illustration; Monk Mode's legacy adapter maps it to `calves` until that consumer adds a separate group.
- Rewrite `src/monkAdapter.ts` for the pinned-sync consumer model (`toMonkExercise`, `toMonkCatalog`); `mergeForMonkMode` is removed.
- Share media copying between `copy-media.ts` and `stage-dev-media.ts` (`scripts/media.ts`) and test it.
- Document the batch of Monk Mode illustrations (MIT, copied from `monk-mode` commit `cba2d06`) in `docs/media-provenance.md`.

- Define v1 source schema, stable ID registry and deterministic exports.
- Add 30 original editorial drafts, English fallback, Turkish exercise names and facet labels.
- Add static React explorer, automated validation, tests and CI/Pages workflow.
- Add rights and Monk Mode migration documentation.
