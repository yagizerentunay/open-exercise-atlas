# Open Exercise Atlas — tasarım sistemi

Bu belge Atlas'ın mevcut keşif arayüzünü ve tasarım kararlarını tarif eder. Kaynak kod gerçeğin kaynağıdır: `site/src/main.tsx`, `site/src/style.css`, `data/exercises/` ve `data/translations/`. Renk, tipografi ve yerleşim değerleri `site/src/style.css` başındaki `:root` tokenlarından alınmıştır. 3 Kasım 2026 tarihli Apple ilkeleri konseptine göre yapılan yeniden tasarım bu belgeye işlendi.

## Ürün karakteri

Atlas, egzersiz verisini aramayı, karşılaştırmayı ve incelemeyi kolaylaştıran açık bir kütüphanedir. Görsel kimlik sakin, editoryal ve işlevsel olmalı. Egzersiz adı, ekipman, kaslar, hareket adımları, medya ve inceleme durumu; sloganlardan ve süsten önce gelir. Arayüz bir antrenman takipçisi gibi sahte performans veya kişisel sonuç göstermez.

## Mevcut temel

| Rol | Mevcut değer / uygulama | Kullanım |
| --- | --- | --- |
| Ana metin | `#173029` | Başlık ve gövde metni |
| Koyu yüzey | `#122620` | Marka yazısı, aktif durum metni |
| Sayfa zemini | `#f4f5ef` | Sakin açık arka plan; üst bilgi de bu zeminde |
| Kart yüzeyi | `#fff` | Liste kartları, giriş alanları, medya çerçevesi |
| Vurgu | `#6c8c35`, `#c9ed6b` | Lime yalnız aktif gezinme, görünüm anahtarı, adım numarası ve arama çerçevesi; metin rengi olarak kullanma |
| İkincil metin / çizgi / yumuşak yüzey | `#5c6b62`, `#d8dfd3`, `#e7ebdd` | Açıklama, ayrım, rozet ve görsel zemini |
| Odak | `#173029` 3 px halka | Tüm etkileşimlerde görünür klavye odağı |
| Yazı | Sistem yazı tipi (`-apple-system`, SF Pro, Segoe UI, Roboto) | İndirme gerektirmez, her platformda yerel okunurluk; Türkçe karakterleri destekler |
| Tip ölçeği | 40 px / 600 sayfa başlığı, 28 px / 600 bölüm başlığı, 17 px / 400 gövde, 13 px / 500 meta | Dar ekranda başlıklar `clamp` ile 32 ve 22 px'e iner |
| Yerleşim | `main` en çok `1240px`, yan boşluk `max(5vw, 20px)`; kartlar ≥1181 px 3, ≤1180 px 2, ≤640 px 1 sütun | Masaüstü/tablet/telefon |
| Dokunma | Seçici, arama, gezinme ve görünüm anahtarı en az 40–44 px yüksek | Telefon ve ince işaretçi |

Radius hiyerarşisi: arama, seçici, gezinme ve rozet hap biçimli; kartlar ve medya çerçevesi 14 px; küçük görsel zemini 10 px. Hareket yalnız kart kenar rengi/gölge geçişi ve `prefers-reduced-motion` ile kapanır. Yeni renk, font, gölge, radius veya hareket eklerken kullanım amacını ve mevcut sistemin neden yetmediğini yaz. Tokenlar CSS ile birlikte güncellenir.

## Bilgi hiyerarşisi

**Kütüphane:** sayfa başlığı → arama → filtreler → (isteğe bağlı) kasa göre keşfet → sonuç sayısı ve ızgara/liste anahtarı → hareket kartları. Üst bilgideki "Kasa göre keşfet" kas atlasını açıp odağı oraya taşır. Kartın görünen bilgisi, hızlı seçim için yeterli olmalı: görsel, hareket paterni, ad, kas ve ekipman rozetleri, iki satırlık açıklama (liste görünümünde ve dar ekranda kısalır). Medyası olmayan kartlar marka işaretiyle aynı yerleşimi korur. Görünüm tercihi `view=list` ile URL'de tutulur.

**Egzersiz detayı:** geri dönüş → egzersiz adı ve kısa tanım → temel sınıflandırma ve inceleme durumu → medya ile uygulama adımları → alternatifler. Tanıtım alanı (`.hero`) kaldırıldı; kütüphane doğrudan başlık ve aramayla açılır, hareket içeriği detayın ilk ekranında başlar. Detayda gezinti yolu masaüstünde "Egzersizler › Ad", telefonda "‹ Egzersizler" olarak görünür; medya solda, başlık, rozetler, açıklama ve numaralı adımlar sağda (telefonda alt alta) durur. "Görsel rehber" rozeti yalnız medya varsa görünür; başlangıç/bitiş başlıkları iki kareli medyada gösterilir. İnceleme bekleyen içeriğe doğrulanmış gibi görsel ağırlık veya rozet verme.

**Durumlar:** yükleniyor, hata, boş sonuç, medyasız kayıt ve Türkçe alan için İngilizceye dönüş açıkça anlaşılmalı.

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
