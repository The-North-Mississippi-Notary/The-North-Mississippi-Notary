
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandNavy text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xl font-bold font-serif text-brandGold mb-4">The North Mississippi Notary</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Professional Mobile Notary & Signing Agent. Based in Tillatoba, MS. We specialize in complex document logistics for Real Estate, Legal, and Healthcare sectors across North MS.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-500 uppercase tracking-widest text-[10px]">Phone:</span>
                <a href="tel:6013000702" className="text-brandGold hover:text-white transition">601-300-0702</a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-500 uppercase tracking-widest text-[10px]">Email:</span>
                <a href="mailto:notary@northmsnotary.com" className="text-brandGold hover:text-white transition">notary@northmsnotary.com</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brandGold transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-brandGold transition">About Our Firm</Link></li>
              <li><Link to="/services" className="hover:text-brandGold transition">Services & Pricing</Link></li>
              <li><Link to="/service-area" className="hover:text-brandGold transition">Service Coverage</Link></li>
              <li><Link to="/contact" className="hover:text-brandGold transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-xs">Compliance</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/privacy" className="hover:text-brandGold transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brandGold transition">Terms of Service</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-tighter">
                I am not an attorney licensed to practice law in this state. I am not allowed to draft legal records, give advice on legal matters, including immigration, or charge a fee for those activities.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} The North Mississippi Notary. All rights reserved. | NNA Certified | E&O Insured | Serving Tillatoba & Surroundings.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
