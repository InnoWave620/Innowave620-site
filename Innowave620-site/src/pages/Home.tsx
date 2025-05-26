import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen w-screen bg-neutral-950 flex flex-col items-center justify-center m-0 p-0">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t('welcome')}
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        {t('description')}
      </motion.p>
    </section>
  );
};

export default Home;