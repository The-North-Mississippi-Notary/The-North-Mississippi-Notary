
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceArea: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [estimate, setEstimate] = useState<string | null>(null);

  const calculateQuickFee = (e: React.FormEvent) => {
    e.preventDefault();
    const localZips = ['38961', '38965', '38948'];
    const oxfordZips = ['38655', '38677', '38652'];
    const grenadaZips = ['38901', '38902', '38930'];
    const batesvilleZips = ['38606'];

    if (localZips.includes(zipCode)) setEstimate('$50.00 Base Mobile Fee');
    else if (oxfordZips.includes(zipCode)) setEstimate('$100.00 Base Mobile Fee');
    else if (grenadaZips.includes(zipCode)) setEstimate('$55.00 Base Mobile Fee');
    else if (batesvilleZips.includes(zipCode)) setEstimate('$75.00 Base Mobile Fee');
    else setEstimate('Extended Area Rate: $125.00+');
  };

  const counties = [
    { name: 'Yalobusha (HQ)', rate: '$50', cities: ['Tillatoba', 'Water Valley', 'Coffeeville', 'Oakland'], hub: true },
    { name: 'Lafayette', rate: '$100', cities: ['Oxford', 'University', 'Abbeville', 'Taylor'] },
    { name: 'Grenada', rate: '$55', cities: ['Grenada', 'Holcomb', 'Elliott'] },
    { name: 'Panola', rate: '$75', cities: ['Batesville', 'Sardis', 'Como', 'Courtland'] },
    { name: 'DeSoto', rate: '$125+', cities: ['Southaven', 'Hernando', 'Olive Branch'] },
    { name: 'Tate', rate: '$100+', cities: ['Senatobia', 'Coldwater', 'Independence'] },
    { name: 'Tallahatchie', rate: '$75+', cities: ['Charleston', 'Sumner', 'Tutwiler'] }
  ];

  return (
    <div className="bg-slate-50">
      <div className="hero-gradient py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <h1 className="text-4xl md:text-5xl font-bold relative z-10 font-serif">Service Territory & Rates</h1>
        <p className="text-gray-300 mt-4 relative z-10 font-light max-w-2xl mx-auto px-4 uppercase tracking-widest text-xs">Serving the I-55 Corridor from Tillatoba HQ</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-20 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-brandNavy font-serif mb-4">Quick Base Fee Check</h2>
            <p className="text-gray-600 mb-6 font-light italic">Looking for a full quote including stamps?</p>
            <Link to="/calculator" className="inline-block mb-8 text-brandGold font-bold text-xs uppercase tracking-widest hover:underline">
              Try the Advanced Pricing Calculator →
            </Link>
            
            <form onSubmit={calculateQuickFee} className="flex gap-2">
              <input 
                type="text" maxLength={5} placeholder="Meeting ZIP" 
                value={zipCode} onChange={(e) => setZipCode(e.target.value)}
                className="flex-grow bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-brandNavy focus:ring-2 focus:ring-brandGold outline-none font-bold" 
              />
              <button type="submit" className="bg-brandNavy text-white font-bold px-6 py-3 rounded-lg hover:bg-brandGold transition">Check</button>
            </form>
            {estimate && (
              <div className="mt-6 p-4 bg-brandGold text-brandNavy font-black text-center rounded-lg animate-in fade-in slide-in-from-top-2">
                {estimate}
              </div>
            )}
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
             <div className="bg-brandLight p-6 rounded-2xl text-center border border-gray-100 flex flex-col justify-center">
               <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">Yalobusha HQ</span>
               <span className="text-3xl font-black text-brandNavy">$50</span>
             </div>
             <div className="bg-brandLight p-6 rounded-2xl text-center border border-gray-100 flex flex-col justify-center">
               <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">Oxford Hub</span>
               <span className="text-3xl font-black text-brandNavy">$100</span>
             </div>
             <div className="bg-brandLight p-6 rounded-2xl text-center border border-gray-100 flex flex-col justify-center">
               <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">Batesville Hub</span>
               <span className="text-3xl font-black text-brandNavy">$75</span>
             </div>
             <div className="bg-brandLight p-6 rounded-2xl text-center border border-gray-100 flex flex-col justify-center">
               <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">Grenada Hub</span>
               <span className="text-3xl font-black text-brandNavy">$55</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {counties.map((county) => (
            <div key={county.name} className={`bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition duration-300 ${county.hub ? 'border-brandGold ring-1 ring-brandGold/20' : 'border-gray-100'}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-brandNavy font-serif border-b-2 border-brandGold pb-1">{county.name}</h3>
                <span className="text-brandGold font-black text-sm">{county.rate}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {county.cities.map((city) => (
                  <span key={city} className="text-[11px] px-2 py-1 rounded border bg-slate-50 text-slate-600">{city}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
