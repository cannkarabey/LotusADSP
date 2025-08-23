<template>
  <div class="slider" :style="{ height }">
    <transition name="fade" mode="out-in">
      <div
        v-if="slides[current]"
        :key="current"
        class="slide"
        :style="{ backgroundImage: `url(${slides[current].image})` }"
      >
        <div class="overlay">
          <h1>{{ slides[current].title }}</h1>
          <p>{{ slides[current].text }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  slides: Array,
  interval: { type: Number, default: 5000 },
  height: { type: String, default: '400px' }
})

const current = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % props.slides.length
  }, props.interval)
})

onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.slide {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}
.overlay {
  /* tam siyah kutu yerine gradient */
  background: linear-gradient(to top, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 100%); /* BURASI YAZININ ARKASINA SİYAHLIK VERİYOR*/
  color: #fff;
  padding: 60px;
  width: 100%;
}
.overlay h1 {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;
}
.overlay p {
  font-size: 22px;
  font-weight: 400;
  max-width: 800px;
}
.btn {
  margin-top: 16px;
  background: #d4af37;
  color: #fff;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

