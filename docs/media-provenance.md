# Media provenance

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
