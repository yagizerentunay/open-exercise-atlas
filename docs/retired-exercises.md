# Retired exercise IDs

This page is a migration note for consumers of Atlas exports. Retired IDs are absent from current exercise records and exports, while `data/id-registry.json` retains a `null` tombstone so IDs are never reused. This change is breaking and must ship only in a major data release.

| Atlas ID | Legacy ID | Replacement | Reason |
| --- | --- | --- | --- |
| `barbell-jefferson-squat` | `Jefferson_Squats` | None | User requested removal because the illustration contains errors. |
| `lying-cambered-barbell-row` | `Lying_Cambered_Barbell_Row` | None | User requested removal because the movement and illustration were not acceptable. |

Consumers should remove both records from the active exercise catalog when moving to the major release. Existing user history that references either ID should be preserved as an unresolved retired exercise; Atlas does not designate a semantically equivalent replacement.
