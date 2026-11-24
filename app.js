const form = document.getElementById("odev-formu");
const dersInput = document.getElementById("ders");
const baslikInput = document.getElementById("baslik");
const tarihInput = document.getElementById("tarih");
const uyari = document.getElementById("uyari");
const liste = document.getElementById("odev-listesi");
const bosMesaj = document.getElementById("bos-mesaj");

const DEPO_ANAHTARI = "odevler";

function odevleriOku() {
  try {
    const kayit = JSON.parse(localStorage.getItem(DEPO_ANAHTARI));
    return Array.isArray(kayit) ? kayit : [];
  } catch (hata) {
    // Bozuk ya da erişilemeyen kayıt: boş listeyle devam et
    return [];
  }
}

function odevleriKaydet() {
  try {
    localStorage.setItem(DEPO_ANAHTARI, JSON.stringify(odevler));
    return true;
  } catch (hata) {
    return false;
  }
}

let odevler = odevleriOku();

function tarihiBicimle(tarih) {
  // "2026-11-30" -> "30.11.2026" (saat dilimi kaymasını önlemek için elle ayrıştırılır)
  const [yil, ay, gun] = tarih.split("-");
  return `${gun}.${ay}.${yil}`;
}

function uyariGoster(mesaj) {
  uyari.textContent = mesaj;
  uyari.hidden = false;
}

function uyariGizle() {
  uyari.textContent = "";
  uyari.hidden = true;
}

function hatalariTemizle() {
  [dersInput, baslikInput, tarihInput].forEach((alan) => {
    alan.classList.remove("hatali");
    alan.removeAttribute("aria-invalid");
  });
}

function alaniIsaretle(alan) {
  alan.classList.add("hatali");
  alan.setAttribute("aria-invalid", "true");
}

function odevElemaniOlustur(odev) {
  const li = document.createElement("li");
  li.className = "odev";

  const ders = document.createElement("p");
  ders.className = "odev-ders";
  ders.textContent = odev.ders;

  const baslik = document.createElement("p");
  baslik.className = "odev-baslik";
  baslik.textContent = odev.baslik;

  const tarih = document.createElement("p");
  tarih.className = "odev-tarih";
  tarih.textContent = `Teslim: ${tarihiBicimle(odev.tarih)}`;

  li.append(ders, baslik, tarih);
  return li;
}

function tarihayaGoreSirala(kayitlar) {
  // En yakın teslim tarihi başta. Aynı günde olanlar eklenme sırasını korur.
  // "YYYY-AA-GG" biçimi alfabetik olarak da tarih sırasındadır.
  return [...kayitlar].sort((a, b) => a.tarih.localeCompare(b.tarih) || a.id - b.id);
}

function listeyiCiz() {
  liste.replaceChildren(...tarihayaGoreSirala(odevler).map(odevElemaniOlustur));
  bosMesaj.hidden = odevler.length > 0;
}

form.addEventListener("submit", (olay) => {
  olay.preventDefault();

  const ders = dersInput.value.trim();
  const baslik = baslikInput.value.trim();
  const tarih = tarihInput.value;

  hatalariTemizle();

  const eksikler = [];
  if (!ders) {
    eksikler.push({ alan: dersInput, ad: "ders adı" });
  }
  if (!baslik) {
    eksikler.push({ alan: baslikInput, ad: "ödev başlığı" });
  }
  if (!tarih) {
    eksikler.push({ alan: tarihInput, ad: "teslim tarihi" });
  }

  if (eksikler.length > 0) {
    eksikler.forEach((eksik) => alaniIsaretle(eksik.alan));
    uyariGoster(
      `Lütfen şu alanları doldurun: ${eksikler.map((eksik) => eksik.ad).join(", ")}.`
    );
    eksikler[0].alan.focus();
    return;
  }

  uyariGizle();
  odevler.push({ id: Date.now(), ders, baslik, tarih });
  if (!odevleriKaydet()) {
    uyariGoster("Ödev eklendi ama tarayıcı kaydetmeye izin vermedi; sayfa yenilenince kaybolabilir.");
  }
  listeyiCiz();
  form.reset();
  dersInput.focus();
});

listeyiCiz();
