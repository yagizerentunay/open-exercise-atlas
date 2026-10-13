# Kopyalanabilir tasarım istemi — Open Exercise Atlas

Aşağıdaki bölümü Codex veya Claude'a bir **tasarım incelemesi** görevi olarak ver. Uygulama istenirse hedef görünüm ve kapsam ayrıca belirtilir.

---

Open Exercise Atlas deposunda ürün tasarımcısı ve frontend mühendisi olarak çalış. Amaç, açık egzersiz kütüphanesinin özgül ve güvenilir görünmesini sağlamak; arama, teknik içerik ve inceleme durumunu süsten önce göstermektir.

Önce `ATLAS_DESIGN_SYSTEM.md` ve `ANTI_SLOP_RULES.md` belgelerini oku. Bunları `site/src/main.tsx`, `site/src/style.css`, ilgili `data/exercises/` kayıtları, `data/translations/` ve canlı/yerel görünümle karşılaştır. Belgede yazan mevcut durum kodla çelişiyorsa kodu ve güncel veriyi esas al; farkı raporla.

Mimari: React + TypeScript + Vite statik keşif arayüzü; kanonik egzersiz verisi `data/exercises/` altında, üretilen exportlar `dist/` altında. URL filtreleri ve dil parametresi, İngilizce fallback, sabit egzersiz `id` değerleri ve medya provenance kaydı var. Uygulama antrenman takipçisi değildir. Teknik inceleme bekleyen kayıtları onaylı göstermemelisin.

**Görev:** Kütüphane, Barbell Bench Press detayı ve bir medyasız egzersiz detayını masaüstü ile 360/390/430 px mobil genişliklerde denetle. Özellikle ortak hero'nun detay içeriğine etkisini, medyalı/medyasız kart dengesini, görsel seri tutarlılığını, talimatların özgüllüğünü, Türkçe fallback'i, inceleme durumu görünürlüğünü ve klavye kullanımını değerlendir.

Her bulgu için şunları ver:

1. Mevcut sorun; ekran ve dosya/bileşen referansı.
2. Kullanıcı görevine veya veri güvenilirliğine etkisi.
3. En küçük uygulanabilir düzeltme; yeniden kullanılacak stil veya bileşen.
4. Olası regresyon ve kabul kontrolü.

Önerileri kullanıcı etkisine göre sırala. Bilinmeyen tekniği, çeviriyi, medya hakkını veya uzman onayını varsayma. Yeni görsel öneriyorsan kadraj, anatomi, START/FINISH ilişkisi, alt metin ve provenance incelemesini ayrı kabul ölçütleri olarak yaz. Görünüş için veri şeması veya `legacyIds` değiştirme.

Bu istem **inceleme** içindir: kodu değiştirmeden uygulanabilir plan sun. Kullanıcı ayrıca uygulama istediğinde yalnız seçilen kapsamı uygula; her değişikliği görsel olarak gözden geçir ve ilgili `npm run validate`, `npm run data:check`, `npm test`, `npm run lint`, `npm run build` komutlarını değişiklik türüne göre çalıştır. Sadece gerçekten çalıştırdığın kontrollerin sonucunu bildir. Sonunda kalan anti-slop risklerini ve teknik/hak incelemesi açık noktaları belirt.

---
