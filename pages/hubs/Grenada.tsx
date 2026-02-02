
import React from 'react';
import { Link } from 'react-router-dom';

const GrenadaHub: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Notary Public Grenada, MS</h1>
          <p className="text-brandGold text-lg uppercase tracking-[0.3em] font-bold">Grenada County & Lake District</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brandNavy font-serif">Grenada Rate: $55.00 Base Fee</h2>
          <p className="text-gray-600 mt-4 leading-relaxed font-light">
            Our hub in <strong>Tillatoba</strong> is minutes from Grenada, MS. We offer reliable mobile response to <strong>UMMC Grenada</strong>, business offices, and residential communities around the Lake for a flat $55.00 mobile fee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-brandLight p-8 rounded-2xl text-center border border-gray-100">
              <h3 className="font-bold text-brandNavy mb-2">Hospital Visits</h3>
              <p className="text-xs text-gray-500 mb-4">Bedside signings at UMMC Grenada for Healthcare Directives and POA.</p>
              <Link to="/hospital-notary" className="text-brandGold font-bold text-xs uppercase hover:underline">Medical Data</Link>
           </div>
           <div className="bg-brandLight p-8 rounded-2xl text-center border border-gray-100">
              <h3 className="font-bold text-brandNavy mb-2">Lake District</h3>
              <p className="text-xs text-gray-500 mb-4">Service to Gore Springs and Grenada Lake residential properties.</p>
              <Link to="/contact" className="text-brandGold font-bold text-xs uppercase hover:underline">Book Location</Link>
           </div>
           <div className="bg-brandLight p-8 rounded-2xl text-center border border-gray-100">
              <h3 className="font-bold text-brandNavy mb-2">Business Units</h3>
              <p className="text-xs text-gray-500 mb-4">I-55 logistics for industrial sites and business centers.</p>
              <Link to="/contact" className="text-brandGold font-bold text-xs uppercase hover:underline">Dispatch Now</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default GrenadaHub;
