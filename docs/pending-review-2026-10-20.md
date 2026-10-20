# Pending exercise audit — 20 October 2026

The 351 local exercise records were checked for schema validity, review metadata, language coverage, duplicate identifiers, and obvious copy or classification problems. Three read-only Luna review passes covered filenames A–H, I–R, and S–Z, including the six new machine drafts. This is an editorial screening, not a qualified form, anatomy, clinical, or media-rights review. All 351 records remain `reviewStatus: pending`; none has a named reviewer and review date. The release gate in [the data model](data-model.md) therefore remains unmet.

## Corrections made

- Replaced malformed Turkish image alt text containing serialized instruction arrays in `dumbbell-bent-over-row`, `dumbbell-lateral-lunge`, `hanging-straight-leg-raise`, `reverse-sled-drag`, and `weighted-push-up`. The text now names the movement and describes the two-phase image.
- Limited the `bench-dip` instruction to a comfortable shoulder range and added a stop cue for shoulder pain. This is an editorial safety correction based on [ACE's discussion of bench dip shoulder loading](https://www.acefitness.org/certifiednewsarticle/1657/follow-up-q-and-a-dangerous-dips/), not expert approval of the exercise or its illustration.

## Qualified review queue

1. **Priority: cervical resistance.** `band-resisted-lateral-neck-flexion`, `band-resisted-neck-flexion`, `band-resisted-neck-extension`, and `hand-resisted-neck-isometric` prescribe resisted neck work. A qualified clinician or exercise professional should decide intended use, contraindications, and whether these belong in a general exercise catalog. No new neck movement was added.
2. **Muscle mapping and illustration consistency.** Review `adductor-squeeze-bridge`, `dumbbell-sumo-squat`, `kettlebell-suitcase-deadlift`, `kettlebell-swing`, and `medicine-ball-overhead-slam`. Their primary/secondary muscle assignments may not match the described movement emphasis. If the mapping changes, check red muscle overlays and localized alt text together. These are flagged questions, not verified errors.
3. **Movement taxonomy.** `jump-rope` currently uses `movementPattern: isolation`, although its description is rhythmic rope skipping. The controlled vocabulary has no locomotion or conditioning pattern; resolving this needs a taxonomy decision and an additive schema change or a documented convention.
4. **Instruction depth.** Review `seated-cable-row`, `side-plank`, `step-up`, and `overhead-press` for clearer setup, movement, and controlled return. Review the comfort range in `incline-dumbbell-press`. The present short instructions are not proof of unsafe form.
5. **Six new machine drafts.** Independently check machine geometry, joint paths, muscle overlays, and rights evidence in the [machine expansion manifest](pilots/machine-expansion-2026-10-20.md). Its standing glute kickback machine variant lacks a matching machine-specific reference. All six remain pending.

Before changing any record to `reviewed`, obtain a named qualified reviewer, document what the reviewer checked, record `source.reviewedBy` and `source.reviewedAt`, and resolve media-rights and illustration concerns separately. Automated validation confirms data shape and references; it does not establish exercise accuracy.
