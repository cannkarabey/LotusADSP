<template>
  <section class="treatment-page">
    <!-- Başlık kısmı -->
    <div class="hero">
      <img :src="headerImg" alt="Pedodonti Başlık" class="hero-img" />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img :src="image" alt="Pedodonti" class="treatment-img" />

      <h2 class="subtitle">Pedodonti (Çocuk Diş Hekimliği)</h2>
      <p>
        Pedodonti, çocukların süt ve daimi dişlerinin sağlığını korumayı ve tedavi etmeyi amaçlayan diş hekimliği dalıdır.  
        Çocuklarda dişlerin düzenli gelişimi, çürüklerin önlenmesi ve ağız hijyeni alışkanlıklarının kazandırılması için pedodonti büyük önem taşır.  
        Flor uygulamaları, fissür örtücü tedaviler ve koruyucu dolgu yöntemleriyle çocukların dişleri çürüklerden korunur.  
        Ayrıca çocuklarda travmaya bağlı diş yaralanmaları ve erken diş kayıpları da pedodontinin ilgi alanına girer.  
        Pedodonti sayesinde çocuklar hem sağlıklı hem de estetik bir diş yapısına sahip olur.
      </p>
    </div>
  </section>
</template>

<script setup>
import headerImg from '../../assets/pedodontics/başlık.png'
import image from '../../assets/pedodontics/image.png'
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
