# Bekleyen egzersiz görselleri: 16 hareket için istemler

Atlas'ta kendi görseli olmayan 16 kayıt var. Monk Mode bunları şimdilik hedef kasın referans çizimiyle
gösteriyor. Bu dosya, her biri için mevcut 169 görselle aynı görünümde (tek kare, solda BAŞLANGIÇ, sağda BİTİŞ)
üretim istemlerini toplar. Üretimden sonra yapılacaklar en altta.

Mevcut görsellerin ortak özellikleri (bkz. `media/exercises/dumbbell-fly.webp`): tek kare 1:1 (~1254×1254),
yan yana iki evre, gri tonlu heykelsi anatomi, hedef kaslar kırmızı, ince kırmızı hareket okları, koyu kömür
ekipman, düz beyaz/saydam zemin, hiçbir yazı yok. Aynı sporcu karakteri her görselde kullanılmalı.

## Ortak istem bloğu (her hareketin başına eklenir)

```
Premium digital anatomical exercise illustration, semi-realistic sculpted grayscale human anatomy between a
3D medical reference and a clean technical drawing, not a photograph. One neutral athletic adult male with short
dark hair, bare torso, black athletic shorts and black training shoes; identical character, proportions and
lighting in both phases. Plain white background (transparent if the tool supports it), no scenery, no floor
texture, at most a very soft contact shadow. ONE square 1:1 image that contains TWO phases of the same exercise
side by side: LEFT = start position, RIGHT = finish / key position. Same camera angle, scale, light direction
and equipment size in both phases. Muscle highlighting: primary working muscles in saturated red (#E53935)
with anatomically bounded, fiber-aware shapes; secondary muscles in a lighter muted red; every other muscle
neutral gray. One or two thin curved red arrows per phase show the movement direction and never cover the
highlighted muscles. Dark charcoal equipment. Realistic joints, hands, feet and equipment; safe, controlled
biomechanics; symmetrical implements. Absolutely no text, numbers, captions, START/FINISH labels, logos,
watermark, extra people, duplicated or merged limbs, or floating objects. Subject centered with about 6% margin.
```

Her hareket için aşağıdaki "Hareket istemi" bu bloktan sonra eklenir. Görsel okunaklılık kontrolü: görseli
yaklaşık 160 px genişliğe küçült; iki evre ve kırmızı kaslar hâlâ seçilebilmeli.

---

## 1. Dumbbell Bench Press — `dumbbell-bench-press`
- Monk Mode kimliği: `Dumbbell_Bench_Press` · Birincil: göğüs · İkincil: triseps, omuz
- **Hareket istemi:** Exercise: flat dumbbell bench press. Camera: front three-quarter view from above-left so
  the chest and both upper arms are visible. Equipment: flat padded bench, two hexagonal dumbbells. LEFT: the
  athlete lies on the bench, feet flat on the floor, head, upper back and hips supported, a dumbbell in each
  hand held beside the mid-chest, forearms vertical, elbows about 45–60° from the torso (not flared out to
  90°). RIGHT: both dumbbells pressed above the chest with arms nearly extended, wrists stacked over the
  elbows, dumbbells close together over the sternum. Highlight pectoralis major in saturated red; anterior
  deltoid and triceps brachii in lighter muted red; nothing else. Arrows: downward on the left, upward on the
  right.
- **Kaçın:** dirseklerin 90° açık olması, bileklerin geriye kırılması, dambılların eşit olmaması.
- Alt (en): Grayscale athlete performing a flat dumbbell bench press, chest highlighted red.
- Alt (tr): Düz sehpada dambıl bench press yapan gri tonlu sporcu; göğüs kasları kırmızıyla vurgulanmış.

