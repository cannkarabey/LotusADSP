<template>
  <section id="doctors" class="section light">
    <div class="container">
      <h2 class="title">{{ t('doctors.title') }}</h2>

      <div class="slider">
        <button class="nav prev" aria-label="Önceki" @click="prev">‹</button>

        <div class="viewport">
          <div
            class="track"
            :style="{
              transform: `translateX(-${current * (100 / perView)}%)`,
              transition: trackTransition,
              '--perView': perView
            }"
            @transitionend="onTransitionEnd"
          >
            <article v-for="(d, i) in looped" :key="i" class="slide">
              <div class="portrait">
                <img :src="d.photo" :alt="t(`doctors.list.${d.key}.name`)" />
              </div>
              <h3 class="name">{{ t(`doctors.list.${d.key}.name`) }}</h3>
              <!-- Eğer rol göstermek istersen -->
              <!-- <p class="role muted">{{ t(`doctors.list.${d.key}.title`) }}</p> -->
            </article>
          </div>
        </div>

        <button class="nav next" aria-label="Sonraki" @click="next">›</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

import drOmer    from '../../assets/doctors/omer-faruk-karabey.png'
import drMenekse from '../../assets/doctors/menekse-nur-kurnaz.png'
import drBuse    from '../../assets/doctors/buse-nur-toplu.png'
import drZeynep  from '../../assets/doctors/zeynep-nefise-mertoglu.png'
import drEmel    from '../../assets/doctors/emel-gulin-yesilbag.png'

const { t } = useI18n()

// her doktor için bir "key"
const base = [
  { key: 'buse',    photo: drBuse },
  { key: 'zeynep',  photo: drZeynep },
  { key: 'emel',    photo: drEmel },
  { key: 'omer',    photo: drOmer },
  { key: 'menekse', photo: drMenekse }
]

const looped = computed(() => [...base, ...base, ...base])

const vw = ref(typeof window !== 'undefined' ? window.innerWidth : 1440)
const onResize = () => (vw.value = window.innerWidth)
onMounted(() => window.addEventListener('resize', onResize))
onBeforeUnmount(() => window.removeEventListener('resize', onResize))

const perView = computed(() => {
  if (vw.value >= 1280) return 4
  if (vw.value >= 768)  return 2
  return 1
})

const current = ref(base.length)
const trackTransition = ref('transform .45s ease')
const next = () => { current.value += 1 }
const prev = () => { current.value -= 1 }

async function snap(offset){
  trackTransition.value = 'none'
  current.value += offset
  await nextTick()
  requestAnimationFrame(() => { trackTransition.value = 'transform .45s ease' })
}
function onTransitionEnd(){
  const band = base.length
  if (current.value >= band * 2) snap(-band)
  else if (current.value < band) snap(band)
}
</script>

<style scoped>
.section { padding: 72px 0; }
.light { background:#ffffff; }
.container { max-width:1200px; margin:0 auto; padding:0 16px; }

.title {
  text-align:center;
  font-size:32px;
  font-weight:700;
  color:#1f2937;
  margin-bottom:32px;
  position:relative;
}
.title::after {
  content:"";
  display:block;
  width:44px;height:2px;background:#1f2937;
  margin:12px auto 0;opacity:.8;
}

.slider { position:relative; display:flex; align-items:center; gap:10px; }
.viewport { overflow:hidden; width:100%; }
.track { display:flex; will-change:transform; }

.slide {
  flex:0 0 calc(100% / var(--perView));
  text-align:center;
  padding:0 10px;
}

.portrait {
  width: 260px;
  height: 320px;
  margin: 0 auto 16px;
  border-radius: 50% / 55%;
  overflow: hidden;
  background: #fff;
}
.portrait img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top center;
}

.name { font-size:24px; font-weight:700; color:#111827; margin:0; }
.muted { color:#6b7280; }

.nav {
  border:none; width:36px; height:36px;
  border-radius:50%; background:#fff;
  box-shadow:0 6px 16px rgba(0,0,0,.12);
  cursor:pointer; display:grid; place-items:center;
}
.nav:hover { transform:translateY(-1px); box-shadow:0 10px 18px rgba(0,0,0,.15); }
.prev { order:-1; }

@media (max-width:1279px){
  .portrait{ width:260px;height:260px; }
  .name{ font-size:20px; }
}
@media (max-width:767px){
  .portrait{ width:200px;height:200px; }
  .name{ font-size:18px; }
  .title{ font-size:28px; }
}
</style>
