<template>
  <section class="treatment-page">
    <!-- Başlık kısmı -->
    <div class="hero">
      <img :src="headerImg" alt="Diş Beyazlatma Başlık" class="hero-img" />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img :src="image" alt="Diş Beyazlatma" class="treatment-img" />

      <h2 class="subtitle">Diş Beyazlatma (Bleaching)</h2>
      <p>
        Diş beyazlatma, dişlerde zamanla oluşan renklenmeleri ve sararmaları gidermek için uygulanan 
        estetik bir tedavi yöntemidir. Günlük tüketilen çay, kahve, sigara gibi alışkanlıkların yanı sıra 
        yaşlanma ile dişlerde renk değişimleri meydana gelir. Bleaching yöntemi, bu renklenmeleri gidererek 
        dişlerin daha beyaz ve estetik bir görünüme kavuşmasını sağlar.  
        Klinik ortamında hekim tarafından uygulanan ofis tipi beyazlatma veya kişiye özel plaklarla yapılan 
        ev tipi beyazlatma yöntemleri mevcuttur. Uygulama süresi kısa, sonuçları hızlı ve güvenilir bir 
        işlemdir.
      </p>
    </div>
  </section>
</template>

<script setup>
import headerImg from '../../assets/bleaching/başlık.png'
import image from '../../assets/bleaching/image.png'
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
