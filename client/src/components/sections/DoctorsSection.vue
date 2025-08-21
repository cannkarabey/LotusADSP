<template>
  <section id="doctors" class="section light">
    <div class="container">
      <h2>Doktorlarımız</h2>
      <div class="cards">
        <article v-for="d in doctors" :key="d.name" class="card doc">
          <img :src="d.photo" :alt="d.name" />
          <h3>{{ d.name }}</h3>
          <p class="muted">{{ d.title }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const doctors = [
  { name: 'Dr. Emel Gülin Yeşilbağ', title: 'Diş Hekimi', photo: 'https://via.placeholder.com/240x240?text=Dr+1' },
  { name: 'Dt. Ömer Faruk Karabey',   title: 'Diş Hekimi', photo: 'https://via.placeholder.com/240x240?text=Dr+2' },
  { name: 'Dt. Menekşe Nur Kurnaz',   title: 'Diş Hekimi', photo: 'https://via.placeholder.com/240x240?text=Dr+3' },
  { name: 'Dt. Buse Nur Toplu',       title: 'Diş Hekimi', photo: 'https://via.placeholder.com/240x240?text=Dr+4' }
]
</script>

<style scoped>
.section{ padding:64px 0; }
.light{ background:#f6fbfe; }
.container{ max-width:1200px; margin:0 auto; padding:0 16px; }
.cards{ display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-top:16px; }
.card{ background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:16px; text-align:center; }
.card img{ width:140px; height:140px; border-radius:999px; object-fit:cover; display:block; margin:0 auto 10px; }
.muted{ color:#6b7280; }
</style>
