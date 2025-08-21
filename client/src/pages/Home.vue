<!-- <template>
  <div>
    <section id="hero" class="section hero">
      <h1>Hero / Slider</h1>
    </section>

    <section id="about" class="section about">
      <h2>Hakkımızda</h2>
      <p>Klinik tanıtım metni…</p>
    </section>

    <section id="treatments" class="section treatments">
      <h2>Tedavilerimiz</h2>
      <p>Tedavi listesi burada…</p>
    </section>

    <section id="doctors" class="section doctors">
      <h2>Doktorlarımız</h2>
      <p>Doktor listesi burada…</p>
    </section>

    <section id="contact" class="section contact">
      <h2>İletişim</h2>
      <form>
        <input placeholder="Ad Soyad" />
        <input placeholder="E-posta" />
        <textarea placeholder="Mesaj"></textarea>
        <button class="btn">Gönder</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.section {
  min-height: 100vh;
  padding: 80px 20px;
}
</style> -->
<template>
  <div>
    <!-- HERO -->
    <section id="hero" class="section hero">
      <div class="hero-media">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfdd46eb28?q=80&w=1600"
          alt="implant"
        />
      </div>
      <div class="hero-content container">
        <h1>Anlık (Immediate) Implant Tedavisi</h1>
        <p>Kemik durumunuz uygunsa aynı gün dişlerinize kavuşabilirsiniz.</p>
        <a href="#contact" class="btn">İletişim</a>
      </div>
    </section>

    <!-- HAKKIMIZDA -->
    <section id="about" class="section light">
      <div class="container">
        <h2>Hakkımızda</h2>
        <p class="lead">
          Lotus Ağız ve Diş Sağlığı; tecrübeli hekim kadrosu ve teknoloji destekli
          tedavi yaklaşımlarıyla hizmet verir.
        </p>

        <div class="features">
          <article>
            <h3>Tecrübeli Hekim Kadrosu</h3>
            <p>Hasta memnuniyeti odaklı ve güler yüzlü ekip.</p>
          </article>
          <article>
            <h3>Detaylı Muayene</h3>
            <p>En doğru tedavi planlaması için kapsamlı değerlendirme.</p>
          </article>
          <article>
            <h3>Güncel Teknolojiler</h3>
            <p>Dijital görüntüleme ve hızlı ölçü sistemleri.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- TEDAVİLER -->
    <section id="treatments" class="section">
      <div class="container">
        <h2>Tedavilerimiz</h2>
        <p class="muted">
          Cerrahi, Protez, Ortodonti, Periodontoloji, Endodonti ve Restoratif
          tedaviler.
        </p>

        <div class="cards">
          <article v-for="t in treatments" :key="t.title" class="card">
            <h3>{{ t.title }}</h3>
            <p>Daha fazla bilgi…</p>
          </article>
        </div>
      </div>
    </section>

    <!-- DOKTORLAR -->
    <section id="doctors" class="section light">
      <div class="container">
        <h2>Doktorlarımız</h2>
        <div class="cards">
          <article v-for="d in doctors" :key="d.name" class="card doc">
            <img :src="d.photo" :alt="d.name" />
            <h3>{{ d.name }}</h3>
            <p class="muted">{{ d.title }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- İLETİŞİM -->
    <section id="contact" class="section">
      <div class="info-container">
      <div>
        <h4>Lotus Ağız ve Diş Sağlığı</h4>
        <p>Hayata sağlıkla gülümseyin…</p>
      </div>

      <div>
        <h4>Çalışma Saatleri</h4>
        <p>Pazartesi - Cumartesi: 10:00 – 22:00</p>
        <p>Pazar: 11:00 – 19:00</p>
      </div>

      <div>
        <h4>İletişim</h4>
        <p>📍 Şehit Osman Avcı Mah. Malazgirt 1071 Cad. No:43/B Etimesgut / Ankara</p>
        <p>📞 0312 577 70 70</p>
        <p>📞 0312 577 70 03</p>
      </div>
    </div>
    </section>

    <!-- ALT BİLGİ BAR (adres-saatler-telefon) -->
    <InfoBar />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const treatments = [
  { title: 'E-Max Kaplama' },
  { title: 'Zirkonyum Kaplama' },
  { title: 'Laminat (Yaprak Diş)' },
  { title: 'Implant' },
  { title: 'Beyazlatma' },
  { title: 'Kanal Tedavisi' },
  { title: 'Ortodonti' },
  { title: 'Çocuk Diş Hekimliği' }
]

const doctors = [
  { name: 'Dr. Emel Gülin Yeşilbağ', title: 'Diş Hekimi', photo: 'https://via.placeholder.com/240x240?text=Dr+1' },
  { name: 'Dt. Ömer Faruk Karabey', title: 'Diş Hekimi', photo: 'https://via.placeholder.com/240x240?text=Dr+2' },
  { name: 'Dt. Menekşe Nur Kurnaz', title: 'Diş Hekimi', photo: 'https://via.placeholder.com/240x240?text=Dr+3' },
  { name: 'Dt. Buse Nur Toplu', title: 'Diş Hekimi', photo: 'https://via.placeholder.com/240x240?text=Dr+4' }
]

const form = ref({ name: '', email: '', phone: '', message: '' })
const status = ref('')

async function submit () {
  try {
    const base = import.meta.env.VITE_API_BASE_URL
    await axios.post(`${base}/api/contact`, form.value)
    status.value = 'Gönderildi. Teşekkürler.'
    form.value = { name: '', email: '', phone: '', message: '' }
  } catch (e) {
    status.value = 'Gönderilemedi. Lütfen tekrar deneyin.'
  }
}
</script>

<style scoped>
/* Genel section yapısı */
.section { padding: 64px 0; }
.section.light { background: #f6fbfe; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }

h2 { margin: 0 0 12px; font-size: 32px; }
.lead { font-size: 18px; color: #374151; }
.muted { color: #6b7280; }

/* Hero */
.hero { position: relative; }
.hero-media img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  filter: brightness(.6);
}
.hero-content {
  position: relative;
  margin-top: -120px;
  color: #fff;
}
.hero-content h1 { margin: 0 0 8px; font-size: 44px; }
.hero .btn { margin-top: 8px; }

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.features article {
  background: #fff;
  border: 1px solid #eef2f7;
  border-radius: 12px;
  padding: 16px;
}

/* Cards (treatments & doctors) */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 16px;
}
.card {
  background: #fff;
  border: 1px solid #eef2f7;
  border-radius: 12px;
  padding: 16px;
}
.card.doc { text-align: center; }
.card.doc img {
  width: 140px; height: 140px; object-fit: cover;
  border-radius: 999px; display: block; margin: 0 auto 10px;
}

/* Form */
.contact-form {
  display: grid;
  gap: 12px;
  max-width: 640px;
}
.contact-form input,
.contact-form textarea {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 10px 12px;
  font: inherit;
}
.status { color: #059669; }

/* Buton */
.btn {
  background: #d4af37;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
}

.info-bar {
  background: #111;
  color: #fff;
  padding: 10px 10px;
}
.info-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
h4 {
  color: #d4af37;
  margin-bottom: 10px;
}
</style>
