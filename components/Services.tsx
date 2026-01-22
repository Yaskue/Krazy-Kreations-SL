import React from 'react';
import { Gift, Sticker, Candy, GlassWater, Bookmark, Package } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Chocolate Wraps',
    description: 'Turn ordinary chocolate bars into personalized party favors with our custom wraps.',
    icon: <Candy size={32} />,
    color: 'bg-krazy-pink',
  },
  {
    id: '2',
    title: 'DTF Vinyl Stickers',
    description: 'High-quality, durable vinyl stickers ready to apply. Various themes and custom designs.',
    icon: <Sticker size={32} />,
    color: 'bg-krazy-purple',
  },
  {
    id: '3',
    title: 'Party Packs',
    description: 'Complete party solution packs containing labels, toppers, and favors matching your theme.',
    icon: <Package size={32} />,
    color: 'bg-krazy-teal',
  },
  {
    id: '4',
    title: 'Glass Items',
    description: 'Customized glassware perfect for gifts, weddings, or special milestones.',
    icon: <GlassWater size={32} />,
    color: 'bg-blue-500',
  },
  {
    id: '5',
    title: 'Acrylic Bookmarks',
    description: 'Elegant acrylic bookmarks personalized with vinyl names and designs.',
    icon: <Bookmark size={32} />,
    color: 'bg-krazy-yellow',
  },
  {
    id: '6',
    title: 'Gift Packages',
    description: 'Curated gift packages supplied and created for all occasions and budgets.',
    icon: <Gift size={32} />,
    color: 'bg-red-500',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-handwriting">Our Kreations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From small stickers to complete party packages, we put a crazy amount of love into every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-krazy-pink/50 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};