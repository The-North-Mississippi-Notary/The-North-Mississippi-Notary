
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero-gradient relative text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-4 rounded bg-brandGold/20 border border-brandGold text-brandGold text-xs font-bold tracking-widest mb-8 uppercase">
              7-County Territory | Mobile Fabrication Fleet
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight font-serif uppercase tracking-tighter">
              The North Mississippi <span className="text-brandGold italic">Notary</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Technologist-owned mobile office units delivering secure notarization, high-speed printing, and industrial scanbacks to your door.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-10 py-5 bg-brandGold text-brandNavy font-bold rounded-lg text-xl hover:bg-brandGoldHover transition shadow-2xl uppercase tracking-widest">
                Dispatch Request
              </Link>
              <Link to="/services" className="px-10 py-5 bg-white/5 border border-gray-600 hover:border-brandGold hover:bg-white/10 rounded-lg text-xl font-semibold transition uppercase tracking-widest">
                View Rates
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Transparency Banner */}
      <div className="bg-brandNavy border-y border-brandGold/20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center">
            <div className="md:col-span-2 md:text-left">
              <h3 className="text-brandGold font-bold text-xs uppercase tracking-[0.3em] mb-3">MS Regulation Compliance</h3>
              <p className="text-white text-sm font-light leading-relaxed">
                Fees are structured as: <strong>Mobile Fabrication Fee</strong> (based on hub distance) + <strong>$5.00 per signature</strong> (state-regulated).
              </p>
            </div>
            <div className="bg-white/5 border border-brandGold/30 p-6 rounded-2xl">
              <span className="block text-brandGold text-[10px] font-bold uppercase tracking-widest mb-1">Oxford Base</span>
              <span className="text-3xl font-black text-white font-serif">$100</span>
            </div>
            <div className="bg-white/5 border border-brandGold/30 p-6 rounded-2xl">
              <span className="block text-brandGold text-[10px] font-bold uppercase tracking-widest mb-1">Local / HQ Base</span>
              <span className="text-3xl font-black text-white font-serif">$50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-brandNavy font-serif leading-tight">Bridging the Gap Between <br /><span className="text-brandGold">Legal Authority</span> & <span className="text-brandGold">Logistics</span></h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Most notaries are found in banks or stationary offices. We are built for the I-55 corridor. Our vehicles are rolling offices with the technology required to handle $2M real estate closings at a kitchen table.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="border-l-4 border-brandGold pl-4">
                    <h4 className="font-bold text-brandNavy uppercase text-xs">Punctuality</h4>
                    <p className="text-gray-500 text-xs mt-1">We arrive 5 minutes early, every time.</p>
                 </div>
                 <div className="border-l-4 border-brandGold pl-4">
                    <h4 className="font-bold text-brandNavy uppercase text-xs">Precision</h4>
                    <p className="text-gray-500 text-xs mt-1">Zero-defect document verification.</p>
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-64 bg-slate-900 rounded-3xl flex items-center justify-center p-8 border-2 border-slate-800">
                  <span className="text-brandGold font-black text-6xl opacity-20">7</span>
                  <p className="absolute text-white text-xs font-bold uppercase tracking-widest">Counties Served</p>
               </div>
               <div className="h-64 bg-brandNavy rounded-3xl flex flex-col items-center justify-center p-8 border-2 border-brandGold/20 mt-12">
                  <span className="text-brandGold font-bold text-3xl mb-2">24/7</span>
                  <p className="text-gray-400 text-[10px] uppercase text-center font-bold tracking-widest">Dispatch Availability</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brandLight">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Ready to Book Your Mobile Session?</h2>
           <p className="text-gray-500 mb-10 font-light">Join the Title Companies, HR Firms, and Law Offices that trust the North MS Logistics Unit.</p>
           <Link to="/contact" className="inline-block bg-brandNavy text-white font-bold py-5 px-12 rounded-xl text-xl hover:bg-brandGold hover:text-brandNavy transition shadow-2xl uppercase tracking-widest">
              Contact Dispatch
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
