
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="hero-gradient py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <h1 className="text-4xl md:text-5xl font-bold relative z-10 font-serif">The Technologist Notary</h1>
        <p className="text-gray-300 mt-4 relative z-10 font-light max-w-2xl mx-auto px-4 uppercase tracking-widest text-xs">Innovation in Mobile Field Services</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-brandNavy font-serif border-l-4 border-brandGold pl-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              The North Mississippi Notary was founded on a simple realization: the professional service industry in North Mississippi was lacking a truly mobile, technology-forward solution for critical document logistics.
            </p>
            <p className="text-gray-600 leading-relaxed">
              While traditional notaries operate from stationary offices or offer limited travel, we viewed the vehicle as an opportunity. By outfitting our fleet with enterprise-grade VPNs, high-capacity dual-tray laser printers, and industrial document scanners, we transformed the "Mobile Notary" into a "Mobile Fabrication Unit."
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we are the preferred partner for out-of-state title companies, law firms, and employment agencies who need "boots on the ground" with technical capabilities that go far beyond a simple rubber stamp.
            </p>
          </div>
          <div>
            <div className="bg-brandLight p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-brandNavy">Credentials & Compliance</h3>
              
              <div className="flex items-start">
                <div className="bg-brandGold p-2 rounded mr-4">
                  <svg className="w-6 h-6 text-brandNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brandNavy">NNA Certified</h4>
                  <p className="text-sm text-gray-500">National Notary Association Certified Signing Agent and background screened.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brandGold p-2 rounded mr-4">
                  <svg className="w-6 h-6 text-brandNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brandNavy">E&O Insured</h4>
                  <p className="text-sm text-gray-500">Errors & Omissions coverage up to $25,000 for your protection and peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brandGold p-2 rounded mr-4">
                  <svg className="w-6 h-6 text-brandNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brandNavy">GLBA Compliant</h4>
                  <p className="text-sm text-gray-500">We adhere to the Gramm-Leach-Bliley Act standards for protecting consumer nonpublic personal information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-brandNavy font-serif mb-12">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Punctuality', text: 'We respect your time. If we say 2:00 PM, we are there at 1:55 PM.' },
              { label: 'Precision', text: 'Zero defect mindset. We check every document three times before leaving.' },
              { label: 'Privacy', text: 'Your data is encrypted and handled with extreme confidentiality.' }
            ].map((item) => (
              <div key={item.label} className="text-center p-6">
                <div className="text-brandGold font-serif text-5xl mb-4 font-black">0{['Punctuality', 'Precision', 'Privacy'].indexOf(item.label) + 1}</div>
                <h4 className="text-xl font-bold text-brandNavy mb-2">{item.label}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
