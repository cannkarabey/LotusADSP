<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2>{{ t('about.title') }}</h2>
      <div class="divider"></div>

      <p class="lead">{{ t('about.lead1') }}</p>
      <p class="lead">{{ t('about.lead2') }}</p>

      <!-- Şubeler -->
      <div class="branches">
        <div class="branch">
          <h3>{{ t('about.branches.eryaman.title') }}</h3>
          <p>{{ t('about.branches.eryaman.address') }}</p>
          <p>{{ t('about.branches.eryaman.phone1') }}</p>
          <p>{{ t('about.branches.eryaman.phone2') }}</p>
        </div>

        <div class="branch">
          <h3>{{ t('about.branches.etlik.title') }}</h3>
          <p>{{ t('about.branches.etlik.address') }}</p>
          <p>{{ t('about.branches.etlik.phone1') }}</p>
          <p>{{ t('about.branches.etlik.phone2') }}</p>
        </div>

        <div class="branch">
          <h3>{{ t('about.branches.burhaniye.title') }}</h3>
          <p>{{ t('about.branches.burhaniye.address') }}</p>
          <p>{{ t('about.branches.burhaniye.phone1') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.about-section {
  padding: 80px 0;
  background: #ffffff;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
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
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  flex-wrap: wrap;
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
