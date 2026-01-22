import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-handwriting font-bold text-slate-900 mb-4">Krazy Kreations</h2>
        <p className="text-slate-500 mb-8">Making your celebrations extra special, one sticker at a time.</p>
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Krazy Kreations. All rights reserved.
        </p>
      </div>
    </footer>
  );
};