
import React from 'react';
import { Link } from 'react-router-dom';

const MedicalSignings: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Hospital & Clinical Notary</h1>
          <p className="text-brandGold text-lg uppercase tracking-widest font-bold">Compassionate & Urgent Medical Signings</p>
        </div>
      </div>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Expertise in Sensitive Healthcare Environments</h2>
          <p className="mb-6">
            When health crises occur, critical legal documents like <strong>Advanced Healthcare Directives</strong> and <strong>Power of Attorney</strong> often need immediate notarization. We specialize in mobile visits to hospitals, nursing homes, and hospice facilities across North Mississippi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
             <div className="space-y-4">
                <h4 className="font-bold text-brandNavy uppercase text-xs tracking-widest border-b border-brandGold pb-2">Facilities We Regularly Visit:</h4>
                <ul className="text-sm space-y-2">
                   <li>• Baptist Memorial North MS (Oxford)</li>
                   <li>• Baptist Memorial DeSoto (Southaven)</li>
                   <li>• UMMC Grenada</li>
                   <li>• Panola Medical Center (Batesville)</li>
                   <li>• Local Assisted Living Facilities</li>
                </ul>
             </div>
             <div className="space-y-4">
                <h4 className="font-bold text-brandNavy uppercase text-xs tracking-widest border-b border-brandGold pb-2">Documents Handled:</h4>
                <ul className="text-sm space-y-2">
                   <li>• Durable Power of Attorney</li>
                   <li>• Healthcare Proxy Forms</li>
                   <li>• Last Will & Testament</li>
                   <li>• Trust Signatures</li>
                   <li>• HIPAA Authorizations</li>
                </ul>
             </div>
          </div>
          <div className="bg-brandNavy text-white p-8 rounded-2xl shadow-xl text-center">
             <h3 className="text-xl font-bold mb-4">Need an Urgent Hospital Visit?</h3>
             <p className="text-gray-400 mb-6 text-sm">Our mobile units are ready for immediate dispatch. We understand the urgency of clinical settings.</p>
             <a href="tel:6013000702" className="inline-block bg-brandGold text-brandNavy font-bold py-3 px-8 rounded-lg hover:bg-brandGoldHover transition">
                Call for Priority Dispatch
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalSignings;
