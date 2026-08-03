import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const i18n = createI18n({
  legacy: false,
  locale: 'id', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    id
  }
})

export default i18n
