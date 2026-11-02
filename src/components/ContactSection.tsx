import React, { useState, useEffect } from 'react';
import { EnquiryData } from '../types';
import { ArrowUpRight, CheckCircle2, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  initialInterest?: string;
  initialModel?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInterest, initialModel }) => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    email: '',
    interest: 'Home use',
    model: 'Not sure yet',
    message: '',
  });

  const [previewResult, setPreviewResult] = useState<EnquiryData | null>(null);
  const [copiedPayload, setCopiedPayload] = useState<boolean>(false);

  useEffect(() => {
    if (initialInterest) {
      setFormData(prev => ({ ...prev, interest: initialInterest }));
    }
  }, [initialInterest]);

  useEffect(() => {
    if (initialModel) {
      setFormData(prev => ({ ...prev, model: initialModel }));
    }
  }, [initialModel]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPreviewResult({ ...formData });
  };

  const handleCopyGoogleSitesPayload = () => {
    if (!previewResult) return;
    const payload = `TIMESTAMP: ${new Date().toISOString()}\nNAME: ${previewResult.name}\nEMAIL: ${previewResult.email}\nINTEREST: ${previewResult.interest}\nMODEL: ${previewResult.model}\nMESSAGE: ${previewResult.message || 'N/A'}`;
    navigator.clipboard.writeText(payload);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#EAE8E1] border-b border-[#D5D4CE]" aria-labelledby="contact-heading">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5D625F] mb-3">
              07 / Let’s start a conversation
            </p>
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight mb-6">
              A wardrobe for<br />what comes next.
            </h2>
            <p className="text-base md:text-lg text-[#5D625F] leading-relaxed mb-6 max-w-[42ch]">
              Interested in MI Wardrobe for your home, commercial styling studio, or an upcoming demonstration? Tell us what you have in mind.
            </p>
            <div className="p-4 bg-[#F6F5F1] border border-[#D5D4CE] text-xs font-mono-code text-[#5D625F] mb-6">
              <span className="font-semibold text-[#111111] block mb-1">PROTOTYPE NOTICE</span>
              Prototype form preview. Submissions remain local to your browser session. Connect your Google Form / Google Sheet when publishing in Google Sites.
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 bg-[#FFFFFF] border border-[#D5D4CE] shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="text-xs font-mono-code uppercase tracking-wider text-[#111111] font-medium">
                    Name (required)
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-4 py-3 border border-[#858A86] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] outline-none text-sm bg-white"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email-input" className="text-xs font-mono-code uppercase tracking-wider text-[#111111] font-medium">
                    Email (required)
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 border border-[#858A86] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] outline-none text-sm bg-white"
                  />
                </div>

                {/* Interest */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="interest-select" className="text-xs font-mono-code uppercase tracking-wider text-[#111111] font-medium">
                    I’m interested in
                  </label>
                  <select
                    id="interest-select"
                    value={formData.interest}
                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 border border-[#858A86] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] outline-none text-sm bg-white"
                  >
                    <option value="Home use">Home use</option>
                    <option value="Business use">Business use</option>
                    <option value="Expo demonstration">Expo demonstration</option>
                    <option value="Architectural consultation">Architectural consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Model */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="model-select" className="text-xs font-mono-code uppercase tracking-wider text-[#111111] font-medium">
                    Model
                  </label>
                  <select
                    id="model-select"
                    value={formData.model}
                    onChange={e => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-4 py-3 border border-[#858A86] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] outline-none text-sm bg-white"
                  >
                    <option value="Not sure yet">Not sure yet</option>
                    <option value="Mini">MI Wardrobe Mini (≈40 upper / ≈20 lower)</option>
                    <option value="Pro">MI Wardrobe Pro (50–60 upper / ≈30 lower)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label htmlFor="message-input" className="text-xs font-mono-code uppercase tracking-wider text-[#111111] font-medium">
                    What would you like to explore? (optional)
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room dimensions, desired finish, or showcase attendance..."
                    className="w-full px-4 py-3 border border-[#858A86] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] outline-none text-sm bg-white resize-y"
                  ></textarea>
                </div>
              </div>

              <p className="text-xs text-[#5D625F] font-mono-code mb-6">
                This preview runs entirely in your browser. Please use sample details while reviewing the prototype.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-between gap-6 px-6 py-3.5 min-h-[48px] bg-[#111111] text-white hover:bg-[#353535] active:scale-[0.98] font-medium text-sm transition-all"
              >
                <span>Preview enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Form Live Status Preview per Paper Design System */}
              {previewResult && (
                <div className="mt-8 p-6 bg-[#F6F5F1] border-l-4 border-[#111111] border-t border-r border-b border-[#D5D4CE] animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D5D4CE] mb-4">
                    <span className="font-mono-code text-xs text-[#111111] font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      ENQUIRY PREVIEW — READY FOR GOOGLE FORM
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyGoogleSitesPayload}
                      className="font-mono-code text-xs px-2.5 py-1 bg-white border border-[#858A86] hover:border-[#111111] text-[#111111] flex items-center gap-1"
                    >
                      {copiedPayload ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPayload ? 'Copied' : 'Copy Payload'}</span>
                    </button>
                  </div>
                  <pre className="font-mono-code text-xs text-[#111827] whitespace-pre-wrap leading-relaxed">
{`Name:     ${previewResult.name}
Email:    ${previewResult.email}
Interest: ${previewResult.interest}
Model:    ${previewResult.model}
Message:  ${previewResult.message || '(None provided)'}`}
                  </pre>
                  <p className="text-[11px] font-mono-code text-[#5D625F] mt-4 pt-3 border-t border-[#D5D4CE]">
                    You can edit the fields above and preview again anytime. In Google Sites, this form block can be linked to your native Google Form linked to Google Sheets.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
