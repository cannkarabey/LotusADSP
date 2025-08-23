<template>
  <nav class="nav">
    <div class="container nav-inner">
      <!-- LOGO -->
      <a
        :href="localePath('/#hero')"
        class="logo"
        aria-label="Go to top"
        @click.prevent="goTo('#hero')"
      >
        <img :src="logoUrl" alt="Lotus Dental Clinic Logo" />
      </a>

      <!-- MENÜ -->
      <div class="nav-links">
        <a
          :href="localePath('/#hero')"
          :class="{ active: isActive('#hero') }"
          @click.prevent="goTo('#hero')"
        >{{ t('nav.home') }}</a>

        <a
          :href="localePath('/#about')"
          :class="{ active: isActive('#about') }"
          @click.prevent="goTo('#about')"
        >{{ t('nav.about') }}</a>

        <a
          :href="localePath('/#treatments')"
          :class="{ active: isActive('#treatments') }"
          @click.prevent="goTo('#treatments')"
        >{{ t('nav.treatments') }}</a>

        <a
          :href="localePath('/#doctors')"
          :class="{ active: isActive('#doctors') }"
          @click.prevent="goTo('#doctors')"
        >{{ t('nav.doctors') }}</a>

        <a
          :href="localePath('/#info')"
          :class="{ active: isActive('#info') }"
          @click.prevent="goTo('#info')"
        >{{ t('nav.contact') }}</a>

        <LangSwitcher />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import logoUrl from '../assets/logo.png'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

// Geçerli locale
const loc = computed(() => route.params.locale || 'tr')

// /:locale + hash üretir
function localePath(pathWithHash) {
  return `/${loc.value}${pathWithHash}`
}

// Navbar linkine tıklayınca ana sayfaya gidip ilgili bölüme iner
// Navbar.vue içinde
async function goTo(hash) {
  const OFFSET = 140; // Topbar + navbar toplam yüksekliği (px) -> ihtiyaca göre ayarla

  // önce ana sayfaya git (locale korunuyor)
  await router.push({ path: `/${loc.value}/`, hash });

  // sonra el ile, offset'li scroll yap
  requestAnimationFrame(() => {
    const el = document.querySelector(hash);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// Aktif link kontrolü (yalnızca ana sayfadayken hash'e göre aktif yap)
function isActive(hash) {
  // Ana sayfadaysak hash'e göre kontrol; hash yoksa '#hero' varsay
  if (route.path === `/${loc.value}`) {
    const current = route.hash || '#hero'
    return current === hash
  }
  return false
}
</script>

<style scoped>
.logo img {
  height: 100px;
  width: auto;
  display: block;
  object-fit: contain;
  cursor: pointer;
}

/* MENÜ */
.nav-links {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-links a {
  padding: 10px 8px;
  text-decoration: none;
  color: #5f5f5f;
  font-weight: 500;
}
.nav-links a:hover,
.nav-links a.active {
  color: #d4af37;
}
</style>
