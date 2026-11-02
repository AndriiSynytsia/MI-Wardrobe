import React from 'react';
import { ArrowUpRight, Calendar, MapPin, Clock } from 'lucide-react';

interface VisitSectionProps {
  onRegisterVisit: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onRegisterVisit }) => {
  return (
    <section id="visit" className="py-20 md:py-24 bg-[#FFFFFF] border-b border-[#D5D4CE]" aria-labelledby="visit-heading">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5">
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5D625F] mb-3">
              06 / An open invitation · In-Person Showcase
            </p>
            <h2 id="visit-heading" className="text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight mb-6">
              See the next chapter<br />of wardrobes up close.
            </h2>
            <p className="text-base md:text-lg text-[#5D625F] leading-relaxed mb-8 max-w-[42ch]">
              Come explore the MI Wardrobe prototype in person. Discover the touch mirror interface, watch the automated retrieval gantry, and speak with our development engineering team.
            </p>
            <div>
              <button
                type="button"
                onClick={onRegisterVisit}
                className="inline-flex items-center justify-between gap-6 px-6 py-3.5 min-h-[48px] bg-transparent hover:bg-[#EAE8E1] text-[#111111] border border-[#111111] font-medium text-sm transition-all"
              >
                <span>Register visit interest</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Invitation Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-[#F6F5F1] border border-[#D5D4CE] relative">
              <span className="font-mono-code text-xs text-[#5D625F] uppercase tracking-wider block mb-6">
                MI WARDROBE / SHOWCASE INVITATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#111111] mb-4">
                Good things are taking shape.
              </h3>
              <p className="text-sm md:text-base text-[#5D625F] leading-relaxed mb-8">
                Expo dates and host pavilion are currently being finalized. Register your interest below to receive private invitation credentials as soon as dates are confirmed.
              </p>

              <dl className="space-y-4 font-mono-code text-xs pt-4 border-t border-[#D5D4CE]">
                <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-b border-[#EAE8E1]">
                  <dt className="text-[#5D625F] flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                    <span>Venue and address</span>
                  </dt>
                  <dd className="text-[#111111] font-medium">Design & Architecture Pavilion (TBA)</dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-b border-[#EAE8E1]">
                  <dt className="text-[#5D625F] flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#111111]" />
                    <span>Exhibition dates</span>
                  </dt>
                  <dd className="text-[#111111] font-medium">To be announced</dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 py-2">
                  <dt className="text-[#5D625F] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#111111]" />
                    <span>Live Demonstration Prototype</span>
                  </dt>
                  <dd className="text-[#111111] font-medium">MI Wardrobe Mini & Pro Units</dd>
                </div>
              </dl>

              <div className="mt-8 pt-4 border-t border-[#D5D4CE] flex items-center justify-between text-[11px] font-mono-code text-[#858A86]">
                <span>NO TICKET PURCHASE REQUIRED</span>
                <span>INVITATION REGISTRATION OPEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
