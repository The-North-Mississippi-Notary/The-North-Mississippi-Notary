
import React from 'react';
import { Link } from 'react-router-dom';

const BusinessLogistics: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Business & Automotive Logistics</h1>
          <p className="text-brandGold text-lg uppercase tracking-widest font-bold">High-Volume Document Verification & Courier Services</p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Efficiency for the North MS Business Community</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              For businesses and private sellers, time is the most valuable asset. We provide rapid mobile response for the specialized documents that keep commerce moving in <strong>Oxford</strong>, <strong>Southaven</strong>, and the <strong>I-55 Industrial Corridor</strong>.
            </p>
            
            <div className="space-y-6 mb-8">
               <div className="flex gap-4">
                  <div className="bg-brandGold/10 p-3 rounded-full h-fit"><svg className="w-5 h-5 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                  <div>
                    <h4 className="font-bold text-brandNavy">Motor Vehicle Services</h4>
                    <p className="text-sm text-gray-500">Notarization of Vehicle Titles, Bill of Sale, and Odometer Disclosure Statements for private sales and dealership off-site closings.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="bg-brandGold/10 p-3 rounded-full h-fit"><svg className="w-5 h-5 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
                  <div>
                    <h4 className="font-bold text-brandNavy">Construction & Lien Waivers</h4>
                    <p className="text-sm text-gray-500">Subcontractor Affidavits, Final Lien Waivers, and Construction Permit notarizations delivered directly to the job site.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="bg-brandGold/10 p-3 rounded-full h-fit"><svg className="w-5 h-5 text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
                  <div>
                    <h4 className="font-bold text-brandNavy">Banking & Safe Deposit</h4>
                    <p className="text-sm text-gray-500">Witnessing safe deposit box drillings and verification of contents for banking institutions.</p>
                  </div>
               </div>
            </div>
            <Link to="/contact" className="inline-block bg-brandNavy text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-brandGold hover:text-brandNavy transition">Request Business Dispatch</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-brandLight p-8 rounded-2xl border border-gray-100 text-center">
                <span className="block text-2xl font-black text-brandGold">24/7</span>
                <span className="text-[10px] uppercase font-bold text-gray-500">Emergency Business Dispatch</span>
             </div>
             <div className="bg-brandNavy p-8 rounded-2xl text-center">
                <span className="block text-2xl font-black text-white">4G/5G</span>
                <span className="text-[10px] uppercase font-bold text-brandGold">In-Vehicle High Speed Internet</span>
             </div>
             <div className="col-span-2 bg-slate-900 h-48 rounded-2xl flex items-center justify-center p-8 border-2 border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 gold-accent-pattern opacity-10"></div>
                <div className="text-center">
                   <span className="block text-brandGold font-bold uppercase tracking-widest text-xs mb-2">Logistics Unit 01</span>
                   <span className="text-white font-light text-sm italic">Mobile Office & Documentation Unit</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessLogistics;
