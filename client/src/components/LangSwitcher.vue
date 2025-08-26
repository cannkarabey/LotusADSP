<!-- <template>
  <select v-model="localeModel" @change="onChange">
    <option value="tr">TR</option>
    <option value="en">EN</option>
    <option value="fr">FR</option>
    <option value="ar">AR</option>
  </select>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

const localeModel = ref(locale.value)

function onChange () {
  locale.value = localeModel.value
  const childPath = route.path.split('/').slice(2).join('/') // mevcut alt path
  router.push(`/${localeModel.value}/${childPath}`)
}
</script> -->

<!-- src/components/LangSwitcher.vue -->
<template>
  <div class="langs">
    <button v-for="l in langs" :key="l" @click="switchTo(l)">
      {{ l.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import i18n from '@/i18n'

const langs = ['tr','en','fr','ar']
const router = useRouter()
const route  = useRoute()

function switchTo(loc) {
  // aynı path, aynı hash, sadece :locale değişsin
  router.push({
    name: route.name,                 // route'u adlandırdıysan ideal
    params: { ...route.params, locale: loc },
    hash: route.hash || ''
  }).finally(() => {
    i18n.global.locale.value = loc
  })
}
</script>
