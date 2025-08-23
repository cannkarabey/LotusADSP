<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2>Hakkımızda</h2>
      <div class="divider"></div>

      <p class="lead">
        Lotus ağız ve diş sağlığı polikliniği Ankara’nın Etimesgut ilçesinin Eryaman Mahallesinde hizmet vermektedir. 
        Bilgisayarlı tomografi cihazları ile ağız ve diş sağlığı alanında hizmet vermeyi amaçlıyor.
      </p>

      <p class="lead">
        Lotus ağız ve diş sağlığı polikliniği profesyonel diş hekimlerinden oluşan, ekip tarafından multidisipliner bir şekilde çalışarak 
        hastanın tanı ve tedavisinin başarılı bir şekilde gerçekleştirilmesini hedeflemektedir.
      </p>

      <!-- Şubeler -->
      <div class="branches">
        <div class="branch">
          <h3>Eryaman / ANKARA</h3>
          <p>Şehit Osman Avcı Mahallesi 1071.cadde 43/B</p>
          <p>0312 577 70 70 / 03</p>
          <p>0552 881 2071</p>
        </div>

        <div class="branch">
          <h3>Etlik / ANKARA</h3>
          <p>Ayvalı Mahallesi Gazze caddesi No : 15/A-B</p>
          <p>0312 514 70 09</p>
          <p>0312 514 70 99</p>
        </div>

        <div class="branch">
          <h3>Burhaniye / BALIKESİR</h3>
          <p>Mahkeme Mahallesi Saip Hoca Bulvarı No : 10/C</p>
          <p>0266 412 12 44</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 80px 0;
  background: #f6fbfe;
}

.container {
  max-width: 1000px;   /* Orta genişlik */
  margin: 0 auto;
  text-align: center;  /* Ortala */
  padding: 0 20px;
}

h2 {
  font-size: 32px;
  margin-bottom: 8px;
}

.divider {
  width: 60px;
  height: 3px;
  background: #222;
  margin: 10px auto 30px;
}

.lead {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.6;
}

.branches {
  display: flex;
  justify-content: center; /* Ortala */
  gap: 40px;
  margin-top: 40px;
  flex-wrap: wrap; /* küçük ekranda alt alta gelsin */
}

.branch {
  max-width: 250px;
}

.branch h3 {
  color: #e85528;
  font-size: 18px;
  margin-bottom: 8px;
}
</style>
