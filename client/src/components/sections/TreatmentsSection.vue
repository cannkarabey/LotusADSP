<template>
  <section id="treatments" class="section light">
    <div class="container">
      <h2 class="title">{{ t('treatments.title') }}</h2>
      <p class="lead">{{ t('treatments.lead') }}</p>

      <div class="grid">
        <RouterLink
          v-for="it in items"
          :key="it.key"
          class="card"
          :to="localePath(`/treatments/${t(`treatments.cards.${it.key}.slug`)}`)"
        >
          <img :src="it.icon" :alt="t(`treatments.cards.${it.key}.title`)" />
          <h3>{{ t(`treatments.cards.${it.key}.title`) }}</h3>
          <span class="more">{{ t('treatments.more') }}</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

/* İKONLAR */
import icEmax       from '../../assets/treatments/emax.png'
import icZirkon     from '../../assets/treatments/zirconium.png'
import icLamina     from '../../assets/treatments/laminate.png'
import icImplant    from '../../assets/treatments/implant.png'
import icImmediate  from '../../assets/treatments/immediate.png'
import icBleach     from '../../assets/treatments/bleaching.png'
import icInleyOnley from '../../assets/treatments/inley-onley.png'
import icEndo       from '../../assets/treatments/endodontics.png'
import icOrtho      from '../../assets/treatments/orthodontics.png'
import icPedodonti  from '../../assets/treatments/pedodonti.png'

const { t } = useI18n()
const route = useRoute()
function localePath(path) {
  const loc = route.params.locale
  return loc ? `/${loc}${path}` : path
}

/* Tedavi key’leri */
const items = [
  { key: 'emax',        icon: icEmax },
  { key: 'zirconium',   icon: icZirkon },
  { key: 'laminate',    icon: icLamina },
  { key: 'implant',     icon: icImplant },
  { key: 'immediate',   icon: icImmediate },
  { key: 'bleaching',   icon: icBleach },
  { key: 'inleyOnley',  icon: icInleyOnley },
  { key: 'endodontics', icon: icEndo },
  { key: 'orthodontics',icon: icOrtho },
  { key: 'pedodontics', icon: icPedodonti }
]
</script>

<style scoped>
.section{ padding:72px 0; }
.light{ background:#f6fbfe; }
.container{ max-width:1200px; margin:0 auto; padding:0 16px; }

.title{
  text-align:center; font-size:28px; font-weight:700; color:#1f2937;
  margin-bottom:10px; position:relative;
}
.title::after{
  content:""; display:block; width:44px; height:2px; background:#1f2937;
  margin:12px auto 0; opacity:.8;
}
.lead{ text-align:center; color:#4b5563; margin-bottom:24px; }

.grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
  gap:18px;
}
.card{
  background:#fff; border:1px solid #eef2f7; border-radius:14px;
  padding:22px; text-decoration:none; color:#111827;
  box-shadow: 0 6px 18px rgba(0,0,0,.05);
  transition: transform .15s ease, box-shadow .15s ease;
}
.card:hover{ transform: translateY(-2px); box-shadow:0 12px 28px rgba(0,0,0,.08); }
.card img{ width:120px; height:120px; object-fit:contain; display:block; margin:6px auto 12px; }
.card h3{ text-align:center; font-size:18px; margin:4px 0 6px; }
.more{ display:block; text-align:center; color:#6b7280; font-size:14px; }
</style>
