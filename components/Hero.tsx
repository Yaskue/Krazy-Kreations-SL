import React from 'react';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-krazy-pink/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-krazy-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-72 h-72 bg-krazy-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-krazy-pink/20 text-krazy-pink font-semibold text-sm">
            <Sparkles size={16} />
            <span>Custom Designs for Every Occasion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
            Make Your Events <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-krazy-pink via-krazy-purple to-krazy-teal font-handwriting p-2">
              Unforgettable
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto md:mx-0">
            From custom chocolate wraps to DTF vinyl stickers and acrylic bookmarks. We create personalized party favors and gift packages that wow your guests.
          </p>
        </div>

        <div className="relative">
          <div className="relative z-10 grid grid-cols-2 gap-4">
             <img 
              src="https://images.pexels.com/photos/2783837/pexels-photo-2783837.jpeg" 
              alt="Pink party decorations" 
              className="rounded-2xl shadow-2xl w-full h-40 md:h-56 object-cover -translate-y-8 blob-shape border-4 border-white"
            />
            <img 
              src="https://images.pexels.com/photos/10771811/pexels-photo-10771811.jpeg" 
              alt="Custom gift wrapping" 
              className="rounded-2xl shadow-2xl w-full h-40 md:h-56 object-cover translate-y-8 blob-shape border-4 border-white"
            />
            <img 
              src="https://images.pexels.com/photos/10831822/pexels-photo-10831822.jpeg" 
              alt="Custom party favors chocolate" 
              className="rounded-2xl shadow-2xl w-full h-40 md:h-56 object-cover translate-y-4 blob-shape border-4 border-white"
            />
            <img 
              src="https://images.pexels.com/photos/11035358/pexels-photo-11035358.jpeg" 
              alt="Personalized gift bags" 
              className="rounded-2xl shadow-2xl w-full h-40 md:h-56 object-cover -translate-y-4 blob-shape border-4 border-white"
            />
          </div>
          {/* Decorative Circle */}
          <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-full animate-[spin_20s_linear_infinite] -z-10 scale-125"></div>
        </div>
      </div>
    </section>
  );
};