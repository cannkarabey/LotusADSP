<template>
  <section class="treatment-page">
    <!-- Başlık kısmı -->
    <div class="hero">
      <img :src="headerImg" alt="Ortodonti Başlık" class="hero-img" />
    </div>

    <!-- İçerik -->
    <div class="container content">
      <img :src="image" alt="Ortodonti" class="treatment-img" />

      <h2 class="subtitle">Ortodonti</h2>
      <p>
        Ortodonti, diş ve çene bozukluklarının teşhis ve tedavisiyle ilgilenen diş hekimliği dalıdır.  
        Dişlerin çapraşık, aralıklı veya yanlış pozisyonda olması estetik kaygıların yanı sıra çiğneme, 
        konuşma ve ağız sağlığını da olumsuz etkiler.  
        Günümüzde metal braketler, şeffaf plaklar (Invisalign) ve estetik braketler gibi birçok farklı 
        tedavi yöntemi uygulanmaktadır. Ortodonti sayesinde hem estetik bir gülüş hem de fonksiyonel bir 
        çene-diş yapısı elde edilir.
      </p>
    </div>
  </section>
</template>

<script setup>
import headerImg from '../../assets/orthodontics/başlık.png'
import image from '../../assets/orthodontics/image.png'
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
