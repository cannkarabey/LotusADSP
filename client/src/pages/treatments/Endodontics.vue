<template>
  <section class="treatment-page">
    <!-- Başlık kısmı -->
    <div class="hero">
      <img :src="headerImg" alt="Kanal Tedavisi Başlık" class="hero-img" />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img :src="image" alt="Kanal Tedavisi" class="treatment-img" />

      <h2 class="subtitle">Kanal Tedavisi (Endodonti)</h2>
      <p>
        Kanal tedavisi, dişin içinde bulunan sinir ve damar dokusunun (pulpa) iltihaplanması 
        veya hasar görmesi durumunda uygulanan bir tedavi yöntemidir. Bu işlemde, iltihaplı veya 
        hasarlı pulpa dokusu çıkarılır, dişin içi temizlenir ve özel dolgu maddeleri ile kapatılır.  
        Kanal tedavisi sayesinde, çekilmesi gereken bir diş ağızda korunmuş olur ve yıllarca sağlıklı 
        bir şekilde işlevini sürdürebilir.  
        Modern cihazlar ve yöntemlerle yapılan kanal tedavisi, hem hızlı hem de ağrısız bir şekilde 
        tamamlanabilmektedir.
      </p>
    </div>
  </section>
</template>

<script setup>
import headerImg from '../../assets/endodontics/başlık.png'
import image from '../../assets/endodontics/image.png'
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
