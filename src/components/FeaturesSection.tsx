import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#FFFFFF] border-b border-[#D5D4CE]" aria-labelledby="features-heading">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
          <div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5D625F] mb-3">
              01 / A more considered routine
            </p>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight">
              A place for your clothes.<br />A fresh perspective on your look.
            </h2>
          </div>
          <p className="text-[#5D625F] text-base md:text-lg leading-relaxed max-w-[48ch]">
            One wardrobe connects your physical collection with a helpful digital experience. Less searching. More possibilities.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Feature 01 */}
          <article className="border-t border-[#111111] pt-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mb-6 text-[#111111]">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-current fill-none stroke-[1.5]" aria-hidden="true">
                  <rect x="8" y="7" width="32" height="34" rx="1" />
                  <path d="M24 7v34M13 15h6m10 0h6M13 24h6m10 0h6M13 33h6m10 0h6" />
                </svg>
              </div>
              <p className="font-mono-code text-xs text-[#5D625F] mb-3">01.1 / Collection</p>
              <h3 className="text-xl font-medium text-[#111111] mb-3">See what you own.</h3>
              <p className="text-sm md:text-base text-[#5D625F] leading-relaxed">
                Bring your garments into a digital collection and browse them directly on the built-in display without opening every door.
              </p>
            </div>
          </article>

          {/* Feature 02 */}
          <article className="border-t border-[#111111] pt-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mb-6 text-[#111111]">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-current fill-none stroke-[1.5]" aria-hidden="true">
                  <rect x="12" y="5" width="24" height="38" rx="2" />
                  <path d="m24 13 2.5 6.5L33 22l-6.5 2.5L24 31l-2.5-6.5L15 22l6.5-2.5zM20 37h8" />
                </svg>
              </div>
              <p className="font-mono-code text-xs text-[#5D625F] mb-3">01.2 / Assistant</p>
              <h3 className="text-xl font-medium text-[#111111] mb-3">Find a new combination.</h3>
              <p className="text-sm md:text-base text-[#5D625F] leading-relaxed">
                Explore outfit suggestions using pieces from your own curated garments. The assistant offers ideas; the final choice is always yours.
              </p>
            </div>
          </article>

          {/* Feature 03 */}
          <article className="border-t border-[#111111] pt-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mb-6 text-[#111111]">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-current fill-none stroke-[1.5]" aria-hidden="true">
                  <path d="M8 34h32v6H8zM24 6v21m-7-7 7 7 7-7M10 14H6v26h4m28-26h4v26h-4" />
                </svg>
              </div>
              <p className="font-mono-code text-xs text-[#5D625F] mb-3">01.3 / Retrieval</p>
              <h3 className="text-xl font-medium text-[#111111] mb-3">Bring your choice to you.</h3>
              <p className="text-sm md:text-base text-[#5D625F] leading-relaxed">
                Select your pieces and collect them at the illuminated wardrobe opening, with automated dual-tier rails doing the moving.
              </p>
            </div>
          </article>
        </div>

        <p className="text-xs text-[#858A86] font-mono-code mt-12 pt-6 border-t border-[#EAE8E1]">
          Product prototype. Feature availability and final specifications are in ongoing validation.
        </p>
      </div>
    </section>
  );
};
