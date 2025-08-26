<template>
  <section id="clinic" class="clinic-section">
    <div class="container">
      <h2 class="title">{{ t('clinic.title') }}</h2>

      <!-- Galeri Grid -->
      <div class="gallery">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="gallery-item"
          @click="open(i)"
        >
          <img :src="img" :alt="t('clinic.photoAlt', { n: i+1 })" />
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <transition name="fade">
      <div v-if="isOpen" class="lightbox" @click.self="close">
        <!-- Kapat ve gezinme -->
        <button class="nav prev" @click.stop="prev">‹</button>
        <button class="nav next" @click.stop="next">›</button>
        <button class="close" @click="close">✕</button>

        <!-- Fotoğraf -->
        <img
          class="lightbox-img"
          :src="images[currentIndex]"
          :alt="t('clinic.photoAlt', { n: currentIndex+1 })"
        />
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Görseller
import image1 from '../../assets/clinic/image1.png'
import image2 from '../../assets/clinic/image2.png'
import image3 from '../../assets/clinic/image3.png'
import image4 from '../../assets/clinic/image4.png'
import image5 from '../../assets/clinic/image5.png'
import image6 from '../../assets/clinic/image6.png'
import image7 from '../../assets/clinic/image7.png'
import image8 from '../../assets/clinic/image8.png'
import image9 from '../../assets/clinic/image9.png'
import image10 from '../../assets/clinic/image10.png'
import image11 from '../../assets/clinic/image11.png'
import image12 from '../../assets/clinic/image12.png'

const images = [
  image1, image2, image3,
  image4, image5, image6,
  image7, image8, image9,
  image10, image11, image12
]

const isOpen = ref(false)
const currentIndex = ref(0)

function open(i) {
  currentIndex.value = i
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}
function close() {
  isOpen.value = false
  document.body.style.overflow = ''
}
function next() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}
function prev() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>

<style scoped>
.clinic-section { padding: 80px 0; background: #f6fbfe; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }

/* Başlık */
.title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 32px;
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

/* Grid */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
.gallery-item { cursor: pointer; }
.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform .3s ease;
}
.gallery-item img:hover { transform: scale(1.05); }

/* Lightbox */
.fade-enter-active, .fade-leave-active { transition: opacity .3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.lightbox {
  position: fixed; inset: 0;
  background: rgba(0,0,0,.9);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
}
.lightbox-img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: 10px;
}

/* Kontroller */
.nav, .close {
  position: absolute;
  background: rgba(255,255,255,.15);
  border: none; color: #fff;
  font-size: 36px; cursor: pointer;
  border-radius: 50%; width: 48px; height: 48px;
  display: flex; align-items: center; justify-content: center;
}
.nav:hover, .close:hover { background: rgba(255,255,255,.25); }

.prev { left: 20px; top: 50%; transform: translateY(-50%); }
.next { right: 20px; top: 50%; transform: translateY(-50%); }
.close { top: 20px; right: 20px; font-size: 28px; }
</style>
