import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
  onVisitClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onVisitClick }) => {
  return (
    <section className="pt-8 sm:pt-12 pb-16 md:pb-24 border-b border-[#D5D4CE]" aria-labelledby="hero-heading">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-8">
        {/* Top Header / Wordmark and Edition */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8 mb-8 md:mb-12 border-b border-[#D5D4CE]">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              MI Wardrobe<sup className="text-xs font-normal ml-0.5">®</sup>
            </span>
          </div>
          <div className="font-mono-code text-xs sm:text-sm text-[#5D625F] text-right">
            <span>Objects for a new everyday.</span>
            <br />
            <span className="text-[#111111] font-medium">Prototype collection / 01</span>
          </div>
        </div>

        {/* Hero Grid: Copy on Left, Product Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5D625F] mb-4">
              An invitation to a new era of wardrobes
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl font-medium tracking-tight text-[#111111] leading-[1.14] text-balance mb-6"
            >
              A better day starts with your wardrobe.
            </h1>
            <p className="text-lg text-[#5D625F] leading-relaxed mb-8 max-w-[42ch]">
              Your clothes, thoughtfully organised. Your look, considered. Meet the wardrobe designed to bring a little intelligence to your everyday ritual.
            </p>

            {/* Exactly two CTA buttons as defined in roadmap */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  onContactClick();
                }}
                className="inline-flex items-center justify-between gap-6 px-6 py-3.5 min-h-[48px] bg-[#111111] text-white hover:bg-[#353535] active:scale-[0.98] font-medium text-sm transition-all border border-[#111111]"
              >
                <span>Contact sales</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#visit"
                onClick={e => {
                  e.preventDefault();
                  onVisitClick();
                }}
                className="inline-flex items-center justify-between gap-6 px-6 py-3.5 min-h-[48px] bg-transparent text-[#111111] hover:bg-[#EAE8E1] active:scale-[0.98] font-medium text-sm transition-all border border-[#111111]"
              >
                <span>Visit us</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Showcase note indicator */}
            <div className="flex items-center gap-2.5 text-xs text-[#5D625F] font-mono-code">
              <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
              <span>Explore the MI Wardrobe prototype at our next showcase.</span>
            </div>
          </div>

          {/* Product Media Column */}
          <div className="lg:col-span-7">
            <figure className="bg-[#FFFFFF] p-4 sm:p-6 border border-[#D5D4CE] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              <div className="relative overflow-hidden bg-[#F6F5F1] flex items-center justify-center p-4">
                <img
                  id="product-source"
                  src={`${import.meta.env.BASE_URL}assets/wardrobe-idea.png`}
                  alt="MI Wardrobe with white full-height panels, an embedded outfit display, and an illuminated vertical garment opening"
                  className="w-full max-h-[540px] object-contain select-none transition-transform duration-500 hover:scale-[1.01]"
                  width={882}
                  height={845}
                  loading="eager"
                />
              </div>
              <figcaption className="pt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code text-[#5D625F] border-t border-[#EAE8E1] mt-3">
                <span className="text-[#111111] font-medium">Fig. 01 — MI Wardrobe</span>
                <span>Supplied Concept Visual · Verified Scale 180×220×95 cm</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Index transition line */}
        <div className="mt-16 pt-6 border-t border-[#D5D4CE] flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[#5D625F]">
          <span>Furniture. Technology. A daily companion.</span>
          <a href="#hardware" className="hover:text-[#111111] transition-colors flex items-center gap-1">
            <span>Discover what’s inside</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
