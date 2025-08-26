<template>
  <section class="info light">
    <div class="container grid">
      <div class="features">
        <div class="feature">
          <img class="icon" :src="icDoctor" alt="" />
          <div class="text">
            <h3>{{ t('features.items.team.title') }}</h3>
            <p>{{ t('features.items.team.text') }}</p>
          </div>
        </div>

        <div class="feature">
          <img class="icon" :src="icChecklist" alt="" />
          <div class="text">
            <h3>{{ t('features.items.checkup.title') }}</h3>
            <p>{{ t('features.items.checkup.text') }}</p>
          </div>
        </div>

        <div class="feature">
          <img class="icon" :src="icMonitor" alt="" />
          <div class="text">
            <h3>{{ t('features.items.tech.title') }}</h3>
            <p>{{ t('features.items.tech.text') }}</p>
          </div>
        </div>
      </div>

      <div class="imageWrap">
        <img :src="sideImage" alt="Röntgen inceleme" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import sideImage   from '../../assets/infosection/xray.jpg'
import icDoctor    from '../../assets/infosection/doctor.png'
import icChecklist from '../../assets/infosection/checklist.png'
import icMonitor   from '../../assets/infosection/monitor.png'

const { t } = useI18n()
</script>

<style scoped>
/* AboutSection ile aynı zemin ve padding */
.info { padding: 80px 0; }
.light { background: #f6fbfe; }

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 56px;
  align-items: center;
}

.features { display: grid; gap: 28px; }
.feature {
  display: grid;
  grid-template-columns: 64px 1fr;
  align-items: center;
  gap: 16px;
}
.icon { width: 56px; height: 56px; object-fit: contain; }
.text h3 { margin: 0 0 6px; font-size: 22px; font-weight: 700; color: #1f2937; }
.text p  { margin: 0; color: #4b5563; font-size: 16px; }

.imageWrap { width: 100%; }
.imageWrap img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0,0,0,.08);
}

@media (max-width: 1100px) {
  .grid { grid-template-columns: 1fr 480px; gap: 40px; }
}
@media (max-width: 980px) {
  .grid { grid-template-columns: 1fr; gap: 32px; }
  .imageWrap { max-width: 640px; margin: 0 auto; }
  .info { padding: 64px 0; }
}
@media (max-width: 600px) {
  .feature { grid-template-columns: 52px 1fr; }
  .icon { width: 48px; height: 48px; }
  .text h3 { font-size: 20px; }
}
</style>
