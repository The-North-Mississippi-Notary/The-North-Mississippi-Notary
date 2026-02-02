
import React from 'react';

const ServiceArea: React.FC = () => {
  const counties = [
    {
      name: 'Yalobusha County',
      cities: ['Tillatoba', 'Water Valley', 'Coffeeville', 'Oakland', 'Scobey'],
      hub: true
    },
    {
      name: 'Lafayette County',
      cities: ['Oxford', 'University', 'Abbeville', 'Taylor', 'Lafayette Springs'],
      hub: false
    },
    {
      name: 'DeSoto County',
      cities: ['Southaven', 'Olive Branch', 'Hernando', 'Horn Lake', 'Walls'],
      hub: false
    },
    {
      name: 'Grenada County',
      cities: ['Grenada', 'Holcomb', 'Elliott', 'Gore Springs', 'Dubard']
    },
    {
      name: 'Panola County',
      cities: ['Batesville', 'Sardis', 'Como', 'Courtland', 'Crenshaw', 'Pope']
    },
    {
      name: 'Tate County',
      cities: ['Senatobia', 'Coldwater', 'Independence', 'Arkabutla']
    },
    {
      name: 'Tallahatchie County',
      cities: ['Charleston', 'Sumner', 'Tutwiler', 'Webb', 'Glendora']
    }
  ];

  return (
    <div className="bg-slate-50">
      <div className="hero-gradient py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 gold-accent-pattern"></div>
        <h1 className="text-4xl md:text-5xl font-bold relative z-10 font-serif">Service Territory</h1>
        <p className="text-gray-300 mt-4 relative z-10 font-light max-w-2xl mx-auto px-4 uppercase tracking-widest text-xs">Based in Tillatoba — Serving the I-55 Corridor & Enid Lake Area</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brandNavy font-serif">7 Counties. 50+ Cities. 1 Reliable Service.</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Headquartered in <strong>Tillatoba, MS</strong>, our mobile office units are strategically positioned for rapid deployment to <strong>The Oxford Square</strong>, <strong>Baptist Memorial DeSoto</strong>, and rural sites near <strong>Enid Lake</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {counties.map((county) => (
            <div key={county.name} className={`bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition duration-300 ${county.hub ? 'border-brandGold ring-1 ring-brandGold/20' : 'border-gray-100'}`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-brandNavy font-serif border-b-2 border-brandGold pb-1">{county.name}</h3>
                {county.hub && (
                  <span className="text-[9px] bg-brandNavy text-brandGold font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Main Hub</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {county.cities.map((city) => (
                  <span key={city} className={`text-[11px] px-2 py-1 rounded border ${city === 'Tillatoba' ? 'bg-brandGold/10 text-brandGold border-brandGold/30 font-bold' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
            <h3 className="text-2xl font-bold text-brandNavy font-serif mb-8 text-center">Specific Landmark Service Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-brandGold text-sm uppercase mb-3">Health & Medical</h4>
                    <ul className="text-xs text-gray-500 space-y-2">
                        <li>Baptist Memorial Hospital - Oxford</li>
                        <li>Baptist Memorial Hospital - DeSoto</li>
                        <li>UMMC Grenada</li>
                        <li>Oxford Medical District Signings</li>
                        <li>Batesville Specialty Clinics</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-brandGold text-sm uppercase mb-3">Academic & Campus</h4>
                    <ul className="text-xs text-gray-500 space-y-2">
                        <li>University of Mississippi (Ole Miss)</li>
                        <li>The Oxford Square (Professional District)</li>
                        <li>NWCC Senatobia & Oxford Campuses</li>
                        <li>Holmes CC Grenada Center</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-brandGold text-sm uppercase mb-3">Outdoors & Rural</h4>
                    <ul className="text-xs text-gray-500 space-y-2">
                        <li>Enid Lake State Parks & Marinas</li>
                        <li>Grenada Lake Recreation Area</li>
                        <li>Sardis Lake Residential Areas</li>
                        <li>Casey Jones Rail District (Water Valley)</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-brandGold text-sm uppercase mb-3">Travel Hubs</h4>
                    <ul className="text-xs text-gray-500 space-y-2">
                        <li>I-55 Corridor Truck Stops (Southaven to Grenada)</li>
                        <li>Hernando Courthouse Area</li>
                        <li>Oxford-University Airport (Fixed Base)</li>
                        <li>Olive Branch Industrial District</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-brandNavy font-serif mb-6 text-center">Mobile Unit Fees from Tillatoba Hub</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-brandLight rounded-lg text-center border border-gray-100">
              <h4 className="font-bold text-brandNavy mb-2 text-sm uppercase tracking-wider">Local Hub Radius</h4>
              <p className="text-brandGold font-black text-2xl mb-1">$35.00</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Tillatoba / Oakland / Scobey</p>
            </div>
            <div className="p-6 bg-brandLight rounded-lg text-center border border-gray-100">
              <h4 className="font-bold text-brandNavy mb-2 text-sm uppercase tracking-wider">Mid-Range Corridor</h4>
              <p className="text-brandGold font-black text-2xl mb-1">$55.00</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Oxford / Batesville / Grenada / WV</p>
            </div>
            <div className="p-6 bg-brandLight rounded-lg text-center border border-gray-100">
              <h4 className="font-bold text-brandNavy mb-2 text-sm uppercase tracking-wider">Extended Reach</h4>
              <p className="text-brandGold font-black text-2xl mb-1">$75.00+</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Southaven / Olive Branch / Tutwiler</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
