import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationResources } from './i18n/index';

i18n
  .use(initReactI18next)
  .init({
    resources: translationResources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;