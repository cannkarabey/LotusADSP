<template>
  <section id="about" class="section light">
    <div class="container">
      <h2>Hakkımızda</h2>
      <p class="lead">Lotus, tecrübeli hekim kadrosu ve teknoloji destekli tedaviler sunar.</p>

      <div class="features">
        <article>
          <h3>Tecrübeli Hekim Kadrosu</h3>
          <p>Hasta memnuniyeti odaklı ve güler yüzlü ekip.</p>
        </article>
        <article>
          <h3>Detaylı Muayene</h3>
          <p>Doğru tedavi planı için kapsamlı değerlendirme.</p>
        </article>
        <article>
          <h3>Güncel Teknolojiler</h3>
          <p>Dijital görüntüleme ve hızlı ölçü sistemleri.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section { padding:64px 0; }
.light{ background:#f6fbfe; }
.container{ max-width:1200px; margin:0 auto; padding:0 16px; }
h2{ margin:0 0 12px; font-size:32px; }
.lead{ font-size:18px; color:#374151; }
.features{ display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-top:20px; }
.features article{ background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:16px; }
</style>
