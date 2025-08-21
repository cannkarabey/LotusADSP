<template>
  <div class="app-layout" :dir="dir" :lang="currentLocale">
    <Navbar />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)
const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
</script>

<style>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ekranın tamamını kapsa */
}

.content {
  flex: 1; /* boşluk bırak, footer alta iter */
}
</style>
