<template>
  <section id="treatments" class="section light">
    <div class="container">
      <h2 class="title">Tedavilerimiz</h2>
      <p class="lead">
        Kliniğimizde; Cerrahi, Protez, Ortodonti, Periodontoloji, Endodonti ve Restoratif tüm tedavileri;
        <br>
        tecrübeli hekim kadromuz sayesinde sizlere en iyi kalite ve sağlıklı bir şekilde sunmaktayız..
        </br>
      </p>

      <div class="grid">
        <RouterLink
          v-for="t in treatments"
          :key="t.slug"
          class="card"
          :to="localePath(`/treatments/${t.slug}`)"
        >
          <img :src="t.icon" :alt="t.title" />
          <h3>{{ t.title }}</h3>
          <span class="more">Daha Fazla Bilgi…</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

/* İKONLAR (assets/treatments/ klasöründeki png dosyaları) */
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

const route = useRoute()
function localePath(path) {
  const loc = route.params.locale
  return loc ? `/${loc}${path}` : path
}

/* SS’teki sıraya göre 10 tedavi */
const treatments = [
  { slug: 'emax-kaplama',           title: 'E-Max Kaplama',            icon: icEmax },
  { slug: 'zirkonyum-kaplama',      title: 'Zirkonyum Kaplama',        icon: icZirkon },
  { slug: 'laminate-yaprak-dis',    title: 'Laminate (Yaprak Diş)',    icon: icLamina },
  { slug: 'implant-tedavisi',       title: 'Implant Tedavisi',         icon: icImplant },
  { slug: 'immediat-anlik-implant', title: 'Immediat (Anlık) Implant', icon: icImmediate },
  { slug: 'beyazlatma-bleaching',   title: 'Beyazlatma (Bleaching)',   icon: icBleach },
  { slug: 'inley-onley',            title: 'İnley / Onley',            icon: icInleyOnley },
  { slug: 'kanal-tedavisi',         title: 'Kanal Tedavisi',           icon: icEndo },
  { slug: 'ortodontik-tedaviler',   title: 'Ortodontik Tedaviler',     icon: icOrtho },
  { slug: 'cocuk-dis-hekimligi',    title: 'Çocuk Diş Hekimliği',      icon: icPedodonti }
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
