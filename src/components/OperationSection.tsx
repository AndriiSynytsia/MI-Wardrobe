import React, { useState } from 'react';
import { LookScenario } from '../types';
import { Sparkles, Check, ChevronDown, ChevronUp, Play, Smartphone, AlertCircle } from 'lucide-react';

const SCENARIOS: LookScenario[] = [
  {
    id: 'work',
    label: 'A day at work',
    title: 'A considered start to the workday.',
    copy: 'Try an Italian crisp cotton white shirt, tailored charcoal pleated trousers, and an unconstructed navy wool blazer from your digital wardrobe.',
    items: [
      { name: 'Crisp White Poplin Shirt', category: 'Upper Rail', position: 'Slot 12' },
      { name: 'Pleated Charcoal Trousers', category: 'Lower Rail', position: 'Slot 04' },
      { name: 'Unconstructed Navy Wool Blazer', category: 'Upper Rail', position: 'Slot 18' },
    ],
  },
  {
    id: 'weekend',
    label: 'A relaxed weekend',
    title: 'Keep the weekend easy and tactile.',
    copy: 'Consider a heavyweight olive overshirt, an organic slub cotton crew tee, and relaxed Japanese selvedge denim. Swap a piece to make the combination your own.',
    items: [
      { name: 'Heavy Olive Canvas Overshirt', category: 'Upper Rail', position: 'Slot 22' },
      { name: 'Natural Slub Crewneck Tee', category: 'Upper Rail', position: 'Slot 09' },
      { name: 'Washed Selvedge Relaxed Denim', category: 'Lower Rail', position: 'Slot 14' },
    ],
  },
  {
    id: 'evening',
    label: 'An evening out',
    title: 'A little intention for the evening.',
    copy: 'Explore a tailored midnight notch-lapel jacket paired with a black fine-gauge merino turtleneck and sharp cigarette cut trousers.',
    items: [
      { name: 'Midnight Wool Evening Jacket', category: 'Upper Rail', position: 'Slot 03' },
      { name: 'Fine Merino Black Rollneck', category: 'Upper Rail', position: 'Slot 15' },
      { name: 'Black Fluid Tapered Trousers', category: 'Lower Rail', position: 'Slot 08' },
    ],
  },
  {
    id: 'travel',
    label: 'Seasonal travel',
    title: 'Functional layering for transit.',
    copy: 'A lightweight packable trench, cashmere quarter-zip knit, and stretch travel chinos engineered for comfort on the move.',
    items: [
      { name: 'Packable Weatherproof Trench', category: 'Upper Rail', position: 'Slot 31' },
      { name: 'Oatmeal Cashmere Quarter-Zip', category: 'Upper Rail', position: 'Slot 27' },
      { name: 'Four-Way Stretch Travel Chinos', category: 'Lower Rail', position: 'Slot 19' },
    ],
  },
];

