import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-start justify-center font-sans overflow-hidden pt-0 px-4 pb-4 md:pb-0">
      <div
        className="relative z-10 w-full md:w-[95%] min-h-[500px] md:h-[85vh] backdrop-blur-md bg-white/10 rounded-lg flex flex-col md:flex-row overflow-hidden px-4 md:px-8 py-6 md:py-4 space-y-6 md:space-y-0 md:space-x-6 mt-4"
        data-aos="fade-up"
      >
        {/* Signature Text */}
        <div
          className="absolute top-4 left-4 md:top-4 md:right-4 md:left-auto z-20 max-w-[80%] md:max-w-none"
          data-aos="fade-left"
        >
          <h2 className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold italic font-['Playfair_Display'] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <span className="text-yellow-300">{t('Your Globally Trusted')}</span>
            <span className="text-yellow-100"> {t('Tech Solutions')}</span>
          </h2>
        </div>

        {/* Left Content */}
        <div className="flex flex-col justify-start w-full md:w-1/2 space-y-4 md:space-y-2 mt-16 md:mt-6" data-aos="fade-right">
          <h1 className="mb-4 md:mb-8 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            <span className="text-yellow-400">Inno</span>
            <span className="text-yellow-500">Wave</span>
            <span className="text-black">620</span>
          </h1>

          <p className="text-sm md:text-lg lg:text-xl font-bold leading-snug text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            {t('Your premier')} <span className="text-yellow-300">{t('IT partner')}</span>, {t('crafting')}
            <span className="text-yellow-200"> {t('bespoke digital solutions')}</span> {t('with innovation and elegance')}.
          </p>

          <ul className="text-xs md:text-base lg:text-lg font-medium leading-snug text-white space-y-1 list-disc pl-5 drop-shadow-sm grid grid-cols-2 md:grid-cols-1">
            <li><span className="text-yellow-300">{t('Web Development')}</span></li>
            <li><span className="text-yellow-300">{t('Mobile Development')}</span></li>
            <li><span className="text-yellow-300">{t('IT Support')}</span></li>
            <li><span className="text-yellow-300">{t('API Management')}</span></li>
            <li><span className="text-yellow-300">{t('Troubleshooting')}</span></li>
            <li><span className="text-yellow-300">{t('Cybersecurity')}</span></li>
          </ul>

          <a
            href="#contact"
            className="mt-4 md:mt-8 px-4 py-2 md:py-3 text-base md:text-lg font-bold text-white bg-yellow-500 rounded-full shadow-lg hover:bg-grey-400 hover:shadow-black-500/50 transition-all duration-300 ease-in-out w-fit"
            data-aos="zoom-in"
          >
            {t('Start Your Journey')}
          </a>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/2 h-48 md:h-full flex items-end justify-center" data-aos="fade-left">
          <img
            src={`${import.meta.env.BASE_URL}images/future.png`}
            alt={t('Future Illustration')}
            className="w-full md:w-[130%] h-auto object-contain md:translate-y-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
