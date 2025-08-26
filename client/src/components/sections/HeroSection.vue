<template>
  <section id="hero" class="hero-section">
    <FadeSlider :slides="slides" :interval="5000" height="600px" />
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import FadeSlider from '../ui/FadeSlider.vue'

import hero1 from '../../assets/hero/implant-1.jpg'
import hero2 from '../../assets/hero/implant-2.jpg'

const { t } = useI18n()

// Dil değiştiğinde otomatik güncellenir
const slides = computed(() => [
  {
    image: hero1,
    alt: t('hero.slide1.alt'),
    title: t('hero.slide1.title'),
    text: t('hero.slide1.text')
  },
  {
    image: hero2,
    alt: t('hero.slide2.alt'),
    title: t('hero.slide2.title'),
    text: t('hero.slide2.text')
  }
])
</script>

<style scoped>
.hero-section { }
</style>
