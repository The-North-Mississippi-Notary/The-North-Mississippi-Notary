
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Service Area', path: '/service-area' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const hubs = [
    { name: 'Oxford', path: '/market-oxford' },
    { name: 'Southaven', path: '/market-southaven' },
    { name: 'Grenada', path: '/market-grenada' },
    { name: 'Batesville', path: '/market-batesville' },
    { name: 'Hernando', path: '/market-hernando' },
    { name: 'Senatobia', path: '/market-senatobia' },
    { name: 'Charleston', path: '/market-charleston' },
    { name: 'Tillatoba', path: '/market-tillatoba' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-brandNavy text-white shadow-xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
              <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-brandGold leading-none uppercase">The North MS Notary</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mt-1">Mobile Unit Hub: Tillatoba, MS</span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-2">
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-xs font-bold transition uppercase tracking-widest border-b-2 pb-1 ${
                      isActive(link.path)
                        ? 'text-brandGold border-brandGold'
                        : 'text-gray-400 border-transparent hover:text-brandGold hover:border-brandGold/30'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <a
                href="tel:6013000702"
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-xs font-bold rounded shadow-sm text-brandNavy bg-brandGold hover:bg-brandGoldHover transition duration-200"
              >
                601-300-0702
              </a>
            </div>
            
            {/* Market Hub Navigation */}
            <div className="flex flex-wrap justify-end gap-x-3 text-[9px] uppercase tracking-tighter text-gray-500 font-bold">
               <span className="text-gray-600 mr-2">Market Hubs:</span>
               {hubs.map(hub => (
                 <Link key={hub.name} to={hub.path} className="hover:text-brandGold transition">{hub.name}</Link>
               ))}
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-brandNavy border-t border-gray-800 overflow-y-auto max-h-[80vh]`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium text-gray-300 hover:text-brandGold border-b border-gray-800">{link.name}</Link>
          ))}
          <div className="pt-4 px-3">
             <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-3">Regional Coverage Hubs</p>
             <div className="grid grid-cols-2 gap-3 pb-4">
                {hubs.map(hub => (
                  <Link key={hub.name} to={hub.path} onClick={() => setIsOpen(false)} className="text-sm text-gray-400 hover:text-brandGold">{hub.name}</Link>
                ))}
             </div>
          </div>
          <a href="tel:6013000702" className="block w-full text-center py-4 bg-brandGold text-brandNavy font-bold mt-4 rounded-lg">Call: 601-300-0702</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
