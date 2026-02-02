
import React from 'react';
import { Link } from 'react-router-dom';

const SouthavenHub: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Mobile Notary Southaven, MS</h1>
          <p className="text-brandGold text-lg uppercase tracking-[0.3em] font-bold">Serving DeSoto County & Olive Branch</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1 relative">
             <div className="w-full aspect-square bg-slate-900 rounded-3xl flex flex-col items-center justify-center p-12 text-center border-4 border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 gold-accent-pattern opacity-10"></div>
                <span className="text-brandGold text-6xl font-black font-serif mb-4">SH</span>
                <span className="text-white text-xl uppercase tracking-widest font-bold">DeSoto County</span>
                <div className="w-24 h-1 bg-brandGold my-6"></div>
                <p className="text-gray-400 text-sm font-light">Southaven / Olive Branch Corridor</p>
             </div>
             <div className="absolute -top-4 -right-4 bg-brandGold p-6 rounded-xl text-brandNavy font-black text-xl shadow-xl">
               Zip: 38671 / 38654
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">DeSoto County's Premier Signing Agent</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Serving the <strong>Southaven</strong>, <strong>Olive Branch</strong>, and <strong>Hernando</strong> communities, we provide professional document verification with mobile printing capabilities. Our technicians are frequently at the <strong>Landers Center</strong> area and <strong>Baptist Memorial Hospital - DeSoto</strong>.
            </p>
            <div className="bg-brandLight p-6 rounded-xl border border-gray-100 mb-8">
              <h3 className="font-bold text-brandNavy mb-4">Common Dispatch Points in DeSoto:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-500">
                <li>• Baptist Memorial DeSoto</li>
                <li>• Tanger Outlets Southaven</li>
                <li>• Olive Branch Business District</li>
                <li>• Hernando Courthouse Square</li>
                <li>• Horn Lake Residential Hub</li>
                <li>• Walls & Lake Cormorant</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-brandGold text-brandNavy font-bold py-4 px-10 rounded shadow-lg hover:bg-brandGoldHover transition">
              Dispatch to Southaven
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SouthavenHub;
