<template>
  <section id="technology" class="tech">
    <div class="container">
      <!-- ÜST BAŞLIK -->
      <h2 class="title">{{ t('technology.title') }}</h2>

      <!-- İÇERİK GRID -->
      <div class="grid">
        <!-- Sol metin -->
        <div class="left">
          <p>{{ t('technology.top') }}</p>
        </div>

        <!-- Sağ görsel -->
        <div class="imageWrap">
          <img :src="deviceImg" :alt="t('technology.alt')" />
        </div>

        <!-- Alt metin -->
        <div class="bottom">
          <p>{{ t('technology.bottom') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import deviceImg from '../../assets/technology/device.png'

const { t } = useI18n()
</script>

<style scoped>
.tech { padding: 80px 0; background: #ffffff; }

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
  margin: 0 0 28px;
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

.grid {
  display: grid;
  grid-template-columns: 1fr 520px;
  grid-template-areas:
    "left image"
    "bottom image";
  gap: 32px 56px;
  align-items: center;
}

.left { grid-area: left; }
.left p {
  margin: 0;
  font-size: 16px;
  line-height: 1.65;
  color: #374151;
}

.bottom { grid-area: bottom; }
.bottom p {
  margin: 0;
  font-size: 16px;
  line-height: 1.65;
  color: #374151;
  text-align: left;
}

.imageWrap { grid-area: image; }
.imageWrap img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0;
  box-shadow: none;
}

@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "image"
      "bottom";
    gap: 20px;
  }
  .imageWrap { max-width: 640px; margin: 0 auto; }
  .bottom p { text-align: left; }
  .tech { padding: 64px 0; }
}
</style>
