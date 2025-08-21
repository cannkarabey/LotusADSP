<template>
  <section id="treatments" class="section">
    <div class="container">
      <h2>Tedavilerimiz</h2>
      <p class="muted">Cerrahi, Protez, Ortodonti, Periodontoloji, Endodonti, Restoratif…</p>

      <div class="cards">
        <article v-for="t in treatments" :key="t.title" class="card">
          <h3>{{ t.title }}</h3>
          <p>Daha fazla bilgi…</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const treatments = [
  { title: 'E-Max Kaplama' }, { title: 'Zirkonyum Kaplama' }, { title: 'Laminat (Yaprak Diş)' },
  { title: 'Implant' }, { title: 'Beyazlatma' }, { title: 'Kanal Tedavisi' },
  { title: 'Ortodonti' }, { title: 'Çocuk Diş Hekimliği' }
]
</script>

<style scoped>
.section{ padding:64px 0; }
.container{ max-width:1200px; margin:0 auto; padding:0 16px; }
h2{ margin:0 0 12px; font-size:32px; }
.muted{ color:#6b7280; }
.cards{ display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-top:16px; }
.card{ background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:16px; }
</style>
