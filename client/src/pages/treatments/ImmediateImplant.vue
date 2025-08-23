<template>
  <section class="treatment-page">
    <!-- Başlık kısmı -->
    <div class="hero">
      <img :src="headerImg" alt="Immediate İmplant Başlık" class="hero-img" />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img :src="image" alt="Immediate İmplant" class="treatment-img" />

      <h2 class="subtitle">Anlık (Immediate) İmplant</h2>
      <p>
        Immediate implant tedavisi, çekilen dişin boşluğuna aynı seansta implantın yerleştirilmesi 
        işlemidir. Bu yöntem sayesinde hastalar diş çekiminden hemen sonra implant tedavisine başlamış 
        olur ve daha kısa sürede fonksiyonel ve estetik dişlere kavuşurlar.  
        Kemik yapısı ve diş eti sağlığı uygun olan hastalarda tercih edilir. Geleneksel yönteme göre 
        tedavi süresini ciddi ölçüde kısaltır ve aynı gün geçici protezlerle estetik açıdan tatmin edici 
        sonuçlar elde edilebilir.
      </p>
    </div>
  </section>
</template>

<script setup>
import headerImg from '../../assets/immediate/başlık.png'
import image from '../../assets/immediate/image.png'
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
