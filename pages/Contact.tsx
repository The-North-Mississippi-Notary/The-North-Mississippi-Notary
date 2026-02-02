
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const FORM_ENDPOINT = "https://formspree.io/f/mqelgeag"; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form.");
        }
        setLoading(false);
      }
    } catch (err) {
      setError("An error occurred. Please check your internet connection.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50">
      <div className="hero-gradient py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <h1 className="text-4xl md:text-5xl font-bold relative z-10 font-serif">Secure Service Request</h1>
        <p className="text-gray-300 mt-4 relative z-10 font-light max-w-2xl mx-auto px-4 uppercase tracking-widest text-xs">Based in Tillatoba — Serving the Oxford to Southaven Corridor</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold text-brandNavy font-serif">Direct Dispatch</h2>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-brandGold p-3 rounded-lg mr-4 transition group-hover:scale-110">
                  <svg className="w-6 h-6 text-brandNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brandNavy">Phone / Text</h4>
                  <a href="tel:6013000702" className="text-brandGold text-lg font-bold hover:underline">601-300-0702</a>
                  <p className="text-xs text-gray-400">Call for urgent hospital or campus visits.</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-brandGold p-3 rounded-lg mr-4 transition group-hover:scale-110">
                  <svg className="w-6 h-6 text-brandNavy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brandNavy">Direct Email</h4>
                  <a href="mailto:notary@northmsnotary.com" className="text-brandGold text-lg font-bold hover:underline">notary@northmsnotary.com</a>
                  <p className="text-xs text-gray-400">Email document drafts for pre-review.</p>
                </div>
              </div>

              <div className="bg-brandNavy p-6 rounded-2xl text-white">
                <h4 className="font-bold text-brandGold mb-2 uppercase tracking-widest text-xs">Regional HQ</h4>
                <p className="text-sm font-light">Tillatoba, MS 38961</p>
                <p className="text-[10px] text-gray-500 mt-2">Strategically located for I-55 rapid response.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-brandNavy font-serif mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-6">A mobile unit will contact you shortly to confirm the appointment and location.</p>
                <button onClick={() => setSubmitted(false)} className="text-brandGold font-bold hover:underline">Send another request</button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-brandNavy font-serif mb-8">Schedule Mobile Session</h3>
                <form action={FORM_ENDPOINT} method="POST" encType="multipart/form-data" onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                      <input 
                        id="name" name="name" type="text" required 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-brandNavy focus:outline-none focus:ring-2 focus:ring-brandGold/50 transition" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                      <input 
                        id="email" name="email" type="email" required 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-brandNavy focus:outline-none focus:ring-2 focus:ring-brandGold/50 transition" 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                      <input 
                        id="phone" name="phone" type="tel" required 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-brandNavy focus:outline-none focus:ring-2 focus:ring-brandGold/50 transition" 
                        placeholder="(662) 555-0123"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Service Type</label>
                      <select name="service" id="service" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-brandNavy focus:outline-none focus:ring-2 focus:ring-brandGold/50 transition">
                        <option>Loan Signing Agent Package</option>
                        <option>General Notarization (POA, Wills)</option>
                        <option>Remote I-9 Verification</option>
                        <option>Fingerprinting Session</option>
                        <option>Field Inspection Service</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Meeting Location</label>
                    <input 
                      id="location" name="location" type="text" required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-brandNavy focus:outline-none focus:ring-2 focus:ring-brandGold/50 transition" 
                      placeholder="e.g. Oxford Square, Baptist Memorial DeSoto, Residence..."
                    />
                  </div>
                  <div>
                    <label htmlFor="upload" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Upload Draft Documents (Optional)</label>
                    <input 
                      id="upload" name="upload" type="file" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brandGold/10 file:text-brandGold hover:file:bg-brandGold/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Special Instructions</label>
                    <textarea 
                      id="message" name="message" rows={4} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-brandNavy focus:outline-none focus:ring-2 focus:ring-brandGold/50 transition" 
                      placeholder="Include number of signers or specific timing needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" disabled={loading}
                    className={`w-full bg-brandNavy text-white font-bold py-4 px-6 rounded-lg transition duration-300 shadow-lg text-lg flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brandGold hover:text-brandNavy'}`}
                  >
                    {loading ? (
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : null}
                    {loading ? 'Submitting...' : 'Send Secured Request'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
