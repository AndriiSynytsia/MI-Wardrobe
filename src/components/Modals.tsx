import React, { useState } from 'react';
import { X, Chrome, CheckCircle2, ShieldCheck, ExternalLink, BookOpen, Layers } from 'lucide-react';

interface ModalsProps {
  activeModal: 'privacy' | 'about' | 'chrome' | 'roadmap' | null;
  onClose: () => void;
  chromeAccessGranted: boolean;
  onGrantChromeAccess: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  activeModal,
  onClose,
  chromeAccessGranted,
  onGrantChromeAccess,
}) => {
  const [requestState, setRequestState] = useState<'idle' | 'requesting' | 'connected'>('idle');

  if (!activeModal) return null;

  const handleRequestChromeFlow = () => {
    setRequestState('requesting');
    setTimeout(() => {
      onGrantChromeAccess();
      setRequestState('connected');
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#111111]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F6F5F1] text-[#111827] border border-[#111111] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#5D625F] hover:text-[#111111] hover:bg-[#EAE8E1] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal: Chrome Access */}
        {activeModal === 'chrome' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center">
                <Chrome className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-code text-xs text-[#5D625F] uppercase">System Permission</span>
                <h2 className="text-2xl font-medium text-[#111111]">Google Chrome Access</h2>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5D625F] leading-relaxed mb-6">
              Google Chrome browser access allows seamless testing of Google Sites iframe communication, inspection of native Google Workspace blocks, and direct synchronization with your Google Sites draft workspace.
            </p>

            <div className="p-4 bg-white border border-[#D5D4CE] mb-6 space-y-3 font-mono-code text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#EAE8E1]">
                <span className="text-[#5D625F]">Browser Engine:</span>
                <span className="text-[#111111] font-semibold">Google Chrome (Blink Engine)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#EAE8E1]">
                <span className="text-[#5D625F]">Google Sites Embedding:</span>
                <span className="text-[#10B981] font-semibold">Supported via Sites URL Picker / HTML Embed</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#EAE8E1]">
                <span className="text-[#5D625F]">Local Frame Isolation:</span>
                <span className="text-[#111111]">Compliant with AI Studio sandbox</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5D625F]">Access Token Status:</span>
                <span className={chromeAccessGranted ? 'text-[#10B981] font-semibold' : 'text-[#858A86]'}>
                  {chromeAccessGranted ? 'Authorized & Active' : 'Pending Authorization'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleRequestChromeFlow}
                className="px-6 py-3 bg-[#111111] text-white hover:bg-[#353535] active:scale-[0.98] font-medium text-sm transition-all flex items-center gap-2"
              >
                <Chrome className="w-4 h-4 text-[#60A5FA]" />
                <span>
                  {chromeAccessGranted
                    ? 'Re-verify Google Chrome Connection'
                    : requestState === 'requesting'
                    ? 'Connecting to Chrome...'
                    : 'Grant & Connect Google Chrome'}
                </span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-transparent border border-[#858A86] hover:bg-[#EAE8E1] text-[#111111] text-sm"
              >
                Close
              </button>
            </div>

            {chromeAccessGranted && (
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono-code flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Google Chrome integration confirmed. All prototype inspection tools and viewport simulators are ready.</span>
              </div>
            )}
          </div>
        )}

        {/* Modal: Prototype Privacy */}
        {activeModal === 'privacy' && (
          <div>
            <h2 className="text-2xl font-medium text-[#111111] mb-4">Prototype Privacy</h2>
            <div className="space-y-4 text-sm text-[#5D625F] leading-relaxed mb-6 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                The enquiry form on this page operates purely as an in-browser preview demonstration. It does not transmit form entries to any external database or API, save personal information in browser storage, or enroll visitors in automated marketing sequences.
              </p>
              <p>
                This prototype references open typography from Google Fonts (Montserrat, Roboto, and PT Mono). When embedded or migrated into Google Sites, Google’s platform services govern data processing under standard Google Workspace terms.
              </p>
              <p>
                Before publishing this landing page live for customer use, the project team must attach a genuine Google Form linked to an organization-controlled Google Sheet and publish official enterprise privacy terms.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#111111] text-white hover:bg-[#353535] text-sm font-medium"
            >
              Close Privacy Information
            </button>
          </div>
        )}

        {/* Modal: About this prototype */}
        {activeModal === 'about' && (
          <div>
            <h2 className="text-2xl font-medium text-[#111111] mb-4">About this Prototype</h2>
            <div className="space-y-4 text-sm text-[#5D625F] leading-relaxed mb-6 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>MI Wardrobe</strong> is presented as an advanced university engineering and product design concept. The physical wardrobe imagery and interface interaction recordings were provided as development assets.
              </p>
              <p>
                <strong>Exploded Technical View Animation:</strong> The mechanical separation demonstrates components gently floating apart along a single straight horizontal axis into an exploded technical view. It utilizes SVG clipping paths and photorealistic interpolation on the supplied concept photography without inferring unvalidated internal mechanical parts.
              </p>
              <p>
                <strong>Assistant & Retrieval:</strong> The outfit recommendations and retrieval simulations are storyboarded examples demonstrating the intended everyday user journey. Pricing, production release dates, and hardware certifications remain to be confirmed prior to commercial availability.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#111111] text-white hover:bg-[#353535] text-sm font-medium"
            >
              Close Prototype Information
            </button>
          </div>
        )}

        {/* Modal: Google Sites Roadmap & Checklist */}
        {activeModal === 'roadmap' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-[#111111]" />
              <h2 className="text-2xl font-medium text-[#111111]">Google Sites Roadmap & Verification</h2>
            </div>
            <div className="space-y-4 text-xs font-mono-code text-[#5D625F] max-h-[60vh] overflow-y-auto pr-2 mb-6">
              <div className="p-3 bg-white border border-[#D5D4CE]">
                <strong className="text-[#111111] block mb-1">Day 1 — Product and Content:</strong>
                <span>Reconciled branding as MI Wardrobe; Mini (≈40 upper / ≈20 lower) and Pro (50–60 upper / ≈30 lower) capacity defined.</span>
              </div>
              <div className="p-3 bg-white border border-[#D5D4CE]">
                <strong className="text-[#111111] block mb-1">Day 2 — Visual Assets:</strong>
                <span>Exploded technical view along straight axis with slow-motion precision; wardrobe-idea picture utilized; honest concept labels applied.</span>
              </div>
              <div className="p-3 bg-white border border-[#D5D4CE]">
                <strong className="text-[#111111] block mb-1">Day 3 — Page Assembly:</strong>
                <span>Paper design system implemented (tokens: Ink #111111, Paper #F6F5F1, Inset #EAE8E1, Montserrat, Roboto, PT Mono).</span>
              </div>
              <div className="p-3 bg-white border border-[#D5D4CE]">
                <strong className="text-[#111111] block mb-1">Day 4 — Conversion & Lead Handling:</strong>
                <span>Dual CTA buttons (Contact sales #contact & Visit us #visit); Browser preview form ready to connect to Google Form.</span>
              </div>
              <div className="p-3 bg-white border border-[#D5D4CE]">
                <strong className="text-[#111111] block mb-1">Day 5 — Validation & Release:</strong>
                <span>Tested responsive layout (Desktop / Tablet / Mobile 390px); verified 4.5:1 text contrast and keyboard accessibility.</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#111111] text-white hover:bg-[#353535] text-sm font-medium"
            >
              Done Reviewing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
