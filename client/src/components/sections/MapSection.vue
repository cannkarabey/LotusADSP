<template>
  <section id="map" class="map-section">
    <div class="container">
      <h2 class="title">{{ t('map.title') }}</h2>

      <div class="map-wrap">
        <!-- Etkileşimli Google Maps -->
        <iframe
          class="map-frame"
          :src="embedSrc"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          :title="t('map.iframeTitle')"
        ></iframe>
      </div>

      <!-- Haritayı Google Maps'te aç butonu -->
      <div class="actions">
        <a :href="mapsLink" target="_blank" rel="noopener" class="btn">
          {{ t('map.open') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Adres
const address = 'Şehit Osman Avcı Mah. Malazgirt 1071 Cad. No:43/B Etimesgut/ANKARA'

// Embed: API’siz
const embedSrc =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(address) +
  '&output=embed'

// Normal link
const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)
</script>

<style scoped>
.map-section {
  padding: 80px 0;
  background: #fff;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}
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
.map-wrap {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  overflow: hidden;
  border-radius: 8px;
}
.map-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.actions { text-align: center; margin-top: 16px; }
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
