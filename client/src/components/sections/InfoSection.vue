<template>
  <section class="info light">
    <div class="container grid">
      <div class="features">
        <div class="feature">
          <img class="icon" :src="icDoctor" alt="" />
          <div class="text">
            <h3>Tecrübeli Hekim Kadrosu</h3>
            <p>Hasta memnuniyeti odaklı ve güler yüzlü ekip</p>
          </div>
        </div>

        <div class="feature">
          <img class="icon" :src="icChecklist" alt="" />
          <div class="text">
            <h3>Detaylı Muayene</h3>
            <p>Ağız ve diş sağlığı için en doğru tedavi planlaması</p>
          </div>
        </div>

        <div class="feature">
          <img class="icon" :src="icMonitor" alt="" />
          <div class="text">
            <h3>Güncel Teknolojik Yaklaşımlar</h3>
            <p>İleri teknoloji dijital görüntüleme sistemleri</p>
          </div>
        </div>
      </div>

      <div class="imageWrap">
        <img :src="sideImage" alt="Röntgen inceleme" />
      </div>
    </div>
  </section>
</template>

<script setup>
import sideImage   from '../../assets/infosection/xray.jpg'
import icDoctor    from '../../assets/infosection/doctor.png'
import icChecklist from '../../assets/infosection/checklist.png'
import icMonitor   from '../../assets/infosection/monitor.png'
</script>

<style scoped>
/* AboutSection ile aynı zemin ve padding */
.info { padding: 80px 0; }
.light { background: #f3f9fe; }

/* >>> AboutSection ile aynı container genişliği ve ortalama <<< */
.container {
  max-width: 1000px;   /* About ile birebir */
  margin: 0 auto;
  padding: 0 20px;
}

/* İki kolon: solda içerik, sağda görsel
   Sağ kolon sabit (~520px), sol kolon kalan alanı alır.
   Böylece sol metinlerin SOL KENARI, üstteki About metinlerinin sol kenarıyla aynı hizaya gelir. */
.grid {
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 56px;
  align-items: center;
}

/* Sol sütun (metinler) */
.features { display: grid; gap: 28px; }
.feature {
  display: grid;
  grid-template-columns: 64px 1fr;
  align-items: center;
  gap: 16px;
}
.icon { width: 56px; height: 56px; object-fit: contain; }
.text h3 { margin: 0 0 6px; font-size: 22px; font-weight: 700; color: #1f2937; }
.text p  { margin: 0; color: #4b5563; font-size: 16px; }

/* Sağ sütun (görsel) */
.imageWrap { width: 100%; }
.imageWrap img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0,0,0,.08);
}

/* Responsive */
@media (max-width: 1100px) {
  .grid { grid-template-columns: 1fr 480px; gap: 40px; }
}
@media (max-width: 980px) {
  .grid { grid-template-columns: 1fr; gap: 32px; }
  .imageWrap { max-width: 640px; margin: 0 auto; }
  .info { padding: 64px 0; }
}
@media (max-width: 600px) {
  .feature { grid-template-columns: 52px 1fr; }
  .icon { width: 48px; height: 48px; }
  .text h3 { font-size: 20px; }
}
</style>
