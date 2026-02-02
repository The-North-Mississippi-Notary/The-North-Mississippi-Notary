
import React from 'react';
import { Link } from 'react-router-dom';

const EstatePlanning: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Estate & Trust Planning</h1>
          <p className="text-brandGold text-lg uppercase tracking-widest font-bold">Securing Your Legacy with Precision Notarization</p>
        </div>
      </div>

      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-brandNavy font-serif mb-8 text-center">Comprehensive Legal Document Logistics</h2>
          <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
            <p className="mb-6">
              Estate planning documents are the blueprints of your legacy. A single technical error in the notarization of a <strong>Last Will</strong> or <strong>Living Trust</strong> can lead to years of legal challenges. We specialize in the meticulous execution of estate packages.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
               <div className="p-6 bg-brandLight rounded-xl text-center">
                  <h4 className="font-bold text-brandNavy mb-2">Last Wills</h4>
                  <p className="text-[10px] text-gray-500">Coordination of witnesses and flawless self-proving affidavits.</p>
               </div>
               <div className="p-6 bg-brandLight rounded-xl text-center">
                  <h4 className="font-bold text-brandNavy mb-2">Living Trusts</h4>
                  <p className="text-[10px] text-gray-500">Notarization of complex trust restatements and amendments.</p>
               </div>
               <div className="p-6 bg-brandLight rounded-xl text-center">
                  <h4 className="font-bold text-brandNavy mb-2">Directives</h4>
                  <p className="text-[10px] text-gray-500">Power of Attorney and Advanced Healthcare Directives.</p>
               </div>
            </div>

            <h3 className="text-xl font-bold text-brandNavy mb-4">Why Law Firms Choose Our Mobile Units:</h3>
            <ul className="space-y-4 text-sm mb-12">
               <li className="flex items-start">
                  <span className="text-brandGold mr-3 font-black">✓</span>
                  <span><strong>On-Site Fabrication:</strong> Need to print a revised trust page? We do it in the vehicle instantly.</span>
               </li>
               <li className="flex items-start">
                  <span className="text-brandGold mr-3 font-black">✓</span>
                  <span><strong>Witness Coordination:</strong> We can assist in coordinating the required number of disinterested witnesses for Will signings.</span>
               </li>
               <li className="flex items-start">
                  <span className="text-brandGold mr-3 font-black">✓</span>
                  <span><strong>Professional Decorum:</strong> We maintain the solemnity and professionalism these legal acts require.</span>
               </li>
            </ul>

            <div className="text-center">
               <Link to="/contact" className="bg-brandGold text-brandNavy font-bold py-4 px-10 rounded shadow-lg hover:bg-brandGoldHover transition">
                 Book Estate Session
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstatePlanning;
