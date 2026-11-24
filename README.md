# Ödev Takipçi

Farklı derslerdeki ödev teslim tarihlerini tek bir yerde takip etmeye yarayan basit bir web uygulaması.

## Hangi problemi çözüyor?

Öğrenciler her dersin ödevini farklı bir yerden öğreniyor ve teslim tarihlerini kaçırabiliyor. Tüm ödevleri ve kalan süreleri tek ekranda gösteren, kurulum gerektirmeyen basit bir araç yok.

## Kimin için?

Aynı dönemde birden fazla ders alan üniversite öğrencileri için. Hesap açmadan, tarayıcıda açıp hemen kullanmak isteyenlere yönelik.

## Proje Panosu

İşlerin takibi GitHub Projects panosunda yapılıyor: [Ödev Takipçi Panosu](https://github.com/users/summitman001/projects/1)

## Çalıştırma

Kurulum gerekmez. Depoyu klonlayıp `index.html` dosyasını tarayıcıda açmanız yeterli:

```bash
git clone https://github.com/summitman001/odev-takipci.git
cd odev-takipci
```

Ardından `index.html` dosyasına çift tıklayın ya da tarayıcınıza sürükleyin.

Veriler tarayıcının localStorage'ında tutulur; sunucu ya da veritabanı yoktur.

## Özellikler ve Nasıl Denenir

### Ödev ekleme ve listeleme

Ders adı, ödev başlığı ve teslim tarihini girerek ödev ekleyebilir, eklenen ödevleri listede görebilirsiniz. Ödevler tarayıcının localStorage'ında saklanır, sayfayı yenileseniz de kaybolmaz.

**Nasıl denenir?**

1. `index.html` dosyasını tarayıcıda açın.
2. "Ders adı", "Ödev başlığı" ve "Teslim tarihi" alanlarını doldurup **Ekle**'ye basın. Ödev "Ödevlerim" bölümünde görünür ve form temizlenir.
3. Alanlardan birini ya da hepsini boş bırakıp **Ekle**'ye basın. Ödev eklenmez, eksik alanları belirten bir uyarı formun içinde görünür.
4. Birkaç ödev daha ekleyin, sonra sayfayı yenileyin (F5). Ödevler listede durmaya devam eder.

### Teslim tarihine göre sıralama ve kalan gün

Ödevler en yakın teslim tarihinden başlayarak sıralanır. Her ödevin altında kalan süre yazar: "X gün kaldı", "Bugün teslim" ya da "X gün gecikti". Tarihi geçmiş ödevler kırmızı, teslimine 3 gün veya daha az kalanlar (bugün teslim dahil) turuncu görünür. Gün hesabı yerel gece yarısına göre yapılır, günün saati sonucu değiştirmez.

**Nasıl denenir?**

1. `index.html` dosyasını tarayıcıda açın.
2. Bugünün tarihine göre şu örnek ödevleri, bilerek karışık sırayla ekleyin:
   - Geçmiş: 5 gün önce, 1 gün önce
   - Bugün: bugünün tarihi
   - Yakın gelecek: yarın, 3 gün sonra
   - Uzak gelecek: 4 gün sonra, 10 gün sonra
3. Liste, eklediğiniz sıraya bakılmaksızın en eski tarihten en yeni tarihe doğru dizilir.
4. Kalan süre yazıları şöyle olmalı: "5 gün gecikti", "1 gün gecikti", "Bugün teslim", "1 gün kaldı", "3 gün kaldı", "4 gün kaldı", "10 gün kaldı".
5. Renkleri kontrol edin: geçmiş tarihliler kırmızı; bugün, yarın ve 3 gün sonrası turuncu; 4 gün ve sonrası renksiz (varsayılan) görünür.
6. Araya düşen bir tarihle (ör. 2 gün sonra) yeni ödev ekleyin. Liste yeniden sıralanır, ödev doğru yere girer.

Diğer özellikler (tamamlama, silme, filtreleme) geliştiriliyor.