## 2. Dumbbell Biceps Curl — `dumbbell-biceps-curl`
- Monk Mode kimliği: `Dumbbell_Bicep_Curl` · Birincil: biseps · İkincil: ön kol
- **Hareket istemi:** Exercise: standing dumbbell biceps curl. Camera: straight front view with a slight
  three-quarter turn so both arms and the biceps are visible. LEFT: athlete stands tall, feet hip-width, a
  dumbbell in each hand hanging at the sides with palms facing forward, elbows pinned to the ribs. RIGHT: both
  dumbbells curled up to shoulder height, elbows still at the sides (not moved forward), wrists neutral,
  shoulders relaxed and torso upright with no backward lean. Highlight the biceps brachii (both heads) in
  saturated red; the brachialis and forearm flexors in lighter muted red. Arrows: curved upward arcs along the
  forearms on the right phase, downward on the left.
- **Kaçın:** gövdenin geriye savrulması, dirseklerin öne gelmesi, dambılların yamuk durması.
- Alt (en): Grayscale athlete performing a standing dumbbell biceps curl, biceps highlighted red.
- Alt (tr): Ayakta dambıl biseps curl yapan gri tonlu sporcu; biseps kırmızıyla vurgulanmış.

## 3. Dumbbell Shoulder Press — `dumbbell-shoulder-press`
- Monk Mode kimliği: `atlas:dumbbell-shoulder-press` · Birincil: omuz, triseps
- **Hareket istemi:** Exercise: standing dumbbell shoulder press. Camera: front three-quarter view showing both
  shoulders. Equipment: two dumbbells, no bench (distinguishes it from the seated variant). LEFT: athlete
  stands with feet hip-width, dumbbells held at shoulder height beside the head, palms facing forward, forearms
  vertical, elbows slightly in front of the torso. RIGHT: both dumbbells pressed overhead, arms nearly
  extended, dumbbells slightly inward above the head, ribs down, no lower-back arch. Highlight the deltoids
  (anterior and lateral heads) in saturated red; the triceps in lighter muted red. Arrows: upward on the
  right, downward on the left.
- **Kaçın:** beli aşırı kavislemek, dambılları başın arkasına götürmek, kolların kilitlenip çarpık durması.
- Alt (en): Grayscale athlete performing a standing dumbbell shoulder press, deltoids highlighted red.
- Alt (tr): Ayakta dambıl omuz press yapan gri tonlu sporcu; deltoidler kırmızıyla vurgulanmış.

## 4. Standing Overhead Press — `overhead-press`
- Monk Mode kimliği: `Barbell_Shoulder_Press` · Birincil: omuz, triseps · İkincil: karın
- **Hareket istemi:** Exercise: standing barbell overhead press (strict press). Camera: front three-quarter view.
  Equipment: an Olympic barbell with a few charcoal plates, no rack visible. LEFT: athlete stands with feet
  hip-width, the bar resting on the front of the shoulders and upper chest, hands just outside shoulder width,
  elbows slightly in front of the bar, glutes and abs braced. RIGHT: the bar pressed directly overhead above
  the mid-foot, arms nearly extended, head moved slightly forward through the arms, ribs down, torso upright.
  Highlight the deltoids in saturated red; triceps in lighter muted red; upper abdominals subtly in lighter
  muted red. Arrows: upward on the right phase.
- **Kaçın:** geriye yaslanma, bar yolunun öne düşmesi, asimetrik plakalar.
- Alt (en): Grayscale athlete performing a standing barbell overhead press, shoulders highlighted red.
- Alt (tr): Ayakta halterle baş üstü press yapan gri tonlu sporcu; omuzlar kırmızıyla vurgulanmış.

## 5. Push-Up — `push-up`
- Monk Mode kimliği: `Pushups` · Birincil: göğüs, triseps · İkincil: omuz
- **Hareket istemi:** Exercise: standard push-up. Camera: pure side view, athlete facing left, a very soft contact
  shadow under hands and feet only. LEFT: high plank, arms extended with hands directly under the shoulders,
  body in one straight line from head to heels, abs and glutes tight. RIGHT: lowered position with the chest a
  fist-width above the floor, elbows about 45° back from the torso, body still in a straight line, neck
  neutral. Highlight pectoralis major in saturated red; triceps brachii in the same red but slightly lighter;
  anterior deltoid in lighter muted red. Arrows: downward on the left, upward on the right.
