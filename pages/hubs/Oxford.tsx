
import React from 'react';
import { Link } from 'react-router-dom';

const OxfordHub: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Mobile Notary Oxford, MS</h1>
          <p className="text-brandGold text-lg uppercase tracking-[0.3em] font-bold">Lafayette County & Ole Miss Campus</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Oxford Market Pricing: $100.00 Base Fee</h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              We provide premium mobile office support to the <strong>Oxford Square</strong>, the <strong>University of Mississippi</strong>, and the medical district. Our Oxford rate reflects the high-demand nature of this corridor and our commitment to punctuality in Square traffic.
            </p>
            <div className="bg-brandLight p-6 rounded-xl border border-gray-100 mb-8">
              <h3 className="font-bold text-brandNavy mb-4 flex items-center">
                <svg className="w-5 h-5 text-brandGold mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                Primary Dispatch Points:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-500">
                <li>• Baptist Memorial North MS</li>
                <li>• Ole Miss Student Union</li>
                <li>• Lafayette County Courthouse</li>
                <li>• The Square Legal Offices</li>
                <li>• Oxford-University Airport</li>
                <li>• Taylor & Abbeville Satellite Hubs</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-brandNavy text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-brandGold hover:text-brandNavy transition">
              Dispatch to Oxford ($100)
            </Link>
          </div>
          <div className="relative">
             <div className="w-full aspect-square bg-brandNavy rounded-2xl flex flex-col items-center justify-center p-12 text-center border-4 border-brandGold/20 shadow-2xl">
                <span className="text-brandGold text-6xl font-black font-serif mb-4">OX</span>
                <span className="text-white text-xl uppercase tracking-widest font-bold">Lafayette County</span>
                <div className="w-24 h-1 bg-brandGold my-6"></div>
                <p className="text-gray-400 text-sm italic">Mobile Office Dispatch Hub 38655</p>
             </div>
             <div className="absolute -bottom-4 -left-4 bg-brandGold p-6 rounded-xl text-brandNavy font-black text-xl shadow-xl">
               Rate: $100
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OxfordHub;
