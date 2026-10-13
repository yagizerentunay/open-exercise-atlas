# Open Exercise Atlas — tasarım sistemi

Bu belge Atlas'ın mevcut keşif arayüzünü ve tasarım kararlarını tarif eder. Kaynak kod gerçeğin kaynağıdır: `site/src/main.tsx`, `site/src/style.css`, `data/exercises/` ve `data/translations/`. Buradaki renkler mevcut CSS'ten alınmıştır; belge yeni tokenların koda eklendiği anlamına gelmez.

## Ürün karakteri

Atlas, egzersiz verisini aramayı, karşılaştırmayı ve incelemeyi kolaylaştıran açık bir kütüphanedir. Görsel kimlik sakin, editoryal ve işlevsel olmalı. Egzersiz adı, ekipman, kaslar, hareket adımları, medya ve inceleme durumu; sloganlardan ve süsten önce gelir. Arayüz bir antrenman takipçisi gibi sahte performans veya kişisel sonuç göstermez.

## Mevcut temel

| Rol | Mevcut değer / uygulama | Kullanım |
| --- | --- | --- |
| Ana metin | `#173029` | Başlık ve gövde metni |
| Koyu yüzey | `#122620` | Üst ve alt alan |
| Sayfa zemini | `#f4f5ef` | Sakin açık arka plan |
| Kart yüzeyi | `#fff` | Liste kartları ve giriş alanları |
| Vurgu | `#6c8c35`, `#9dbc56`, `#c9ed6b` | Seçici vurgu; uzun metin için kontrastı kontrol et |
| İkincil metin / çizgi | `#5c6b62`, `#d8dfd3` | Açıklama ve ayrım |
| Yazı | Arial, sans-serif | Mevcut UI; yeni font ancak okunabilirlik gerekçesiyle |
| Yerleşim | `main` en çok `1340px`, yan boşluk `5vw`; kartlar 3/2/1 sütun | Masaüstü/tablet/telefon |

Yeni renk, font, gölge, radius veya hareket eklerken kullanım amacını ve mevcut sistemin neden yetmediğini yaz. Kod ileride tokenlaştırılırsa bu tabloyu CSS ile birlikte güncelle.

## Bilgi hiyerarşisi

**Kütüphane:** arama ve filtreler → sonuç sayısı → hareket kartları. Kartın görünen bilgisi, hızlı seçim için yeterli olmalı: ad, hareket paterni, kısa açıklama ve temel kaslar. Medyası olmayan kartlar bozuk veya eksik görünmemeli.

**Egzersiz detayı:** geri dönüş → egzersiz adı ve kısa tanım → temel sınıflandırma ve inceleme durumu → medya ile uygulama adımları → alternatifler. `.hero` yalnız kütüphanede gösterilir; hareket içeriği detayın ilk ekranında başlar. İnceleme bekleyen içeriğe doğrulanmış gibi görsel ağırlık veya rozet verme.

**Durumlar:** yükleniyor, hata, boş sonuç, medyasız kayıt, inceleme bekliyor ve Türkçe alan için İngilizceye dönüş açıkça anlaşılmalı. `reviewStatus` verideki gerçek değerden türemeli; tüm kayıtları aynı sabit metinle anlatma.

## Egzersiz görsel dili

Görsel, hareketi açıklamalı; dekorasyon için üretilmemeli. Bir seri oluşturulmadan önce örnek bir hareket üzerinde şu kurallar sabitlenir:

- Aynı hareket ailesinde tutarlı kamera yönü, kadraj, figür ölçeği, zemin ve ekipman ayrıntısı.
- START/FINISH karelerinde aynı sporcu, ekipman ve açı; hareket farkı kolay karşılaştırılır.
- Kas vurgusu ve yön oku tek anlam taşır. Ok ve etiketleri gerektiğinde üretim sonrası kontrollü katmanda ekle; görüntü modelinin yazı üretimine güvenme.
- Bar yolu, kavrama, eklem açıları, ayak teması, makine kablosu ve ağırlık istifi insan tarafından gözden geçirilir. Medya varlığı teknik onay değildir.
- Kart kırpması hareketi veya ekipmanı kesmez; farklı oranlarda düzeni bozmayan sınırlar kullanılır. Alt metin görünür hareketi iki dilde tarif eder.
- Dosya bazlı üretim, hak ve yeniden dağıtım bilgisi `docs/media-provenance.md` ve ilgili JSON kaydında tutulur. Bağımsız hak incelemesi yapılmadıysa yapılmış gibi yazılmaz.

## Dil ve erişilebilirlik

İngilizce ve Türkçe uzun başlık, filtre ve talimatlarla düzeni kontrol et. Türkçe alan yoksa mevcut İngilizce fallback davranışını saklama; çeviri tamamlanmış izlenimi verme. Etkileşimlerde görünür klavye odağı, anlaşılır etiketler, yeterli kontrast ve telefonda rahat dokunma alanı sağla. Animasyon eklenirse `prefers-reduced-motion` seçimine uy.

## Kaynaklar ve kapsam

- Uygulama: `site/src/main.tsx`, `site/src/style.css`.
- Veri doğruluğu: `data/exercises/`, `schemas/exercise.schema.json`, `docs/data-model.md`.
- Medya hakları: `docs/rights.md`, `docs/media-provenance.md`.
- Kalite kapısı: [ANTI_SLOP_RULES.md](ANTI_SLOP_RULES.md).

Bu belge mevcut uygulamanın tamamını onaylamaz; özellikle görsel seri tutarlılığı ve teknik içerik derinliği iyileştirme alanıdır.
