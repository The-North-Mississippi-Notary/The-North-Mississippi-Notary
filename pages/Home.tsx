
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero-gradient relative text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded bg-brandGold/20 border border-brandGold text-brandGold text-xs font-bold tracking-wider mb-6 uppercase">
              Official Mississippi Commissioned Notary Unit
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight font-serif">
              More Than Just a Stamp.<br />
              <span className="text-brandGold">A Mobile Office.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl">
              Based in Tillatoba, MS. We combine the authority of a Notary Public with the capabilities of a modern technology firm. Printing, scanning, and verification delivered to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-brandGold text-brandNavy font-bold rounded text-lg hover:bg-brandGoldHover transition shadow-lg">
                Book a Session
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white/5 border border-gray-600 hover:border-brandGold hover:bg-white/10 rounded text-lg font-semibold transition">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Required Fee Disclosure Banner */}
      <div className="bg-brandNavy border-y border-brandGold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-brandGold font-bold text-sm uppercase tracking-widest mb-2">Transparent MS Regulation Disclosure</h3>
              <p className="text-white text-sm max-w-2xl leading-relaxed font-light">
                Standard notary services in MS are regulated at <strong>$5 per signature</strong>. As a mobile unit, we charge a travel and fabrication convenience fee based on your distance from our hubs in <strong>Tillatoba</strong>.
              </p>
            </div>
            <div className="bg-white/5 border border-brandGold/30 p-6 rounded-xl text-center min-w-[200px]">
              <span className="block text-brandGold text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Base Mobile Fee</span>
              <span className="text-4xl font-black text-white font-serif">$35.00</span>
              <span className="block text-gray-400 text-[10px] mt-1">Within Hub Radius</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="px-4">
              <h3 className="text-brandNavy font-bold text-sm uppercase mb-1">Data Security</h3>
              <p className="text-gray-500 text-sm">Enterprise-grade NPPI protection for loan docs.</p>
            </div>
            <div className="px-4 pt-4 md:pt-0">
              <h3 className="text-brandNavy font-bold text-sm uppercase mb-1">On-Site Printing</h3>
              <p className="text-gray-500 text-sm">Dual-tray laser printing and scanning in-vehicle.</p>
            </div>
            <div className="px-4 pt-4 md:pt-0">
              <h3 className="text-brandNavy font-bold text-sm uppercase mb-1">E&O Insured</h3>
              <p className="text-gray-500 text-sm">Bonded and Background Screened Professionals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brandNavy mb-6 font-serif">The Modern Notary Experience</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Finding a notary during business hours is hard. Finding one that can print a 150-page loan package at 8 PM and meet you at a truck stop or hospital is our specialty.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The North MS Notary was built to bridge that gap. Our Mobile Units serve the I-55 corridor from Southaven to Grenada and all surrounding counties. We aren't just a signature; we are a logistics partner.
              </p>
              <ul className="space-y-4">
                {[
                  '24/7 Availability (By Appointment)',
                  'Hospital & Jail Visits',
                  'Enterprise-Level Scanbacks',
                  'Professional Attire & Conduct'
                ].map((item) => (
                  <li key={item} className="flex items-center text-brandNavy font-semibold">
                    <svg className="w-5 h-5 text-brandGold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800" 
                alt="Professional Workspace" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brandGold p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-brandNavy font-bold text-4xl">7+</p>
                <p className="text-brandNavy text-sm font-semibold uppercase tracking-widest">Counties Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-brandLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brandNavy font-serif">Core Capabilities</h2>
            <div className="w-24 h-1 bg-brandGold mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real Estate Signings',
                desc: 'Preferred LSA for title companies. Refinance, Purchase, HELOC, and HECM especialista.',
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
              },
              {
                title: 'Employment Verification',
                desc: 'Remote I-9 Authorized Representative services. We verify physical documents on-site.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              },
              {
                title: 'Field Inspections',
                desc: 'Eyes and ears for out-of-state entities. Occupancy checks, business verifications, and asset photos.',
                icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
              }
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-brandGold transition group">
                <div className="w-12 h-12 bg-brandNavy/5 rounded-lg flex items-center justify-center text-brandGold mb-6 group-hover:bg-brandNavy group-hover:text-white transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brandNavy mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-brandGold font-bold text-sm uppercase tracking-wider flex items-center hover:translate-x-1 transition">
                  Details <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
