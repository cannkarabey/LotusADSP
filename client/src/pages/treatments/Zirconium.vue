<template>
  <section class="treatment-page">
    <!-- Başlık kısmı -->
    <div class="hero">
      <img :src="headerImg" alt="Zirkonyum Kaplama Başlık" class="hero-img" />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img :src="image" alt="Zirkonyum Kaplama" class="treatment-img" />

      <h2 class="subtitle">Zirkonyum Kaplama</h2>
      <p>
        Zirkonyum klasik porselenin köprü ve protez uygulamalarında alt yapı olarak kullanılan 
        bir maddedir. Bu madde gri metal yerine uygulanan beyaz renkli bir altyapı olarak bilinmektedir. 
        Zirkonyum diş kaplama diş hekimliği alanında son senelerin en sık tercih edilen bir uygulamasıdır. 
        Diş kaplama uygulamalarında zirkonyum tercih edilmesinin en önemli nedenlerinden biri estetik açıdan 
        çok etkili sonuçlar doğurmasıdır. Diş beyazlatma uygulamalarıyla işlevsel sonuç alınamayan ileri düzeyde 
        renk değişim olan dişler için zirkonyum diş kaplama uygulanmaktadır.
      </p>
    </div>
  </section>
</template>

<script setup>
import headerImg from '../../assets/zinconium/başlık.png'
import image from '../../assets/zinconium/image.png'
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
