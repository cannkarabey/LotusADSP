<template>
  <div class="topbar">
    <!-- Telefonlar -->
    <a class="item" href="tel:03125777070">📞 0312 577 70 70</a>
    <a class="item" href="tel:03125777003">📞 0312 577 70 03</a>

    <!-- Adres -->
    <a
      class="item addr-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.google.com/maps/search/?api=1&query=%C5%9Eehit%20Osman%20Avc%C4%B1%20Mah.%20Malazgirt%201071%20Cad.%20No%3A43%2FB%20Etimesgut%20Ankara"
    >
      📍 Şehit Osman Avcı Mah. Malazgirt 1071 Cad. No:43/B Etimesgut / Ankara
    </a>

    <!-- Diller -->
    <button @click="changeLang('tr')" title="Türkçe">🇹🇷</button>
    <button @click="changeLang('en')" title="English">🇬🇧</button>
    <button @click="changeLang('ar')" title="العربية">🇦🇪</button>
    <button @click="changeLang('fr')" title="Français">🇫🇷</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

function changeLang(l) {
  locale.value = l
  router.push(`/${l}${route.hash || ''}`)
}
</script>

<style scoped>
.topbar {
  background: #1c1c1c;
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center; /* ORTALAMA */
  align-items: center;
  padding: 7px 16px;
  flex-wrap: wrap;
  gap: 18px; /* elemanlar arası boşluk */
}

.item {
  color: #f3f4f6;
  text-decoration: none;
  white-space: nowrap;
}
.item:hover { text-decoration: underline; }

button {
  background: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
}
</style>
