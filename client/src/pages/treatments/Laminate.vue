<template>
  <section class="treatment-page">
    <!-- Başlık kısmı -->
    <div class="hero">
      <img :src="headerImg" alt="Laminate Başlık" class="hero-img" />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img :src="image" alt="Laminate Yaprak Diş" class="treatment-img" />

      <h2 class="subtitle">Laminate (Yaprak Diş)</h2>
      <p>
        Laminate veneer ya da halk arasında bilinen adıyla yaprak diş kaplama, 
        estetik diş hekimliğinde sıklıkla tercih edilen bir uygulamadır. 
        Bu yöntemde ön dişlerin sadece ön yüzeyine çok ince porselen tabakalar 
        yapıştırılır. Dişlerde minimum aşındırma yapıldığı için doğal diş dokusu 
        korunur. Özellikle dişlerdeki renklenmelerin, küçük çapraşıklıkların, 
        aralıkların ve şekil bozukluklarının giderilmesinde estetik ve hızlı bir çözüm sunar.
      </p>
    </div>
  </section>
</template>

<script setup>
import headerImg from '../../assets/laminate/başlık.png'
import image from '../../assets/laminate/image.png'
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
