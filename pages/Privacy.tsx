
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-600">
      <h1 className="text-3xl font-bold text-brandNavy font-serif mb-8 border-b border-brandGold pb-4">Privacy Policy</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-brandNavy mb-2">1. Data Collection</h2>
          <p>The North Mississippi Notary collects personal information necessary to fulfill our legal obligations as a commissioned Notary Public in the State of Mississippi. This includes information found on identification documents and the documents to be notarized.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brandNavy mb-2">2. NPPI Protection</h2>
          <p>We adhere to GLBA standards for protecting Non-Public Personal Information (NPPI). Document fabrication in our mobile units is handled via encrypted local connections. We do not store digital copies of your sensitive loan documents on our local hardware longer than necessary for printing or transmission.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brandNavy mb-2">3. No Third-Party Sales</h2>
          <p>We do not sell your personal data. Information is only shared with entities involved in your transaction (e.g., your title company or lender) or as required by Mississippi law (e.g., Notary Journal inspection by authorized officials).</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brandNavy mb-2">4. Digital Security</h2>
          <p>Our mobile units utilize enterprise-grade VPNs and encrypted communication channels for all scanbacks and document transmissions to ensure your data remains secure while in transit.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
