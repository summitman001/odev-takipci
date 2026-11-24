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

Diğer özellikler (sıralama, tamamlama, silme, filtreleme) geliştiriliyor.
