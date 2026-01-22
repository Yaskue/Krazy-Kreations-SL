import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Socials } from './components/Socials';
import { Footer } from './components/Footer';
import { Sticker } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-4 group">
            <Sticker className="w-12 h-12 text-krazy-pink transform -rotate-12 group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-4xl font-bold font-handwriting text-slate-900 group-hover:text-krazy-pink transition-colors leading-none">
                Krazy<span className="text-krazy-pink group-hover:text-slate-900 transition-colors">Kreations</span>
              </span>
              <span className="text-sm font-medium text-slate-500 tracking-widest mt-1">one sticker at a time</span>
            </div>
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <Services />
        <Socials />
      </main>

      <Footer />
    </div>
  );
};

export default App;