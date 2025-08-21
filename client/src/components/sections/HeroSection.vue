<template>
  <FadeSlider :slides="slides" :interval="5000" height="600px" />
</template>

<script setup>
import FadeSlider from '../ui/FadeSlider.vue'

import hero1 from '../../assets/hero/implant-1.jpg'
import hero2 from '../../assets/hero/implant-2.jpg'

const slides = [
  {
    image: hero1,
    alt: 'Implant Tedavisi görseli',
    title: 'Implant Tedavisi',
    text: 'Dental implantlar sayesinde eksiksiz, sağlıklı ve mükemmel gülüşlere sahip olabilirsiniz.'
  },
  {
    image: hero2,
    alt: 'Immediate implant görseli',
    title: 'Anlık (Immediate) Implant Tedavisi',
    text: 'Kemik durumunuz, anlık (İmmediat) implant tedavisine uygunsa aynı gün içerisinde dişlerinize kavuşabilirsiniz.'
  }
]
</script>
