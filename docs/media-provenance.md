# Media provenance

## Arnold Press illustration revision

- **Asset:** [`media/exercises/arnold-press-revised.webp`](../media/exercises/arnold-press-revised.webp), used by [`arnold-press.json`](../data/exercises/arnold-press.json).
- **File:** 147,820 bytes — SHA-256 `7001ac221595c41c03503a32255d76bf6b438967799e257ad9c413f9a467e00d`.
- **Date:** 2026-10-17.
- **Creator/tool:** Open Exercise Atlas, edited with the built-in OpenAI image generator; model identifier not exposed.
- **Method:** The existing Monk Mode illustration was used as the edit target. The revised output retains its two-pose composition, seated start/finish positions, dumbbells and bench, grayscale athlete style, red shoulder emphasis, and transparent background, while moving the rotation arrows beside the wrists. Image generation recreated illustration details, so the output is not pixel-identical to the source. The original file remains in the repository; the exercise record points to this revised derivative.
- **Prompt:** “Edit the supplied Open Exercise Atlas exercise illustration. Preserve the exact two-panel side-by-side composition, athlete identity, anatomy, facial expression, clothing, bench, dumbbells, poses, grayscale rendering, red shoulder highlights, transparency, and all crop/scale details. Make one focused change only: replace the large red curved arrows floating outside the arms with small, clean red curved rotation arrows placed immediately beside each wrist/dumbbell grip in both panels. The arrows should clearly indicate the hands rotating outward from palms facing the torso in the left START pose toward palms facing forward in the right overhead FINISH pose; they must not imply that the whole arms circle. Keep arrows separated from the body and equipment, anatomically plausible and easy to read at thumbnail size. No labels, text, extra arrows, or other changes.”
- **Source and rights:** Derived from the MIT-licensed [Monk Mode Arnold Press illustration](https://github.com/yagizerentunay/monk-mode/blob/main/public/exercises/shoulders-arnold-press.webp). The exercise record preserves the MIT license and original source attribution. [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; AI output may not be unique, and no exclusivity is claimed.
- **Scope and review:** The change clarifies the intended hand rotation in the still image. It does not demonstrate the full descent or establish expert form/anatomy approval; the exercise remains `reviewStatus: pending`.

## Barbell Bench Press illustration

- **Asset:** `media/exercises/barbell-bench-press.png`
- **Date:** 2026-10-13
- **Creator:** Open Exercise Atlas, using OpenAI image generation from a text prompt.
- **Style reference:** Monk Mode's `public/exercises/barbell-bench-press.webp` was visually inspected to understand its grayscale anatomy illustration, red pectoral emphasis, and movement arrow. The reference file was not supplied to the image generator, copied into Atlas, or edited to create this asset.
- **Source:** original image generated for this project, SHA-256 `49f32b2db17921ad1320f98c276b11dfbb096d10ee2fa23d4d4c7cce76afefbd6`.
- **Rights:** The project dedicates any rights it holds in this asset under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use/) assign the output to the user to the extent permitted by applicable law. AI output may not be unique; this record does not grant rights in the Monk Mode reference artwork or guarantee exclusivity.
- **Redistribution evidence:** this provenance record and the linked OpenAI terms. No third-party image was imported.

Generation prompt (built-in image generator, transparent background):

> Use case: scientific-educational. Asset type: original transparent-background exercise guide illustration for an open-source fitness atlas. Create ONE original full-body image of a person doing a standard flat BARBELL BENCH PRESS, at the top of the press with the bar vertically over the mid-chest/shoulder line, elbows nearly extended but not hyperextended, medium-width symmetric overhand grip. Both feet firmly on the floor; head, upper back, and hips supported by a flat black bench. A sturdy black barbell rack with balanced plates on both ends, no spotter. Style: polished semi-realistic 3D anatomical fitness illustration, mostly monochrome grayscale person and charcoal equipment, pectoral muscle area highlighted in saturated red with anatomically plausible boundaries, a simple red upward movement arrow behind/above the bar. Three-quarter perspective from near the foot of the bench, entire bench, feet, bar and plates visible. Clean cutout with genuinely transparent background, no scenery, no text, no logos, no watermark. Match the visual language of grayscale training-guide anatomy art with red muscle highlighting, but create a new composition and distinct subject and equipment. Avoid extra arms/fingers, distorted barbell, asymmetric plates, unsafe grip, floating feet, cropped equipment, or an incline bench.

