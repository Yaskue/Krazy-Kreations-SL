import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const Socials: React.FC = () => {
  return (
    <section id="socials" className="py-20 bg-krazy-bg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 font-handwriting">Connect With Us</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Follow us for the latest designs or chat with us to start your custom order!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto">
          {/* TikTok */}
          <a 
            href="https://www.tiktok.com/@krazykreations" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-krazy-pink/20 hover:-translate-y-2 transition-all border border-slate-100 group"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-black text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
               </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">TikTok</h3>
            <p className="text-slate-500 mb-6 text-sm">Follow @krazykreations</p>
            <span className="inline-block px-6 py-2 rounded-full bg-slate-100 text-slate-900 font-bold group-hover:bg-krazy-pink group-hover:text-white transition-colors">
              View Profile
            </span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/27670819587" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all border border-slate-100 group"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-[#25D366] text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-10 h-10 fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">WhatsApp</h3>
            <p className="text-slate-500 mb-6 text-sm">067 081 9587</p>
            <span className="inline-block px-6 py-2 rounded-full bg-slate-100 text-slate-900 font-bold group-hover:bg-[#25D366] group-hover:text-white transition-colors">
              Chat Now
            </span>
          </a>

          {/* Gmail */}
          <a 
            href="mailto:ihlaamp121@gmail.com" 
            className="flex-1 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 transition-all border border-slate-100 group"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-[#EA4335] text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-500 mb-6 text-sm">ihlaamp121@gmail.com</p>
            <span className="inline-block px-6 py-2 rounded-full bg-slate-100 text-slate-900 font-bold group-hover:bg-[#EA4335] group-hover:text-white transition-colors">
              Send Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};