import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import './App.css';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      mirror: false,
      disable: 'phone' // Disable animations on phones
    });
  }, []);
  return (
    <div className="app-root min-h-screen w-screen flex flex-col text-white font-sans relative">
      <div className="app-content relative z-10">
        <Header />
        <main className="flex-1 w-full px-4 py-8">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="contact"><Contact /></section>
          <section id="team"><Team /></section>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;