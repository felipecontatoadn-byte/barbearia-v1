import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { Services } from './components/Services';
import { AIAdvisor } from './components/AIAdvisor';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans selection:bg-gold-500 selection:text-navy-950">
      <Navigation />
      <main>
        <Hero />
        <InfoSection />
        <Services />
        <AIAdvisor />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5519987807575" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:-translate-y-1 animate-bounce"
        aria-label="Agendar via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.637 4.289 1.692 5.966l-1.05 3.834 3.847-1.006zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.296-1.04 1.014-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.084 1.758-.705 2.006-1.401.247-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;