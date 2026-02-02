
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { 
      q: "What is your mobile travel and fabrication fee?", 
      a: "Our fees are based on the distance from our Tillatoba HQ. Tillatoba/Oakland is $50.00, Grenada is $55.00, Batesville is $75.00, and Oxford is $100.00. These fees cover the operation of our mobile fabrication units (logistics and mobile office maintenance)." 
    },
    { 
      q: "Do you charge for printing documents?", 
      a: "Yes. We provide industrial dual-tray printing for large loan packages. To ensure we are not at a loss for materials, we charge a fair-market 'at-cost' fee of $0.25 per page for printing. This covers high-yield toner, premium paper, and maintenance." 
    },
    { 
      q: "How much do you charge per signature?", 
      a: "Per Mississippi state law, the regulated notary fee is $5.00 for each signature/stamp. This is added to the base mobile travel fee and can be calculated accurately before we arrive." 
    },
    { 
      q: "What form of ID is required in Mississippi?", 
      a: "We require a valid, unexpired government-issued photo ID. This includes a Driver's License, State ID, or Passport. Digital copies or photos of IDs are not acceptable by law; we must inspect the physical document." 
    },
    { 
      q: "Do you handle divorce and family law documents?", 
      a: "Yes. We specialize in Marital Settlement Agreements, Divorce Decrees, Custody Papers, and Adoption Consent forms. We maintain strict neutrality and professionalism in these sensitive sessions." 
    },
    { 
      q: "Can you print loan documents on-site?", 
      a: "Absolutely. Our mobile units are equipped with high-speed dual-tray laser printers. We can print full real estate packages (Legal and Letter size) and handle industrial-grade scanbacks immediately upon completion." 
    },
    { 
      q: "Do you visit hospitals or healthcare facilities?", 
      a: "Yes. We frequently provide bedside service at Baptist Memorial (Oxford & DeSoto), UMMC Grenada, and local nursing or hospice facilities for Power of Attorney and Healthcare Directives." 
    }
  ];

  return (
    <div className="bg-white">
      <div className="hero-gradient py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <h1 className="text-4xl font-bold relative z-10 font-serif">Knowledge Center & FAQ</h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="space-y-10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-100 pb-8">
              <h3 className="text-xl font-bold text-brandNavy mb-4 font-serif">Q: {faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">A: {faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-brandNavy text-white p-8 rounded-2xl">
           <h4 className="text-brandGold font-bold mb-2 uppercase tracking-widest text-xs">A Note on Legal Advice</h4>
           <p className="text-sm font-light leading-relaxed">
             I am not an attorney licensed to practice law in Mississippi. I am not allowed to draft legal records, give advice on legal matters, or charge fees for such activities. Please consult legal counsel for advice on document content.
           </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
