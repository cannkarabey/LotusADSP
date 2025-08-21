<template>
  <nav class="nav">
    <router-link :to="withLocale('')">{{ t("nav.home") }}</router-link>
    <router-link :to="withLocale('about')">{{ t("nav.about") }}</router-link>
    <router-link :to="withLocale('treatments')">{{
      t("nav.treatments")
    }}</router-link>
    <router-link :to="withLocale('doctors')">{{
      t("nav.doctors")
    }}</router-link>
    <router-link :to="withLocale('contact')">{{
      t("nav.contact")
      
    }}</router-link>
    <LangSwitcher />
  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import LangSwitcher from "./LangSwitcher.vue";

const { t } = useI18n();
const route = useRoute();

function withLocale(path) {
  const locale = route.params.locale || "tr";
  return `/${locale}${path ? "/" + path : ""}`;
}
</script>
