
import React from 'react';
import { Link } from 'react-router-dom';

const HernandoHub: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Notary Public Hernando, MS</h1>
          <p className="text-brandGold text-lg uppercase tracking-[0.3em] font-bold">Serving the DeSoto County Seat</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=800" alt="Hernando Court Square" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Professional Signings at the Square</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Specializing in <strong>Real Estate closings</strong> and <strong>Legal document verification</strong> in the Hernando area. We arrive at your office, residence, or even the coffee shops at the Square fully equipped with printing and scanning technology.
            </p>
            <div className="bg-brandLight p-6 rounded-xl border border-gray-100 mb-8">
              <h3 className="font-bold text-brandNavy mb-4">Landmarks We Service:</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <li>• DeSoto County Courthouse</li>
                <li>• Hernando West District</li>
                <li>• Coldwater Satellite Hub</li>
                <li>• Independence Regional Area</li>
              </ul>
            </div>
            <Link to="/contact" className="bg-brandGold text-brandNavy font-bold py-4 px-10 rounded shadow-lg hover:bg-brandGoldHover transition">Request Hernando Service</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HernandoHub;
