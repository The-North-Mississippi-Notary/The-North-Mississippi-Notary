
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PricingCalculator: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [stamps, setStamps] = useState(1);
  const [pages, setPages] = useState(0);
  const [needsPrinting, setNeedsPrinting] = useState(false);
  const [estimate, setEstimate] = useState<{base: number, stampsTotal: number, printingTotal: number, total: number, location: string} | null>(null);

  const calculateFee = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Mapping ZIPs to pricing tiers
    const localZips = ['38961', '38965', '38948']; // Tillatoba/Oakland
    const oxfordZips = ['38655', '38677', '38652']; // Oxford
    const grenadaZips = ['38901', '38902', '38930']; // Grenada
    const batesvilleZips = ['38606']; // Batesville
    
    let base = 125; // Default for distant areas
    let loc = "Extended Service Area";

    if (localZips.includes(zipCode)) {
      base = 50;
      loc = "Tillatoba / Oakland HQ Area";
    } else if (oxfordZips.includes(zipCode)) {
      base = 100;
      loc = "Oxford / Lafayette County";
    } else if (grenadaZips.includes(zipCode)) {
      base = 55;
      loc = "Grenada Area";
    } else if (batesvilleZips.includes(zipCode)) {
      base = 75;
      loc = "Batesville / Panola County";
    }

    const stampsTotal = stamps * 5;
    // Printing rate: $0.25 per page (fair market at-cost for toner/paper/wear)
    const printingTotal = needsPrinting ? pages * 0.25 : 0;
    
    setEstimate({
      base: base,
      stampsTotal: stampsTotal,
      printingTotal: printingTotal,
      total: base + stampsTotal + printingTotal,
      location: loc
    });
  };

  useEffect(() => {
    if (estimate || zipCode) calculateFee();
  }, [stamps, pages, needsPrinting]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="hero-gradient py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <h1 className="text-4xl md:text-5xl font-bold relative z-10 font-serif">Pricing Transparency Tool</h1>
        <p className="text-gray-300 mt-4 relative z-10 font-light max-w-2xl mx-auto px-4 uppercase tracking-widest text-xs">Calculate your Mobile Fee + Notary Stamps + Printing</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-brandNavy font-serif mb-6 text-center">Estimate Your Total Cost</h2>
            <p className="text-gray-500 text-center mb-10 max-w-lg mx-auto text-sm font-light">
              We believe in fair, upfront pricing. Enter your destination ZIP, stamps needed, and any document fabrication (printing) requirements.
            </p>

            <form onSubmit={calculateFee} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">Meeting ZIP Code</label>
                  <input 
                    type="text" 
                    maxLength={5} 
                    placeholder="e.g. 38655" 
                    value={zipCode} 
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-5 text-brandNavy font-bold focus:ring-2 focus:ring-brandGold outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">Number of Stamps ($5.00 each)</label>
                  <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                    <button 
                      type="button"
                      onClick={() => setStamps(Math.max(1, stamps - 1))}
                      className="px-5 py-4 text-brandGold font-black hover:bg-brandGold/10 transition"
                    >—</button>
                    <input 
                      type="number" 
                      min={1} 
                      value={stamps} 
                      onChange={(e) => setStamps(parseInt(e.target.value) || 1)}
                      className="flex-grow bg-transparent text-center font-bold text-brandNavy outline-none" 
                    />
                    <button 
                      type="button"
                      onClick={() => setStamps(stamps + 1)}
                      className="px-5 py-4 text-brandGold font-black hover:bg-brandGold/10 transition"
                    >+</button>
                  </div>
                </div>
              </div>

              {/* Printing Section */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input 
                      id="printing-toggle" 
                      type="checkbox" 
                      checked={needsPrinting}
                      onChange={(e) => setNeedsPrinting(e.target.checked)}
                      className="w-5 h-5 text-brandGold border-slate-300 rounded focus:ring-brandGold"
                    />
                    <label htmlFor="printing-toggle" className="ml-3 font-bold text-brandNavy uppercase tracking-widest text-xs cursor-pointer">
                      Do you need documents printed?
                    </label>
                  </div>
                  {needsPrinting && <span className="text-[10px] font-bold text-brandGold uppercase tracking-widest">Rate: $0.25 / page</span>}
                </div>
                
                {needsPrinting && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-widest">Estimated Page Count (e.g. 25-175 pages)</label>
                    <input 
                      type="number" 
                      min={0}
                      value={pages} 
                      onChange={(e) => setPages(parseInt(e.target.value) || 0)}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-brandNavy font-bold focus:ring-2 focus:ring-brandGold outline-none" 
                    />
                    <p className="text-[10px] text-gray-400 mt-2 italic">At-cost for high-quality laser paper and toner materials.</p>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-brandNavy text-white font-bold py-5 rounded-xl hover:bg-brandGold hover:text-brandNavy transition-all shadow-lg uppercase tracking-[0.2em]"
                >
                  Generate Estimate
                </button>
              </div>
            </form>

            {estimate && (
              <div className="mt-12 bg-brandLight rounded-2xl p-8 border-2 border-brandGold animate-in fade-in slide-in-from-bottom-4">
                <div className="text-center mb-8">
                  <span className="bg-brandGold text-brandNavy text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Official Rate Estimate
                  </span>
                  <h3 className="text-xl font-serif font-bold text-brandNavy mt-4">{estimate.location}</h3>
                </div>

                <div className="space-y-4 max-w-sm mx-auto">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 uppercase tracking-widest">Mobile Travel Fee:</span>
                    <span className="font-bold text-brandNavy">${estimate.base.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 uppercase tracking-widest">Notary Fees ({stamps} x $5):</span>
                    <span className="font-bold text-brandNavy">${estimate.stampsTotal.toFixed(2)}</span>
                  </div>
                  {needsPrinting && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 uppercase tracking-widest">Printing Cost ({pages} pgs):</span>
                      <span className="font-bold text-brandNavy">${estimate.printingTotal.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="pt-4 mt-4 border-t border-brandGold/20 flex justify-between items-center">
                    <span className="text-brandNavy font-black uppercase tracking-widest">Estimated Total:</span>
                    <span className="text-4xl font-black text-brandNavy font-serif">${estimate.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <Link to="/contact" className="text-brandGold font-bold text-sm uppercase tracking-widest hover:underline flex items-center justify-center">
                    Lock in this Session
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-brandNavy p-8 text-center border-t border-brandGold/20">
             <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
               * This is a service estimate. Printing costs are pass-through expenses for materials at approximately $0.25/page. <br />
               Mississipi State Law regulates the maximum per-notarization fee at $5.00.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
