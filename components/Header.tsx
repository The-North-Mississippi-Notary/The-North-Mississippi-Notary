
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Service Area', path: '/service-area' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-brandNavy text-white shadow-xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
              <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-brandGold leading-none">The North MS Notary</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mt-1">Mobile Fabrication & Notary Unit</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition uppercase tracking-wide border-b-2 pb-1 ${
                  isActive(link.path)
                    ? 'text-brandGold border-brandGold'
                    : 'text-gray-300 border-transparent hover:text-brandGold hover:border-brandGold/30'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:6013000702"
              className="group inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-bold rounded shadow-sm text-brandNavy bg-brandGold hover:bg-brandGoldHover transition duration-200"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-brandNavy border-t border-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'text-brandGold bg-gray-900'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:6013000702"
            className="block w-full text-center px-3 py-3 rounded-md text-base font-bold text-brandNavy bg-brandGold mt-4"
          >
            Call 601-300-0702
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
