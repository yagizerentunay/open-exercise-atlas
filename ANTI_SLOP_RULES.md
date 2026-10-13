# Open Exercise Atlas — anti-slop kuralları

Atlas arayüzü, veri sunumu ve egzersiz medyası üzerinde çalışan ajanlar için kalite kapısı. [Tasarım sistemi](ATLAS_DESIGN_SYSTEM.md) ve gerçek kaynak dosyalarla birlikte kullanılır. Bu kurallar tek başına egzersiz tekniği veya medya hakkı onayı değildir.

## Zorunlu

1. Değişiklikten önce ilgili `site/src/main.tsx`, `site/src/style.css`, egzersiz JSON'u ve mevcut ekranı incele. Her öneriyi gerçek kullanıcı görevi ve dosyayla ilişkilendir.
2. Bir görünümde önceliği belirle: kütüphanede bulma/filtreleme, detayda hareketi anlama. Büyük tanıtım alanı veya dekorasyon bu işi geciktirmesin.
3. Mevcut renk, tipografi ve bileşen dilini yeniden kullan. Yeni görsel kararın amacı ve etkisi açıklanabilmeli.
4. Gösterilen sayı, kas, ekipman, zorluk, alternatif, medya ve inceleme durumu kanonik veriden gelsin. Tasarım uğruna veri uydurma veya `pending` kaydını onaylı gösterme.
5. Medyalı ve medyasız kartlar aynı katalogun parçaları gibi dursun. Tekil görseli tüm kartlara rastgele üretimle yayma.
6. Egzersiz görsellerini ortak kadraj/ışık/anatomi/ok kurallarına göre değerlendir. Teknik ve hak incelemesi gerektiren noktaları açıkça işaretle; otomatik doğrulama sonucunu uzman onayı diye sunma.
7. Arama, filtreler, URL parametreleri, dil geçişi, veri exportları ve sabit `id` davranışı korunmalı. `dist/` dosyalarını elle düzenleme.
8. Klavye odağı, etiket, kontrast, ekran okuyucu alt metni, dar ekran, uzun Türkçe metin ve hata/boş/yükleniyor durumlarını kontrol et.
9. Sadece belgeler değiştiyse bunu belirt; çalıştırılmamış komutları veya yapılmamış görsel incelemeyi geçmiş gibi raporlama.

## Kaçınılacak kalıplar

- İşlevsiz glow, glassmorphism, rastgele gradyan, sahte 3D kart ve her yerde aynı büyük yuvarlatma.
- Katalog verisi yerine slogan, süslü sayı, sahte istatistik veya motivasyon metni.
- Her egzersize aynı genel iki cümleyi farklı adla sunma; teknik içerik kaynaklı ve harekete özgü olmalı.
- Kaynağı belirsiz stok görsel, tutarsız AI görsel serisi, anatomik olarak şüpheli poz veya yanlış yön oku.
- Renk veya emojiyle tek başına anlam verme; “inceleme bekliyor” bilgisini küçük ve silik metne saklama.
- Boşluğu doldurmak için gereksiz kart veya ikon ekleme; tipografi, aralık ve ayırıcı çizgiyi önce değerlendir.
- Tasarım görevinde veri şeması, ID eşlemesi veya medya lisansı kararlarını sessizce değiştirme.

## Ekran kontrolleri

| Görünüm | Kullanıcı sorusu | Kontrol |
| --- | --- | --- |
| Kütüphane | Aradığım hareketi nasıl bulurum? | Arama/filtreler ve sonuç sayısı açık; kartlar medyalı/medyasız dengeli |
| Detay | Bu hareket nedir, nasıl uygulanır, ne kadar incelenmiş? | Başlık ve içerik erken görünür; adımlar, medya ve durum anlaşılır |
| Türkçe | Hangi alanlar gerçekten çevrilmiş? | Fallback fark edilir; uzun metin ve Türkçe karakterler taşmaz |
| Mobil | Hareketi hızlıca bulup okuyabilir miyim? | 360/390/430 px'de yatay taşma, kesik kontrol veya erişilemez dokunma hedefi yok |

## Her tasarım işi sonunda raporla

- Kullanıcı görevi ve değişen dosyalar.
- Kaldırılan veya kalan en az üç somut şablon/AI-slop riski.
- Masaüstü/mobil, klavye, dil ve durum kontrollerinden hangilerinin gerçekten yapıldığı.
- Çalıştırılan doğrulama komutları ve yapılmayan kontroller.
- Veri, teknik doğruluk veya medya hakları açısından açık kalan kararlar.

## İnceleme kararı

Beş ölçütü **iyi / geliştirilmeli / bloke edici** olarak değerlendir: görev açıklığı, Atlas'a özgülük, veri dürüstlüğü, görsel tutarlılık, erişilebilirlik. Uydurma veri, yanlış teknik temsil, belirsiz medya hakkı veya kullanılamayan temel etkileşim toplam puandan bağımsız bloke edicidir. Kontrol listesi kullanıcı testi ve uzman incelemesinin yerini tutmaz.
