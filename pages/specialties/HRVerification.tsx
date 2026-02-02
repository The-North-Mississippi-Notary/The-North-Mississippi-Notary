
import React from 'react';
import { Link } from 'react-router-dom';

const HRVerification: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-brandNavy py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">I-9 & Employment Verification</h1>
          <p className="text-brandGold text-lg uppercase tracking-widest font-bold">Remote Authorized Representative Services</p>
        </div>
      </div>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-3xl font-bold text-brandNavy font-serif mb-6">Streamlined Remote Hiring for North MS</h2>
          <p className="mb-6">
            As a mobile authorized representative, we help out-of-state employers verify the physical employment eligibility documents for their remote staff in North Mississippi. We serve the entire corridor from <strong>Oxford</strong> to <strong>Southaven</strong>.
          </p>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-10">
             <h4 className="font-bold text-brandNavy mb-4">How It Works:</h4>
             <ol className="space-y-4 text-sm">
                <li className="flex gap-4">
                  <span className="bg-brandGold text-brandNavy w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <span><strong>Schedule:</strong> The remote employee or HR team schedules a mobile meeting at a residence or public office.</span>
                </li>
                <li className="flex gap-4">
                  <span className="bg-brandGold text-brandNavy w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <span><strong>Physical Inspection:</strong> We physically inspect original Section 2 documents (Passport, Driver's License, SSC, etc.) on-site.</span>
                </li>
                <li className="flex gap-4">
                  <span className="bg-brandGold text-brandNavy w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <span><strong>Submission:</strong> We sign as the Authorized Representative on the I-9 form and provide high-res scans of the documents immediately.</span>
                </li>
             </ol>
          </div>
          <div className="text-center">
             <Link to="/contact" className="bg-brandNavy text-white font-bold py-5 px-12 rounded-lg text-xl hover:bg-brandGold hover:text-brandNavy transition shadow-2xl">Book I-9 Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRVerification;