This illustration is a visual guide, not a substitute for the pending technique review of the exercise record.

## Lat Pulldown wide-grip example illustrations

- **Assets:** `media/exercises/lat-pulldown-start.webp` and `media/exercises/lat-pulldown-finish.webp`.
- **Date:** 2026-10-13.
- **Creator:** Open Exercise Atlas, using OpenAI built-in image generation. The tool did not expose a model identifier.
- **Method:** A front three-quarter FINISH frame was generated from a text prompt after earlier rear-view drafts were rejected; the FINISH image was then used as a continuity reference for START. The accepted pair did not use a third-party image as generator input. Monk Mode art informed only an earlier rejected draft; no third-party image was copied into these assets.
- **Source:** original images generated for this project. START SHA-256 `e59990cb478d7e47f73326306955b7996da692d2f6cab93cec8e1b03009f3722`; FINISH SHA-256 `20ad6b387e48faeb7c690d5e33d4b0475e5284e221f401536a8e64f48f876967`. PNG masters and generation details are retained in [`docs/pilots/wide-grip-lat-pulldown/`](pilots/wide-grip-lat-pulldown/).
- **Rights:** Following the project's media policy above, the project dedicates any rights it holds in these original outputs under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by law. AI output may not be unique; this record does not claim exclusivity or third-party rights.
- **Redistribution evidence:** this provenance record and the linked OpenAI terms.
- **Scope and review:** These frames show a wide-grip example in the generic Atlas `lat-pulldown` media field. They do not establish exact equivalence with Monk Mode `Wide-Grip_Lat_Pulldown`; no `legacyIds` mapping was added. The exercise `reviewStatus` remains `pending`, and expert review of joint mechanics, muscle overlay boundaries, and machine geometry is still needed.

## Monk Mode illustrated exercise library (batch migration)

