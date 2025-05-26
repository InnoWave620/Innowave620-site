import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to InnoWave620',
      description: 'Elevate your business with cutting-edge technology, premium design, and seamless digital experiences. Explore our services, meet our team, and discover how we can help you innovate.'
    }
  },
  fr: {
    translation: {
      welcome: 'Bienvenue chez InnoWave620',
      description: 'Élevez votre entreprise avec une technologie de pointe, un design premium et des expériences numériques fluides. Découvrez nos services, rencontrez notre équipe et découvrez comment nous pouvons vous aider à innover.'
    }
  },
  es: {
    translation: {
      welcome: 'Bienvenido a InnoWave620',
      description: 'Eleva tu negocio con tecnología de vanguardia, diseño premium y experiencias digitales perfectas. Explora nuestros servicios, conoce a nuestro equipo y descubre cómo podemos ayudarte a innovar.'
    }
  },
  de: {
    translation: {
      welcome: 'Willkommen bei InnoWave620',
      description: 'Steigern Sie Ihr Geschäft mit modernster Technologie, hochwertigem Design und nahtlosen digitalen Erlebnissen. Entdecken Sie unsere Dienstleistungen, lernen Sie unser Team kennen und erfahren Sie, wie wir Ihnen helfen können, zu innovieren.'
    }
  },
  zh: {
    translation: {
      welcome: '欢迎来到InnoWave620',
      description: '通过尖端技术、高端设计和无缝数字体验提升您的业务。探索我们的服务，认识我们的团队，发现我们如何帮助您创新。'
    }
  },
  it: {
    translation: {
      welcome: 'Benvenuto su InnoWave620',
      description: 'Eleva la tua azienda con tecnologia all’avanguardia, design premium ed esperienze digitali senza soluzione di continuità. Esplora i nostri servizi, incontra il nostro team e scopri come possiamo aiutarti a innovare.'
    }
  },
  ru: {
    translation: {
      welcome: 'Добро пожаловать в InnoWave620',
      description: 'Развивайте свой бизнес с помощью передовых технологий, первоклассного дизайна и безупречных цифровых решений. Изучите наши услуги, познакомьтесь с нашей командой и узнайте, как мы можем помочь вам в инновациях.'
    }
  },
  ar: {
    translation: {
      welcome: 'مرحبًا بكم في InnoWave620',
      description: 'ارتقِ بعملك من خلال التكنولوجيا المتقدمة والتصميم المتميز والتجارب الرقمية السلسة. استكشف خدماتنا، وتعرّف على فريقنا، واكتشف كيف يمكننا مساعدتك على الابتكار.'
    }
  },
  hi: {
    translation: {
      welcome: 'InnoWave620 में आपका स्वागत है',
      description: 'अपने व्यवसाय को अत्याधुनिक तकनीक, प्रीमियम डिज़ाइन और निर्बाध डिजिटल अनुभवों के साथ ऊँचाइयों तक पहुँचाएँ। हमारी सेवाओं का अन्वेषण करें, हमारी टीम से मिलें, और जानें कि हम आपकी नवाचार में कैसे मदद कर सकते हैं।'
    }
  },
  ja: {
    translation: {
      welcome: 'InnoWave620へようこそ',
      description: '最先端の技術、プレミアムデザイン、シームレスなデジタル体験でビジネスを向上させましょう。私たちのサービスを探索し、チームに会い、どのようにイノベーションを支援できるかをご覧ください。'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;