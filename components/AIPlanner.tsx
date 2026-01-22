import React, { useState } from 'react';
import { Wand2, Loader2, PartyPopper, Package } from 'lucide-react';
import { generatePartyPlan } from '../services/geminiService';
import { AIResponse } from '../types';

export const AIPlanner: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await generatePartyPlan(input);
      setResult(data);
    } catch (err) {
      setError("Oops! Our party planner is having a creative block. Please try again later. (Check API Key)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-krazy-pink/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
              <Wand2 size={16} className="text-yellow-400" />
              <span>Powered by Google Gemini</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Stuck on Ideas? <br />
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 font-handwriting">Brainstorm!</span>
            </h2>
            
            <p className="text-lg text-slate-200">
              Tell us about your occasion, the person you're celebrating, or just a random vibe. Our AI will suggest the perfect Krazy Kreations package.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g., My niece loves unicorns and outer space, turning 7..."
                  className="w-full h-32 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 backdrop-blur-sm resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-bold shadow-lg shadow-purple-900/50 hover:shadow-purple-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Generating Ideas...
                  </>
                ) : (
                  <>
                    <Wand2 />
                    Generate Party Theme
                  </>
                )}
              </button>
              
              {error && <p className="text-red-300 text-sm bg-red-900/20 p-2 rounded border border-red-500/50">{error}</p>}
            </form>
          </div>

          <div className="min-h-[400px] flex items-center justify-center">
            {!result ? (
              <div className="border-2 border-dashed border-white/20 rounded-3xl p-12 text-center text-white/30">
                <PartyPopper size={64} className="mx-auto mb-4 opacity-50" />
                <p>Your custom party plan will appear here</p>
              </div>
            ) : (
              <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-handwriting">
                    {result.themeName}
                  </h3>
                  <div className="flex -space-x-2">
                    {result.colorPalette.map((color, idx) => (
                      <div 
                        key={idx} 
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color.includes('#') ? color : '#ddd' }} // fallback for non-hex
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 italic mb-6 border-l-4 border-pink-200 pl-4">
                  "{result.description}"
                </p>

                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Package size={18} className="text-purple-500" />
                  Recommended Kreations:
                </h4>
                <ul className="space-y-3">
                  {result.suggestedItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 bg-slate-50 p-3 rounded-xl">
                      <div className="mt-1 w-2 h-2 rounded-full bg-krazy-teal shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <a href="mailto:hello@krazykreations.com" className="text-pink-600 font-bold hover:underline">
                    Contact us to bring this theme to life &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};