- **Assets:** every `media/exercises/<id>.webp` whose record has a media entry with `creator` "Monk Mode (AI-assisted original illustration)" and role `reference`. Each record names its own file; `lat-pulldown-*.webp` and `barbell-bench-press.png` above are separate assets.
- **Date:** 2026-10-13.
- **Creator:** Monk Mode (`yagizerentunay/monk-mode`). The images are AI-assisted original illustrations generated for Yagiz with OpenAI image generation (grayscale athlete, target muscle highlighted in red).
- **Origin of the files:** copied byte-for-byte from `public/exercises/` of `yagizerentunay/monk-mode` at commit `cba2d06`. Nothing was resized, re-encoded or edited, so the bytes (and SHA-256) equal the Monk Mode files; Monk Mode's synced catalog must show identical image bytes.
- **Per-asset facts:** `sourceUrl` is `https://github.com/yagizerentunay/monk-mode/blob/main/public/exercises/<original-file-name>`; the original file name can differ from the Atlas file name (Atlas names it `<id>.webp`).
- **Rights:** both repositories belong to the same owner. The illustrations are published in the Monk Mode repository under the MIT License, so their media `license` is `MIT` (not the CC0 used for original Atlas text). [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law. AI output may not be unique; no exclusivity is claimed.
- **Redistribution evidence:** https://github.com/yagizerentunay/monk-mode/blob/main/LICENSE
- **Scope and review:** these are visual guides, not technique review. The records that use them keep `reviewStatus: pending`. Where an existing Atlas record already had its own illustration (for example `barbell-bench-press`), that asset is kept and the Monk Mode file is added only when it is a different picture.

## Original START/FINISH exercise illustrations (16 assets)

- **Date:** 2026-10-14.
- **Creator:** Open Exercise Atlas (AI-assisted original illustration).
- **Tool/model:** OpenAI image generation; model identifier not exposed.
- **Method:** Each two-phase square illustration was generated from an exercise-specific text prompt. The existing Atlas `media/exercises/dumbbell-fly.webp` was supplied solely as a style/character reference; the generated art is original and does not reproduce its pose. Generated PNGs were converted to 1024×1024 WebP at quality 82 on a plain white background.
- **Rights:** Following the project media policy, the project dedicates any rights it holds in these original outputs under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law. AI output may not be unique; no exclusivity is claimed.
- **Scope and review:** Visual guides only; exercise records remain `reviewStatus: pending`. The images have been visually screened for composition and obvious anatomy/equipment errors, but are not expert form or anatomy reviews.
- **Assets (SHA-256 of final WebP):**
  - `media/exercises/dumbbell-bench-press.webp` — 59,932 bytes — `4e9d7379ec00d55dbbbf6adf7f538847e5d2e37a5002a272485202ca50a15695`
  - `media/exercises/dumbbell-biceps-curl.webp` — 55,788 bytes — `d39e56c1c2efb5d1fa8d5334d633ea4e999791f230ef87f977d5087e2675b4c7`
  - `media/exercises/dumbbell-shoulder-press.webp` — 51,412 bytes — `6d4686b545837818c4aa46fbcefbe5532145d60ba84d9252b464f138a1371852`
  - `media/exercises/overhead-press.webp` — 52,954 bytes — `a29cbe4c2566d91e6d69f2b964ebda0ea75569142b561661ae1637a31da2c066`
  - `media/exercises/push-up.webp` — 28,892 bytes — `38f1d58fbd574b433257fd9426adda7c2639203b2c51ef785d53d9d6a26067c3`
  - `media/exercises/incline-push-up.webp` — 31,034 bytes — `633098ab29eaa9d9210396b47b9774806f8babd7020eb2856b524b79329e990a`
  - `media/exercises/bench-dip.webp` — 36,990 bytes — `519f09bb6c369d318b57ebf66e5721a269aea9d2fab368a817592d78cb8ccc26`
  - `media/exercises/bodyweight-squat.webp` — 53,326 bytes — `ea54fb6db64ab32860a61d7dc7a2d6757a401ff54b48cae7e5b90194331fe700`
  - `media/exercises/glute-bridge.webp` — 24,714 bytes — `8d6bd3d2510b49b1e9e152898e4b4fd935e1c5c727da26300b35599460a93f55`
  - `media/exercises/plank.webp` — 20,784 bytes — `dc5b475703b13fc6308d07639fc393eb791c1a0068362c03e509a1746162a100`
  - `media/exercises/side-plank.webp` — 24,704 bytes — `40f83ffbd9cb1d311034237209c5c3988afc8630db5b46414342a2dec2d2b2ee`
  - `media/exercises/pull-up.webp` — 51,818 bytes — `cba9969791840564e1966a1d708675243e87839a5d7fda6030c266cd0a91c3f1`
  - `media/exercises/seated-cable-row.webp` — 49,408 bytes — `b567e56f254c290d49a66fc6b30f5764be985d9dd228bb10b4db61a4522b2986`
  - `media/exercises/reverse-lunge.webp` — 40,222 bytes — `a16c2f8f6d52e12bf07ff7a973ec0885bdc3b392d7f3007cd1642bccf1bcade8`
  - `media/exercises/step-up.webp` — 42,004 bytes — `9bc947b8d804419ab596b5ee13ed814d8c481970fd5b0514e692fc0405fb00e6`
  - `media/exercises/kettlebell-deadlift.webp` — 45,442 bytes — `1d36d36b2fb42598bb9828ae7107a058389ec4bd7310f52deb622edf32300e36`

## Original two-phase muscle coverage illustrations (19 assets)

- **Date:** 2026-10-14.
- **Creator/tool:** Open Exercise Atlas using OpenAI built-in image generation; model identifier not exposed.
- **Style references:** The repo's `media/exercises/assisted-pull-up.webp` and the user-approved [Dumbbell Floor Press pilot](pilots/dumbbell-floor-press/prompt.md) were supplied as style inputs. They guided the grayscale anatomical athlete, selective red target-muscle emphasis, arrows, and equal side-by-side START/FINISH composition. No existing movement image was copied into a new movement asset.
- **Method:** One original two-phase image was generated for each new exercise. Generated PNGs were resized to 1024 × 1024 transparent WebP at quality 85. Each final image is referenced by its own new exercise record; the 186 pre-existing records and media were left intact. The first Cat-Cow, overhead barbell shrug, and band-resisted march drafts were rejected for framing or equipment geometry; the final set uses corrected Cat-Cow, overhead dumbbell shrug, and seated hip flexion assets.
- **Prompt set:** Shared visual direction: “same athlete and camera in two equal side-by-side panels; START left, FINISH right; hyper-detailed grayscale anatomy; red only on the target muscle; compact framing; small red movement arrow; transparent background; no labels, extra limbs, or cross-panel overlap.” Each [exercise record](../data/exercises/) supplies its movement-specific setup, action, return, and equipment. The exact approved pilot prompt is preserved [here](pilots/dumbbell-floor-press/prompt.md).
- **Rights:** The project dedicates any rights it holds in these original outputs under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by law. AI output may not be unique; no exclusivity is claimed.
- **Scope and review:** Visual guides and editorial records only. All 19 new records remain `reviewStatus: pending`; no expert form or anatomical review has occurred. The red overlays are approximate.

| Muscle | New exercise | Final WebP | Bytes | SHA-256 |
| --- | --- | --- | ---: | --- |
| `chest` | [Dumbbell Floor Press](../data/exercises/dumbbell-floor-press.json) | [`dumbbell-floor-press.webp`](../media/exercises/dumbbell-floor-press.webp) | 129,326 | `5fba76cad00a97b8b559155ebcc0fc3d8cb9d034083d04213ffb7c2868daaa57` |
| `upper-back` | [Prone T Raise](../data/exercises/prone-t-raise.json) | [`prone-t-raise.webp`](../media/exercises/prone-t-raise.webp) | 113,776 | `1501c7871d7cc89ce2dcfcc77a8a4cc2d77ba93ed1483c3e2e5d3beb9e95eed9` |
| `lats` | [Single-Arm High Cable Row](../data/exercises/single-arm-high-cable-row.json) | [`single-arm-high-cable-row.webp`](../media/exercises/single-arm-high-cable-row.webp) | 171,098 | `e4f251cad03a316b0f200123dab179c69166bebc20e05d890a27e27474e55853` |
| `shoulders` | [Bent-Over Dumbbell Reverse Fly](../data/exercises/bent-over-dumbbell-reverse-fly.json) | [`bent-over-dumbbell-reverse-fly.webp`](../media/exercises/bent-over-dumbbell-reverse-fly.webp) | 116,108 | `b9cf1a55d4b538caee7b4d6d2efa4c225f11abdbbb17b1b2083c54a8eb7c141e` |
| `biceps` | [Barbell Drag Curl](../data/exercises/barbell-drag-curl.json) | [`barbell-drag-curl.webp`](../media/exercises/barbell-drag-curl.webp) | 136,018 | `7e1fa8c0fe3fed8baa456fa8e15814d93c8a16ae356536ac860d46a7a22b9daf` |
| `triceps` | [Single-Arm Overhead Dumbbell Triceps Extension](../data/exercises/single-arm-overhead-dumbbell-triceps-extension.json) | [`single-arm-overhead-dumbbell-triceps-extension.webp`](../media/exercises/single-arm-overhead-dumbbell-triceps-extension.webp) | 123,210 | `8c9b0965b971a0396ae79785c16c29506b0ef0624a82478e6465814edc0b32ad` |
| `forearms` | [Seated Dumbbell Finger Curl](../data/exercises/seated-dumbbell-finger-curl.json) | [`seated-dumbbell-finger-curl.webp`](../media/exercises/seated-dumbbell-finger-curl.webp) | 162,852 | `c0ade21d75e1ace6b540189aba2fe203eec2ca5a69f5739f401ad2560b542c9b` |
| `abdominals` | [Dead Bug](../data/exercises/dead-bug.json) | [`dead-bug.webp`](../media/exercises/dead-bug.webp) | 86,174 | `0977d400b46c47b7f22c7bf41aee75c6b5072d631681364ae5f4dee4c07e7155` |
| `obliques` | [Russian Twist](../data/exercises/russian-twist.json) | [`russian-twist.webp`](../media/exercises/russian-twist.webp) | 120,412 | `ea9329ad643873e09bc897a28127a46511f0dbf202f299a8db2facd535acea08` |
| `lower-back` | [Cat-Cow](../data/exercises/cat-cow.json) | [`cat-cow.webp`](../media/exercises/cat-cow.webp) | 60,282 | `0ae33409b1a96c73df7cf40ec830abd7d8dc61086a44c3c740cef0167e4c660d` |
| `glutes` | [Single-Leg Hip Thrust](../data/exercises/single-leg-hip-thrust.json) | [`single-leg-hip-thrust.webp`](../media/exercises/single-leg-hip-thrust.webp) | 100,378 | `5fe56de0e9f9de7b7270473a383cfcfc2e4b5d53d5c66155eb7d19a91d1befa0` |
| `quadriceps` | [Wall Sit](../data/exercises/wall-sit.json) | [`wall-sit.webp`](../media/exercises/wall-sit.webp) | 130,628 | `38841b9570a35968b875352f17ace709bc88a937598350fc921655565209e439` |
| `hamstrings` | [Standing Band Leg Curl](../data/exercises/standing-band-leg-curl.json) | [`standing-band-leg-curl.webp`](../media/exercises/standing-band-leg-curl.webp) | 116,786 | `f691c1df8f14e7d0ba825127d79a65c0574d2972d321b690e58d20a6b690de87` |
| `calves` | [Tiptoe Farmer Carry](../data/exercises/tiptoe-farmer-carry.json) | [`tiptoe-farmer-carry.webp`](../media/exercises/tiptoe-farmer-carry.webp) | 121,444 | `ed5069da35ffaf08b8ad586f14e9d42ac9274032dbbf4e1a0c0064f98ebab062` |
| `adductors` | [Adductor Squeeze Bridge](../data/exercises/adductor-squeeze-bridge.json) | [`adductor-squeeze-bridge.webp`](../media/exercises/adductor-squeeze-bridge.webp) | 74,020 | `19772056e0d18a6eba36d20b029b6aa3bc59dbcccdb9d895c79ed0b36a0ffcdf` |
| `abductors` | [Seated Band Hip Abduction](../data/exercises/seated-band-hip-abduction.json) | [`seated-band-hip-abduction.webp`](../media/exercises/seated-band-hip-abduction.webp) | 144,032 | `eb75b13af8210dbeed35bbae9f5d655a771c9e3079a200cd10ba28404e8427ec` |
| `traps` | [Overhead Dumbbell Shrug](../data/exercises/overhead-dumbbell-shrug.json) | [`overhead-dumbbell-shrug.webp`](../media/exercises/overhead-dumbbell-shrug.webp) | 131,396 | `b3bbc70b54ac7708ef7ddc910b926e0349a98083132f20a0caa33f802cb13217` |
| `neck` | [Seated Active Neck Rotation](../data/exercises/seated-active-neck-rotation.json) | [`seated-active-neck-rotation.webp`](../media/exercises/seated-active-neck-rotation.webp) | 142,946 | `a2713cb6eed65c61f5238b75fa3ba79d0063692c4b03ecf58ed9245f4ed249f5` |
| `hip-flexors` | [Seated Single-Leg Hip Flexion](../data/exercises/seated-hip-flexion.json) | [`seated-hip-flexion.webp`](../media/exercises/seated-hip-flexion.webp) | 129,432 | `f70017a08443c674fa1e22bfe8bd2b66913b40d513f24c16c960a093fc1a9f9f` |

## 2026-10-17 muscle coverage expansion

The 19-record expansion's asset mapping, sources, hashes, and custom image prompt briefs are documented [here](pilots/muscle-expansion-2026-10-17.md).


## 2026-10-17 muscle coverage expansion — batch 2

- **Assets and records:** 31 new exercise-specific illustrations and records. The [batch mapping, per-file SHA-256 values, and visual contact sheet](pilots/muscle-expansion-2026-10-17-batch-2.md) documents each asset. No neck movement was added.
- **Creator and style references:** Open Exercise Atlas (AI-assisted original illustrations). Seven images were generated for their specific exercises with the OpenAI built-in image generator. Atlas assisted-pull-up.webp and the user-approved Dumbbell Floor Press pilot were style references only; no existing exercise image was copied into those new illustrations.
- **Additional originals:** The remaining 24 illustrations are original pilots from the 2026-10-16 missing-movement preview set, copied byte-for-byte from their documented pilot folders.
- **Rights:** The project dedicates any rights it holds in these outputs under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by law. AI output may not be unique; no exclusivity is claimed.
- **Scope and review:** All 31 records remain reviewStatus pending. The illustrations are visual guides and have not received expert review of form, anatomy, or muscle-highlight boundaries.


## 2026-10-17 muscle coverage expansion — batch 3

- **Assets and records:** nine new movement illustrations and records. See the [batch mapping and SHA-256 list](pilots/muscle-expansion-2026-10-17-batch-3.md) and [combined contact sheet for batches 2–3](pilots/muscle-expansion-2026-10-17-batches-2-3-contact-sheet.webp). No neck movement was added.
- **Originals:** six images were generated for their specific exercises with the OpenAI built-in image generator. The Atlas assisted-pull-up illustration and approved Dumbbell Floor Press pilot were style references only; no existing reference exercise art was copied.
- **Pilot art:** three previously created original pilots were copied byte-for-byte into the exercise media library.
- **Rights and review:** the project dedicates any rights it holds in these outputs under CC0 1.0; OpenAI's Terms of Use assign output to the user to the extent permitted by law. AI output may not be unique. All records remain pending expert review of form, anatomy, and muscle overlays.


## 2026-10-17 muscle coverage expansion — batch 4

- **Assets and records:** four additional exercise-specific illustrations and records, with the [batch map and hashes](pilots/muscle-expansion-2026-10-17-batch-4.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-4-contact-sheet.webp). No neck-targeted exercise was added.
- **Pilot art:** all four original project illustrations were copied byte-for-byte from their documented pilot folders. Zercher Squat is from the separate pilot created on 2026-10-17.
- **Review:** records remain pending expert form/anatomy review. Mobility cues keep the head neutral; the art does not highlight neck muscles.


## 2026-10-17 muscle coverage expansions — batches 5–6

- **Assets and records:** eight original exercise-specific image/record pairs, mapped with SHA-256 values in the [batch 5](pilots/muscle-expansion-2026-10-17-batch-5.md) and [batch 6](pilots/muscle-expansion-2026-10-17-batch-6.md) manifests and [batch 5 contact sheet](pilots/muscle-expansion-2026-10-17-batch-5-contact-sheet.webp) and [batch 6 contact sheet](pilots/muscle-expansion-2026-10-17-batch-6-contact-sheet.webp); [combined batches 4–6 preview](pilots/muscle-expansion-2026-10-17-batches-4-6-contact-sheet.webp). No neck-targeted movement was added.
- **Creator and references:** Open Exercise Atlas using OpenAI built-in ImageGen. The Atlas assisted-pull-up art and approved Dumbbell Floor Press pilot were style references only; no reference exercise pixels were copied. Generated PNGs were converted to 1024 × 1024 WebP at quality 85.
- **Rights and review:** the project dedicates rights it holds under CC0 1.0; OpenAI's Terms of Use assign output to the user to the extent permitted by law. AI output may not be unique. All records remain pending expert form/anatomy review.


## Muscle expansion — batch 7 (2026-10-17)

Four original AI-assisted illustrations integrated as pending editorial drafts. Per-exercise source, creator, CC0-1.0 declaration, SHA-256 hashes, and contact sheet are recorded in [batch 7 manifest](pilots/muscle-expansion-2026-10-17-batch-7.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-7-contact-sheet.webp).


## Muscle expansion — batch 8 (2026-10-17)

Thirteen original AI-assisted illustrations integrated as pending drafts; one duplicate-movement candidate was excluded. Per-exercise hashes, creator and source, and contact sheet are in the [batch 8 manifest](pilots/muscle-expansion-2026-10-17-batch-8.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-8-contact-sheet.webp).


## Muscle expansion — batch 9 (2026-10-17)

Five original AI-assisted illustrations integrated as pending mobility/core drafts; movement references and asset hashes are in the [batch 9 manifest](pilots/muscle-expansion-2026-10-17-batch-9.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-9-contact-sheet.webp).


## Muscle expansion — batch 10 (2026-10-17)

Five original AI-assisted illustrations integrated as pending exercise drafts; sources and per-asset hashes are documented in the [batch 10 manifest](pilots/muscle-expansion-2026-10-17-batch-10.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-10-contact-sheet.webp).


## Muscle expansion — batch 11 (2026-10-17)

Five original AI-assisted illustrations integrated as pending exercise drafts; per-asset hashes and movement sources are in the [batch 11 manifest](pilots/muscle-expansion-2026-10-17-batch-11.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-11-contact-sheet.webp).


## Muscle expansion — batch 12 (2026-10-17)

Five original AI-assisted illustrations integrated as pending exercise drafts; hashes and movement sources are documented in the [batch 12 manifest](pilots/muscle-expansion-2026-10-17-batch-12.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-12-contact-sheet.webp).


## Muscle expansion — batch 13 (2026-10-17)

Five original AI-assisted illustrations integrated as pending exercise drafts; per-asset hashes and movement references are in the [batch 13 manifest](pilots/muscle-expansion-2026-10-17-batch-13.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-13-contact-sheet.webp).


## Muscle expansion — batch 14 (2026-10-17)

Five original AI-assisted illustrations added as pending exercise drafts; hashes and references appear in the [batch 14 manifest](pilots/muscle-expansion-2026-10-17-batch-14.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-14-contact-sheet.webp).


## Muscle expansion — batch 15 (2026-10-17)

Four original AI-assisted illustrations added as pending exercise drafts; hashes and movement references are documented in the [batch 15 manifest](pilots/muscle-expansion-2026-10-17-batch-15.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-15-contact-sheet.webp).


## Muscle expansion — batch 16 (2026-10-17)

Three original AI-assisted illustrations added as pending exercise drafts; hashes and movement references appear in the [batch 16 manifest](pilots/muscle-expansion-2026-10-17-batch-16.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-16-contact-sheet.webp).


## Muscle expansion — batch 17 (2026-10-17)

Four original AI-assisted illustrations added as pending exercise drafts; per-asset hashes and movement sources are in the [batch 17 manifest](pilots/muscle-expansion-2026-10-17-batch-17.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-17-contact-sheet.webp).


## Muscle expansion — batch 18 (2026-10-17)

One original AI-assisted illustration added for Barbell Floor Press as a pending draft; its hash and movement/style references are in the [batch 18 manifest](pilots/muscle-expansion-2026-10-17-batch-18.md).


## Muscle expansion — batch 19 (2026-10-17)

One original AI-assisted illustration added for Standing Cable Chest Press as a pending bilingual draft; its hash and references are in the [batch 19 manifest](pilots/muscle-expansion-2026-10-17-batch-19.md).


## Muscle expansion — batch 20 (2026-10-17)

Two original AI-assisted illustrations added for Machine Lateral Raise and Seated Machine Biceps Curl as pending bilingual drafts; per-asset hashes and references are in the [batch 20 manifest](pilots/muscle-expansion-2026-10-17-batch-20.md).


## Muscle expansion — batch 21 (2026-10-17)

Three original AI-assisted illustrations added for Dumbbell Sumo Squat, Dumbbell Walking Lunge, and Single-Arm Cable Row as pending bilingual drafts; per-asset hashes and references are in the [batch 21 manifest](pilots/muscle-expansion-2026-10-17-batch-21.md).


## Muscle expansion — batch 22 (2026-10-17)

Three original AI-assisted illustrations added for Dumbbell Reverse Lunge, Cable Rope Hammer Curl, and Single-Leg Dumbbell Calf Raise as pending bilingual drafts; per-asset hashes and references are in the [batch 22 manifest](pilots/muscle-expansion-2026-10-17-batch-22.md).
