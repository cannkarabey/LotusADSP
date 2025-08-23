<template>
  <section id="technology" class="tech">
    <div class="container">
      <!-- ÜST BAŞLIK -->
      <h2 class="title">Teknoloji Destekli Güncel Tedaviler</h2>

      <!-- İÇERİK GRID -->
      <div class="grid">
        <!-- Sol metin: görselin SOLUNA hizalı -->
        <div class="left">
          <p>
            Güncel teknolojik sistemler, tedavide hem zaman tasarrufu, hem de konfor sağlamaktadır.
            Hayatımızın her alanında olduğu gibi diş hekimliğinde de büyük yenilikler sağlayan
            teknolojik gelişmeler sayesinde tedavilerinizde konforu ve rahatlığı yaşayın..
          </p>
        </div>

        <!-- Sağ görsel -->
        <div class="imageWrap">
          <img :src="deviceImg" alt="Dental teknoloji cihazı" />
        </div>

        <!-- Alt metin: görselin ALTINA hizalı -->
        <div class="bottom">
          <p>
            3 boyutlu görüntüleme (Tomografi), dijital ölçü ve dijital yazıcı sistemleri ile
            tedavinizi hızla tamamlamanızı sağlayan diş protez tasarımları ve daha fazlasını
            tecrübeli doktorlarımızla hizmetinize sunmaktayız.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import deviceImg from '../../assets/technology/device.png'
</script>

<style scoped>
/* Bölüm zemini: sayfayla bütün (gölge/radius yok) */
.tech { padding: 80px 0; background: #fff; }

/* About & InfoSection ile AYNI hizalama */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Başlık üstte, ortalı ve küçük çizgi */
.title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 28px;
  position: relative;
}
.title::after {
  content: "";
  display: block;
  width: 44px;
  height: 2px;
  background: #1f2937;
  margin: 12px auto 0;
  opacity: .8;
}

/* İki satırlı, iki kolonlu düzen:
   left  | image
   bottom| image
*/
.grid {
  display: grid;
  grid-template-columns: 1fr 520px;
  grid-template-areas:
    "left image"
    "bottom image";
  gap: 32px 56px;
  align-items: center;
}

/* Sol metin */
.left { grid-area: left; }
.left p {
  margin: 0;
  font-size: 16px;
  line-height: 1.65;
  color: #374151;
}

/* Alt metin (görselin altına oturur) */
.bottom { grid-area: bottom; }
.bottom p {
  margin: 0;
  font-size: 16px;
  line-height: 1.65;
  color: #374151;
  /* ss’deki gibi biraz daha açık ton ve ortalama hissi */
  text-align: left;
}

/* Görsel: gölge & radius YOK -> sayfayla bütün */
.imageWrap { grid-area: image; }
.imageWrap img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0;
  box-shadow: none;
}

/* Responsive */
@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "image"
      "bottom";
    gap: 20px;
  }
  .imageWrap { max-width: 640px; margin: 0 auto; }
  .bottom p { text-align: left; }
  .tech { padding: 64px 0; }
}
</style>
