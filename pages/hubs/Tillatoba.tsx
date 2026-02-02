
import React from 'react';
import { Link } from 'react-router-dom';

const TillatobaHub: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Tillatoba HQ & Logistics</h1>
          <p className="text-brandGold text-lg uppercase tracking-[0.3em] font-bold">Operational Hub for North Mississippi</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">HQ Rate: $50.00 Local Fee</h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              Located in <strong>Tillatoba, MS</strong>, our dispatch center provides rapid local service to the Enid Lake and Oakland areas. This is the heart of our 7-county logistics unit, offering our most competitive base rate for Yalobusha County.
            </p>
            <div className="bg-brandLight p-6 rounded-xl border border-gray-100 mb-8">
              <h3 className="font-bold text-brandNavy mb-4">Immediate Local Dispatch:</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <li>• Tillatoba / Scobey Hub</li>
                <li>• Oakland & Enid Lake</li>
                <li>• Water Valley District</li>
                <li>• Coffeeville Hub</li>
                <li>• Charleston Corridor</li>
                <li>• Cascilla & Scoby Communities</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-brandNavy text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-brandGold hover:text-brandNavy transition">
              Book Local Service ($50)
            </Link>
          </div>
          <div className="relative">
             <div className="w-full aspect-video bg-brandNavy rounded-2xl flex items-center justify-center p-8 border-2 border-brandGold/30 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 gold-accent-pattern opacity-10"></div>
                <div className="text-center">
                   <span className="block text-brandGold font-black text-4xl mb-2">HQ 38961</span>
                   <span className="text-white text-xs uppercase tracking-[0.4em]">Operations Center</span>
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-brandGold p-8 rounded-xl shadow-xl text-brandNavy font-black text-2xl">
               HQ UNIT 01
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TillatobaHub;
