import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 py-0 flex items-center justify-between sticky top-0 z-50 min-h-0 h-20 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/innowave620%20logo-Photoroom.png"
          alt="InnoWave620 Logo"
          className="h-16 w-auto object-contain"
        />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-white text-base md:text-lg font-medium items-center">
        <a href="#home" className="hover:text-yellow-400 transition-colors duration-200">Home</a>
        <a href="#services" className="hover:text-yellow-400 transition-colors duration-200">Services</a>
        <a href="#about" className="hover:text-yellow-400 transition-colors duration-200">About</a>
        <a href="#team" className="hover:text-yellow-400 transition-colors duration-200">Team</a>
        <a href="#testimonials" className="hover:text-yellow-400 transition-colors duration-200">Testimonials</a>
        <a href="#contact" className="hover:text-yellow-400 transition-colors duration-200">Contact</a>

        {/* Language Selector
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="px-2 py-1 rounded bg-neutral-900 text-white text-base border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
        </select> */}
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-6 text-white text-xl font-medium items-center">
          <a href="#home" className="hover:text-yellow-400 transition-colors duration-200" onClick={toggleMenu}>Home</a>
          <a href="#services" className="hover:text-yellow-400 transition-colors duration-200" onClick={toggleMenu}>Services</a>
          <a href="#about" className="hover:text-yellow-400 transition-colors duration-200" onClick={toggleMenu}>About</a>
          <a href="#team" className="hover:text-yellow-400 transition-colors duration-200" onClick={toggleMenu}>Team</a>
          <a href="#testimonials" className="hover:text-yellow-400 transition-colors duration-200" onClick={toggleMenu}>Testimonials</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors duration-200" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
