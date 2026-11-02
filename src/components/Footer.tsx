import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenAbout: () => void;
  onOpenChrome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenAbout, onOpenChrome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#F6F5F1] border-t border-[#D5D4CE]" aria-label="Site footer">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-8 pb-8 border-b border-[#D5D4CE]">
          <div>
            <span className="font-display text-xl font-semibold tracking-tight text-[#111111]">
              MI Wardrobe
            </span>
            <p className="text-xs text-[#5D625F] font-mono-code mt-1">
              Google Sites Prototype · Paper Design System
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-[#5D625F] hover:text-[#111111] underline underline-offset-4 transition-colors min-h-[44px] flex items-center"
            >
              Prototype privacy
            </button>
            <button
              type="button"
              onClick={onOpenAbout}
              className="text-[#5D625F] hover:text-[#111111] underline underline-offset-4 transition-colors min-h-[44px] flex items-center"
            >
              About this prototype
            </button>
            <button
              type="button"
              onClick={onOpenChrome}
              className="text-[#5D625F] hover:text-[#111111] underline underline-offset-4 transition-colors min-h-[44px] flex items-center"
            >
              Google Chrome Access
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-[#EAE8E1] border border-[#111111] text-[#111111] text-xs font-mono-code transition-all"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-[#5D625F]">
          <span>MI Wardrobe / A new everyday ritual.</span>
          <span>University product concept & roadmap · 2026</span>
        </div>
      </div>
    </footer>
  );
};
