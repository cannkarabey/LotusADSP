<!-- <template>
  <div>
    <HeroSlider />
    <h2>Anasayfa İçeriği</h2>
  </div>
</template>

<script setup>
import HeroSlider from "../components/HeroSlider.vue";
</script> -->

<template>
  <div>
    <HeroSlider />
    <section class="container" style="padding:24px 0;">
      <h2>Hakkımızda (kısa)</h2>
      <p>Lotus Ağız ve Diş Sağlığı… (kısa tanıtım alanı)</p>
      <router-link class="btn" :to="withLocale('about')">Detay</router-link>
    </section>
  </div>
</template>

<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
function withLocale (path) {
  const locale = route.params.locale || 'tr'
  return `/${locale}/${path}`
}
</script>
