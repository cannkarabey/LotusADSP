<template>
  <section class="treatment-page">
    <!-- Başlık kısmı (arka planda görsel) -->
    <div class="hero">
      <img :src="headerImg" alt="E-Max Kaplama Başlık" class="hero-img" />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img :src="image" alt="E-Max Kaplama" class="treatment-img" />

      <h2 class="subtitle">E-max Kaplama</h2>
      <p>
        Herhangi bir metal altyapı kullanmadan basınç altında sıkışması sağlanan kristal yapılı
        seramik çekirdek üzerine cam seramiğin pişirilmesi ile elde edilen ve bu şekilde dayanıklılığı
        arttırılmış porselendir. Işık geçirgenliğinin çok yüksek olmasından ve metal içeriğinin
        bulunmamasından kaynaklı diş protezlerinde tercih edilen en estetik malzemelerdendir.
        Lamine uygulamalarında da sık sık tercih edilir.
      </p>
    </div>
  </section>
</template>

<script setup>
import headerImg from '../../assets/emax/başlık.png'
import image from '../../assets/emax/image.png'
</script>

<style scoped>
.treatment-page {
  background: #fff;
}

/* Başlık kısmı */
.hero {
  width: 100%;
  height: 280px;
  overflow: hidden;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* İçerik kısmı */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 16px;
}
.treatment-img {
  max-width: 600px;
  width: 100%;
  display: block;
  margin: 0 auto 24px;
  border-radius: 12px;
}
.subtitle {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;
}
p {
  font-size: 16px;
  line-height: 1.6;
  color: #374151;
  text-align: center;
}
</style>
