<template>
  <div class="topbar">
    <div class="row">
      <!-- Telefonlar -->
      <a class="item" href="tel:03125777070" aria-label="0312 577 70 70">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor"
            d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/>
        </svg>
        0312 577 70 70
      </a>

      <a class="item" href="tel:03125777003" aria-label="0312 577 70 03">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor"
            d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/>
        </svg>
        0312 577 70 03
      </a>

      <!-- Adres (Google Maps) -->
      <a
        class="item"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Maps"
        href="https://www.google.com/maps/search/?api=1&query=%C5%9Eehit%20Osman%20Avc%C4%B1%20Mah.%20Malazgirt%201071%20Cad.%20No%3A43%2FB%20Etimesgut%20Ankara"
      >
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor"
            d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
        </svg>
        Şehit Osman Avcı Mah. Malazgirt 1071 Cad. No:43/B Etimesgut/ANKARA
      </a>

      <!-- Diller -->
      <div class="langs">
        <button class="lang" @click="changeLang('tr')" title="Türkçe">
          <img :src="flagTR" alt="TR" />
        </button>
        <button class="lang" @click="changeLang('en')" title="English">
          <img :src="flagEN" alt="EN" />
        </button>
        <button class="lang" @click="changeLang('fr')" title="Français">
          <img :src="flagFR" alt="FR" />
        </button>
        <button class="lang" @click="changeLang('ar')" title="العربية">
          <img :src="flagAE" alt="AR" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

/* Bayrak görselleri */
import flagTR from '../assets/flags/tr.png'
import flagEN from '../assets/flags/gb.png'
import flagFR from '../assets/flags/fr.png'
import flagAE from '../assets/flags/ae.png'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

function changeLang(l) {
  locale.value = l
  const parts = route.path.split('/')
  if (['tr','en','fr','ar'].includes(parts[1])) {
    parts[1] = l
  } else {
    parts.splice(1, 0, l)
  }
  router.push({ path: parts.join('/'), hash: route.hash })
}
</script>

<style scoped>
.topbar {
  background: #1c1c1c;
  color: #fff;
  font-size: 15px;
}
.row {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;     /* tamamı ortalı */
  gap: 22px;
  flex-wrap: wrap;
}

/* Metin + ikon linkleri */
.item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;                 /* ikonlar da beyaz (currentColor) */
  text-decoration: none;
  white-space: nowrap;
  font-weight: 700;
}
.item:hover { text-decoration: underline; }

.icon {
  width: 18px;
  height: 18px;
  display: inline-block;
  color: currentColor;
}

/* Bayraklar (daire içinde) */
.langs { display: inline-flex; gap: 10px; }
.lang {
  width: 35px; height: 35px;
  border-radius: 999px;
  border: 2px solid #1c1c1c;
  background: transparent;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.lang img {
  width: 100%; height: 100%;
  border-radius: 999px;
  object-fit: cover;
}
.lang:hover { border-color: rgba(255,255,255,.45); }
</style>
