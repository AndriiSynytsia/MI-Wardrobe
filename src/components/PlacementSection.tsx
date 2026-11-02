import React from 'react';

export const PlacementSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#EAE8E1] border-b border-[#D5D4CE]" aria-labelledby="placement-heading">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
          <div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5D625F] mb-3">
              03 / Find its place · Architectural Context
            </p>
            <h2 id="placement-heading" className="text-3xl md:text-4xl font-medium tracking-tight text-[#111111]">
              Different spaces.<br />The same daily possibility.
            </h2>
          </div>
          <p className="text-[#5D625F] text-base md:text-lg leading-relaxed max-w-[48ch]">
            A compact apartment, a dedicated dressing room or a space where style is your craft. Start with the way you live.
          </p>
        </div>

        {/* 3 Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Room 1 */}
          <article className="p-8 bg-[#F6F5F1] border border-[#D5D4CE] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <div className="h-40 w-full mb-8 text-[#5D625F]">
                <svg viewBox="0 0 300 160" className="w-full h-full stroke-current fill-none stroke-[1.2]" aria-hidden="true">
                  <path d="M20 140V20h260v120H20m0-35h260M40 105V45h75v60M45 140v-24h96v24m-86-24v-13h70v13M180 140V40h60v100m-30-100v100M192 73h5m22 0h5" />
                  <path d="M20 20h95v25M30 30h30v38H30" />
                </svg>
              </div>
              <p className="font-mono-code text-xs text-[#5D625F] mb-2">A home for one</p>
              <h3 className="text-xl font-medium text-[#111111] mb-3">The city apartment</h3>
              <p className="text-sm text-[#5D625F] leading-relaxed">
                A considered single installation for everyday dressing, keeping seasonal garments indexed in high-density automated rails without cluttering living square footage.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D5D4CE] font-mono-code text-xs text-[#858A86]">
              Recommended: MI Wardrobe Mini
            </div>
          </article>

          {/* Room 2 */}
          <article className="p-8 bg-[#F6F5F1] border border-[#D5D4CE] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <div className="h-40 w-full mb-8 text-[#5D625F]">
                <svg viewBox="0 0 300 160" className="w-full h-full stroke-current fill-none stroke-[1.2]" aria-hidden="true">
                  <path d="M20 140V20h260v120H20m0-35h260M35 105V35h60v70m-30-70v70M110 105V35h70v70m-35-70v70M195 105V35h65v70m-32-70v70M100 140v-22h90v22" />
                  <path d="M40 70h6m30 0h6m40 0h6m30 0h6m35 0h6m28 0h6" />
                </svg>
              </div>
              <p className="font-mono-code text-xs text-[#5D625F] mb-2">Room to get ready</p>
              <h3 className="text-xl font-medium text-[#111111] mb-3">The dressing room</h3>
              <p className="text-sm text-[#5D625F] leading-relaxed">
                Bring a digital view of your collection into a dedicated morning sanctuary. Full-height mirror display pairs with existing wardrobe suites for seamless ritual styling.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D5D4CE] font-mono-code text-xs text-[#858A86]">
              Recommended: MI Wardrobe Pro
            </div>
          </article>

          {/* Room 3 */}
          <article className="p-8 bg-[#F6F5F1] border border-[#D5D4CE] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <div className="h-40 w-full mb-8 text-[#5D625F]">
                <svg viewBox="0 0 300 160" className="w-full h-full stroke-current fill-none stroke-[1.2]" aria-hidden="true">
                  <path d="M20 140V20h260v120H20m0-35h260M42 105V35h65v70m-32-70v70M145 105V46h100v59M140 46h110m-88 0v14m0 0-15 10h30l-15-10m32-14v14m0 0-15 10h30l-15-10m32-14v14m0 0-15 10h30l-15-10M130 140v-20h122v20" />
                </svg>
              </div>
              <p className="font-mono-code text-xs text-[#5D625F] mb-2">Space for your craft</p>
              <h3 className="text-xl font-medium text-[#111111] mb-3">The styling studio</h3>
              <p className="text-sm text-[#5D625F] leading-relaxed">
                Explore the concept for luxury boutiques, editorial stylists, and curated clothing archives. Rapid look retrieval and digital cataloging elevate client appointments.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D5D4CE] font-mono-code text-xs text-[#858A86]">
              Recommended: Dual MI Wardrobe Pro Setup
            </div>
          </article>
        </div>

        <p className="text-xs text-[#858A86] font-mono-code mt-10">
          Illustrative use cases. Installation dimensions and architectural structural requirements subject to site survey.
        </p>
      </div>
    </section>
  );
};
