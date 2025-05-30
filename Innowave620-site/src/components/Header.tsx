import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-4 py-0 flex items-center justify-between sticky top-0 z-50 min-h-0 h-20 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
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
