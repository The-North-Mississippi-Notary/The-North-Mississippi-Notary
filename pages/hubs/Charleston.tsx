
import React from 'react';
import { Link } from 'react-router-dom';

const CharlestonHub: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Mobile Notary Charleston, MS</h1>
          <p className="text-brandGold text-lg uppercase tracking-[0.3em] font-bold">Serving Tallahatchie County Hubs</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="w-full aspect-square bg-slate-900 rounded-3xl flex flex-col items-center justify-center p-12 text-center border-4 border-slate-700 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 gold-accent-pattern opacity-10"></div>
                <span className="text-brandGold text-6xl font-black font-serif mb-4">CH</span>
                <span className="text-white text-xl uppercase tracking-widest font-bold">Tallahatchie County</span>
                <div className="w-24 h-1 bg-brandGold my-6"></div>
                <p className="text-gray-400 text-sm font-light">Charleston / Sumner District</p>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Dedicated Service to the Delta Edge</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Serving <strong>Charleston</strong>, <strong>Sumner</strong>, and <strong>Tutwiler</strong>. Based nearby in Tillatoba, our mobile units provide the most reliable professional notary response for Tallahatchie County legal and medical needs.
            </p>
            <div className="bg-brandLight p-6 rounded-xl border border-gray-100 mb-8">
              <h3 className="font-bold text-brandNavy mb-4">Cities Served in Tallahatchie:</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <li>• Charleston Hub</li>
                <li>• Sumner Court Square</li>
                <li>• Tutwiler & Webb</li>
                <li>• Glendora District</li>
                <li>• Phillip Community</li>
                <li>• Tallahatchie General</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-brandGold text-brandNavy font-bold py-4 px-10 rounded shadow-lg hover:bg-brandGoldHover transition">
              Request Charleston Dispatch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharlestonHub;
