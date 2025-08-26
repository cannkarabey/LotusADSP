// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import i18n from './i18n'
// import './assets/styles.css'

// const app = createApp(App)
// app.use(router)
// app.use(i18n)
// app.mount('#app')

// src/main.js
import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/styles.css'

const app = createApp(App)

app.use(router)
app.use(i18n)

function applyLangDir(locale) {
  document.documentElement.lang = locale
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
}

// URL'deki :locale paramını i18n'e uygula
router.beforeEach((to, _from, next) => {
  const loc = to.params.locale || 'tr'
  if (i18n.global.locale.value !== loc) {
    i18n.global.locale.value = loc
    applyLangDir(loc)
  }
  next()
})

// i18n.locale manuel değişirse HTML'e yansısın
watch(() => i18n.global.locale.value, (loc) => applyLangDir(loc), { immediate: true })

app.mount('#app')
