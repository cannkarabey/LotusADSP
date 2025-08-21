<template>
  <section class="info-bar">
    <div class="info-container">
      <div>
        <h4>LOTUS Ağız ve Diş Sağlığı Polikliniği</h4>
        <p>HAYATA SAĞLIKLA GÜLÜMSEYİN…</p>
        <p>Pazartesi - Cumartesi 10:00 - 22:00</p>
        <p>Pazar 11:00 - 19:00</p>
      </div>

      <div>
        <h4>Adres</h4>
        <p>📍 Şehit Osman Avcı Mah. Malazgirt 1071 Cad. No:43/B Etimesgut/Ankara</p>
      </div>

      <div>
        <h4>Telefon</h4>
        <p>📞 0312 577 70 70</p>
        <p>📞 0312 577 70 03</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.info-bar {
  background: #111;
  color: #fff;
  padding: 30px 20px;
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
