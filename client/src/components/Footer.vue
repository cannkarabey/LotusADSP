<template>
  <footer class="footer">
    <p>{{ t('footer.text') }}</p>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.footer {
  background: #000;
  color: #aaa;
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
}
</style>
