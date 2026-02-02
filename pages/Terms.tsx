
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-600">
      <h1 className="text-3xl font-bold text-brandNavy font-serif mb-8 border-b border-brandGold pb-4">Terms of Service</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-brandNavy mb-2">1. Service Agreements</h2>
          <p>Booking a session with The North Mississippi Notary constitutes an agreement to pay for mobile travel and fabrication services. These fees are separate from the state-regulated per-signature notary fee.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brandNavy mb-2">2. Identity Verification</h2>
          <p>By law, we cannot perform a notarization without a valid, unexpired government-issued photo ID. If a session is booked and the signer does not possess valid ID upon arrival, the full mobile travel fee remains due and payable.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brandNavy mb-2">3. Limitation of Liability</h2>
          <p>The North Mississippi Notary provides document verification services but does not provide legal advice. We are not responsible for the legal efficacy of the documents being signed.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-brandNavy mb-2">4. Payment Terms</h2>
          <p>Payment is due at the time of service unless billing arrangements have been established for title companies or recurring corporate clients. We accept credit cards, digital payments, and cash.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
