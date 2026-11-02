import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Sliders, Info, Shield, Layers, SunMedium, Compass, Maximize2 } from 'lucide-react';
import { ComponentSlice } from '../types';

const SLICES: ComponentSlice[] = [
  {
    id: 'top-cap',
    name: 'Top Structural Architrave & Cable Duct',
    subtitle: 'Modular ceiling-anchored structural truss',
    offsetRatio: 45, // vertical or subtle diagonal offset
    clipRect: { x: 67, y: 28, width: 751, height: 119 },
    specs: [
      'Extruded 6063-T6 architectural aluminum frame',
      'Integrated 2.4 GHz low-latency Wi-Fi receiver array',
      'Concealed power bus distributing 24V DC to carousel gantries',
    ],
    description: 'Houses the central micro-controller unit, master power distribution, and precision overhead alignment bearings for the motorized garment transport belts.',
  },
  {
    id: 'left-panel',
    name: 'Left Exterior Enclosure & Primary Rail Assembly',
    subtitle: 'Upper zone storage with continuous belt drive',
    offsetRatio: -210,
    clipRect: { x: 67, y: 147, width: 261, height: 632 },
    specs: [
      'Double-skin sound-dampened composite panel in warm eggshell finish',
      'Upper carousel travel loop: ~40 hung garment capacity',
      'High-precision optical indexing sensors for hanger positioning',
    ],
    description: 'Forms the outer protective shell and guides the upper continuous garment loop. Dampened acoustic dampening ensures silent garment circulation (<28 dB).',
  },
  {
    id: 'mirror-column',
    name: 'Embedded Smart Mirror & Capacitive Display',
    subtitle: 'Full-height optical mirror with outfit preview interface',
    offsetRatio: -80,
    clipRect: { x: 328, y: 147, width: 122, height: 632 },
    specs: [
      'High-reflectivity silver dielectric mirror with oleophobic coating',
      'Integrated touch-enabled OLED display zone (1080×1920 portrait)',
      'Ambient lighting color-calibrated to 5000K daylight CRI > 95',
    ],
    description: 'The physical interface at the heart of MI Wardrobe. Allows residents to browse their digitized wardrobe, preview outfit combinations, and command garment delivery.',
  },
  {
    id: 'core-opening',
    name: 'Central Garment Delivery Aperture & Linear Gantry',
    subtitle: 'Automated retrieval opening with soft interior illumination',
    offsetRatio: 0,
    clipRect: { x: 450, y: 147, width: 117, height: 632 },
    specs: [
      'Motorized linear gantry elevator for vertical hanger transfer',
      'RFID optical hanger barcode/tag reader for instant garment verification',
      'Warm LED directional edge lighting (3000K) at retrieval threshold',
    ],
    description: 'The focal point of retrieval. When a garment or complete ensemble is selected on the mirror display, the automated rail delivers the hangers directly into this illuminated portal.',
  },
  {
    id: 'right-panel',
    name: 'Right Exterior Enclosure & Lower Rail Carousel',
    subtitle: 'Secondary lower zone storage for trousers & compact pieces',
    offsetRatio: 210,
    clipRect: { x: 567, y: 147, width: 251, height: 632 },
    specs: [
      'Secondary lower rail carousel: ~20–30 garment positions',
      'Internal humidity & airflow regulation ductwork',
      'Quick-access magnetic maintenance service latch',
    ],
    description: 'Complements the upper storage zone by housing trousers, skirts, and folded garments on automated lower rails, providing efficient multi-tier space utilization.',
  },
  {
    id: 'base-plinth',
    name: 'Engineered Foundation Plinth & Stepper Drive',
    subtitle: 'Heavy-duty vibration-isolated base plinth',
    offsetRatio: -30,
    clipRect: { x: 56, y: 779, width: 776, height: 40 },
    specs: [
      'Heavy-gauge powder-coated structural steel substructure',
      'Dual ultra-quiet brushless stepper motors (0.8 Nm torque)',
      'Automated micro-leveling feet accommodating uneven floors',
    ],
    description: 'Provides structural rigidity and houses the main drive pulleys, tensioners, and vibration dampers that keep mechanism operation smooth and inaudible.',
  },
];

