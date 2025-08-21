<template>
  <nav class="nav">
    <div class="container nav-inner">
      <!-- LOGO -->
      <a href="#hero" class="logo" aria-label="Go to top">
        <img :src="logoUrl" alt="Lotus Dental Clinic Logo" />
      </a>

      <!-- MENÜ -->
      <div class="nav-links">
        <a href="#hero">{{ t('nav.home') }}</a>  <!-- ✅ ANASAYFA BUTONU -->
        <a href="#about">{{ t('nav.about') }}</a>
        <a href="#treatments">{{ t('nav.treatments') }}</a>
        <a href="#doctors">{{ t('nav.doctors') }}</a>
        <a href="#contact">{{ t('nav.contact') }}</a>
        <LangSwitcher />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import logoUrl from '../assets/logo.png'

const { t } = useI18n()
</script>

<style scoped>
.logo img {
  height: 100px;
  width: auto;
  display: block;
  object-fit: contain;
  cursor: pointer;
}

/* MENÜ */
.nav-links {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-links a {
  padding: 10px 8px;
  text-decoration: none;
  color: #5f5f5f;
  font-weight: 500;
}
.nav-links a:hover {
  color: #d4af37;
}
</style>
