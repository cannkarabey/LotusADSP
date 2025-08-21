<template>
  <nav class="nav">
    <div class="container nav-inner">
      <a class="brand" href="#hero">LOTUS</a>
      <div class="nav-links">
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
import { useRoute } from 'vue-router'
import LangSwitcher from './LangSwitcher.vue'

const { t } = useI18n()
const route = useRoute()

function withLocale(path){
  const locale = route.params.locale || 'tr'
  return `/${locale}${path ? '/' + path : ''}`
}
</script>