- **Kaçın:** sarkan bel, havaya kalkık kalça, dirseklerin 90° yana açılması, başın düşmesi.
- Alt (en): Grayscale athlete performing a push-up, chest and triceps highlighted red.
- Alt (tr): Şınav çeken gri tonlu sporcu; göğüs ve triseps kırmızıyla vurgulanmış.

## 6. Incline Push-Up — `incline-push-up`
- Monk Mode kimliği: `Incline_Push-Up` · Birincil: göğüs, triseps · İkincil: omuz
- **Hareket istemi:** Exercise: incline push-up with hands on an elevated surface. Camera: pure side view,
  athlete facing left. Equipment: a stable, knee-to-hip-height bench or box with hands on its edge. LEFT: arms
  extended, hands shoulder-width on the bench edge, body in one straight line from head to heels, feet on the
  floor. RIGHT: chest lowered toward the bench edge, elbows about 45° back, body still straight. Highlight
  pectoralis major and triceps in saturated red, anterior deltoid in lighter muted red. Arrows: downward on
  the left, upward on the right.
- **Kaçın:** sallanan yüzey, kalçanın çökmesi, ellerin bench'in kenarından kaymış gibi görünmesi.
- Alt (en): Grayscale athlete performing an incline push-up with hands on a bench, chest highlighted red.
- Alt (tr): Elleri sehpada eğimli şınav çeken gri tonlu sporcu; göğüs kırmızıyla vurgulanmış.

## 7. Bench Dip — `bench-dip`
- Monk Mode kimliği: `Bench_Dips` · Birincil: triseps · İkincil: göğüs, omuz
- **Hareket istemi:** Exercise: bench dip. Camera: pure side view, athlete facing right. Equipment: one flat,
  stable bench. LEFT: athlete's hands on the bench edge behind the hips, fingers pointing forward, legs
  extended forward with heels on the floor, arms extended, hips just off the bench, chest up. RIGHT: elbows
  bent to about 90° pointing straight back, hips lowered close to the bench, shoulders not dropped below the
  elbows, back close to the bench. Highlight triceps brachii in saturated red; chest and anterior deltoid in
  lighter muted red. Arrows: downward on the right phase, upward on the left.
- **Kaçın:** omuzların dirsek seviyesinin altına düşmesi, dirseklerin yana açılması, kalçanın bench'ten
  uzak durması.
- Alt (en): Grayscale athlete performing a bench dip, triceps highlighted red.
- Alt (tr): Sehpada dips yapan gri tonlu sporcu; triseps kırmızıyla vurgulanmış.

## 8. Bodyweight Squat — `bodyweight-squat`
- Monk Mode kimliği: `Bodyweight_Squat` · Birincil: ön bacak, kalça · İkincil: arka bacak
- **Hareket istemi:** Exercise: bodyweight squat. Camera: front three-quarter view (about 35° from the side) so
  knee tracking and depth are visible. LEFT: athlete stands tall with feet about shoulder-width, toes slightly
  out, arms hanging or hands clasped at the chest. RIGHT: squatted to thighs about parallel, hips back and
  down, knees tracking over the toes, heels flat, chest up, arms extended forward for balance. Highlight the
  quadriceps and gluteus maximus in saturated red; hamstrings in lighter muted red. Arrows: downward on the left
  phase, upward on the right.
- **Kaçın:** dizlerin içe çökmesi, topukların kalkması, sırtın yuvarlanması.
- Alt (en): Grayscale athlete performing a bodyweight squat, quadriceps and glutes highlighted red.
- Alt (tr): Vücut ağırlığıyla squat yapan gri tonlu sporcu; ön bacak ve kalça kırmızıyla vurgulanmış.

