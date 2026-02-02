
import React from 'react';
import { Link } from 'react-router-dom';

const SenatobiaHub: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Mobile Notary Senatobia, MS</h1>
          <p className="text-brandGold text-lg uppercase tracking-[0.3em] font-bold">Serving Tate County & Coldwater Hubs</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Tate County's Rapid Mobile Office</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Serving <strong>Senatobia</strong>, <strong>Coldwater</strong>, and <strong>Independence</strong>. We provide on-site document verification at Northwest MS Community College, the Senatobia court district, and all local professional centers.
            </p>
            <div className="bg-brandLight p-6 rounded-xl border border-gray-100 mb-8">
              <h3 className="font-bold text-brandNavy mb-4">Landmarks Served in Tate:</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <li>• NWCC Campus</li>
                <li>• Tate County Courthouse</li>
                <li>• Arkabutla Lake Area</li>
                <li>• Coldwater Hub</li>
                <li>• Independence Regional</li>
                <li>• Looxahoma Community</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-brandNavy text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-brandGold hover:text-brandNavy transition">
              Dispatch to Senatobia
            </Link>
          </div>
          <div className="relative">
             <div className="w-full aspect-square bg-brandNavy rounded-3xl flex flex-col items-center justify-center p-12 text-center border-4 border-brandGold shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 gold-accent-pattern opacity-10"></div>
                <span className="text-brandGold text-6xl font-black font-serif mb-4">SE</span>
                <span className="text-white text-xl uppercase tracking-widest font-bold">Tate County</span>
                <div className="w-24 h-1 bg-brandGold my-6"></div>
                <p className="text-gray-400 text-sm font-light">Senatobia / NWCC Logistics</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SenatobiaHub;
