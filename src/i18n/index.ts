import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import intervalPlural from 'i18next-intervalplural-postprocessor'

const { NODE_ENV } = process.env

const IS_TEST = NODE_ENV === 'test'
const IS_DEV = NODE_ENV === 'development'

if (!IS_TEST) {
  i18n.use(HttpApi).use(LanguageDetector)
}

export const i18nPromise = i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .use(intervalPlural)
  .init({
    fallbackLng: IS_TEST ? 'cimode' : 'en',
    debug: IS_DEV,
    defaultNS: 'general',
    supportedLngs: ['en'],
    ns: 'general',
    load: 'currentOnly',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: !IS_TEST,
    },
  })

export default i18n