## 9. Glute Bridge — `glute-bridge`
- Monk Mode kimliği: `Butt_Lift_Bridge` · Birincil: kalça · İkincil: arka bacak
- **Hareket istemi:** Exercise: floor glute bridge. Camera: pure side view, athlete's head to the left, a thin
  exercise mat only. LEFT: lying on the back, knees bent about 90°, feet flat and hip-width apart, arms along
  the sides, hips on the floor. RIGHT: hips lifted so shoulders, hips and knees form one straight line, glutes
  squeezed, ribs down (no lower-back hyperextension), feet still flat. Highlight gluteus maximus in saturated
  red; hamstrings in lighter muted red. Arrows: upward at the hips on the left phase, downward on the right.
- **Kaçın:** belin aşırı kavislenmesi, topukların kalkması, dizlerin içe düşmesi.
- Alt (en): Grayscale athlete performing a glute bridge on a mat, glutes highlighted red.
- Alt (tr): Minderde kalça köprüsü yapan gri tonlu sporcu; kalça kasları kırmızıyla vurgulanmış.

## 10. Forearm Plank — `plank`
- Monk Mode kimliği: `Plank` · Birincil: karın · İkincil: yan karın, kalça
- **Hareket istemi:** Exercise: forearm plank (an isometric hold, so the second phase shows the brace from a
  second angle). Camera: LEFT in pure side view, RIGHT in front three-quarter view of the same hold, same
  athlete and scale. Both: forearms flat on the floor with elbows directly under the shoulders, body in one
  straight line from head to heels, toes on the floor, pelvis neutral, neck neutral. Highlight rectus
  abdominis in saturated red; the obliques and gluteus maximus in lighter muted red. No arrows needed; if one is
  used, a small inward arrow at the abdomen on the right phase.
- **Kaçın:** sarkan bel, havaya kalkan kalça, omuzların kulağa yükselmesi.
- Alt (en): Grayscale athlete holding a forearm plank, abdominal muscles highlighted red.
- Alt (tr): Ön kolları üzerinde plank duran gri tonlu sporcu; karın kasları kırmızıyla vurgulanmış.

## 11. Side Plank — `side-plank`
- Monk Mode kimliği: `Side_Bridge` · Birincil: yan karın · İkincil: karın, omuz
- **Hareket istemi:** Exercise: side plank on the forearm. Camera: front view, athlete's torso facing the
  viewer, a thin mat only. LEFT: lying on one side, forearm on the floor with the elbow directly under the
  shoulder, legs stacked and straight, hips on the floor, top arm resting on the hip. RIGHT: hips lifted so the
  body forms one straight line from head to feet, shoulder stacked over the elbow, top arm raised straight up
  or resting on the hip, hips not rotated. Highlight the obliques (external and internal) in saturated red;
  rectus abdominis and the supporting shoulder in lighter muted red. Arrows: upward at the hips on the left
  phase.
- **Kaçın:** kalçanın öne ya da arkaya dönmesi, omuzun kulağa çıkması, kalçanın sarkması.
- Alt (en): Grayscale athlete holding a side plank on the forearm, obliques highlighted red.
- Alt (tr): Ön kol üzerinde yan plank yapan gri tonlu sporcu; yan karın kasları kırmızıyla vurgulanmış.

## 12. Pull-Up — `pull-up`
- Monk Mode kimliği: `Pullups` · Birincil: sırt (lat), orta sırt · İkincil: biseps
- **Hareket istemi:** Exercise: strict overhand pull-up. Camera: rear three-quarter view so the latissimus
  dorsi and mid-back are visible. Equipment: a fixed horizontal bar (charcoal), only the bar and its mounting
  ends in view. LEFT: dead hang with an overhand grip slightly wider than the shoulders, arms extended,
  shoulders active (away from the ears), legs slightly bent behind the body, no swing. RIGHT: chin above the
  bar, elbows pulled down toward the ribs, chest toward the bar, legs still. Highlight the latissimus dorsi
  in saturated red with the rhomboids and lower trapezius also red; the biceps in lighter muted red. Arrows:
  upward on the left phase, downward on the right.
