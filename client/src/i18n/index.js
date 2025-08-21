import { createI18n } from 'vue-i18n'
import tr from './locales/tr.json'
import en from './locales/en.json'
import fr from './locales/fr.json'
import ar from './locales/ar.json'


export default createI18n({
    legacy: false,
    locale: 'tr',
    fallbackLocale: 'tr',
    messages: { tr, en, fr, ar }
})