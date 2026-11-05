# Barbell legacy review — 5 November 2026

## Sources and scope

- Monk Mode's current remote `main` contains 833 legacy entries and 345 selectable exercise records; its Atlas lock is `4cf449d97e6ef24caf710d08b641686ff4fdf464`.
- Atlas was checked at `main` commit `bc04137` and against the latest exercise feature branch available at the time, `codex/equipment-exercise-visuals` (`51648f2`). The working branch is based on the newer `main`, so the 4 November retirement/tombstone changes remain in force.
- The 163 candidates reviewed are legacy entries whose equipment is `barbell` or whose name explicitly says `barbell`. Shortened names and generic bars are excluded from this candidate count.

## New records

| Legacy ID | Atlas record | Why it is distinct | Movement source |
|---|---|---|---|
| `Barbell_Rollout_from_Bench` | [`barbell-rollout-from-bench.json`](../../../data/exercises/barbell-rollout-from-bench.json) | Both knees rest on a bench, raising the starting support point and changing leverage compared with the floor-kneeling and standing rollouts already in Atlas. | [FitnessTracker — Barbell Rollout from Bench](https://fitnesstracker.ca/resources/exercises/barbell-rollout-from-bench/) |

The rollout record uses original Turkish and English instructions and one original two-phase illustration. It follows the approved Assisted Pull-Up / Dumbbell Floor Press style: transparent square canvas, detailed grayscale anatomy, red target-muscle overlays, black opaque shorts, and no labels. The generation master is retained next to this review.

## Equivalent legacy IDs resolved to existing records

No duplicate movement records were created for these candidates. This change adds 22 legacy ID mappings to 20 existing records; `Barbell_Step_Ups` was already linked to `barbell-step-up` and is shown for completeness.

| Atlas record | Legacy IDs |
|---|---|
| `conventional-deadlift` | `Barbell_Deadlift` |
| `bent-over-row` | `Bent_Over_Barbell_Row` |
| `barbell-back-squat` | `Barbell_Full_Squat` |
| `barbell-box-squat` | `Box_Squat`, `Barbell_Squat_To_A_Bench` |
| `barbell-glute-bridge` | `Barbell_Glute_Bridge` |
| `incline-barbell-bench-press` | `Barbell_Incline_Bench_Press_-_Medium_Grip` |
| `barbell-floor-press` | `Floor_Press` |
| `barbell-step-up` | `Barbell_Step_Ups` |
| `barbell-walking-lunge` | `Barbell_Walking_Lunge` |
| `barbell-standing-calf-raise` | `Standing_Barbell_Calf_Raise` |
| `barbell-reverse-curl` | `Reverse_Barbell_Curl` |
| `barbell-decline-bench-press` | `Decline_Barbell_Bench_Press` |
| `sumo-deadlift` | `Sumo_Deadlift` |
| `deficit-deadlift` | `Deficit_Deadlift` |`n| `jm-press` | `JM_Press` |`n| `preacher-curl` | `Preacher_Curl` |
| `close-grip-bench-press` | `Close-Grip_Barbell_Bench_Press` |
| `t-bar-row` | `T-Bar_Row_with_Handle`, `Bent_Over_Two-Arm_Long_Bar_Row` |
| `zercher-squat` | `Zercher_Squats` |
| `yates-row` | `Reverse_Grip_Bent-Over_Rows` |
| `rack-pull` | `Rack_Pulls` |

`Rack_Pulls` already had an Atlas movement record; only its missing legacy link was added. Other direct legacy mappings already present in Atlas were preserved. Not every grip, stance, band, or chain variation received a new record; they remain legacy entries when no exact Atlas equivalence was sufficiently clear. `Barbell_Guillotine_Bench_Press` was not added because the project rule prohibits new neck-involving exercises. `Jefferson_Squats` and `Lying_Cambered_Barbell_Row` remain retired tombstones under the user's 4 November decision. Lower-priority isolations such as the barbell side bend were deferred under the project's major-muscle-first priority.

## Artwork provenance

- Generated with OpenAI's built-in image generator from original prompts, using the locally approved `assisted-pull-up.webp` and `dumbbell-floor-press` preview as style references only.
- Original AI-assisted artwork; no third-party image assets were copied. Rights the project holds are dedicated under CC0 1.0. OpenAI Terms apply; the outputs may not be unique and no exclusivity is claimed.
- Optimized WebP files are in `media/exercises/`; full-resolution PNG masters are retained here.

## Rollout artwork details

- Optimized asset: `media/exercises/barbell-rollout-from-bench.webp` (1024 × 1024, transparent WebP, 66,922 bytes; SHA-256 `3BAF2564E2CD9CE723D263F1D8E5DA637A7308684C17AAB76311401EE005DDC3`).
- Generation master: `barbell-rollout-from-bench-source.png` (SHA-256 `7361E000DE3171318AFFE1EA13541D5C63A0D53887E5723AF0E0A9AE7A38E82F`).
- The two side-by-side phases show both knees supported on the bench, with the bar rolling on the floor. Black opaque shorts cover the hips and groin; the abdominal and lat highlights are red.
