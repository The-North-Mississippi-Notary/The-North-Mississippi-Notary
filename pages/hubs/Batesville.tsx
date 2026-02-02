
import React from 'react';
import { Link } from 'react-router-dom';

const BatesvilleHub: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Mobile Notary Batesville, MS</h1>
          <p className="text-brandGold text-lg uppercase tracking-[0.3em] font-bold">Panola County Dispatch District</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Batesville Rate: $75.00 Base Fee</h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              We provide efficient mobile notary and signing agent services to the <strong>Batesville</strong> hub. Our rate for Panola County is $75.00 for travel and fabrication, with the standard state-regulated $5.00 per signature added.
            </p>
            <div className="bg-brandLight p-6 rounded-xl border border-gray-100 mb-8">
              <h3 className="font-bold text-brandNavy mb-4">Satellite Hubs Served in Panola:</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <li>• Pope, MS</li>
                <li>• Courtland Hub</li>
                <li>• Sardis Lake Area</li>
                <li>• Como & Crenshaw</li>
                <li>• Panola Medical Center</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-brandNavy text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-brandGold hover:text-brandNavy transition">
              Dispatch to Batesville ($75)
            </Link>
          </div>
          <div className="relative">
             <div className="w-full aspect-square bg-slate-900 rounded-3xl flex flex-col items-center justify-center p-12 text-center border-4 border-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 gold-accent-pattern opacity-10"></div>
                <span className="text-brandGold text-6xl font-black font-serif mb-4">BV</span>
                <span className="text-white text-xl uppercase tracking-widest font-bold">Panola County</span>
                <div className="w-24 h-1 bg-brandGold my-6"></div>
                <p className="text-gray-400 text-sm font-light">I-55 & HWY 6 Junction Logistics</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatesvilleHub;
