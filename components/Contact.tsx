import React from 'react';
import { Mail, Phone, Instagram, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          
          <div className="bg-slate-900 text-white p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-krazy-pink rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div>
              <h3 className="text-3xl font-bold mb-6 font-handwriting">Let's Get Krazy!</h3>
              <p className="text-slate-300 mb-8">
                Ready to start your custom order? Send us a message about your event or idea.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span>hello@krazykreations.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Instagram size={18} />
                  </div>
                  <span>@KrazyKreations</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm text-slate-400">
                We usually reply within 24 hours.
              </p>
            </div>
          </div>

          <div className="p-12 md:w-3/5">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-krazy-pink focus:ring-2 focus:ring-krazy-pink/20 outline-none transition-all" placeholder="Your name" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-krazy-pink focus:ring-2 focus:ring-krazy-pink/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-krazy-pink focus:ring-2 focus:ring-krazy-pink/20 outline-none transition-all">
                  <option>Custom Chocolate Wraps</option>
                  <option>Party Packs</option>
                  <option>DTF Vinyl Stickers</option>
                  <option>Acrylic Bookmarks</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-krazy-pink focus:ring-2 focus:ring-krazy-pink/20 outline-none transition-all" placeholder="Tell us about your event theme, date, and ideas..."></textarea>
              </div>

              <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-krazy-pink transition-colors flex items-center justify-center gap-2">
                Send Request
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};