
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceArea from './pages/ServiceArea';
import PricingCalculator from './pages/PricingCalculator';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import FAQ from './pages/FAQ';
import Header from './components/Header';
import Footer from './components/Footer';

// Hub Markets (7 Counties)
import OxfordHub from './pages/hubs/Oxford';
import SouthavenHub from './pages/hubs/Southaven';
import GrenadaHub from './pages/hubs/Grenada';
import BatesvilleHub from './pages/hubs/Batesville';
import HernandoHub from './pages/hubs/Hernando';
import SenatobiaHub from './pages/hubs/Senatobia';
import CharlestonHub from './pages/hubs/Charleston';
import TillatobaHub from './pages/hubs/Tillatoba';

// Specialized Signings
import LoanSignings from './pages/specialties/LoanSignings';
import MedicalSignings from './pages/specialties/MedicalSignings';
import HRVerification from './pages/specialties/HRVerification';
import FamilyLaw from './pages/specialties/FamilyLaw';
import EstatePlanning from './pages/specialties/EstatePlanning';
import BusinessLogistics from './pages/specialties/BusinessLogistics';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-area" element={<ServiceArea />} />
            <Route path="/calculator" element={<PricingCalculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Hub Markets - Every County Represented */}
            <Route path="/market-oxford" element={<OxfordHub />} />
            <Route path="/market-southaven" element={<SouthavenHub />} />
            <Route path="/market-grenada" element={<GrenadaHub />} />
            <Route path="/market-batesville" element={<BatesvilleHub />} />
            <Route path="/market-hernando" element={<HernandoHub />} />
            <Route path="/market-senatobia" element={<SenatobiaHub />} />
            <Route path="/market-charleston" element={<CharlestonHub />} />
            <Route path="/market-tillatoba" element={<TillatobaHub />} />
            
            {/* Specialized Signings */}
            <Route path="/loan-signing-agent" element={<LoanSignings />} />
            <Route path="/hospital-notary" element={<MedicalSignings />} />
            <Route path="/i9-verification" element={<HRVerification />} />
            <Route path="/specialty-family-law" element={<FamilyLaw />} />
            <Route path="/specialty-estate-planning" element={<EstatePlanning />} />
            <Route path="/specialty-business-logistics" element={<BusinessLogistics />} />
            
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
