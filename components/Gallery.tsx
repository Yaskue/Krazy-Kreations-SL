import React from 'react';

const galleryImages = [
  { url: 'https://picsum.photos/400/400?random=10', title: 'Birthday Bundle' },
  { url: 'https://picsum.photos/400/600?random=11', title: 'Custom Tumbler' },
  { url: 'https://picsum.photos/400/500?random=12', title: 'Wedding Favors' },
  { url: 'https://picsum.photos/400/400?random=13', title: 'Chocolate Wraps' },
  { url: 'https://picsum.photos/400/600?random=14', title: 'Vinyl Decals' },
  { url: 'https://picsum.photos/400/400?random=15', title: 'Acrylic Bookmarks' },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-handwriting">Gallery of Fun</h2>
          <p className="text-slate-600">See what we've been kreationg lately.</p>
        </div>

        {/* Masonry-like Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md">
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};