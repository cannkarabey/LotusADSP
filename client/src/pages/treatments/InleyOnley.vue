<template>
  <section class="treatment-page">
    <!-- Başlık kısmı -->
    <div class="hero">
      <img :src="headerImg" alt="İnley Onley Başlık" class="hero-img" />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img :src="image" alt="İnley Onley" class="treatment-img" />

      <h2 class="subtitle">İnley – Onley Dolgular</h2>
      <p>
        İnley ve onley dolgular, dişlerdeki çürük veya madde kaybının klasik dolgu ile tam 
        tedavi edilemediği ancak kaplama gerektirmediği durumlarda kullanılan özel restorasyonlardır.  
        Laboratuvar ortamında porselen veya kompozit materyalden hazırlanarak dişe yapıştırılır.  
        İnley dolgular dişin küçük bir kısmını kaplarken, onley dolgular daha geniş alanları örter.  
        Bu yöntem sayesinde hem estetik hem de dayanıklı bir restorasyon elde edilir.  
        Doğal diş dokusunu maksimum seviyede koruyan bu uygulama, uzun ömürlü ve güvenilir bir çözümdür.
      </p>
    </div>
  </section>
</template>

<script setup>
import headerImg from '../../assets/inley-onley/başlık.png'
import image from '../../assets/inley-onley/image.png'
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
