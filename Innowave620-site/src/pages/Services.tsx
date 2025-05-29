import React from "react";
import { useTranslation } from 'react-i18next';
import {
  FaCloud,
  FaServer,
  FaLock,
  FaDatabase,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-transparent flex flex-col items-center justify-center py-20 px-4">
      {/* Section Heading */}
      <section className="text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-500 drop-shadow-sm">
          {t('Our Services')}
        </h2>
        <p className="text-lg md:text-xl text-gray-800">
          {t('At InnoWave620, we offer a wide range of technology solutions to help your business thrive in the digital age.')}
        </p>
      </section>

      {/* Service Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl">
        {[
          {
            icon: <FaCloud />,
            title: t('Cloud Solutions'),
            desc: t('Efficient and scalable cloud infrastructure to power your business.'),
          },
          {
            icon: <FaServer />,
            title: t('API Management'),
            desc: t('Robust API management solutions for seamless integration.'),
          },
          {
            icon: <FaLock />,
            title: t('Cybersecurity Services'),
            desc: t('Advanced cybersecurity solutions to protect your digital assets.'),
          },
          {
            icon: <FaDatabase />,
            title: t('Database Solutions'),
            desc: t('Reliable and high-performance database solutions.'),
          },
          {
            icon: <FaCode />,
            title: t('Custom Development'),
            desc: t('Tailored software development to meet your unique needs.'),
          },
          {
            icon: <FaChartLine />,
            title: t('Data Analytics'),
            desc: t('Insightful data analytics to drive informed decisions.'),
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-lg rounded-xl p-6 text-center shadow-md hover:shadow-yellow-400/30 transition-all duration-300"
          >
            <div className="text-5xl text-yellow-500 mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
