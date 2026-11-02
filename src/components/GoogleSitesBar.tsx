import React from 'react';
import { ViewportMode } from '../types';
import { Monitor, Tablet, Smartphone, Chrome, ExternalLink, BookOpen, Layers } from 'lucide-react';

interface GoogleSitesBarProps {
  viewport: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
  onRequestChrome: () => void;
  onOpenSitesRoadmap: () => void;
  chromeAccessGranted: boolean;
  inspectBlocks: boolean;
  onToggleInspectBlocks: () => void;
}

export const GoogleSitesBar: React.FC<GoogleSitesBarProps> = ({
  viewport,
  onViewportChange,
  onRequestChrome,
  onOpenSitesRoadmap,
  chromeAccessGranted,
  inspectBlocks,
  onToggleInspectBlocks,
}) => {
  return (
    <aside aria-label="Google Sites prototype controls" className="sticky top-0 z-50 bg-[#111111] text-[#FFFFFF] border-b border-[#353535] px-4 py-2.5 text-xs font-mono-code transition-all shadow-md">
      <div className="max-w-[1248px] mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Google Sites Prototype Branding & Chrome Request */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span className="font-semibold text-white tracking-wider">GOOGLE SITES PROTOTYPE</span>
            <span className="text-[#858A86]">|</span>
            <span className="text-[#D5D4CE] hidden sm:inline">MI Wardrobe Concept</span>
          </div>

          <button
            type="button"
            onClick={onRequestChrome}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors border ${
              chromeAccessGranted
                ? 'bg-[#1F2937] text-[#10B981] border-[#10B981]/40'
                : 'bg-[#2B2B2B] hover:bg-[#383838] text-[#F6F5F1] border-[#5D625F] hover:border-white'
            }`}
            title="Google Chrome access for Google Sites publishing and local device testing"
          >
            <Chrome className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>{chromeAccessGranted ? 'Chrome Access: Active' : 'Request Access to Google Chrome'}</span>
          </button>
        </div>

        {/* Center: Viewport Reflow Testing */}
        <div className="flex items-center gap-1 bg-[#1F2937] p-1 rounded border border-[#353535]">
          <span className="text-[#858A86] px-1.5 text-[11px] hidden md:inline">Viewport:</span>
          <button
            type="button"
            onClick={() => onViewportChange('desktop')}
            className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${
              viewport === 'desktop' ? 'bg-[#111111] text-white font-medium' : 'text-[#858A86] hover:text-white'
            }`}
            title="Desktop width (1248px container)"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => onViewportChange('tablet')}
            className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${
              viewport === 'tablet' ? 'bg-[#111111] text-white font-medium' : 'text-[#858A86] hover:text-white'
            }`}
            title="Tablet width (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => onViewportChange('mobile')}
            className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${
              viewport === 'mobile' ? 'bg-[#111111] text-white font-medium' : 'text-[#858A86] hover:text-white'
            }`}
            title="Mobile width (390px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Right: Sites Blueprint & Block Inspect */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleInspectBlocks}
            className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors border text-[11px] ${
              inspectBlocks
                ? 'bg-amber-900/60 text-amber-200 border-amber-500'
                : 'bg-[#1F2937] text-[#D5D4CE] border-[#353535] hover:text-white'
            }`}
            title="Toggle Google Sites Native Block overlay guide"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Sites Blocks</span>
          </button>

          <button
            type="button"
            onClick={onOpenSitesRoadmap}
            className="px-2.5 py-1 rounded bg-[#1F2937] hover:bg-[#353535] text-[#D5D4CE] hover:text-white flex items-center gap-1.5 transition-colors border border-[#353535] text-[11px]"
            title="View Google Sites 5-day build sequence & checklist"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Sites Guide</span>
          </button>

          <a
            href="https://sites.google.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded bg-white text-[#111111] hover:bg-[#EAE8E1] font-medium flex items-center gap-1 transition-colors text-[11px]"
            title="Open Google Sites editor in new tab"
          >
            <span>Open Sites</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </aside>
  );
};
