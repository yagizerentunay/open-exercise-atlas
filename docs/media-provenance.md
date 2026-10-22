# Media provenance

## Arnold Press illustration revision

- **Asset:** [`media/exercises/arnold-press-revised.webp`](../media/exercises/arnold-press-revised.webp), used by [`arnold-press.json`](../data/exercises/arnold-press.json).
- **File:** 147,820 bytes — SHA-256 `7001ac221595c41c03503a32255d76bf6b438967799e257ad9c413f9a467e00d`.
- **Date:** 2026-10-17.
- **Creator/tool:** Open Exercise Atlas, edited with the built-in OpenAI image generator; model identifier not exposed.
- **Method:** The existing Monk Mode illustration was used as the edit target. The revised output retains its two-pose composition, seated start/finish positions, dumbbells and bench, grayscale athlete style, red shoulder emphasis, and transparent background, while moving the rotation arrows beside the wrists. Image generation recreated illustration details, so the output is not pixel-identical to the source. The original file remains in the repository; the exercise record points to this revised derivative.
- **Prompt:** “Edit the supplied Open Exercise Atlas exercise illustration. Preserve the exact two-panel side-by-side composition, athlete identity, anatomy, facial expression, clothing, bench, dumbbells, poses, grayscale rendering, red shoulder highlights, transparency, and all crop/scale details. Make one focused change only: replace the large red curved arrows floating outside the arms with small, clean red curved rotation arrows placed immediately beside each wrist/dumbbell grip in both panels. The arrows should clearly indicate the hands rotating outward from palms facing the torso in the left START pose toward palms facing forward in the right overhead FINISH pose; they must not imply that the whole arms circle. Keep arrows separated from the body and equipment, anatomically plausible and easy to read at thumbnail size. No labels, text, extra arrows, or other changes.”
- **Source and rights:** Derived from the MIT-licensed [Monk Mode Arnold Press illustration](https://github.com/yagizerentunay/monk-mode/blob/main/public/exercises/shoulders-arnold-press.webp). The exercise record preserves the MIT license and original source attribution. [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; AI output may not be unique, and no exclusivity is claimed.
- **Scope:** The change clarifies the intended hand rotation in the still image. It does not demonstrate the full descent.

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

This illustration is a visual guide and does not depict the full exercise movement.

## Lat Pulldown wide-grip example illustrations

- **Assets:** `media/exercises/lat-pulldown-start.webp` and `media/exercises/lat-pulldown-finish.webp`.
- **Date:** 2026-10-13.
- **Creator:** Open Exercise Atlas, using OpenAI built-in image generation. The tool did not expose a model identifier.
- **Method:** A front three-quarter FINISH frame was generated from a text prompt after earlier rear-view drafts were rejected; the FINISH image was then used as a continuity reference for START. The accepted pair did not use a third-party image as generator input. Monk Mode art informed only an earlier rejected draft; no third-party image was copied into these assets.
- **Source:** original images generated for this project. START SHA-256 `e59990cb478d7e47f73326306955b7996da692d2f6cab93cec8e1b03009f3722`; FINISH SHA-256 `20ad6b387e48faeb7c690d5e33d4b0475e5284e221f401536a8e64f48f876967`. PNG masters and generation details are retained in [`docs/pilots/wide-grip-lat-pulldown/`](pilots/wide-grip-lat-pulldown/).
- **Rights:** Following the project's media policy above, the project dedicates any rights it holds in these original outputs under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by law. AI output may not be unique; this record does not claim exclusivity or third-party rights.
- **Redistribution evidence:** this provenance record and the linked OpenAI terms.
- **Scope:** These frames show a wide-grip example in the generic Atlas `lat-pulldown` media field. They do not establish exact equivalence with Monk Mode `Wide-Grip_Lat_Pulldown`; no `legacyIds` mapping was added. The exact variation match with Monk Mode remains unresolved, so no `legacyIds` mapping was added.

## Monk Mode illustrated exercise library (batch migration)

- **Assets:** every `media/exercises/<id>.webp` whose record has a media entry with `creator` "Monk Mode (AI-assisted original illustration)" and role `reference`. Each record names its own file; `lat-pulldown-*.webp` and `barbell-bench-press.png` above are separate assets.
- **Date:** 2026-10-13.
- **Creator:** Monk Mode (`yagizerentunay/monk-mode`). The images are AI-assisted original illustrations generated for Yagiz with OpenAI image generation (grayscale athlete, target muscle highlighted in red).
- **Origin of the files:** copied byte-for-byte from `public/exercises/` of `yagizerentunay/monk-mode` at commit `cba2d06`. Nothing was resized, re-encoded or edited, so the bytes (and SHA-256) equal the Monk Mode files; Monk Mode's synced catalog must show identical image bytes.
- **Per-asset facts:** `sourceUrl` is `https://github.com/yagizerentunay/monk-mode/blob/main/public/exercises/<original-file-name>`; the original file name can differ from the Atlas file name (Atlas names it `<id>.webp`).
- **Rights:** both repositories belong to the same owner. The illustrations are published in the Monk Mode repository under the MIT License, so their media `license` is `MIT` (not the CC0 used for original Atlas text). [OpenAI's Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law. AI output may not be unique; no exclusivity is claimed.
- **Redistribution evidence:** https://github.com/yagizerentunay/monk-mode/blob/main/LICENSE
- **Scope:** These are visual guides. Where an existing Atlas record already had its own illustration (for example `barbell-bench-press`), that asset is kept and the Monk Mode file is added only when it is a different picture.

## Original START/FINISH exercise illustrations (16 assets)

- **Date:** 2026-10-14.
- **Creator:** Open Exercise Atlas (AI-assisted original illustration).
- **Tool/model:** OpenAI image generation; model identifier not exposed.
- **Method:** Each two-phase square illustration was generated from an exercise-specific text prompt. The existing Atlas `media/exercises/dumbbell-fly.webp` was supplied solely as a style/character reference; the generated art is original and does not reproduce its pose. Generated PNGs were converted to 1024×1024 WebP at quality 82 on a plain white background.
- **Rights:** Following the project media policy, the project dedicates any rights it holds in these original outputs under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law. AI output may not be unique; no exclusivity is claimed.
- **Scope:** Visual guides only. They are not individualized coaching or medical advice.
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
- **Scope:** Visual guides and editorial records only. The red overlays are approximate.

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
- **Scope:** The illustrations are visual guides; muscle highlights are approximate.


## 2026-10-17 muscle coverage expansion — batch 3

- **Assets and records:** nine new movement illustrations and records. See the [batch mapping and SHA-256 list](pilots/muscle-expansion-2026-10-17-batch-3.md) and [combined contact sheet for batches 2–3](pilots/muscle-expansion-2026-10-17-batches-2-3-contact-sheet.webp). No neck movement was added.
- **Originals:** six images were generated for their specific exercises with the OpenAI built-in image generator. The Atlas assisted-pull-up illustration and approved Dumbbell Floor Press pilot were style references only; no existing reference exercise art was copied.
- **Pilot art:** three previously created original pilots were copied byte-for-byte into the exercise media library.
- **Rights:** the project dedicates any rights it holds in these outputs under CC0 1.0; OpenAI's Terms of Use assign output to the user to the extent permitted by law. AI output may not be unique.


## 2026-10-17 muscle coverage expansion — batch 4

- **Assets and records:** four additional exercise-specific illustrations and records, with the [batch map and hashes](pilots/muscle-expansion-2026-10-17-batch-4.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-4-contact-sheet.webp). No neck-targeted exercise was added.
- **Pilot art:** all four original project illustrations were copied byte-for-byte from their documented pilot folders. Zercher Squat is from the separate pilot created on 2026-10-17.
- **Scope:**  Mobility cues keep the head neutral; the art does not highlight neck muscles.


## 2026-10-17 muscle coverage expansions — batches 5–6

- **Assets and records:** eight original exercise-specific image/record pairs, mapped with SHA-256 values in the [batch 5](pilots/muscle-expansion-2026-10-17-batch-5.md) and [batch 6](pilots/muscle-expansion-2026-10-17-batch-6.md) manifests and [batch 5 contact sheet](pilots/muscle-expansion-2026-10-17-batch-5-contact-sheet.webp) and [batch 6 contact sheet](pilots/muscle-expansion-2026-10-17-batch-6-contact-sheet.webp); [combined batches 4–6 preview](pilots/muscle-expansion-2026-10-17-batches-4-6-contact-sheet.webp). No neck-targeted movement was added.
- **Creator and references:** Open Exercise Atlas using OpenAI built-in ImageGen. The Atlas assisted-pull-up art and approved Dumbbell Floor Press pilot were style references only; no reference exercise pixels were copied. Generated PNGs were converted to 1024 × 1024 WebP at quality 85.
- **Rights:** the project dedicates rights it holds under CC0 1.0; OpenAI's Terms of Use assign output to the user to the extent permitted by law. AI output may not be unique.


## Muscle expansion — batch 7 (2026-10-17)

Four original AI-assisted illustrations integrated as exercise drafts. Per-exercise source, creator, CC0-1.0 declaration, SHA-256 hashes, and contact sheet are recorded in [batch 7 manifest](pilots/muscle-expansion-2026-10-17-batch-7.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-7-contact-sheet.webp).


## Muscle expansion — batch 8 (2026-10-17)

Thirteen original AI-assisted illustrations integrated as drafts; one duplicate-movement candidate was excluded. Per-exercise hashes, creator and source, and contact sheet are in the [batch 8 manifest](pilots/muscle-expansion-2026-10-17-batch-8.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-8-contact-sheet.webp).


## Muscle expansion — batch 9 (2026-10-17)

Five original AI-assisted illustrations integrated as mobility/core drafts; movement references and asset hashes are in the [batch 9 manifest](pilots/muscle-expansion-2026-10-17-batch-9.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-9-contact-sheet.webp).


## Muscle expansion — batch 10 (2026-10-17)

Five original AI-assisted illustrations integrated as exercise drafts; sources and per-asset hashes are documented in the [batch 10 manifest](pilots/muscle-expansion-2026-10-17-batch-10.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-10-contact-sheet.webp).


## Muscle expansion — batch 11 (2026-10-17)

Five original AI-assisted illustrations integrated as exercise drafts; per-asset hashes and movement sources are in the [batch 11 manifest](pilots/muscle-expansion-2026-10-17-batch-11.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-11-contact-sheet.webp).


## Muscle expansion — batch 12 (2026-10-17)

Five original AI-assisted illustrations integrated as exercise drafts; hashes and movement sources are documented in the [batch 12 manifest](pilots/muscle-expansion-2026-10-17-batch-12.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-12-contact-sheet.webp).


## Muscle expansion — batch 13 (2026-10-17)

Five original AI-assisted illustrations integrated as exercise drafts; per-asset hashes and movement references are in the [batch 13 manifest](pilots/muscle-expansion-2026-10-17-batch-13.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-13-contact-sheet.webp).


## Muscle expansion — batch 14 (2026-10-17)

Five original AI-assisted illustrations added as exercise drafts; hashes and references appear in the [batch 14 manifest](pilots/muscle-expansion-2026-10-17-batch-14.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-14-contact-sheet.webp).


## Muscle expansion — batch 15 (2026-10-17)

Four original AI-assisted illustrations added as exercise drafts; hashes and movement references are documented in the [batch 15 manifest](pilots/muscle-expansion-2026-10-17-batch-15.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-15-contact-sheet.webp).


## Muscle expansion — batch 16 (2026-10-17)

Three original AI-assisted illustrations added as exercise drafts; hashes and movement references appear in the [batch 16 manifest](pilots/muscle-expansion-2026-10-17-batch-16.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-16-contact-sheet.webp).


## Muscle expansion — batch 17 (2026-10-17)

Four original AI-assisted illustrations added as exercise drafts; per-asset hashes and movement sources are in the [batch 17 manifest](pilots/muscle-expansion-2026-10-17-batch-17.md) and [contact sheet](pilots/muscle-expansion-2026-10-17-batch-17-contact-sheet.webp).


## Muscle expansion — batch 18 (2026-10-17)

One original AI-assisted illustration added for Barbell Floor Press as a draft; its hash and movement/style references are in the [batch 18 manifest](pilots/muscle-expansion-2026-10-17-batch-18.md).


## Muscle expansion — batch 19 (2026-10-17)

One original AI-assisted illustration added for Standing Cable Chest Press as a bilingual draft; its hash and references are in the [batch 19 manifest](pilots/muscle-expansion-2026-10-17-batch-19.md).


## Muscle expansion — batch 20 (2026-10-17)

Two original AI-assisted illustrations added for Machine Lateral Raise and Seated Machine Biceps Curl as bilingual drafts; per-asset hashes and references are in the [batch 20 manifest](pilots/muscle-expansion-2026-10-17-batch-20.md).


## Muscle expansion — batch 21 (2026-10-17)

Three original AI-assisted illustrations added for Dumbbell Sumo Squat, Dumbbell Walking Lunge, and Single-Arm Cable Row as bilingual drafts; per-asset hashes and references are in the [batch 21 manifest](pilots/muscle-expansion-2026-10-17-batch-21.md).


## Muscle expansion — batch 22 (2026-10-17)

Three original AI-assisted illustrations added for Dumbbell Reverse Lunge, Cable Rope Hammer Curl, and Single-Leg Dumbbell Calf Raise as bilingual drafts; per-asset hashes and references are in the [batch 22 manifest](pilots/muscle-expansion-2026-10-17-batch-22.md).

## Ground Base Jammer and High Pull illustrations

- **Assets:** `media/exercises/plate-loaded-ground-base-jammer-press.webp` (152,974 bytes; SHA-256 `4b37b9e533393583442b039bf4debc34759e1b1066e54073bf267c8ca17ca6b1`) and `media/exercises/plate-loaded-ground-base-high-pull.webp` (156,930 bytes; SHA-256 `63f562efaab2ca06fdb68560464cc1f3abc5e0d8cdf7055ef8218a61c1433d32`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Both are original text-to-image illustrations generated from written prompts, without third-party image inputs. Transparent 1254 × 1254 PNG outputs were inspected, then converted to 1024 × 1024 WebP (`libwebp`, quality 85, alpha retained). Each shows two movement phases in the grayscale anatomy style with red target-muscle highlights. Both athletes wear opaque shorts covering hips, glutes, and groin.
- **Prompt summaries:** Jammer—two standing split-stance phases on a freestanding plate-loaded machine with independent pivoting arms, chest emphasis in red. High pull—deep squat start and lower-chest high-pull finish on the independent-arm Squat / High Pull unit, with trapezius and quadriceps emphasized. No text or logos.
- **Source and rights:** The movement and equipment descriptions were checked against the primary [Hammer Strength Ground Base Jammer page](https://www.lifefitness.com/en-eu/catalog/strength-training/plate-loaded/ground-base-jammer) and [Hammer Strength Squat / High Pull page](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/plate-loaded-squat-high-pull). No manufacturer artwork was imported. The project dedicates any rights it holds in these original illustrations under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed.
- **Records:** [`plate-loaded-ground-base-jammer-press.json`](../data/exercises/plate-loaded-ground-base-jammer-press.json) and [`plate-loaded-ground-base-high-pull.json`](../data/exercises/plate-loaded-ground-base-high-pull.json).
## Smith Machine Shoulder Press illustration

- **Asset:** `media/exercises/smith-machine-shoulder-press.webp` (177,578 bytes; SHA-256 `cf3c8580d151a4d6682f257dc98c5a95a613044cbb823b6c90ada10c41da9838`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original text-to-image illustration; no third-party image input. The transparent 1254 × 1254 PNG was inspected, then converted to 1024 × 1024 WebP (`libwebp`, quality 85, alpha retained). The two phases show a seated start and overhead finish on a guided Smith bar, in grayscale with shoulders highlighted red. The athlete wears opaque shorts covering hips, glutes, and groin.
- **Prompt summary:** Two side-by-side Smith Machine Shoulder Press phases, upright bench under a plate-loaded guided bar, realistic anatomy and equipment, red shoulder highlights, opaque shorts, transparent background, no text or logos.
- **Source and rights:** Smith machine bar-path details were checked against [Life Fitness Smith Machine](https://www.lifefitness.com/en-us/catalog/strength-training/benches/life-fitness-smith-machine); press positioning was cross-checked against the adjacent [ACE Seated Shoulder Press guide](https://www.acefitness.org/resources/everyone/exercise-library/43/seated-shoulder-press/). No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; the output may not be unique, and no exclusivity is claimed.
- **Record:** [`smith-machine-shoulder-press.json`](../data/exercises/smith-machine-shoulder-press.json).
## Yates Row illustration

- **Asset:** `media/exercises/yates-row.webp` (129,578 bytes; SHA-256 `decc50731992cc11dcd8a9011502330626b8ab15940a26531f3037292b69e503`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original text-to-image illustration with no third-party image input. The transparent 1254 × 1254 PNG was inspected, then converted to 1024 × 1024 WebP (`libwebp`, quality 85, alpha retained). Two phases show an underhand barbell row with a moderate hip hinge; lats and biceps are highlighted red. The athlete wears opaque shorts covering hips, glutes, and groin.
- **Prompt summary:** Two side-by-side phases of an underhand Yates Row, start and bar pulled to the lower abdomen, torso angle held steady, grayscale anatomy, lat/biceps highlights, opaque shorts, transparent background, no text or logos.
- **Source and rights:** The overhand grip and general bent-over row path in the Atlas comparison record were checked against [ACE's Bent-Over Row guide](https://www.acefitness.org/resources/everyone/exercise-library/12/bent-over-row/). Yates described his own more-upright row and grip history in [Row Like the Shadow](https://www.muscleandfitness.com/flexonline/training/row-shadow/). No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; the output may not be unique, and no exclusivity is claimed.
- **Record:** [`yates-row.json`](../data/exercises/yates-row.json).

## Plate-Loaded Reverse Lunge illustration

- **Asset:** `media/exercises/plate-loaded-reverse-lunge.webp` (148,458 bytes; SHA-256 `f3165e41c5e8cdbd03b58972fafaf918d52d9c0f7a97e970ef1904ce2776cd0d`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original text-to-image illustration with no third-party image input, then edited to remove glute anatomy rendering while retaining opaque shorts fully covering the hips, glutes, and groin. The transparent 1254 × 1254 PNG was inspected, then converted to 1024 × 1024 WebP (`libwebp`, quality 85, alpha retained). Two phases show the front foot on a fixed platform and the rear foot moving on an inclined sliding platform; visible quadriceps and adductors are highlighted red.
- **Prompt summary:** Two side-by-side phases on a generic plate-loaded guided reverse-lunge machine, upright shoulder pad and handles, fixed front platform and inclined sliding rear platform, grayscale anatomy, red thigh highlights, opaque shorts, transparent background, no text or logos. Final edit kept all hip/glute/groin coverage opaque and removed red glute anatomy highlights.
- **Source and rights:** The guided alternating backward lunge and sliding rear-platform path were checked against [Panatta's Super Lunge Machine](https://www.panattasport.com/en/free-weight-special/super-lunge-machine/); basic reverse-lunge form was cross-checked against [ACE's Reverse Lunge guide](https://www.acefitness.org/resources/everyone/exercise-library/319/reverse-lunge/). No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; the output may not be unique, and no exclusivity is claimed.
- **Record:** [`plate-loaded-reverse-lunge.json`](../data/exercises/plate-loaded-reverse-lunge.json).

## Overhead Machine Triceps Extension illustration

- **Asset:** `media/exercises/overhead-machine-triceps-extension.webp` (164,036 bytes; SHA-256 `a46da1fbbbf7f207f6ef32bf5dbf3f4a10627df8b9c2a5d1571ea3dd43f8295e`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original text-to-image illustration with no third-party image input. The transparent 1254 × 1254 PNG was inspected, then converted to 1024 × 1024 WebP (`libwebp`, quality 85, alpha retained). Two phases show seated elbow flexion behind the head and extension overhead; triceps are highlighted red. The athlete wears opaque shorts covering hips, glutes, and groin.
- **Prompt summary:** Two side-by-side phases on a generic seated plate-loaded French Press machine with high pivot and rotating multi-grip handle, supported back, grayscale anatomy, red triceps highlights, opaque shorts, transparent background, no text or logos.
- **Source and rights:** Panatta describes its French Press machine as an overhead triceps extension with the shoulder flexed and focus on the long head in [Super French Press Machine](https://www.panattasport.com/en/free-weight-special/super-french-press-machine/). The machine-supported elbow-extension setup was cross-checked against [ACE's Machine Triceps Extension guide](https://www.acefitness.org/resources/everyone/exercise-library/292/tricep-extension/). No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; the output may not be unique, and no exclusivity is claimed.
- **Record:** [`overhead-machine-triceps-extension.json`](../data/exercises/overhead-machine-triceps-extension.json).

## Standing Machine Hip Thrust illustration

- **Asset:** `media/exercises/standing-machine-hip-thrust.webp` (171,068 bytes; SHA-256 `504ede1425fa8057990f7da8aa698502a4d09a19680ef46a3a7dbf93486e4548`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original text-to-image illustration with the approved Atlas exercise-art style as a visual reference. The 1254 × 1254 transparent PNG was inspected, resized to 1024 × 1024 and converted to WebP (`libwebp`, quality 85, alpha retained). Two phases show a standing hip hinge and bilateral hip extension on a guided machine with footrests, a pelvis roller and support handles. The athlete wears opaque shorts covering the pelvis, glutes and groin; glute anatomy is not drawn over the clothing.
- **Prompt summary:** Square two-phase grayscale standing machine hip thrust; adjustable guided frame and pelvic roller; neutral upright finish; opaque shorts with no red anatomy overlay on the covered area; transparent background; no text or logos.
- **Source and rights:** Machine setup and hip-extension path were checked against Panatta's primary [Standing Hip Thrust](https://www.panattasport.com/en/freeweight-one/standing-hip-thrust/) product page and its [manufacturer demonstration](https://www.youtube.com/watch?v=vzwLvI3akIs). No manufacturer artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`standing-machine-hip-thrust.json`](../data/exercises/standing-machine-hip-thrust.json).

## V-Squat shorts-coverage revision

- **Asset:** `media/exercises/v-squat.webp` (196,262 bytes; SHA-256 `8a4692263d9ea4fbb938821c7fb021dc98fa37a58696523ee68ffe2bac33f8cb`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Edited the existing original V-Squat illustration, preserving its two poses, machine, grayscale rendering, transparent background and red thigh emphasis. The 1254 × 1254 transparent PNG output was resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Both poses now use clearly opaque black shorts extending to mid-thigh, covering the glutes, hips and groin; highlights remain below the shorts.
- **Prompt summary:** Preserve the exact two-panel V-Squat illustration and make the shorts unmistakably opaque and longer in both poses; fully cover glutes, pelvis and groin; no red highlighting on or through clothing; transparent background; no text.
- **Source and rights:** This is an edit of Atlas's existing original AI-assisted V-Squat art; no third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`v-squat.json`](../data/exercises/v-squat.json).

## Seated Cable Chest Press illustration

- **Asset:** `media/exercises/seated-cable-chest-press.webp` (208,288 bytes; SHA-256 `a4105e9c93fb2ea74b2d08332d5abea1ca903038e3d5f143f5425d1dcd47ba49`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original text-to-image illustration, using the approved Atlas exercise-art style reference. The 1254 × 1254 transparent PNG was resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 88, alpha retained). Two phases show a seated, back-supported cable press, with chest highlights and opaque shorts covering the hips and groin.
- **Prompt summary:** Square two-phase grayscale seated cable chest press; upright back-supported bench between dual cable stacks, hands at mid-chest and pressed forward; chest highlighted red; opaque shorts; transparent background; no text or logos.
- **Source and rights:** Equipment setup and technique were checked against ACE's [Seated Cable Press exercise guide](https://www.acefitness.org/resources/everyone/exercise-library/165/seated-cable-press/). No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`seated-cable-chest-press.json`](../data/exercises/seated-cable-chest-press.json).

## Smith Machine Bulgarian Split Squat illustration

- **Asset:** `media/exercises/smith-machine-bulgarian-split-squat.webp` (228,162 bytes; SHA-256 `eb64b50adf3db976080660a72e75689bd5e2bd7dfe47acab62f5fb9786cd23f5`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original text-to-image illustration using the approved Atlas style reference. The 1254 × 1254 transparent PNG was resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 88, alpha retained). Two phases show the rear foot on a bench, the bar on the upper back traveling on Smith rails, and front-leg quadriceps highlighted red. Opaque shorts fully cover glutes, hips and groin.
- **Prompt summary:** Square two-phase grayscale Smith Machine Bulgarian Split Squat; upright under a guided bar with rear foot on a bench and stable front foot; front-quadriceps emphasis; opaque shorts; transparent background; safety catches; no text or logos.
- **Source and rights:** A peer-reviewed study directly tested the Bulgarian split squat with a Smith machine and free weights ([Li et al.](https://doi.org/10.7717/peerj.15863)); setup and equipment details were checked against Life Fitness's [Smith Machine](https://www.lifefitness.com/en-us/catalog/strength-training/benches/life-fitness-smith-machine) product page. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`smith-machine-bulgarian-split-squat.json`](../data/exercises/smith-machine-bulgarian-split-squat.json).

## Meadows Row illustration

- **Asset:** `media/exercises/meadows-row.webp` (124,550 bytes; SHA-256 `539263578a64fc317667060995a069df6151ce516270417d819ad11fc7051ff7`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original text-to-image illustration with the approved Atlas exercise-art style as a visual reference. The 1254 × 1254 transparent PNG was inspected, resized to 1024 × 1024 and converted to WebP (`libwebp`, quality 85, alpha retained). Two phases show the side-on split stance and one-arm landmine row. The athlete wears opaque shorts covering the pelvis, glutes and groin; lats are highlighted red.
- **Prompt summary:** Square two-phase grayscale Meadows Row; perpendicular stance to a landmine bar, pronated grip on the loaded sleeve, opposite hand on front thigh, elbow rows outward along the bar arc, torso stays still; opaque shorts; transparent background; no text or logos.
- **Source and rights:** John Meadows' first-person [Meadows Row guide](https://archive.t-nation.com/training/tip-master-the-meadows-row/) and the [Strength & Conditioning Journal landmine-row technique column](https://doi.org/10.1519/ssc.0000000000000751) distinguish its setup and movement from a general landmine row. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`meadows-row.json`](../data/exercises/meadows-row.json).

## Plate-Loaded Super Fly illustration

- **Asset:** `media/exercises/plate-loaded-super-fly.webp` (179,228 bytes; SHA-256 `0281be3f28fce768fa84fc78d376e14a6fbf3d045ccbdc1f2a3d78713c77eb12`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 PNG resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 88, alpha retained). The two phases show the arms open and closed on a seated plate-loaded fly machine. The athlete wears opaque shorts covering hips and groin; chest muscles are highlighted red.
- **Prompt summary:** Grayscale, two-phase plate-loaded seated fly with paired lever arms and plates, chest highlights, opaque shorts, transparent background, and no text or logos.
- **Source and rights:** Movement setup, flat-to-decline angle adjustment, and range stop were checked against Life Fitness/Hammer Strength's [Plate-Loaded Super Fly product page](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/super-fly). The adjustable flat-to-decline path distinguishes this plate-loaded machine from Atlas's fixed Pec Deck Fly. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`plate-loaded-super-fly.json`](../data/exercises/plate-loaded-super-fly.json).

## Plate-Loaded Iso-Lateral Row illustration

- **Asset:** `media/exercises/plate-loaded-iso-lateral-row.webp` (172,630 bytes; SHA-256 `11eeeffd60c538bb252a9258b0e12722f0556add5400df37f1dbf25b64bf47ae`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 PNG resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 88, alpha retained). The phases show a chest-supported seated horizontal row with separate plate-loaded arms; lats and upper back are highlighted red. The athlete wears opaque shorts covering hips and groin.
- **Prompt summary:** Grayscale, two-phase plate-loaded iso-lateral row with chest pad, angled seat, independent handles and weight arms; opaque shorts; transparent background; no text or logos.
- **Source and rights:** Movement setup, independent converging/diverging work arms, chest support and grip options were checked against Hammer Strength's [Plate-Loaded Iso-Lateral Row product page](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/plate-loaded-iso-lateral-row). The plate-loaded, independent-arm machine is distinct from Atlas's selectorized Seated Machine Row. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`plate-loaded-iso-lateral-row.json`](../data/exercises/plate-loaded-iso-lateral-row.json).

## Barbell Reverse Curl illustration

- **Asset:** `media/exercises/barbell-reverse-curl.webp` (176,210 bytes; SHA-256 `d7fde6a48370dc25180be6dde5d9462ee259596f9cfb6b646b482bd14ebc47a4`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 PNG resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 88, alpha retained). Two standing phases show a straight bar held palms-down from near the thighs through a controlled curl; forearms are highlighted red. The athlete wears opaque shorts covering hips and groin.
- **Prompt summary:** Grayscale, two-phase standing straight-bar reverse curl with pronated grip, forearm emphasis, opaque shorts, transparent background, and no text or logos.
- **Source and rights:** ACE's [Reverse Bicep Curl guide](https://www.acefitness.org/resources/everyone/exercise-library/310/reverse-bicep-curl/) documents the barbell, palms-down grip, elbows close to the body, and controlled curl. The Atlas cues were written independently in English and Turkish. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`barbell-reverse-curl.json`](../data/exercises/barbell-reverse-curl.json).

## Plate-Loaded Super Squat Press illustration correction

- **Asset:** `media/exercises/plate-loaded-super-squat-press.webp` (181,954 bytes; SHA-256 `00c44d5ef2d9ea65ac23b35503cb4d6f966c85b9c41966e8d0f120b6e924f51f`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** After Yağız asked for clearer coverage, edited the original two-pose illustration, preserving the machine, poses, muscle highlights, grayscale style, and transparent background. Replaced the shorts in both poses with a looser matte opaque black pair; the fabric fully covers the buttocks and groin without anatomical contours. The 1254 × 1254 RGBA PNG was resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Highlighted quadriceps remain visible below the hems.
- **Source and rights:** This is an edit of Atlas's existing original AI-assisted illustration; no third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`plate-loaded-super-squat-press.json`](../data/exercises/plate-loaded-super-squat-press.json).

## Plate-Loaded Seated Dip

- **Asset:** `media/exercises/plate-loaded-seated-dip.webp` (207,924 bytes; SHA-256 `fdb27e67a8305a70915d4b5245cf9267be2463fd6d00eb6634ebbd9fc0497de`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1280 × 1280 RGBA PNG resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Two phases show an inward-facing seated dip: elbows bent at the start, then press-down to near extension. The triceps are highlighted red. Loose, opaque black shorts fully cover the hips, buttocks, and groin.
- **Source and rights:** The product setup and muscle focus are based on Life Fitness/Hammer Strength's [Plate Loaded Seated Dip product page](https://shop.lifefitness.com/products/hammer-strength-plate-loaded-seated-dip), which describes the seated support, face-in position, restraint, and triceps as the primary target. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`plate-loaded-seated-dip.json`](../data/exercises/plate-loaded-seated-dip.json).

## Smith Machine Front Squat

- **Asset:** `media/exercises/smith-machine-front-squat.webp` (220,144 bytes; SHA-256 `5ad1dc9ede7968e2e4b60bb18bb5deab223cbf6907cebed5d8043aff4703f8fd`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1280 × 1280 RGBA PNG resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Two phases show a Smith bar resting across the front shoulders with raised elbows; the second phase lowers into a controlled squat. Quadriceps are highlighted red. Loose, opaque black shorts fully cover the hips, buttocks, and groin.
- **Technique and equipment sources:** ACE's [Front Squat to Overhead Press guide](https://www.acefitness.org/resources/everyone/exercise-library/315/front-squat-to-overhead-press/) describes the front-rack position and upright front squat; Life Fitness's [Smith Machine product page](https://www.lifefitness.com/en-us/catalog/strength-training/benches/life-fitness-smith-machine) describes its guided bar path. Atlas cues were written independently. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`smith-machine-front-squat.json`](../data/exercises/smith-machine-front-squat.json).

## Plate-Loaded Iso-Lateral Front Lat Pulldown illustration

- **Asset:** `media/exercises/plate-loaded-iso-lateral-front-lat-pulldown.webp` (233,672 bytes; SHA-256 `ed032f4a6bc0831632fc679893c5ba55d986438b11770a68fbaacd34e0d243b3`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA PNG resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 88, alpha retained). Two rear-view phases show the seated athlete extending overhead and pulling independent plate-loaded arms to the upper chest; the lats are highlighted red. Opaque black shorts fully cover hips and groin.
- **Prompt summary:** Grayscale anatomy, two phases, independent plate-loaded underhand front lat pulldown arms, thigh restraint, lats highlighted, opaque shorts, transparent background, no text or logos.
- **Source and rights:** Hammer Strength's [product page](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/plate-loaded-iso-lateral-front-lat-pulldown) describes independent arms, a distinct rotating down/back/out movement arc, and underhand grips; the plate-loaded machine differs from Atlas's wide-grip independent-arm pulldown and fixed-bar cable underhand pulldown. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`plate-loaded-iso-lateral-front-lat-pulldown.json`](../data/exercises/plate-loaded-iso-lateral-front-lat-pulldown.json).

## Smith Machine Decline Bench Press illustration

- **Asset:** `media/exercises/smith-machine-decline-bench-press.webp` (212,738 bytes; SHA-256 `eda39381cc3ec6021244c1b51b5d65c1dba2f4455ac0f62618611dbf54478edc`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA PNG resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 88, alpha retained). Two three-quarter-view phases show a correctly feet-up decline position under the Smith machine; the bar moves between above the lower chest and a controlled lower-chest position. Chest is highlighted red. Opaque black shorts fully cover hips and groin.
- **Prompt summary:** Grayscale anatomy; full Smith rack, guided bar with plates, feet-anchored decline bench; two press phases; lower chest highlighted; fully covering shorts; transparent background; no text or logos. The first generated draft had the bench angle reversed and was discarded; the accepted edit visibly places the athlete's feet higher than the head.
- **Source and rights:** Life Fitness's [Smith Machine product page](https://www.lifefitness.com/en-us/catalog/strength-training/benches/life-fitness-smith-machine) documents the guided bar path and use for pressing. ACE notes that changing a chest press from flat to decline changes the angle and stimulus in its [chest-training article](https://www.acefitness.org/resources/pros/expert-articles/5661/7-techniques-for-promoting-muscle-growth/). No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`smith-machine-decline-bench-press.json`](../data/exercises/smith-machine-decline-bench-press.json).

## Smith Machine Close-Grip Bench Press illustration

- **Asset:** `media/exercises/smith-machine-close-grip-bench-press.webp` (217,876 bytes; SHA-256 `65f0f1c8668c773510f914cc230318961828d505a53e6a5443c43293b90010c5`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original 1254 × 1254 RGBA two-phase illustration in the existing grayscale anatomy style, resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). A shoulder-width grip, tucked elbows, Smith rails and triceps highlights distinguish the movement. Loose opaque black shorts fully cover hips, buttocks and groin.
- **Prompt summary:** Two phases of Smith Machine Close-Grip Bench Press, flat bench, shoulder-width grip (not extreme narrow grip), controlled lower-chest position with elbows near torso, triceps highlighted, loose fully covering shorts, transparent background, no text or logos.
- **Source and rights:** ACE's [Close-Grip Bench Press guide](https://www.acefitness.org/resources/everyone/exercise-library/311/close-grip-bench-press/) documents shoulder-width hand placement and elbows close to the ribs. Life Fitness's [Smith Machine product page](https://www.lifefitness.com/en-us/catalog/strength-training/benches/life-fitness-smith-machine) describes the guided bar path for pressing and squatting. The Atlas record combines this technique with the Smith machine setup; no third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`smith-machine-close-grip-bench-press.json`](../data/exercises/smith-machine-close-grip-bench-press.json).

## Plate-Loaded Iso-Lateral Leg Extension illustration

- **Asset:** `media/exercises/plate-loaded-iso-lateral-leg-extension.webp` (114,734 bytes; SHA-256 `d7f7c096e687afc331554b69f7818cb66865419017a4c744eff59c0561f136fa`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original two-phase grayscale anatomy illustration. The 1774 × 887 RGBA image was centered on a transparent square canvas, resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). The seated machine has two independent plate-loaded arms and quadriceps highlights. Loose opaque black shorts fully cover hips, buttocks, and groin.
- **Prompt summary:** Seated plate-loaded iso-lateral leg extension, independent left/right lever arms and plates, adjustable back pad and thigh belt, bent-knee and near-straight phases, quadriceps highlighted, loose fully covering shorts, transparent background, no text or logos.
- **Source and rights:** Hammer Strength's [Iso-Lateral Leg Extension page](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/iso-lateral-leg-extension) describes the independent leg motion, stabilizing seat belt, and knee-extension path. ACE's [Seated Leg Extension guide](https://www.acefitness.org/resources/everyone/exercise-library/183/seated-leg-extension/) informed the basic machine alignment and controlled extension cues. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`plate-loaded-iso-lateral-leg-extension.json`](../data/exercises/plate-loaded-iso-lateral-leg-extension.json).

## Plate-Loaded Iso-Lateral Leg Curl illustration

- **Asset:** `media/exercises/plate-loaded-iso-lateral-leg-curl.webp` (137,990 bytes; SHA-256 `8fcdd0a0e5fdd6a3b5dc36d47ed7120d76745c7bf6f375dd3f6527ece0d34ef0`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original two-phase grayscale anatomy illustration. The 1536 × 1024 RGBA image was centered on a transparent square canvas, resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). The prone machine has independent plate-loaded arms, an ankle roller, and a raised hip-support contour; hamstrings are highlighted red. Loose opaque black shorts fully cover hips, buttocks, and groin.
- **Prompt summary:** Prone plate-loaded iso-lateral leg curl with separate plate horns, stabilizing handles, bent and extended knee phases, hamstrings highlighted but not glutes, loose fully covering shorts, transparent background, no text or logos.
- **Source and rights:** Hammer Strength's [Iso-Lateral Leg Curl page](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/plate-loaded-iso-lateral-leg-curl) describes the prone position, independent arms, and the difference from its kneeling curl. ACE's [Lying Hamstrings Curl guide](https://www.acefitness.org/resources/everyone/exercise-library/153/lying-hamstrings-curl/) informed knee-pivot alignment, ankle-pad placement, torso stability, and controlled lowering. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`plate-loaded-iso-lateral-leg-curl.json`](../data/exercises/plate-loaded-iso-lateral-leg-curl.json).

## Seated Incline Cable Press illustration

- **Asset:** `media/exercises/seated-incline-cable-press.webp` (218,910 bytes; SHA-256 `d275a43a905ccd7486e69917677b0418a0570c2428e9c80f26e4acdaa7b273ad`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original 1254 × 1254 RGBA two-phase illustration, resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). It shows the supported incline setup and forward/upward cable path. Chest is highlighted red; loose, opaque black shorts fully cover hips and groin.
- **Technique source:** [ACE Seated Incline Cable Press](https://www.acefitness.org/resources/everyone/exercise-library/167/seated-incline-cable-press/) describes back support, handle position, neutral wrists, forward/upward press, and controlled return. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`seated-incline-cable-press.json`](../data/exercises/seated-incline-cable-press.json).

## Dumbbell Front Squat illustration

- **Asset:** `media/exercises/dumbbell-front-squat.webp` (147,002 bytes; SHA-256 `b45305af1e7ce792d1dd1fa39379f7c9399623f7b8b30c86d40e2aedcb9e49b7`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original 1254 × 1254 RGBA two-phase illustration, resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). The athlete holds a dumbbell at each shoulder in both standing and squat phases; quadriceps are highlighted red. Loose opaque shorts cover hips and groin.
- **Technique source:** [NASM Dumbbell Front Squat](https://www.nasm.org/resource-center/exercise-library/dumbbell-front-squat) describes the shoulder-height rack, inward-facing palms, elevated elbows, and upright torso; NASM distinguishes the two-dumbbell position from Goblet Squat. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`dumbbell-front-squat.json`](../data/exercises/dumbbell-front-squat.json).

## Dumbbell Deadlift illustration

- **Asset:** `media/exercises/dumbbell-deadlift.webp` (133,670 bytes; SHA-256 `985d725f766e6246d5507812cf4ab3e9cf361fc7e6b07b37e9f271d3edff3a4f`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original 1254 × 1254 RGBA two-phase illustration, resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Dumbbells start beside the feet; the second phase shows a controlled standing lockout. Glutes and hamstrings are highlighted red; loose opaque shorts cover hips and groin.
- **Technique source:** [CrossFit Dumbbell Deadlift](https://www.crossfit.com/essentials/the-dumbbell-deadlift) describes the dumbbell deadlift setup and adaptable loading. Atlas cues emphasize neutral back position, close dumbbell travel, and coordinated hip/knee extension. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`dumbbell-deadlift.json`](../data/exercises/dumbbell-deadlift.json).

## Seated Decline Cable Press illustration

- **Asset:** `media/exercises/seated-decline-cable-press.webp` (203,648 bytes; SHA-256 `fcc1dd1e635dfdd089308ddeb9870858787da761ccbbc3f59f3e24dfeac72086`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA two-phase illustration resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). The supported athlete holds the cable handles just below the chest, then presses forward and down toward the thighs. Chest is highlighted red; loose opaque black shorts cover hips and groin.
- **Technique source:** [ACE Seated Decline Cable Press](https://www.acefitness.org/resources/everyone/exercise-library/166/seated-decline-cable-press/) describes the back-supported setup, lower-chest start, downward-forward press, and controlled return. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`seated-decline-cable-press.json`](../data/exercises/seated-decline-cable-press.json).

## Forward Lunge illustrations

- **Assets:** `media/exercises/forward-lunge.webp` (134,848 bytes; SHA-256 `fec029f936bc8b64dda6846921486d489be35fae4e67144f8dd85c5c0c50217f`), `media/exercises/dumbbell-forward-lunge.webp` (155,982 bytes; SHA-256 `5b856f8d825d07b79f997919a33088fd348cb8c2f59b44bc67450e02eb8ad7d1`), and `media/exercises/barbell-forward-lunge.webp` (177,878 bytes; SHA-256 `2c63bfd53a35c92b91c30c2a65f6f4554161d9499462e85e71eeb56bacdb942b`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA two-phase illustrations, resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). The phases show standing and forward step-and-return lunge positions, with the barbell or dumbbells where applicable. Quadriceps and glutes are highlighted red. Every athlete wears loose, opaque shorts that fully cover the hips and groin.
- **Technique sources:** [ACE Forward Lunge (bodyweight)](https://www.acefitness.org/resources/everyone/exercise-library/94/forward-lunge/) describes the unweighted step-and-return version; [ACE Weighted Lunges](https://www.acefitness.org/resources/pros/expert-articles/6834/5-moves-for-a-better-butt/) documents dumbbells held at the sides; [ACE Barbell Forward Lunge](https://www.acefitness.org/resources/everyone/exercise-library/8/forward-lunge/) describes the barbell-on-upper-back variation. Cues were written independently in English and Turkish. No third-party artwork was imported. The project dedicates any rights it holds in these original illustrations under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Records:** [`forward-lunge.json`](../data/exercises/forward-lunge.json), [`dumbbell-forward-lunge.json`](../data/exercises/dumbbell-forward-lunge.json), and [`barbell-forward-lunge.json`](../data/exercises/barbell-forward-lunge.json).

## Additional back and leg machine illustrations

- **Assets:** `media/exercises/plate-loaded-iso-lateral-low-row.webp` (181,998 bytes; SHA-256 `6a295cff257ac9f9932164dd1c7426ea6f38ab856f6df979dedbd7a52148f3c2`) and `media/exercises/smith-machine-reverse-lunge.webp` (211,820 bytes; SHA-256 `7c9760483fd3213c287dab6224721e93705c449c58c64e5cdae97652115a14b`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA two-phase illustrations resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained). The Low Row image shows the low-angle independent-arm pull against a chest pad, with the upper back and lats highlighted red. The Smith lunge image shows the loaded standing and reverse-step positions with quadriceps and glutes highlighted. Both athletes wear loose opaque shorts covering the hips and groin.
- **Technique sources:** [Hammer Strength Iso-Lateral Low Row](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/plate-loaded-iso-lateral-low-row) documents the independent arms and low pull path. [ACE Reverse Lunge](https://www.acefitness.org/resources/everyone/exercise-library/319/reverse-lunge/) describes stepping backward under a barbell and returning; [Life Fitness Smith Machine](https://www.lifefitness.com/en-us/catalog/strength-training/benches/life-fitness-smith-machine) documents its fixed guided bar path. The Smith cues combine these documented elements and were written independently in English and Turkish. No third-party artwork was imported. The project dedicates any rights it holds in these original illustrations under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Records:** [`plate-loaded-iso-lateral-low-row.json`](../data/exercises/plate-loaded-iso-lateral-low-row.json) and [`smith-machine-reverse-lunge.json`](../data/exercises/smith-machine-reverse-lunge.json).

## Plate-Loaded Iso-Lateral High Row illustration

- **Asset:** `media/exercises/plate-loaded-iso-lateral-high-row.webp` (272,088 bytes; SHA-256 `e479bbbc044b1c96d29adddd0517edf114e01077cd67528db65a3c07225a0d1e`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA two-phase illustration resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained; alpha extrema 0–255). It shows the high start and pull toward the upper ribs, with upper-back muscles highlighted red. The athlete wears loose opaque shorts covering the hips and groin.
- **Technique source:** [Hammer Strength Iso-Lateral High Row](https://www.lifefitness.com/en-us/catalog/strength-training/plate-loaded/plate-loaded-iso-lateral-high-row) documents independent arms, the fixed overhand grip, adjustable seat/thigh pads, and the high pulling path. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`plate-loaded-iso-lateral-high-row.json`](../data/exercises/plate-loaded-iso-lateral-high-row.json).

## Smith Machine Hip Thrust illustration

- **Asset:** `media/exercises/smith-machine-hip-thrust.webp` (131,090 bytes; SHA-256 `831e817cf6ea5f73b467b7ee037605c69deace91bf0d2d5f097cbbc251932066`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA two-phase illustration resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained; alpha extrema 0–255). It shows the lowered and raised hip-thrust phases with a Smith bar and bench. The athlete wears loose opaque shorts covering the hips and groin; no red anatomy highlights appear under the shorts.
- **Technique sources:** [ACE Hip Thrusts](https://www.acefitness.org/continuing-education/prosource/january-2016/5756/a-workout-to-counteract-the-effects-of-prolonged-sitting/) describes the bench-supported setup and hip extension. [Life Fitness Smith Machine](https://www.lifefitness.com/en-us/catalog/strength-training/benches/life-fitness-smith-machine) documents the guided bar apparatus. Cues were written independently and include re-hooking the bar before exiting. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`smith-machine-hip-thrust.json`](../data/exercises/smith-machine-hip-thrust.json).

## Smith Machine Deadlift illustration

- **Asset:** `media/exercises/smith-machine-deadlift.webp` (249,934 bytes; SHA-256 `f7146fe0ce5a707080d0b86799bdd0d9fa3cc9181a47c2335a3e2581f19c114b`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA two-phase illustration resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained; alpha extrema 0–255). It shows the low-start and standing phases with knee and hip extension on Smith rails. Hamstrings and lower-back erectors are highlighted; loose opaque shorts cover the hips and groin.
- **Technique sources:** [ACE Deadlift](https://www.acefitness.org/resources/everyone/exercise-library/6/deadlift/) documents bar placement near the shins, bent-knee setup, coordinated hip/knee extension, and controlled return. [Life Fitness Smith Machine](https://www.lifefitness.com/en-us/catalog/strength-training/benches/life-fitness-smith-machine) documents the guided bar apparatus. Cues were written independently and include low safety stops and re-hooking the bar. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`smith-machine-deadlift.json`](../data/exercises/smith-machine-deadlift.json).

## Smith Machine Bent-Over Row illustration

- **Asset:** `media/exercises/smith-machine-bent-over-row.webp` (230,870 bytes; SHA-256 `ee0e7b1a8d224b19fe425b901d2bc9b92108943b462cd6135e2896687777e961`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA two-phase illustration resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained; alpha extrema 0–255). It shows the hip-hinged position and bar pull toward the lower ribs; upper back and lats are highlighted red. The athlete wears loose opaque shorts covering hips and groin.
- **Technique sources:** [ACE Bent-Over Row](https://www.acefitness.org/resources/everyone/exercise-library/12/bent-over-row/) documents the overhand grip, hip hinge, soft knees, and row. [Life Fitness Smith Machine](https://www.lifefitness.com/en-us/catalog/strength-training/benches/life-fitness-smith-machine) documents the guided apparatus. Cues were written independently and include re-hooking the bar before changing position. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`smith-machine-bent-over-row.json`](../data/exercises/smith-machine-bent-over-row.json).

## Seated Machine Leg Press illustration

- **Asset:** `media/exercises/seated-machine-leg-press.webp` (163,246 bytes; SHA-256 `26bd45012e2df0641824c272f69dfb720615836fee9c55343569b675bd742de0`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1254 × 1254 RGBA two-phase illustration resized to 1024 × 1024 and converted to WebP with Pillow/libwebp (quality 90, alpha retained; alpha extrema 0–255). It shows the seated start and press phases; quadriceps are highlighted red. Loose opaque shorts cover hips and groin.
- **Technique source:** [Hammer Strength Select Seated Leg Press](https://shop.lifefitness.com/products/hammer-strength-select-seated-leg-press) documents the selectorized seated machine configuration. Cues were written independently. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`seated-machine-leg-press.json`](../data/exercises/seated-machine-leg-press.json).

## Barbell Push Press illustration

- **Asset:** `media/exercises/barbell-push-press.webp` (91,630 bytes; SHA-256 `04925b26943858e0aee0370c9d3fce0e699055df582169e45b831c81094c1faa`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1536 × 1024 RGBA two-pose illustration split into front-rack dip and overhead lockout panels, scaled into a 1024 × 1024 transparent canvas, and converted to WebP with Pillow/libwebp (quality 90, alpha retained; alpha extrema 0–255). Shoulders and triceps are highlighted red. Loose opaque shorts fully cover the hips, buttocks, and groin.
- **Technique source:** [CrossFit Level 1 Training Guide](https://library.crossfit.com/free/pdf/CFJ_English_Level1_TrainingGuide.pdf) describes the shoulder-rack start, dip and drive, overhead lockout, and keeping the legs straight once the bar leaves the shoulders. Cues were written independently. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`barbell-push-press.json`](../data/exercises/barbell-push-press.json).

## Standing Two-Arm Landmine Press illustration

- **Asset:** `media/exercises/standing-landmine-press.webp` (75,432 bytes; SHA-256 `ae22266f930c3c87e305493bd9f6d0fc34abc49bbc1d1ed4691f98135c539a17`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1774 × 887 RGBA two-pose illustration resized to 1024 × 512 and centered on a transparent 1024 × 1024 canvas; converted to WebP with Pillow/libwebp (quality 90, alpha retained; alpha extrema 0–255). It shows the bar sleeve at the upper chest and at the extended diagonal finish. Chest, shoulders, and triceps are highlighted red. Loose opaque shorts cover the hips, buttocks, and groin.
- **Technique source:** [ACE Workout Builder for Landmine Training](https://www.acefitness.org/continuing-education/certified/september-2025/8948/the-ace-workout-builder-for-landmine-training/) includes the standing two-arm press in its beginner landmine circuit. Cues were written independently. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`standing-landmine-press.json`](../data/exercises/standing-landmine-press.json).

## Cable Reverse Curl illustration

- **Asset:** `media/exercises/cable-reverse-curl.webp` (102,112 bytes; SHA-256 `597366dd9354289f6f90ab4d88b3cb348907cfbac66d4634ac49cbf84f5b6467`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1774 × 887 RGBA two-pose illustration resized to 1024 × 512 and centered on a transparent 1024 × 1024 canvas; converted to WebP with Pillow/libwebp (quality 90, alpha retained; alpha extrema 0–255). It shows the straight-bar low-cable start and curl finish. Forearms are highlighted red. Loose opaque shorts cover the hips, buttocks, and groin.
- **Technique source:** [ACE Reverse Bicep Curl](https://www.acefitness.org/resources/everyone/exercise-library/310/reverse-bicep-curl/) documents the palms-down grip, elbows kept close, and controlled lowering for the reverse curl. The record independently adapts those cues to a low pulley. No third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`cable-reverse-curl.json`](../data/exercises/cable-reverse-curl.json).

## Neutral-Grip Lat Pulldown illustration

- **Asset:** `media/exercises/neutral-grip-lat-pulldown.webp` (90,332 bytes; SHA-256 `b8e3166da484cd54bb2b98152e41582ccb9f052b2bb8d0ef89593e3a4df374cb`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1774 × 887 RGBA two-phase illustration resized to 1024 × 512 and centered on a transparent 1024 × 1024 canvas; converted to WebP with Pillow/libwebp (quality 90, alpha retained; alpha extrema 0–255). It shows the close parallel-grip overhead start and upper-chest finish on a cable station. Lats are highlighted red. Loose opaque shorts cover hips, buttocks, and groin.
- **Technique source:** [NASM Lat Pulldown Biomechanics and Grip Guide](https://www.nasm.org/resource-center/blog/training/the-biomechanics-of-the-lat-pulldown-muscles-grip-and-form) identifies neutral grip as a natural pulling path and a comfortable option for mobility restrictions, and documents the lat-focused pull with the elbows driving down. The record adds a close neutral-grip attachment. Cues were written independently; no third-party artwork was imported. The project dedicates any rights it holds in this original illustration under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/) assign output to the user to the extent permitted by applicable law; outputs may not be unique, and no exclusivity is claimed. Generated media is not expert technique approval.
- **Record:** [`neutral-grip-lat-pulldown.json`](../data/exercises/neutral-grip-lat-pulldown.json).


## Seated High Back Cable Row illustration

- **Asset:** `media/exercises/seated-high-back-row.webp` (128,740 bytes; SHA-256 `221be5834a1b2ac621baead28078858811dad86d7261de9bbaf5489531aa33e2`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1774 × 887 PNG fitted to a 1024 × 1024 transparent canvas and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Two seated phases show a wide overhand bar moving from arm extension toward the upper chest with elbows out; upper back is highlighted red. Loose opaque shorts cover hips and groin.
- **Source and rights:** Movement setup adapted from [ACE Seated High Back Row](https://www.acefitness.org/resources/everyone/exercise-library/46/seated-high-back-row/). Original AI-assisted artwork; no third-party artwork imported. Any rights the project holds are dedicated under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms](https://openai.com/policies/terms-of-use/) apply; no exclusivity is claimed.
- **Record:** [`seated-high-back-row.json`](../data/exercises/seated-high-back-row.json).

## Cable Rope Triceps Pushdown illustration

- **Asset:** `media/exercises/cable-rope-triceps-pushdown.webp` (97,882 bytes; SHA-256 `5b034110c5c2eb5f521d9a5cead6344ed0b7bc3ff6f970912af0a09d0c1f36c2`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1536 × 1024 PNG fitted to a 1024 × 1024 transparent canvas and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Two standing phases show a high-cable rope pushdown; hands separate slightly at extension and triceps are highlighted red. Loose opaque shorts cover hips and groin.
- **Source and rights:** Cues adapted from [NASM Cable Triceps Extension Guidance](https://blog.nasm.org/workout-plans/9-best-arm-exercises/). Original AI-assisted artwork; no third-party artwork imported. Any rights the project holds are dedicated under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms](https://openai.com/policies/terms-of-use/) apply; no exclusivity is claimed.
- **Record:** [`cable-rope-triceps-pushdown.json`](../data/exercises/cable-rope-triceps-pushdown.json).


## Assisted Chin-Up illustration

- **Asset:** `media/exercises/assisted-chin-up.webp` (145,634 bytes; SHA-256 `fd6987217e33f5a05a0aff70fcb52f7c698ce0ad1a5fb7706189b8f85840d283`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1536 × 1024 PNG fitted to a 1024 × 1024 transparent canvas and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Two positions show an underhand assisted chin-up on a counterweighted station, with lats and biceps highlighted red. Loose opaque shorts cover hips and groin.
- **Source and rights:** Cues adapted from [ACE Chin-Ups](https://www.acefitness.org/resources/everyone/exercise-library/190/chin-ups/); the machine variant is supported by [Life Fitness Assist Dip Chin](https://www.lifefitness.com/en-us/catalog/strength-training/selectorized/insignia-series-assist-dip-chin). Original AI-assisted artwork; no third-party artwork imported. Any rights the project holds are dedicated under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms](https://openai.com/policies/terms-of-use/) apply; no exclusivity is claimed.
- **Record:** [`assisted-chin-up.json`](../data/exercises/assisted-chin-up.json).


## Kneeling Machine Glute Press illustration

- **Asset:** `media/exercises/kneeling-machine-glute-press.webp` (108,490 bytes; SHA-256 `2511244260fb88c7864824eb5b96b19f3b5250bde7e7f75c53440f3a65947683`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1774 × 887 PNG fitted to a 1024 × 1024 transparent canvas and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Two kneeling, chest-supported phases show the working foot platform pressed back; loose black shorts fully cover the hips and groin, with the target highlight kept below the hem.
- **Source and rights:** Setup adapted from [ACE Glute Press](https://www.acefitness.org/resources/everyone/exercise-library/293/glute-press/). Original AI-assisted artwork; no third-party artwork imported. Any rights the project holds are dedicated under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms](https://openai.com/policies/terms-of-use/) apply; no exclusivity is claimed.
- **Record:** [`kneeling-machine-glute-press.json`](../data/exercises/kneeling-machine-glute-press.json).


## Selectorized Triceps Press illustration

- **Asset:** `media/exercises/selectorized-triceps-press.webp` (154,490 bytes; SHA-256 `473d7fb88b832d08ec89182b913a20c2fccd67a1fe6c7dba21b2682be4b81d08`).
- **Date and creator:** 2026-10-22; Open Exercise Atlas, using the built-in OpenAI image generator. The tool did not expose a model identifier.
- **Method:** Original transparent 1536 × 1024 PNG fitted to a 1024 × 1024 transparent canvas and converted to WebP with Pillow/libwebp (quality 90, alpha retained). Two seated phases show rotating press handles moving down and forward against a selectorized stack. Triceps are highlighted red; loose opaque shorts cover hips and groin.
- **Source and rights:** Equipment configuration adapted from [Life Fitness Insignia Series Triceps Press](https://www.lifefitness.com/en-eu/catalog/strength-training/selectorized/insignia-series-triceps-press); movement cues follow the controlled dip-style press pattern. Original AI-assisted artwork; no third-party artwork imported. Any rights the project holds are dedicated under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). [OpenAI Terms](https://openai.com/policies/terms-of-use/) apply; no exclusivity is claimed.
- **Record:** [`selectorized-triceps-press.json`](../data/exercises/selectorized-triceps-press.json).
