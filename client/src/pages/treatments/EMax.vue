<template>
  <section class="treatment-page">
    <!-- Başlık kısmı (arka planda görsel) -->
    <div class="hero">
      <img
        :src="headerImg"
        :alt="t('treatments.cards.emax.title')"
        class="hero-img"
      />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img
        :src="image"
        :alt="t('treatments.cards.emax.title')"
        class="treatment-img"
      />

      <h2 class="subtitle">{{ t('treatmentPages.emax.subtitle') }}</h2>
      <p>{{ t('treatmentPages.emax.desc') }}</p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import headerImg from '../../assets/emax/başlık.png'
import image from '../../assets/emax/image.png'

const { t } = useI18n()
</script>

<style scoped>
.treatment-page {
  background: #fff;
}

/* Başlık kısmı */
.hero {
  width: 100%;
  height: 280px;
  overflow: hidden;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* İçerik kısmı */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 16px;
}
.treatment-img {
  max-width: 600px;
  width: 100%;
  display: block;
  margin: 0 auto 24px;
  border-radius: 12px;
}
.subtitle {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;
}
p {
  font-size: 16px;
  line-height: 1.6;
  color: #374151;
  text-align: center;
}
</style>
