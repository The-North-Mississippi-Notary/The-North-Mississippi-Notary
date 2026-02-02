
import React, { useEffect } from 'react';

const Services: React.FC = () => {
  const servicesList = [
    {
      title: 'Loan Signing Agent',
      details: 'Full-service closing agent for residential and commercial real estate. We guide borrowers through the CD, Note, Deed of Trust, and 1003. Includes dual-tray printing and immediate FedEx/UPS drop-off.',
      price: '$125.00',
      priceDisplay: '$125 - $250+',
      popular: true
    },
    {
      title: 'I-9 Verification',
      details: 'Remote Authorized Representative for Employment Eligibility Verification. We physically inspect documents and verify identities for out-of-state employers.',
      price: '$50.00',
      priceDisplay: '$50 + Travel'
    },
    {
      title: 'General Notary Work',
      details: 'Powers of Attorney, Wills, Trusts, Affidavits, and Jurats. We meet you at hospitals, nursing homes, or your residence.',
      price: '$5.00',
      priceDisplay: '$5 per Signer + Travel'
    },
    {
      title: 'Ink Fingerprinting',
      details: 'Mobile FD-258 Ink Card fingerprinting for medical licensure, security clearances, and out-of-state background checks.',
      price: '$45.00',
      priceDisplay: '$45 per Card + Travel'
    },
    {
      title: 'Apostille Courier',
      details: 'Secure transport of notarized documents to the Secretary of State in Jackson, MS for international authentication.',
      price: '0.00',
      priceDisplay: 'Quote Basis'
    },
    {
      title: 'Field Inspections',
      details: 'Commercial site inspections, residential occupancy verifications, and professional asset photography with detailed reports.',
      price: '$75.00',
      priceDisplay: 'Starts at $75'
    }
  ];

  useEffect(() => {
    // Inject Service Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Mobile Notary and Signing Agent",
      "provider": {
        "@type": "LocalBusiness",
        "name": "The North Mississippi Notary"
      },
      "areaServed": {
        "@type": "State",
        "name": "Mississippi"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Notary Services",
        "itemListElement": servicesList.map((s, i) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": s.title,
            "description": s.details
          },
          "price": s.price,
          "priceCurrency": "USD"
        }))
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-slate-50">
      <div className="hero-gradient py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <h1 className="text-4xl md:text-5xl font-bold relative z-10 font-serif">Services & Pricing</h1>
        <p className="text-gray-300 mt-4 relative z-10 font-light max-w-2xl mx-auto px-4 uppercase tracking-widest text-xs">Professional Excellence on Demand</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 rounded-2xl shadow-sm border ${service.popular ? 'border-brandGold ring-1 ring-brandGold ring-opacity-50' : 'border-gray-100'} flex flex-col hover:shadow-md transition duration-300`}
            >
              {service.popular && (
                <span className="bg-brandGold text-brandNavy text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full self-start mb-4">
                  Premier Service
                </span>
              )}
              <h3 className="text-xl font-bold text-brandNavy mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{service.details}</p>
              <div className="border-t border-gray-100 pt-6 mt-auto">
                <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Estimated Rate</span>
                <span className="text-2xl font-black text-brandNavy">{service.priceDisplay}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brandNavy rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandGold/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-bold font-serif mb-4">Mobile Unit Fabrication Fee</h2>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Standard notary services in MS are regulated at <strong>$5 per signature</strong>. As a mobile unit, we charge a travel and fabrication convenience fee based on your distance from our hubs in <strong>Tillatoba</strong>.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-brandGold/30 p-8 rounded-2xl text-center min-w-[240px]">
              <span className="block text-brandGold text-xs font-bold uppercase tracking-widest mb-2">Base Mobile Fee</span>
              <span className="text-5xl font-black font-serif">$35.00</span>
              <span className="block text-gray-400 text-xs mt-2 italic">Within Hub Radius</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
