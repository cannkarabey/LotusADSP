<!-- <template>
  <select v-model="localeModel" @change="onChange">
    <option value="tr">TR</option>
    <option value="en">EN</option>
    <option value="fr">FR</option>
    <option value="ar">AR</option>
  </select>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();

const localeModel = $ref(locale.value);

function onChange() {
  locale.value = localeModel;
  const childPath = route.path.split("/").slice(2).join("/");
  router.push(`/${localeModel}/${childPath}`);
}
</script> -->

<template>
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
</script>
