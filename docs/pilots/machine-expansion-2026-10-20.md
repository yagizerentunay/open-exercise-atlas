# Machine exercise expansion — 20 October 2026

Six original bilingual machine exercise drafts, separate from existing horizontal machine chest press, cable triceps pushdown, cable crunch, assisted kneeling dip, cable row, and cable glute kickback records. Exact movements and IDs were absent from the catalog and ID registry before this batch. No neck-targeted exercise was added. All six records remain `pending` for independent form, anatomy, and rights review.

| Exercise | Record | Illustration | SHA-256 |
| --- | --- | --- | --- |
| Machine Incline Chest Press | `data/exercises/machine-incline-chest-press.json` | `media/exercises/machine-incline-chest-press.webp` | `7590a921f80394138847049b7d16036dd4b42646ab23db12b2f0bd90839f876c` |
| Seated Machine Triceps Extension | `data/exercises/seated-machine-triceps-extension.json` | `media/exercises/seated-machine-triceps-extension.webp` | `f3d4080196de2aa1c0dd2c646bb1411b1ee3d603c2029b97a34171fd6bfdefd9` |
| Seated Machine Crunch | `data/exercises/seated-machine-crunch.json` | `media/exercises/seated-machine-crunch.webp` | `d64c4c5fcb948917f7203c156d28164ab553d8081f88e13950da9eff9a250629` |
| Plate-Loaded Seated Dip | `data/exercises/plate-loaded-seated-dip.json` | `media/exercises/plate-loaded-seated-dip.webp` | `cfbd92f45bf5cad39b40952a22b24275490fca059f227787134647b79ad41e9f` |
| Seated Machine Row | `data/exercises/seated-machine-row.json` | `media/exercises/seated-machine-row.webp` | `edda19b5d180303b22a07796b24cc292dcf46032274ddf2ace2caac68d8a5386` |
| Machine Glute Kickback | `data/exercises/machine-glute-kickback.json` | `media/exercises/machine-glute-kickback.webp` | `d899e04ca3c424db425a42223223b4f17ccccb7cfbae0d4f74880a2bff4eb171` |

## Artwork and scope

OpenAI built-in ImageGen produced one original two-phase illustration per exercise. The user-provided `lats-close-grip-front-lat-pulldown.webp` informed only the grayscale anatomical style, red muscle highlighting, and transparent two-phase layout. No source pixels or written instructions were copied into the new artwork. The generated PNGs were resized from 1254 × 1254 to 1024 × 1024 and encoded as transparent WebP at quality 85. Visual inspection confirmed distinct start and finish poses, machine equipment, and red highlights limited to the intended chest or triceps. Machine geometry and muscle boundaries still need human review.

## Movement references

- [Hammer Strength Iso-Lateral Incline Press](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/plate-loaded-iso-lateral-incline-press) supports the dedicated seated incline machine, forward/upward press path, and chest/shoulder/triceps classification.
- [ACE Seated Chest Press](https://www.acefitness.org/resources/everyone/exercise-library/188/seated-chest-press/) informs the stable seated setup, neutral wrists, and controlled return. This is a horizontal press reference, so the incline angle comes from the machine reference above.
- [Hammer Strength Select Triceps Extension](https://www.lifefitness.com/en-us/catalog/strength-training/selectorized/hammer-strength-select-triceps-extension) supports the seated machine with upper-arm pads and pivoting handles.
- [ACE Seated Crunch](https://www.acefitness.org/resources/everyone/exercise-library/291/seated-crunch/) supports the machine seat, shin pad, handles, abdominal curl, and controlled return.
- [Hammer Strength Plate-Loaded Seated Dip](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/plate-loaded-seated-dip) supports the loaded machine, thigh restraint, and triceps primary with chest and shoulders secondary.
- [ACE Seated Row](https://www.acefitness.org/resources/everyone/exercise-library/168/seated-row/) supports the chest-supported machine setup and horizontal pull with a stable torso.
- [Life Fitness Axiom Seated Row](https://www.lifefitness.com/en-gb/catalog/strength-training/selectorized/axiom-series-seated-row) confirms a dedicated selectorized machine with independent grips, distinct from a cable row.
- [ACE selectorized exercise library](https://www.acefitness.org/resources/everyone/exercise-library/equipment/weight-machines-selectorized/) includes a beginner Glute Press machine; the Atlas draft illustrates a standing one-leg pedal variant and needs machine-specific expert review.

The cues are original editorial summaries tailored to the Atlas illustrations; these references are for movement facts, not copied text or artwork.

## Duplicate check

The catalog's `close-grip-front-lat-pulldown` already describes a **neutral-grip V handle**. A generic “Neutral-Grip Lat Pulldown” entry would currently duplicate that movement, so none was added. Monk Mode can assess whether that existing ID satisfies its remaining starter-template substitution before requesting a more specific grip-width variant.

## Scope check

The six additions cover machine variants absent from the 345-record starting catalog: incline chest press, triceps extension, abdominal crunch, plate-loaded seated dip, chest-supported horizontal row, and standing glute kickback. A catalog scan after the additions found 37 records tagged `machine`, with established records for leg press, hack and Smith squats, leg curls/extensions, hip thrust/abduction/adduction, calf raises, chest/shoulder presses, biceps curl, rear-delt and lateral raises, pullover, and high row. This is a core-machine coverage pass, not a claim that every commercial machine design has a record.

The earlier 45-item [missing-movement preview list](missing-movement-previews-2026-10-16.md) has a current catalog match for all 45 movement meanings. Its `dumbbell-kickstand-rdl` preview corresponds to the registered `dumbbell-kickstand-romanian-deadlift`; duplicating it would be incorrect.