- **Kaçın:** sallanma, omuzların kulaklara yükselmesi, çenenin uzatılması.
- Alt (en): Grayscale athlete performing a pull-up on a bar, lats and mid-back highlighted red.
- Alt (tr): Barfiks çeken gri tonlu sporcu; sırt ve orta sırt kasları kırmızıyla vurgulanmış.

## 13. Seated Cable Row — `seated-cable-row`
- Monk Mode kimliği: `atlas:seated-cable-row` · Birincil: orta sırt, lat · İkincil: biseps
- **Hareket istemi:** Exercise: seated cable row with a neutral-grip handle. Camera: pure side view, the cable
  machine at the left. Equipment: low pulley station with a foot platform, a seat, a cable and a V-handle.
  LEFT: athlete seated upright, feet on the platform, knees slightly bent, torso tall with a slight forward
  lean, arms extended forward holding the handle at stomach height, cable taut and horizontal. RIGHT: handle
  pulled to the lower ribs, elbows driven back past the torso, shoulder blades pulled together, torso upright
  (no backward lean). Highlight the rhomboids, middle trapezius and latissimus dorsi in saturated red; the
  biceps in lighter muted red. Arrows: backward along the cable on the right phase.
- **Kaçın:** gövdenin geriye savrulması, omuzların kulağa çıkması, kablonun yamuk durması.
- Alt (en): Grayscale athlete performing a seated cable row, mid-back highlighted red.
- Alt (tr): Oturarak kablo kürek çeken gri tonlu sporcu; orta sırt kasları kırmızıyla vurgulanmış.

## 14. Reverse Lunge — `reverse-lunge`
- Monk Mode kimliği: `atlas:reverse-lunge` · Birincil: ön bacak, kalça · İkincil: arka bacak
- **Hareket istemi:** Exercise: bodyweight reverse lunge. Camera: pure side view, athlete facing right. LEFT:
  athlete stands tall with feet together and hands on the hips. RIGHT: the left foot stepped back, both knees
  bent to about 90°, the front shin vertical with the knee over the ankle, the back heel lifted, back knee just
  above the floor, torso upright. Highlight the quadriceps and gluteus maximus of the front leg in saturated
  red; hamstrings in lighter muted red. Arrows: a backward step arrow at the rear foot, a downward arrow on the
  right phase.
- **Kaçın:** ön dizin ayak parmaklarını geçmesi, gövdenin öne yıkılması, arka dizin yere çarpması.
- Alt (en): Grayscale athlete performing a reverse lunge, front-leg quadriceps and glutes highlighted red.
- Alt (tr): Geri adım lunge yapan gri tonlu sporcu; ön bacak ve kalça kasları kırmızıyla vurgulanmış.

## 15. Step-Up — `step-up`
- Monk Mode kimliği: `atlas:step-up` · Birincil: ön bacak, kalça · İkincil: baldır
- **Hareket istemi:** Exercise: bodyweight step-up. Camera: pure side view, athlete facing right. Equipment: one
  stable knee-height box or bench. LEFT: the right foot fully planted on the box, the left foot on the floor
  behind, torso upright, weight over the front foot. RIGHT: standing tall on the box with the right leg
  extended, the left knee lifted to hip height with the hip extended, torso upright, no lean. Highlight the
  quadriceps and gluteus maximus of the working leg in saturated red; the calf in lighter muted red. Arrows:
  upward on the left phase, downward on the right.
- **Kaçın:** ayağın kutudan taşması, itmenin arka bacaktan gelmesi, gövdenin öne eğilmesi.
- Alt (en): Grayscale athlete performing a step-up onto a box, quadriceps and glutes highlighted red.
- Alt (tr): Kutuya step-up yapan gri tonlu sporcu; ön bacak ve kalça kasları kırmızıyla vurgulanmış.

