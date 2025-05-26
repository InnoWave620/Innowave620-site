import React from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-neutral-800 bg-neutral-950/80 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-yellow-400 tracking-wide">InnoWave620</span>
      </div>
      <nav className="flex gap-6 text-lg items-center">
        <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
        <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
        <a href="#team" className="hover:text-yellow-400 transition-colors">Team</a>
        <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Testimonials</a>
        <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        <select
          onChange={e => changeLanguage(e.target.value)}
          className="px-2 py-1 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          defaultValue={i18n.language}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
          <option value="zh">中文</option>
          <option value="it">Italiano</option>
          <option value="ru">Русский</option>
          <option value="ar">العربية</option>
          <option value="hi">हिन्दी</option>
          <option value="ja">日本語</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;