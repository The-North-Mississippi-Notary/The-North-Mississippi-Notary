
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const servicesList = [
    {
      title: 'Loan Signing Agent',
      details: 'Full-service closing agent for residential and commercial real estate. CD, Note, Deed of Trust, and 1003. Dual-tray printing and same-day FedEx/UPS drop-off.',
      priceDisplay: 'Base + $5/stamp',
      popular: true,
      link: '/loan-signing-agent'
    },
    {
      title: 'Family & Divorce Law',
      details: 'Divorce Decrees, Settlement Agreements, and Adoptions. We provide a neutral, professional environment for sensitive signings.',
      priceDisplay: 'Base + $5/stamp',
      link: '/specialty-family-law'
    },
    {
      title: 'Estate & Trust',
      details: 'Wills, Trusts, and Power of Attorney. We coordinate with law firms for flawless execution at residences or care facilities.',
      priceDisplay: 'Base + $5/stamp',
      link: '/specialty-estate-planning'
    },
    {
      title: 'I-9 Verification',
      details: 'Remote Authorized Representative for employers. Physical inspection of documents on-site for remote staff.',
      priceDisplay: '$50.00 Flat + Base',
      link: '/i9-verification'
    },
    {
      title: 'Healthcare & Medical',
      details: 'Bedside notarizations at hospitals (Baptist North/DeSoto, UMMC). Expert in Advanced Healthcare Directives.',
      priceDisplay: 'Base + $5/stamp',
      link: '/hospital-notary'
    },
    {
      title: 'Business Logistics',
      details: 'Motor Vehicle Titles, Lien Waivers, Contractor Affidavits, and Bank Safe Deposit Box verifications.',
      priceDisplay: 'Base + $5/stamp',
      link: '/specialty-business-logistics'
    }
  ];

  return (
    <div className="bg-slate-50">
      <div className="hero-gradient py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <h1 className="text-4xl md:text-5xl font-bold relative z-10 font-serif">Services & Fabrication Rates</h1>
        <p className="text-gray-300 mt-4 relative z-10 font-light max-w-2xl mx-auto px-4 uppercase tracking-widest text-xs">Serving the 7-County North MS Territory</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition">
              <h3 className="text-xl font-bold text-brandNavy mb-4 font-serif uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{service.details}</p>
              <div className="border-t border-gray-50 pt-6 mt-auto">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Service Rate</span>
                <span className="text-xl font-black text-brandNavy">{service.priceDisplay}</span>
              </div>
              <Link to={service.link} className="mt-4 text-brandGold font-bold text-[10px] uppercase tracking-widest flex items-center hover:translate-x-1 transition">
                Full Page Data & Logistics
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Hub Pricing Card */}
        <div className="mt-16 bg-brandNavy rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 gold-accent-pattern opacity-10"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-4 text-brandGold">Standard Mobile Base Fees</h2>
              <p className="text-gray-300 font-light leading-relaxed mb-4">
                Fees cover travel, dual-tray fabrication, and secure logistics. <strong>Large packets requiring printing</strong> are billed at-cost for materials ($0.25 per page).
              </p>
              <Link to="/calculator" className="text-brandGold font-bold text-xs uppercase tracking-widest hover:underline">
                 Open Full Pricing Calculator →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/10 p-4 rounded-xl text-center border border-brandGold/30">
                  <span className="block text-[10px] uppercase font-bold text-brandGold mb-1">Tillatoba (HQ)</span>
                  <span className="text-3xl font-black">$50</span>
               </div>
               <div className="bg-white/10 p-4 rounded-xl text-center border border-brandGold/30">
                  <span className="block text-[10px] uppercase font-bold text-brandGold mb-1">Oxford</span>
                  <span className="text-3xl font-black">$100</span>
               </div>
               <div className="bg-white/10 p-4 rounded-xl text-center border border-brandGold/30">
                  <span className="block text-[10px] uppercase font-bold text-brandGold mb-1">Batesville</span>
                  <span className="text-3xl font-black">$75</span>
               </div>
               <div className="bg-white/10 p-4 rounded-xl text-center border border-brandGold/30">
                  <span className="block text-[10px] uppercase font-bold text-brandGold mb-1">Grenada</span>
                  <span className="text-3xl font-black">$55</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
