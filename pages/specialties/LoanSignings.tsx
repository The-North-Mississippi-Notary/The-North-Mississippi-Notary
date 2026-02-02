
import React from 'react';
import { Link } from 'react-router-dom';

const LoanSignings: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <div className="bg-brandNavy py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Certified Loan Signing Agent</h1>
          <p className="text-brandGold text-lg uppercase tracking-widest font-bold">Preferred Partner for Title & Escrow</p>
        </div>
      </div>

      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-brandNavy font-serif mb-8 text-center">Closing the Gap in Document Logistics</h2>
          <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed mb-12">
            <p className="mb-6">
              The North Mississippi Notary provides white-glove loan signing services across 7 counties. We understand that as a Loan Signing Agent, we are the only face-to-face interaction the borrower has with the lender's team. We represent your brand with precision, punctuality, and professional attire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
               <div className="bg-brandLight p-6 rounded-xl">
                  <h4 className="font-bold text-brandNavy mb-2">Dual-Tray Laser Printing</h4>
                  <p className="text-sm">We carry high-speed, dual-tray Brother laser printers in our mobile units to handle Legal and Letter sized documents on-site without errors.</p>
               </div>
               <div className="bg-brandLight p-6 rounded-xl">
                  <h4 className="font-bold text-brandNavy mb-2">Encrypted Scanbacks</h4>
                  <p className="text-sm">Industrial scanners allow us to provide clear, full-package scanbacks immediately after the signing is complete, ensuring funding occurs on schedule.</p>
               </div>
            </div>
            <h3 className="text-xl font-bold text-brandNavy mb-4">Packages We Specialise In:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-brandNavy text-sm">
               <li className="flex items-center"><svg className="w-4 h-4 text-brandGold mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg> Refinance</li>
               <li className="flex items-center"><svg className="w-4 h-4 text-brandGold mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg> Purchase</li>
               <li className="flex items-center"><svg className="w-4 h-4 text-brandGold mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg> HELOC</li>
               <li className="flex items-center"><svg className="w-4 h-4 text-brandGold mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg> Seller Docs</li>
               <li className="flex items-center"><svg className="w-4 h-4 text-brandGold mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg> HECM / Reverse</li>
               <li className="flex items-center"><svg className="w-4 h-4 text-brandGold mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg> Loan Mods</li>
            </ul>
          </div>
          <div className="text-center">
             <Link to="/contact" className="bg-brandGold text-brandNavy font-bold py-5 px-12 rounded-lg text-xl hover:bg-brandGoldHover transition shadow-2xl">
                Partner with Us
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoanSignings;