export const ExplodedViewSection: React.FC = () => {
  const [separation, setSeparation] = useState<number>(0); // 0 to 100
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(0.5); // 0.25, 0.5, 1.0
  const [lightingMode, setLightingMode] = useState<'warm' | 'technical'>('warm');
  const [selectedSliceId, setSelectedSliceId] = useState<string | null>(null);
  const [showCalipers, setShowCalipers] = useState<boolean>(true);

  const animFrameRef = useRef<number | null>(null);
  const animStartTimeRef = useRef<number | null>(null);
  const animStartValRef = useRef<number>(0);
  const targetValRef = useRef<number>(100);

  // Check prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const cancelAnimation = useCallback(() => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const handleTogglePlay = useCallback(() => {
    if (isPlaying) {
      cancelAnimation();
      return;
    }

    if (prefersReducedMotion) {
      // Instant transition for reduced motion
      const next = separation >= 99 ? 0 : 100;
      setSeparation(next);
      return;
    }

    const currentVal = separation;
    const target = currentVal >= 99 ? 0 : 100;
    targetValRef.current = target;
    animStartValRef.current = currentVal;
    animStartTimeRef.current = performance.now();

    // 6000ms duration scaled by distance and speed multiplier
    const totalDuration = (6000 / speedMultiplier) * (Math.abs(target - currentVal) / 100);

    setIsPlaying(true);

    const step = (now: number) => {
      const elapsed = now - (animStartTimeRef.current || now);
      const t = Math.min(1, elapsed / Math.max(1, totalDuration));

      // Ease in-out cubic interpolation for slow-motion precision
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const nextVal = animStartValRef.current + (targetValRef.current - animStartValRef.current) * eased;

      setSeparation(nextVal);

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        cancelAnimation();
        setSeparation(targetValRef.current);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  }, [isPlaying, separation, speedMultiplier, cancelAnimation, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const activeSlice = SLICES.find(s => s.id === selectedSliceId);

  // Dynamic span calculation in mm (1800mm base -> up to 2950mm exploded)
  const currentSpanMm = Math.round(1800 + (separation / 100) * 1150);

  return (
    <section id="hardware" className="py-20 md:py-24 bg-[#FFFFFF] border-b border-[#D5D4CE]" aria-labelledby="hardware-heading">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-12">
          <div>
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5D625F] mb-3">
              02 / Beneath the surface · Mechanical Study
            </p>
            <h2 id="hardware-heading" className="text-3xl md:text-4xl font-medium tracking-tight text-[#111111]">
              Considered outside.<br />Connected inside.
            </h2>
          </div>
          <p className="text-[#5D625F] text-base md:text-lg leading-relaxed max-w-[48ch]">
            Components gently floating apart outward along a single straight horizontal axis into an exploded technical view.
            Engineered with slow-motion precision, locked camera, and clean studio lighting.
          </p>
        </div>

        {/* Studio Technical Stage */}
        <div
          className={`relative border border-[#D5D4CE] rounded-none p-4 sm:p-8 transition-colors duration-500 overflow-hidden ${
            lightingMode === 'warm'
              ? 'bg-[#FBFBFA] shadow-[inset_0_0_80px_rgba(246,245,241,0.8)]'
              : 'bg-[#F2F4F7] shadow-[inset_0_0_80px_rgba(229,231,235,0.7)]'
          }`}
        >
          {/* Header Metadata Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D5D4CE] font-mono-code text-xs text-[#5D625F]">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#111111]">MI WARDROBE / COMPONENT STUDY</span>
              <span>•</span>
              <span>CAMERA: LOCKED 0° ELEVATION</span>
              <span>•</span>
              <span className="text-[#111111] font-medium">AXIS: HORIZONTAL 180°</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#111111]" />
                CALIPER: {currentSpanMm} mm
              </span>
              <span className="text-[#D5D4CE]">|</span>
              <span>STAGE: STUDIO {lightingMode.toUpperCase()}</span>
            </div>
          </div>

          {/* SVG Exploded Viewport */}
          <div className="relative my-4 flex items-center justify-center min-h-[380px] sm:min-h-[480px] md:min-h-[560px]">
            {/* Architectural Studio Grid Lines */}
            <div className="absolute inset-0 pointer-events-none paper-pattern opacity-40"></div>

            {/* Central Datum Line along single straight horizontal axis */}
            {showCalipers && (
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-between border-t border-dashed border-[#5D625F]/30 z-0">
                <span className="font-mono-code text-[10px] text-[#5D625F] bg-[#FFFFFF] px-1 -translate-y-1/2">
                  -X AXIS DATUM
                </span>
                <span className="font-mono-code text-[10px] text-[#5D625F] bg-[#FFFFFF] px-1 -translate-y-1/2">
                  CENTER RETRIEVAL GANTRY (0,0)
                </span>
                <span className="font-mono-code text-[10px] text-[#5D625F] bg-[#FFFFFF] px-1 -translate-y-1/2">
                  +X AXIS DATUM
                </span>
              </div>
            )}

            {/* Exploded SVG Rendered with wardrobe-idea.png */}
            <svg
              className="w-full max-h-[580px] select-none transition-transform duration-75 relative z-10"
              viewBox="-220 -20 1322 880"
              role="img"
              aria-label="MI Wardrobe precision mechanical exploded technical view"
            >
              <defs>
                <image
                  id="wardrobe-source-img"
                  href="/assets/wardrobe-idea.png"
                  width="882"
                  height="845"
                  preserveAspectRatio="xMidYMid slice"
                />

                {/* Slices clip paths */}
                <clipPath id="clip-top">
                  <rect x="67" y="28" width="751" height="119" />
                </clipPath>
                <clipPath id="clip-left">
                  <rect x="67" y="147" width="261" height="632" />
                </clipPath>
                <clipPath id="clip-mirror">
                  <rect x="328" y="147" width="122" height="632" />
                </clipPath>
                <clipPath id="clip-core">
                  <rect x="450" y="147" width="117" height="632" />
                </clipPath>
                <clipPath id="clip-right">
                  <rect x="567" y="147" width="251" height="632" />
                </clipPath>
                <clipPath id="clip-base">
                  <rect x="56" y="779" width="776" height="40" />
                </clipPath>

                {/* Soft studio drop shadow filter */}
                <filter id="studio-drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow
                    dx={(separation / 100) * 4}
                    dy="12"
                    stdDeviation={(separation / 100) * 8 + 4}
                    floodColor="#111111"
                    floodOpacity={lightingMode === 'warm' ? '0.12' : '0.18'}
                  />
                </filter>
              </defs>

              {/* Floor Shadow Plane simulating clean studio lighting */}
              <ellipse
                cx="441"
                cy="825"
                rx={380 + (separation / 100) * 180}
                ry="22"
                fill="url(#studio-floor-gradient)"
                opacity={0.35}
              />
              <linearGradient id="studio-floor-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#111111" stopOpacity="0" />
                <stop offset="25%" stopColor="#111111" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#111111" stopOpacity="0.25" />
                <stop offset="75%" stopColor="#111111" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#111111" stopOpacity="0" />
              </linearGradient>

              {/* Exploded Component Groups */}
              <g id="mechanical-slices" filter="url(#studio-drop-shadow)">
                {/* 1. Top Architrave: Moves slightly upward along vertical datum */}
                <g
                  transform={`translate(0, ${-(separation / 100) * 35})`}
                  className="cursor-pointer transition-opacity"
                  onClick={() => setSelectedSliceId('top-cap')}
                >
                  <use href="#wardrobe-source-img" clipPath="url(#clip-top)" />
                  {selectedSliceId === 'top-cap' && (
                    <rect
                      x="67"
                      y="28"
                      width="751"
                      height="119"
                      fill="none"
                      stroke="#111111"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                    />
                  )}
                </g>

                {/* 2. Left Exterior Enclosure & Rail: Floats outward left along straight X axis */}
                <g
                  transform={`translate(${-(separation / 100) * 195}, 0)`}
                  className="cursor-pointer transition-opacity"
                  onClick={() => setSelectedSliceId('left-panel')}
                >
                  <use href="#wardrobe-source-img" clipPath="url(#clip-left)" />
                  {selectedSliceId === 'left-panel' && (
                    <rect
                      x="67"
                      y="147"
                      width="261"
                      height="632"
                      fill="none"
                      stroke="#111111"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                    />
                  )}
                </g>

                {/* 3. Mirror & Outfit Display Column: Floats slightly left */}
                <g
                  transform={`translate(${-(separation / 100) * 75}, 0)`}
                  className="cursor-pointer transition-opacity"
                  onClick={() => setSelectedSliceId('mirror-column')}
                >
                  <use href="#wardrobe-source-img" clipPath="url(#clip-mirror)" />
                  {/* Active UI screen glow overlay on the mirror */}
                  {separation > 10 && (
                    <rect
                      x="332"
                      y="260"
                      width="114"
                      height="220"
                      fill="#FFFFFF"
                      opacity={(separation / 100) * 0.25}
                      rx="2"
                    />
                  )}
                  {selectedSliceId === 'mirror-column' && (
                    <rect
                      x="328"
                      y="147"
                      width="122"
                      height="632"
                      fill="none"
                      stroke="#111111"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                    />
                  )}
                </g>

                {/* 4. Center Core Opening: Anchored at center origin (0,0) */}
                <g
                  transform="translate(0, 0)"
                  className="cursor-pointer transition-opacity"
                  onClick={() => setSelectedSliceId('core-opening')}
                >
                  <use href="#wardrobe-source-img" clipPath="url(#clip-core)" />
                  {/* Subtle luminescent glow inside retrieval shaft */}
                  {separation > 10 && (
                    <line
                      x1="508"
                      y1="220"
                      x2="508"
                      y2="720"
                      stroke="#FBBF24"
                      strokeWidth="2"
                      strokeOpacity={(separation / 100) * 0.7}
                    />
                  )}
                  {selectedSliceId === 'core-opening' && (
                    <rect
                      x="450"
                      y="147"
                      width="117"
                      height="632"
                      fill="none"
                      stroke="#111111"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                    />
                  )}
                </g>

                {/* 5. Right Exterior Enclosure & Lower Rail: Floats outward right along straight X axis */}
                <g
                  transform={`translate(${(separation / 100) * 195}, 0)`}
                  className="cursor-pointer transition-opacity"
                  onClick={() => setSelectedSliceId('right-panel')}
                >
                  <use href="#wardrobe-source-img" clipPath="url(#clip-right)" />
                  {selectedSliceId === 'right-panel' && (
                    <rect
                      x="567"
                      y="147"
                      width="251"
                      height="632"
                      fill="none"
                      stroke="#111111"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                    />
                  )}
                </g>

                {/* 6. Base Foundation Plinth: Anchors downward */}
                <g
                  transform={`translate(0, ${(separation / 100) * 20})`}
                  className="cursor-pointer transition-opacity"
                  onClick={() => setSelectedSliceId('base-plinth')}
                >
                  <use href="#wardrobe-source-img" clipPath="url(#clip-base)" />
                  {selectedSliceId === 'base-plinth' && (
                    <rect
                      x="56"
                      y="779"
                      width="776"
                      height="40"
                      fill="none"
                      stroke="#111111"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                    />
                  )}
                </g>
              </g>

              {/* Dimension Calipers and Technical Callout Lines */}
              {showCalipers && separation > 15 && (
                <g className="font-mono-code text-[11px] text-[#5D625F]">
                  {/* Left panel callout line */}
                  <line
                    x1={197 - (separation / 100) * 195}
                    y1="147"
                    x2={197 - (separation / 100) * 195}
                    y2="85"
                    stroke="#5D625F"
                    strokeWidth="1"
                  />
                  <circle cx={197 - (separation / 100) * 195} cy="85" r="3" fill="#111111" />
                  <text
                    x={197 - (separation / 100) * 195 - 40}
                    y="72"
                    fill="#111111"
                    fontSize="11"
                    fontFamily="PT Mono, monospace"
                  >
                    01 / Upper Loop Rail
                  </text>

                  {/* Mirror display callout line */}
                  <line
                    x1={389 - (separation / 100) * 75}
                    y1="240"
                    x2={389 - (separation / 100) * 75}
                    y2="110"
                    stroke="#5D625F"
                    strokeWidth="1"
                  />
                  <circle cx={389 - (separation / 100) * 75} cy="110" r="3" fill="#111111" />
                  <text
                    x={389 - (separation / 100) * 75 - 35}
                    y="100"
                    fill="#111111"
                    fontSize="11"
                    fontFamily="PT Mono, monospace"
                  >
                    02 / Mirror Interface
                  </text>

                  {/* Right panel callout line */}
                  <line
                    x1={692 + (separation / 100) * 195}
                    y1="147"
                    x2={692 + (separation / 100) * 195}
                    y2="85"
                    stroke="#5D625F"
                    strokeWidth="1"
                  />
                  <circle cx={692 + (separation / 100) * 195} cy="85" r="3" fill="#111111" />
                  <text
                    x={692 + (separation / 100) * 195 - 40}
                    y="72"
                    fill="#111111"
                    fontSize="11"
                    fontFamily="PT Mono, monospace"
                  >
                    03 / Lower Zone Rail
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Interactive Mechanical Controls Bar */}
          <div className="pt-6 border-t border-[#D5D4CE] flex flex-wrap items-center justify-between gap-4">
            {/* Play / Pause / Reassemble button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleTogglePlay}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white hover:bg-[#353535] active:scale-[0.98] rounded-none font-medium text-sm transition-all shadow-sm"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Precision Float</span>
                  </>
                ) : separation >= 99 ? (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    <span>Reassemble Wardrobe</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Play Exploded View</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  cancelAnimation();
                  setSeparation(0);
                  setSelectedSliceId(null);
                }}
                className="p-2.5 border border-[#858A86] hover:border-[#111111] hover:bg-[#EAE8E1] text-[#111111] transition-colors"
                title="Reset assembly to 0%"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Precision Slider Scrub */}
            <div className="flex items-center gap-3 flex-1 min-w-[200px] max-w-[420px]">
              <label htmlFor="separation-slider" className="font-mono-code text-xs text-[#5D625F] whitespace-nowrap">
                Separation:
              </label>
              <input
                id="separation-slider"
                type="range"
                min="0"
                max="100"
                value={Math.round(separation)}
                onChange={e => {
                  cancelAnimation();
                  setSeparation(Number(e.target.value));
                }}
                className="w-full paper-slider cursor-pointer"
                aria-label="Exploded view mechanical separation"
              />
              <span className="font-mono-code text-xs font-semibold text-[#111111] w-12 text-right">
                {Math.round(separation)}%
              </span>
            </div>

            {/* Studio Settings: Speed, Calipers, Lighting */}
            <div className="flex items-center gap-2 font-mono-code text-xs">
              {/* Slow-motion Speed selector */}
              <div className="flex items-center border border-[#D5D4CE] bg-white">
                <span className="px-2 text-[#5D625F] text-[11px] hidden sm:inline">Speed:</span>
                {[0.25, 0.5, 1.0].map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSpeedMultiplier(s)}
                    className={`px-2 py-1.5 transition-colors ${
                      speedMultiplier === s
                        ? 'bg-[#111111] text-white font-semibold'
                        : 'text-[#5D625F] hover:text-[#111111]'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>

              {/* Lighting Mode toggle */}
              <button
                type="button"
                onClick={() => setLightingMode(prev => (prev === 'warm' ? 'technical' : 'warm'))}
                className="p-2 border border-[#D5D4CE] bg-white hover:border-[#111111] text-[#111111] transition-colors flex items-center gap-1.5"
                title="Toggle studio lighting temperature (3200K warm vs 5000K daylight)"
              >
                <SunMedium className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{lightingMode === 'warm' ? '3200K' : '5000K'}</span>
              </button>

              {/* Calipers toggle */}
              <button
                type="button"
                onClick={() => setShowCalipers(!showCalipers)}
                className={`p-2 border transition-colors flex items-center gap-1.5 ${
                  showCalipers
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#5D625F] border-[#D5D4CE] hover:text-[#111111]'
                }`}
                title="Toggle technical guide lines and dimensional calipers"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Guides</span>
              </button>
            </div>
          </div>

          {/* Real-time Status Caption */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5D625F] font-mono-code pt-3 border-t border-[#D5D4CE]/60">
            <p>
              Status:{' '}
              <span className="text-[#111111] font-medium">
                {separation === 0
                  ? 'Assembled · All panels mechanically locked.'
                  : separation >= 99
                  ? 'Full exploded technical inspection · 6 modules isolated along single horizontal straight axis.'
                  : `Slow-motion interpolation in progress · ${Math.round(separation)}% outward displacement.`}
              </span>
            </p>
            <p className="text-[11px] text-[#858A86]">
              Tip: Click any component slice above to view engineering sub-assembly specs.
            </p>
          </div>
        </div>

        {/* Selected Component Technical Spec Sheet */}
        {activeSlice && (
          <div className="mt-6 p-6 bg-[#EAE8E1] border border-[#D5D4CE] animate-fadeIn transition-all">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <span className="font-mono-code text-xs text-[#5D625F] uppercase tracking-wider">
                  Inspecting Sub-Assembly / {activeSlice.id}
                </span>
                <h3 className="text-xl font-medium text-[#111111] mt-1">{activeSlice.name}</h3>
                <p className="text-sm text-[#5D625F] mt-0.5">{activeSlice.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSliceId(null)}
                className="font-mono-code text-xs px-2.5 py-1 border border-[#858A86] hover:bg-white text-[#111111]"
              >
                Close Spec [✕]
              </button>
            </div>
            <p className="text-sm text-[#111827] mb-4 leading-relaxed max-w-[70ch]">
              {activeSlice.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-[#D5D4CE]">
              {activeSlice.specs.map((spec, i) => (
                <div key={i} className="text-xs bg-white/70 p-3 border border-[#D5D4CE]/60 font-mono-code">
                  <span className="text-[#858A86] block mb-1">SPEC 0{i + 1}</span>
                  <span className="text-[#111111]">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#D5D4CE]">
          <div>
            <span className="font-mono-code text-xs text-[#5D625F] block mb-2">01 / BUILT-IN DISPLAY</span>
            <h4 className="text-lg font-medium text-[#111111] mb-2">Dielectric Mirror Interface</h4>
            <p className="text-sm text-[#5D625F] leading-relaxed">
              A seamless optical mirror that instantly transforms into a responsive digital wardrobe dashboard when activated, offering look suggestions and garment indexing without clunky standalone monitors.
            </p>
          </div>
          <div>
            <span className="font-mono-code text-xs text-[#5D625F] block mb-2">02 / COLLECTION OPENING</span>
            <h4 className="text-lg font-medium text-[#111111] mb-2">Automated Delivery Portal</h4>
            <p className="text-sm text-[#5D625F] leading-relaxed">
              Eliminates rifling through crowded hangers. Selected garments travel via linear gantry directly to the softly illuminated vertical threshold for effortless collection.
            </p>
          </div>
          <div>
            <span className="font-mono-code text-xs text-[#5D625F] block mb-2">03 / CONTINUOUS GANTRY</span>
            <h4 className="text-lg font-medium text-[#111111] mb-2">Dual-Tier Motorized Storage</h4>
            <p className="text-sm text-[#5D625F] leading-relaxed">
              Two synchronized belt loops organize long coats, dresses, and shirts on the upper level, while lower rails manage trousers and accessories with whisper-quiet brushless drives.
            </p>
          </div>
        </div>

        <p className="text-xs text-[#858A86] font-mono-code mt-8 text-center">
          * Image-based precision motion study utilizing supplied concept visual. Linear displacement executed along locked horizontal vector without altering core perspective.
        </p>
      </div>
    </section>
  );
};