export const OperationSection: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('work');
  const [isSetupOpen, setIsSetupOpen] = useState<boolean>(false);
  const [simulatedRetrieving, setSimulatedRetrieving] = useState<boolean>(false);
  const [retrievalStatus, setRetrievalStatus] = useState<string | null>(null);

  const activeScenario = SCENARIOS.find(s => s.id === selectedScenarioId) || SCENARIOS[0];

  const handleSimulateRetrieval = () => {
    setSimulatedRetrieving(true);
    setRetrievalStatus('Actuating gantry elevator... carousel rotating to Slot ' + activeScenario.items[0].position);
    setTimeout(() => {
      setRetrievalStatus('Garment 1/3 delivered to aperture. Bringing trousers from lower rail...');
    }, 1500);
    setTimeout(() => {
      setRetrievalStatus(`Complete look delivered to central illuminated opening. Ready for collection.`);
      setSimulatedRetrieving(false);
    }, 3200);
  };

  return (
    <section className="py-20 md:py-24 bg-[#FFFFFF] border-b border-[#D5D4CE]" aria-labelledby="operate-heading">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
          <div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5D625F] mb-3">
              04 / Your everyday ritual · Interface & Retrieval
            </p>
            <h2 id="operate-heading" className="text-3xl md:text-4xl font-medium tracking-tight text-[#111111]">
              From choosing a look<br />to wearing it.
            </h2>
          </div>
          <p className="text-[#5D625F] text-base md:text-lg leading-relaxed max-w-[48ch]">
            Meet the interface at the heart of MI Wardrobe. A collection you can see, combinations you can explore, and pieces you can select.
          </p>
        </div>

        {/* Video & 3-Step Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Interface Media Sheet */}
          <div className="lg:col-span-7">
            <figure className="bg-[#111111] text-[#FFFFFF] p-4 sm:p-6 border border-[#353535] shadow-lg">
              {/* Media Container */}
              <div className="relative aspect-video bg-[#1F2937] flex flex-col justify-between overflow-hidden border border-[#353535]">
                {/* Simulated Digital Mirror Interface */}
                <div className="p-4 sm:p-6 h-full flex flex-col justify-between bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] text-white">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono-code text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                      <span>MI WARDROBE OS v2.4</span>
                    </div>
                    <span className="text-white/60">08:42 AM · 18°C Studio</span>
                  </div>

                  <div className="my-auto py-4">
                    <span className="font-mono-code text-xs text-[#94A3B8] uppercase">Recommended Look</span>
                    <h4 className="text-xl sm:text-2xl font-medium text-white mt-1 mb-2">
                      {activeScenario.title}
                    </h4>
                    <p className="text-sm text-[#CBD5E1] max-w-[50ch] leading-relaxed mb-4">
                      {activeScenario.copy}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {activeScenario.items.map((item, idx) => (
                        <div key={idx} className="bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-mono-code flex items-center gap-2">
                          <span className="text-[#93C5FD] font-semibold">{item.position}</span>
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code">
                    <span className="text-[#94A3B8]">
                      {retrievalStatus || 'Ready for user selection'}
                    </span>
                    <button
                      type="button"
                      disabled={simulatedRetrieving}
                      onClick={handleSimulateRetrieval}
                      className="px-4 py-2 bg-white text-[#111111] font-semibold hover:bg-[#EAE8E1] transition-colors disabled:opacity-50"
                    >
                      {simulatedRetrieving ? 'Retrieving Rail...' : 'Request Garments Now ↗'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Caption and video embed fallback note per roadmap */}
              <figcaption className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code text-[#D5D4CE]">
                <span>Interface demonstration / Project UI simulation</span>
                <span className="text-[#858A86] flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Google Sites note: Embed Drive/YouTube video via Sites URL picker
                </span>
              </figcaption>
            </figure>
          </div>

          {/* 3 Step List */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex gap-4 items-start">
              <span className="font-mono-code text-sm font-semibold text-[#111111] bg-[#EAE8E1] w-8 h-8 flex items-center justify-center shrink-0 border border-[#D5D4CE]">
                01
              </span>
              <div>
                <h3 className="text-lg font-medium text-[#111111] mb-1">Browse your collection</h3>
                <p className="text-sm text-[#5D625F] leading-relaxed">
                  Find the garments you have registered in your digital wardrobe catalogue. High-resolution index cards keep your wardrobe visible in one place.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="font-mono-code text-sm font-semibold text-[#111111] bg-[#EAE8E1] w-8 h-8 flex items-center justify-center shrink-0 border border-[#D5D4CE]">
                02
              </span>
              <div>
                <h3 className="text-lg font-medium text-[#111111] mb-1">Explore your look</h3>
                <p className="text-sm text-[#5D625F] leading-relaxed">
                  Use the proposed assistant and outfit preview to consider an ensemble tailored to your schedule, weather, or mood.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="font-mono-code text-sm font-semibold text-[#111111] bg-[#EAE8E1] w-8 h-8 flex items-center justify-center shrink-0 border border-[#D5D4CE]">
                03
              </span>
              <div>
                <h3 className="text-lg font-medium text-[#111111] mb-1">Select and collect</h3>
                <p className="text-sm text-[#5D625F] leading-relaxed">
                  Confirm your pieces on the touch mirror. The automated gantry slides your clothes into the central illuminated portal in seconds.
                </p>
              </div>
            </div>

            <p className="text-xs font-mono-code text-[#858A86] pt-4 border-t border-[#EAE8E1]">
              The steps describe the intended product journey. The interactive display above shows the interface prototype.
            </p>
          </div>
        </div>

        {/* First-time setup expandable accordion */}
        <div className="border border-[#D5D4CE] bg-[#F6F5F1] p-6 mb-16">
          <button
            type="button"
            onClick={() => setIsSetupOpen(!isSetupOpen)}
            className="w-full flex items-center justify-between text-left font-medium text-[#111111] text-base focus-visible:outline-3 focus-visible:outline-[#111111]"
            aria-expanded={isSetupOpen}
          >
            <span>What happens during first-time setup?</span>
            {isSetupOpen ? <ChevronUp className="w-5 h-5 text-[#5D625F]" /> : <ChevronDown className="w-5 h-5 text-[#5D625F]" />}
          </button>
          {isSetupOpen && (
            <div className="mt-4 pt-4 border-t border-[#D5D4CE] text-sm text-[#5D625F] leading-relaxed max-w-[70ch]">
              <p className="mb-3">
                The proposed setup connects your account via 2.4 GHz Wi-Fi, registers clothes one at a time via optical RFID hanger tags, and optionally adds a personal reference photo for the outfit-preview concept.
              </p>
              <p className="text-xs font-mono-code text-[#858A86]">
                * Final connectivity, photo requirements, and garment registration workflow will be confirmed before public release.
              </p>
            </div>
          )}
        </div>

        {/* Interactive Assistant Storyboard */}
        <div className="p-8 bg-[#F6F5F1] border border-[#D5D4CE] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="font-mono-code text-xs text-[#5D625F] block mb-2">
              An example of the assistant / Illustrative Responses
            </span>
            <h3 className="text-2xl font-medium text-[#111111] mb-6">
              “Help me put a look together.”
            </h3>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2" role="group" aria-label="Example outfit requests">
              {SCENARIOS.map(s => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setSelectedScenarioId(s.id);
                    setRetrievalStatus(null);
                  }}
                  aria-pressed={selectedScenarioId === s.id}
                  className={`text-left px-4 py-3 min-h-[44px] text-sm font-medium border transition-colors flex items-center justify-between ${
                    selectedScenarioId === s.id
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#111111] border-[#858A86] hover:border-[#111111]'
                  }`}
                >
                  <span>{s.label}</span>
                  {selectedScenarioId === s.id && <Check className="w-4 h-4 ml-2" />}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#D5D4CE]" role="status">
            <p className="font-mono-code text-xs text-[#5D625F] mb-1">PROPOSED STYLING MATCH</p>
            <strong className="text-xl font-medium text-[#111111] block mb-3">
              {activeScenario.title}
            </strong>
            <p className="text-sm md:text-base text-[#5D625F] leading-relaxed mb-6">
              {activeScenario.copy}
            </p>

            <div className="space-y-2 border-t border-[#EAE8E1] pt-4 mb-4">
              <span className="font-mono-code text-xs text-[#858A86] uppercase block">Pieces required:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeScenario.items.map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-[#F6F5F1] border border-[#D5D4CE] text-xs font-mono-code">
                    <span className="text-[#5D625F] block">{item.category}</span>
                    <strong className="text-[#111111] block mt-0.5">{item.name}</strong>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs font-mono-code text-[#858A86]">
              Interactive storyboard — no live AI connection. Sizing and garment availability subject to your physical wardrobe inventory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
