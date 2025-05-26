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
import { useTranslation } from 'react-i18next';

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-neutral-950 text-white font-sans">
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
  );
}

export default App;
