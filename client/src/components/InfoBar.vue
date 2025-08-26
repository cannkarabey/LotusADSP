<template>
  <section id="info" class="info-bar">
    <div class="info-container">
      <div>
        <h4>{{ t('info.title') }}</h4>
        <p>{{ t('info.slogan') }}</p>
        <p>{{ t('info.weekdays') }}</p>
        <p>{{ t('info.sunday') }}</p>
      </div>

      <div>
        <h4>{{ t('info.addressTitle') }}</h4>
        <p>📍 {{ t('info.address') }}</p>
      </div>

      <div>
        <h4>{{ t('info.phoneTitle') }}</h4>
        <p>📞 {{ t('info.phone1') }}</p>
        <p>📞 {{ t('info.phone2') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

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
