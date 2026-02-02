
import React from 'react';
import { Link } from 'react-router-dom';

const FamilyLaw: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Family & Divorce Law Notary</h1>
          <p className="text-brandGold text-lg uppercase tracking-widest font-bold">Compassionate, Neutral, & Professional Sessions</p>
        </div>
      </div>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Expert Verification for Life's Transitions</h2>
          <p className="mb-6">
            Legal matters involving family require more than just a signature—they require a mobile notary who understands the sensitivity and gravity of the paperwork. We provide a neutral, professional setting for all parties involved in family law proceedings across North Mississippi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
               <h4 className="font-bold text-brandNavy uppercase text-xs tracking-widest mb-4 border-b border-brandGold pb-2">Divorce & Matrimonial:</h4>
               <ul className="text-sm space-y-2">
                  <li>• Marital Settlement Agreements</li>
                  <li>• Divorce Decrees / Petitions</li>
                  <li>• Quitclaim Deeds for Asset Division</li>
                  <li>• Prenuptial & Postnuptial Agreements</li>
                  <li>• Spousal Waiver Forms</li>
               </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
               <h4 className="font-bold text-brandNavy uppercase text-xs tracking-widest mb-4 border-b border-brandGold pb-2">Parental & Adoption:</h4>
               <ul className="text-sm space-y-2">
                  <li>• Adoption Consent Documents</li>
                  <li>• Child Custody Agreements</li>
                  <li>• Minor Travel Consent Forms</li>
                  <li>• Paternity Acknowledgments</li>
                  <li>• Guardianship Affidavits</li>
               </ul>
            </div>
          </div>

          <div className="bg-brandLight p-8 rounded-2xl mb-12 border-l-4 border-brandGold">
            <h3 className="text-xl font-bold text-brandNavy mb-2">The Neutral Witness Advantage</h3>
            <p className="text-sm">
              In divorce and custody cases, emotions can run high. Our mobile units can meet parties at neutral locations—such as public libraries, professional offices, or coffee shops—to ensure a safe and legally compliant signing environment.
            </p>
          </div>

          <div className="text-center">
             <Link to="/contact" className="inline-block bg-brandNavy text-white font-bold py-5 px-12 rounded-lg text-xl hover:bg-brandGold hover:text-brandNavy transition shadow-2xl">
                Schedule Family Law Session
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyLaw;
