import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-blue-400 z-50 flex flex-col items-center justify-center transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Exit Icon */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white text-3xl hover:text-yellow-300 transition-colors z-50"
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <nav className="flex flex-col gap-6 text-white text-xl font-medium items-center">
          <a href="#home" className="hover:text-yellow-300" onClick={toggleMenu}>Home</a>
          <a href="#services" className="hover:text-yellow-300" onClick={toggleMenu}>Services</a>
          <a href="#about" className="hover:text-yellow-300" onClick={toggleMenu}>About</a>
          <a href="#team" className="hover:text-yellow-300" onClick={toggleMenu}>Team</a>
          <a href="#testimonials" className="hover:text-yellow-300" onClick={toggleMenu}>Testimonials</a>
          <a href="#contact" className="hover:text-yellow-300" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>

      {/* Header */}
      <header
        className={`w-full px-4 py-0 flex items-center justify-between sticky top-0 h-20 backdrop-blur-sm transition-colors duration-300 z-40 ${
          isMenuOpen ? "bg-transparent" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2" data-aos="fade-right" data-aos-duration="800">
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
          data-aos="fade-left"
          data-aos-duration="800"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-white text-base md:text-lg font-medium items-center">
          <a href="#home" className="hover:text-yellow-400" data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">Home</a>
          <a href="#services" className="hover:text-yellow-400" data-aos="fade-down" data-aos-duration="500" data-aos-delay="200">Services</a>
          <a href="#about" className="hover:text-yellow-400" data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">About</a>
          <a href="#team" className="hover:text-yellow-400" data-aos="fade-down" data-aos-duration="500" data-aos-delay="400">Team</a>
          <a href="#testimonials" className="hover:text-yellow-400" data-aos="fade-down" data-aos-duration="500" data-aos-delay="500">Testimonials</a>
          <a href="#contact" className="hover:text-yellow-400" data-aos="fade-down" data-aos-duration="500" data-aos-delay="600">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
