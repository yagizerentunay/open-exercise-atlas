# 351 pending kayıt: anatomi ve görsel tutarlılığı denetimi (20 Ekim 2026)

## Kapsam ve yöntem

`data/exercises/*.json` içindeki 351 kayıt alfabetik olarak üç eşit gruba bölündü. Üç Luna ajanı her kayıtta hareket tarifini, birincil/ikincil kas etiketlerini ve ilgili WebP görselindeki kırmızı vurguyu karşılaştırdı. Her gruptaki 117 görsel tek tek tam çözünürlükte açıldı. Satır bazındaki kanıt ve gerekçe şu raporlarda yer alır: [1–117](anatomy-001-117-2026-10-20.md), [118–234](anatomy-118-234-2026-10-20.md), [235–351](anatomy-235-351-2026-10-20.md).

Bu bir ajan destekli editoryal tutarlılık taramasıdır. `ok`, tarif/etiket/görsel arasında belirgin çelişki bulunmadığı anlamına gelir; anatomi, form, klinik güvenlik veya görsel hakları için uzman onayı değildir. Sayısal kapsam, satırların ve görsellerin incelendiğini gösterir; her anatomik yargının bağımsız uzman tarafından doğrulandığını göstermez.

| Grup | Kayıt | `ok` | `needs-review` | `error` |
| --- | ---: | ---: | ---: | ---: |
| 1–117 | 117 | 110 | 7 | 0 |
| 118–234 | 117 | 111 | 6 | 0 |
| 235–351 | 117 | 112 | 5 | 0 |
| **Toplam** | **351** | **333** | **18** | **0** |

## İşlem ve açık inceleme kuyruğu

`seated-dumbbell-wrist-curl` kaydındaki `biceps` ikincil etiketi kaldırıldı ve altı dağıtım dışa aktarımı yenilendi. Desteklenen bilek fleksiyonu önkol fleksörlerinde gerçekleşir; tarif de ön kolun sabit tutulmasını söylüyor. [ACE: Wrist Curl – Flexion](https://www.acefitness.org/resources/everyone/exercise-library/30/wrist-curl-flexion/). Bu düzeltme, kaydı uzman tarafından `reviewed` yapmaz.

Kalan 17 bayrak uzman/editör kararına açık. `overhead-press` görseli yeniden açılınca göğüs sandığımız kırmızı alanın omuz/arka kol/karın olduğu görüldü; yanlış pozitif bayrak kaldırıldı. `floor-crunch` ve `cable-hip-abduction` alt metinleri de görselde gerçekten görülen kırmızı hareket oklarını anlatacak biçimde düzeltildi; hedef kas vurgusu görsellerde eksik kaldığından bu iki bayrak açıktır. İlgili satırlar, gözlem ve gerekçeyi üç ayrıntılı raporda verir:

| Öncelik | Kayıtlar | Karar ihtiyacı |
| --- | --- | --- |
| Yüksek: görsel hedefi ile etiket ayrışıyor | `band-resisted-march`, `bodyweight-crab-reach`, `bodyweight-lateral-bound`, `bulgarian-split-squat`, `deficit-deadlift`, `flutter-kicks`, `kettlebell-suitcase-deadlift`, `medicine-ball-overhead-slam`, `reverse-lunge-knee-drive`, `worlds-greatest-stretch` | Birincil kas önceliğini ve kırmızı görsel alanını birlikte kararlaştır; gerektiğinde görseli yeniden üret. |
| Yüksek: görsel/alt metin kapsamı | `cable-hip-abduction`, `dumbbell-shoulder-press`, `floor-crunch` | Hedef kas vurgusu eksik ya da görselde fazladan alan kırmızı. Görseli ve iki dilde alt metni eşleştir. |
| Orta: çok bileşenli hareketin kas önceliği | `bird-dog`, `kettlebell-swing`, `two-dumbbell-hang-clean` | Primer/sekonder sırasını hareketin gerçek eklem eylemiyle ve görselle birlikte yeniden belirle. |
| Orta: taksonomi | `tibialis-raise` | Ön kaval/tibialis anterior için `calves` etiketinin kapsamını veya yeni kas kodunu ürün genelinde kararlaştır. |

Kettlebell swing için [ACE](https://www.acefitness.org/continuing-education/certified/january-2025/8788/the-ace-do-it-better-series-the-two-handed-kettlebell-swing/) gluteus maximus, hamstringler ve adductor magnus'u hareket ettirici olarak ele alır. [ACE overhead slam](https://www.acefitness.org/resources/everyone/exercise-library/182/overhead-slams/) hareketi bütünleşik olarak sınıflar; [NSCA hang clean](https://www.nsca.com/education/articles/kinetic-select/power-clean-from-hang/) kalça, diz ve ayak bileği ekstansiyonunu tarif eder. Bu kaynaklar çok bileşenli hareketlerin tek kas etiketine indirgenmesindeki belirsizliği destekler; görsel düzeltme tasarım kararını tek başına vermez.

## Yayın durumu ve kontrol kapısı

351 kaydın tamamı `reviewStatus: pending` kaldı. Depo kuralı gereği `reviewed` için adlandırılmış yetkin incelemeci ile `source.reviewedBy` ve `source.reviewedAt` gerekir ([CONTRIBUTING.md](../../CONTRIBUTING.md), [veri modeli](../data-model.md)). Bu tarama o koşulu karşılamaz. Anatomi/form ve görsel hak incelemesi ayrıca açık.

`npm run validate`, `npm run data:check`, `npm run lint`, `npm test` (58 test) ve `npm run build` başarılı çalıştı.
