import React, { useState } from 'react';
import { ViewportMode } from './types';
import { GoogleSitesBar } from './components/GoogleSitesBar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ExplodedViewSection } from './components/ExplodedViewSection';
import { PlacementSection } from './components/PlacementSection';
import { OperationSection } from './components/OperationSection';
import { ModelsSection } from './components/ModelsSection';
import { VisitSection } from './components/VisitSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export default function App() {
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [chromeAccessGranted, setChromeAccessGranted] = useState<boolean>(true);
  const [inspectBlocks, setInspectBlocks] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'about' | 'chrome' | 'roadmap' | null>(null);

  // Form pre-fill states
  const [initialInterest, setInitialInterest] = useState<string>('Home use');
  const [initialModel, setInitialModel] = useState<string>('Not sure yet');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVisit = () => {
    const el = document.getElementById('visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModel = (model: 'Mini' | 'Pro') => {
    setInitialModel(model);
    scrollToContact();
  };

  const handleRegisterVisit = () => {
    setInitialInterest('Expo demonstration');
    scrollToContact();
  };

  // Viewport container width constraints
  const getContainerWidthClass = () => {
    switch (viewport) {
      case 'mobile':
        return 'max-w-[390px] mx-auto shadow-2xl border-x border-[#D5D4CE] min-h-screen my-4';
      case 'tablet':
        return 'max-w-[768px] mx-auto shadow-2xl border-x border-[#D5D4CE] min-h-screen my-4';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#111827] flex flex-col font-sans">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-white font-mono-code text-xs"
      >
        Skip to main content
      </a>

      {/* Google Sites Prototype Navigation and Chrome Permission Bar */}
      <GoogleSitesBar
        viewport={viewport}
        onViewportChange={setViewport}
        onRequestChrome={() => setActiveModal('chrome')}
        onOpenSitesRoadmap={() => setActiveModal('roadmap')}
        chromeAccessGranted={chromeAccessGranted}
        inspectBlocks={inspectBlocks}
        onToggleInspectBlocks={() => setInspectBlocks(!inspectBlocks)}
      />

      {/* Device Simulation wrapper if tablet/mobile selected */}
      <div className={`transition-all duration-300 ${getContainerWidthClass()}`}>
        {/* Google Sites Block Inspector Banner when enabled */}
        {inspectBlocks && (
          <div className="bg-amber-100 border-b border-amber-300 px-4 py-2 text-xs font-mono-code text-amber-900 flex items-center justify-between">
            <span>GOOGLE SITES BLOCK INSPECTOR: Outlining native Sites components</span>
            <button
              type="button"
              onClick={() => setInspectBlocks(false)}
              className="text-amber-800 underline font-semibold"
            >
              Turn Off
            </button>
          </div>
        )}

        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {/* Section 1: Hero */}
          <div className={inspectBlocks ? 'relative border-2 border-dashed border-amber-500 m-1' : ''}>
            {inspectBlocks && (
              <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-mono-code px-1.5 py-0.5 z-20">
                Sites Block: Hero Header (Title + Dual Buttons + Image)
              </span>
            )}
            <HeroSection
              onContactClick={scrollToContact}
              onVisitClick={scrollToVisit}
            />
          </div>

          {/* Section 2: Features */}
          <div className={inspectBlocks ? 'relative border-2 border-dashed border-amber-500 m-1' : ''}>
            {inspectBlocks && (
              <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-mono-code px-1.5 py-0.5 z-20">
                Sites Block: 3-Column Feature Layout
              </span>
            )}
            <FeaturesSection />
          </div>

          {/* Section 3: Exploded Technical View (Centerpiece) */}
          <div className={inspectBlocks ? 'relative border-2 border-dashed border-amber-500 m-1' : ''}>
            {inspectBlocks && (
              <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-mono-code px-1.5 py-0.5 z-20">
                Sites Block: Custom Mechanical Motion Embed (Full-Width)
              </span>
            )}
            <ExplodedViewSection />
          </div>

          {/* Section 4: Architectural Placement */}
          <div className={inspectBlocks ? 'relative border-2 border-dashed border-amber-500 m-1' : ''}>
            {inspectBlocks && (
              <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-mono-code px-1.5 py-0.5 z-20">
                Sites Block: 3 Room Context Cards
              </span>
            )}
            <PlacementSection />
          </div>

          {/* Section 5: Operation & Interface Video */}
          <div className={inspectBlocks ? 'relative border-2 border-dashed border-amber-500 m-1' : ''}>
            {inspectBlocks && (
              <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-mono-code px-1.5 py-0.5 z-20">
                Sites Block: Media Sheet + 3-Step Process + Accordion
              </span>
            )}
            <OperationSection />
          </div>

          {/* Section 6: Models Comparison */}
          <div className={inspectBlocks ? 'relative border-2 border-dashed border-amber-500 m-1' : ''}>
            {inspectBlocks && (
              <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-mono-code px-1.5 py-0.5 z-20">
                Sites Block: 2-Column Model Comparison Cards
              </span>
            )}
            <ModelsSection onSelectModel={handleSelectModel} />
          </div>

          {/* Section 7: Visit & Showcase */}
          <div className={inspectBlocks ? 'relative border-2 border-dashed border-amber-500 m-1' : ''}>
            {inspectBlocks && (
              <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-mono-code px-1.5 py-0.5 z-20">
                Sites Block: Showcase Invitation Card
              </span>
            )}
            <VisitSection onRegisterVisit={handleRegisterVisit} />
          </div>

          {/* Section 8: Contact Form */}
          <div className={inspectBlocks ? 'relative border-2 border-dashed border-amber-500 m-1' : ''}>
            {inspectBlocks && (
              <span className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-mono-code px-1.5 py-0.5 z-20">
                Sites Block: Embedded Google Form Placeholder
              </span>
            )}
            <ContactSection
              initialInterest={initialInterest}
              initialModel={initialModel}
            />
          </div>
        </main>

        {/* Footer */}
        <Footer
          onOpenPrivacy={() => setActiveModal('privacy')}
          onOpenAbout={() => setActiveModal('about')}
          onOpenChrome={() => setActiveModal('chrome')}
        />
      </div>

      {/* Accessible Modals */}
      <Modals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        chromeAccessGranted={chromeAccessGranted}
        onGrantChromeAccess={() => setChromeAccessGranted(true)}
      />
    </div>
  );
}
