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
