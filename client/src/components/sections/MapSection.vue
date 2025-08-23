<template>
  <section id="map" class="map-section">
    <div class="container">
      <h2 class="title">Konumumuz</h2>

      <div class="map-wrap">
        <!-- Etkileşimli Google Maps -->
        <iframe
          class="map-frame"
          :src="embedSrc"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Lotus Ağız ve Diş Sağlığı Polikliniği harita"
        ></iframe>
      </div>

      <!-- Haritayı Google Maps'te aç butonu -->
      <div class="actions">
        <a :href="mapsLink" target="_blank" rel="noopener" class="btn">
          Google Maps’te Aç
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Adres (başlıca metinde kullandığın)
const address = 'Şehit Osman Avcı Mah. Malazgirt 1071 Cad. No:43/B Etimesgut/ANKARA'

// Embed: output=embed ile API anahtarı gerekmez, etkileşimli pan/zoom çalışır
const embedSrc =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(address) +
  '&output=embed'

// Yeni sekmede açılacak normal harita linki
const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)
</script>

<style scoped>
.map-section {
  padding: 80px 0;
  background: #fff; /* sayfayla bütün */
}

/* Tüm section’larda kullandığımız hizalama */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Başlık */
.title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 24px;
  position: relative;
}
.title::after {
  content: "";
  display: block;
  width: 44px;
  height: 2px;
  background: #1f2937;
  margin: 12px auto 0;
  opacity: .8;
}

/* 16:9 oranlı responsive harita kutusu */
.map-wrap {
  position: relative;
  width: 100%;
  /* 16:9 oran */
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 8px;     /* kenarlar hoş dursun diye */
  /* gölge istemezsen bu satırı bırakma, istersen aç */
  /* box-shadow: 0 8px 24px rgba(0,0,0,.06); */
}
.map-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Alt buton */
.actions {
  text-align: center;
  margin-top: 16px;
}
.btn {
  display: inline-block;
  background: #d4af37;
  color: #fff;
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
}
.btn:hover { opacity: .9; }

@media (max-width: 980px) {
  .map-section { padding: 64px 0; }
}
</style>
