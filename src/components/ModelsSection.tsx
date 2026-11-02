import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ModelsSectionProps {
  onSelectModel: (model: 'Mini' | 'Pro') => void;
}

export const ModelsSection: React.FC<ModelsSectionProps> = ({ onSelectModel }) => {
  return (
    <section id="models" className="py-20 md:py-24 bg-[#FFFFFF] border-b border-[#D5D4CE]" aria-labelledby="models-heading">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
          <div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5D625F] mb-3">
              05 / The collection · Model Specifications
            </p>
            <h2 id="models-heading" className="text-3xl md:text-4xl font-medium tracking-tight text-[#111111]">
              Choose the space<br />for your collection.
            </h2>
          </div>
          <p className="text-[#5D625F] text-base md:text-lg leading-relaxed max-w-[48ch]">
            Two proposed models, one connected idea. Start with the size of your collection and the way you plan to use it.
          </p>
        </div>

        {/* 2 Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MI Wardrobe Mini */}
          <article className="p-8 sm:p-10 bg-[#F6F5F1] border border-[#D5D4CE] flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#D5D4CE]">
                <div>
                  <h3 className="text-3xl font-medium text-[#111111]">Mini</h3>
                  <p className="text-sm text-[#5D625F] mt-1">For a collection of your own.</p>
                </div>
                <span className="font-mono-code text-xs text-[#5D625F] bg-[#FFFFFF] px-2.5 py-1 border border-[#D5D4CE]">
                  MI / 01
                </span>
              </div>

              {/* Capacity Breakdown by Rail */}
              <div className="flex gap-8 sm:gap-12 my-8">
                <div>
                  <b className="font-display text-4xl sm:text-5xl font-medium text-[#111111] block tabular-nums">
                    ≈ 40
                  </b>
                  <span className="text-xs text-[#5D625F] font-mono-code uppercase tracking-wider">
                    Upper rail positions
                  </span>
                </div>
                <div>
                  <b className="font-display text-4xl sm:text-5xl font-medium text-[#111111] block tabular-nums">
                    ≈ 20
                  </b>
                  <span className="text-xs text-[#5D625F] font-mono-code uppercase tracking-wider">
                    Lower rail positions
                  </span>
                </div>
              </div>

              {/* Specs Table */}
              <dl className="space-y-3 font-mono-code text-xs my-8">
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Proposed setting</dt>
                  <dd className="text-[#111111] font-medium text-right">Apartments · students · individuals</dd>
                </div>
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Display module</dt>
                  <dd className="text-[#111111] font-medium text-right">Full-height capacitive touch mirror</dd>
                </div>
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Retrieval threshold</dt>
                  <dd className="text-[#111111] font-medium text-right">Central vertical LED portal</dd>
                </div>
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Estimated footprint</dt>
                  <dd className="text-[#111111] font-medium text-right">180 cm W × 220 cm H × 95 cm D</dd>
                </div>
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Pricing</dt>
                  <dd className="text-[#111111] font-medium text-right">To be announced</dd>
                </div>
              </dl>
            </div>

            <button
              type="button"
              onClick={() => onSelectModel('Mini')}
              className="w-full inline-flex items-center justify-between px-6 py-3.5 min-h-[48px] bg-white hover:bg-[#111111] hover:text-white text-[#111111] border border-[#111111] font-medium text-sm transition-all"
            >
              <span>Enquire about Mini</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </article>

          {/* MI Wardrobe Pro */}
          <article className="p-8 sm:p-10 bg-[#F6F5F1] border border-[#D5D4CE] flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#D5D4CE]">
                <div>
                  <h3 className="text-3xl font-medium text-[#111111]">Pro</h3>
                  <p className="text-sm text-[#5D625F] mt-1">For a broader collection & multi-tier storage.</p>
                </div>
                <span className="font-mono-code text-xs text-[#5D625F] bg-[#FFFFFF] px-2.5 py-1 border border-[#D5D4CE]">
                  MI / 02
                </span>
              </div>

              {/* Capacity Breakdown by Rail */}
              <div className="flex gap-8 sm:gap-12 my-8">
                <div>
                  <b className="font-display text-4xl sm:text-5xl font-medium text-[#111111] block tabular-nums">
                    50–60
                  </b>
                  <span className="text-xs text-[#5D625F] font-mono-code uppercase tracking-wider">
                    Upper rail positions
                  </span>
                </div>
                <div>
                  <b className="font-display text-4xl sm:text-5xl font-medium text-[#111111] block tabular-nums">
                    ≈ 30
                  </b>
                  <span className="text-xs text-[#5D625F] font-mono-code uppercase tracking-wider">
                    Lower rail positions
                  </span>
                </div>
              </div>

              {/* Specs Table */}
              <dl className="space-y-3 font-mono-code text-xs my-8">
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Proposed setting</dt>
                  <dd className="text-[#111111] font-medium text-right">Families · styling spaces · boutiques</dd>
                </div>
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Display module</dt>
                  <dd className="text-[#111111] font-medium text-right">Wide-angle daylight calibrated mirror</dd>
                </div>
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Retrieval threshold</dt>
                  <dd className="text-[#111111] font-medium text-right">High-speed dual linear gantry</dd>
                </div>
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Estimated footprint</dt>
                  <dd className="text-[#111111] font-medium text-right">Custom modular configuration</dd>
                </div>
                <div className="flex justify-between py-2 border-t border-[#D5D4CE]">
                  <dt className="text-[#5D625F]">Pricing</dt>
                  <dd className="text-[#111111] font-medium text-right">To be announced</dd>
                </div>
              </dl>
            </div>

            <button
              type="button"
              onClick={() => onSelectModel('Pro')}
              className="w-full inline-flex items-center justify-between px-6 py-3.5 min-h-[48px] bg-white hover:bg-[#111111] hover:text-white text-[#111111] border border-[#111111] font-medium text-sm transition-all"
            >
              <span>Enquire about Pro</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </article>
        </div>

        <p className="text-xs text-[#858A86] font-mono-code mt-10">
          Indicative capacities from project concept documents. Final dimensions, specifications, installation requirements, and commercial availability will be confirmed prior to production orders.
        </p>
      </div>
    </section>
  );
};