## 16. Kettlebell Deadlift — `kettlebell-deadlift`
- Monk Mode kimliği: `atlas:kettlebell-deadlift` · Birincil: kalça, arka bacak · İkincil: ön bacak
- **Hareket istemi:** Exercise: two-handed kettlebell deadlift. Camera: pure side view, athlete facing left.
  Equipment: one cast-iron kettlebell (charcoal), on the floor between the feet in the first phase. LEFT: hip
  hinge with a flat back, knees slightly bent, feet hip-width, arms straight down gripping the kettlebell
  handle with both hands, head neutral. RIGHT: standing tall with hips extended and glutes squeezed, the
  kettlebell hanging at arm's length in front of the thighs, shoulders relaxed. Highlight gluteus maximus and
  the hamstrings in saturated red; quadriceps in lighter muted red. Arrows: upward on the left phase, downward
  on the right.
- **Kaçın:** yuvarlanmış sırt, aşırı ayağa kalkarken belin geriye kırılması, kettlebell'in vücuttan uzak olması.
- Alt (en): Grayscale athlete performing a kettlebell deadlift, glutes and hamstrings highlighted red.
- Alt (tr): Kettlebell deadlift yapan gri tonlu sporcu; kalça ve arka bacak kasları kırmızıyla vurgulanmış.

---

## Üretimden sonra

1. **Görseli hazırla:** kareyi kırp (1:1, en az 1024 px), saydam ya da düz beyaz zemin; WebP'ye çevir
   (örn. `cwebp -q 82 in.png -o <atlas-id>.webp`) ve boyutu yaklaşık 250 KB altında tut. Dosya adı:
   `media/exercises/<atlas-id>.webp`.
2. **Gözle incele:** kalıbı, el/ayak sayısını, ekipman simetrisini, kasların doğru bölgede olmasını ve
   160 px'te okunabilirliği kontrol et. Hatalıysa yeniden üret; onaylanmamış görseli kayda ekleme.
3. **Kayda ekle:** `data/exercises/<atlas-id>.json` içindeki `media` dizisine:
   ```json
   {
     "path": "media/exercises/<atlas-id>.webp",
     "role": "reference",
     "alt": { "en": "…", "tr": "…" },
     "creator": "Open Exercise Atlas (AI-assisted original illustration)",
     "sourceUrl": "https://github.com/yagizerentunay/open-exercise-atlas/blob/main/media/exercises/<atlas-id>.webp",
     "license": "CC0-1.0",
     "redistributionEvidenceUrl": "https://github.com/yagizerentunay/open-exercise-atlas/blob/main/docs/media-provenance.md"
   }
   ```
   Alt metinleri yukarıdaki satırlardan alınabilir.
4. **Kaynak kaydı:** `docs/media-provenance.md` içine bir bölüm ekle: dosyalar, tarih, kullanılan araç/model
   (bilinmiyorsa "bilinmiyor" yaz), her dosyanın SHA-256 değeri ve hak beyanı (önceki Atlas görselleriyle aynı).
5. **Doğrula ve yayınla:** `npm run validate`, `npm run data:build`, `npm run data:check`, `npm test`,
   `npm run build`; commit'le ve push'la.
6. **Monk Mode'a al:** Monk Mode deposunda `npm run data:atlas:update`, `npm test`, değişen
   `data/atlas.lock.json`, `public/data/exercises.json` ve `public/exercises/*` dosyalarını commit'le.
   Kas çizimi yedek küçük resmi, görseli gelen hareketlerde kendiliğinden kalkar.

Not: Monk Mode'daki `monk-exercise-illustrator` skill'i (`.agents/skills/…`, PR #4) bu akışın `plan`
komutuyla her hareket için manifest üretebilir; bu dosyadaki istemler aynı stil kurallarını izler.
