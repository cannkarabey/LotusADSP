<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Sol taraf: Klinik bilgisi -->
      <div>
        <h3>Lotus Ağız ve Diş Sağlığı</h3>
        <p>Hayata sağlıkla gülümseyin…</p>
        <p class="small">© {{ new Date().getFullYear() }} Lotus Clinic. Tüm hakları saklıdır.</p>
      </div>

      <!-- Orta taraf: Çalışma saatleri -->
      <div>
        <h4>Çalışma Saatleri</h4>
        <ul>
          <li>Pazartesi - Cumartesi: 10:00 – 22:00</li>
          <li>Pazar: 11:00 – 19:00</li>
        </ul>
      </div>

      <!-- Sağ taraf: İletişim -->
      <div>
        <h4>İletişim</h4>
        <p>📍 Şehit Osman Avcı Mah. Malazgirt 1071 Cad. No:43/B Etimesgut / Ankara</p>
        <p>📞 0312 577 70 70</p>
        <p>📞 0312 577 70 03</p>
        <div class="socials">
          <a href="tel:03125777070" title="Ara"><i class="bi bi-telephone-fill"></i></a>
          <a href="mailto:info@clinic.com" title="Mail"><i class="bi bi-envelope-fill"></i></a>
          <a href="https://instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Bootstrap ikonları için (opsiyonel):
// npm i bootstrap-icons
// import "bootstrap-icons/font/bootstrap-icons.css"
</script>

<style scoped>
.footer {
  background: #111;
  color: #eee;
  padding: 40px 20px;
}
.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.footer h3, .footer h4 {
  margin-top: 0;
  color: #d4af37;
}
.footer .small {
  font-size: 0.85rem;
  color: #aaa;
  margin-top: 12px;
}
.footer ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.footer .socials {
  margin-top: 12px;
}
.footer .socials a {
  margin-right: 12px;
  font-size: 1.3rem;
  color: #d4af37;
  transition: color 0.2s;
}
.footer .socials a:hover {
  color: #fff;
}
</style>
