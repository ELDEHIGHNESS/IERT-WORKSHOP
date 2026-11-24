"use client";

import React, { useState, useEffect } from "react";

const NATURAL_SCENES = [
  {
    src: "/nature/nature-1.jpg",
    title: "Yosemite Valley & Mirrored Waters",
    location: "California, Sierra Nevada",
  },
  {
    src: "/nature/nature-2.jpg",
    title: "Misty Evergreen Forest",
    location: "Pacific Northwest",
  },
  {
    src: "/nature/nature-3.jpg",
    title: "Alpine Summit under the Starlight",
    location: "Swiss Alps",
  },
  {
    src: "/nature/nature-4.jpg",
    title: "Golden Hour Mountain Ridge",
    location: "Norwegian Fjordlands",
  },
];

// Pre-computed deterministic celestial stars distributed across the sky canopy
const CELESTIAL_STARS = [
  // Upper Sky (Dense celestial canopy)
  { id: 1, top: "2.5%", left: "8%", size: 1.5, minOp: 0.25, maxOp: 0.9, dur: 3.2, delay: 0.2 },
  { id: 2, top: "4.8%", left: "19%", size: 2.4, minOp: 0.35, maxOp: 1.0, dur: 4.5, delay: 1.1, glint: true },
  { id: 3, top: "3.2%", left: "34%", size: 1.2, minOp: 0.15, maxOp: 0.75, dur: 2.8, delay: 0.7 },
  { id: 4, top: "6.1%", left: "47%", size: 2.0, minOp: 0.3, maxOp: 0.95, dur: 3.8, delay: 2.4 },
  { id: 5, top: "2.1%", left: "58%", size: 1.4, minOp: 0.2, maxOp: 0.8, dur: 4.2, delay: 1.8 },
  { id: 6, top: "5.4%", left: "71%", size: 2.6, minOp: 0.4, maxOp: 1.0, dur: 3.5, delay: 0.5, glint: true },
  { id: 7, top: "3.8%", left: "84%", size: 1.3, minOp: 0.2, maxOp: 0.7, dur: 5.1, delay: 2.9 },
  { id: 8, top: "6.9%", left: "93%", size: 2.1, minOp: 0.3, maxOp: 0.9, dur: 3.0, delay: 1.4 },

  // Mid-Upper Sky
  { id: 9, top: "11.2%", left: "5%", size: 1.8, minOp: 0.25, maxOp: 0.85, dur: 4.0, delay: 3.1 },
  { id: 10, top: "13.5%", left: "15%", size: 1.2, minOp: 0.15, maxOp: 0.65, dur: 2.6, delay: 0.8 },
  { id: 11, top: "9.8%", left: "26%", size: 2.5, minOp: 0.35, maxOp: 1.0, dur: 4.8, delay: 1.7, glint: true },
  { id: 12, top: "15.1%", left: "38%", size: 1.4, minOp: 0.2, maxOp: 0.75, dur: 3.4, delay: 2.2 },
  { id: 13, top: "12.4%", left: "52%", size: 2.2, minOp: 0.3, maxOp: 0.9, dur: 4.1, delay: 0.3 },
  { id: 14, top: "16.8%", left: "64%", size: 1.3, minOp: 0.2, maxOp: 0.7, dur: 2.9, delay: 3.5 },
  { id: 15, top: "10.5%", left: "77%", size: 2.7, minOp: 0.4, maxOp: 1.0, dur: 3.6, delay: 1.9, glint: true },
  { id: 16, top: "14.2%", left: "88%", size: 1.5, minOp: 0.25, maxOp: 0.85, dur: 4.4, delay: 0.6 },
  { id: 17, top: "18.3%", left: "96%", size: 1.2, minOp: 0.15, maxOp: 0.6, dur: 3.1, delay: 2.7 },

  // Midfield Expanse
  { id: 18, top: "22.4%", left: "10%", size: 2.0, minOp: 0.3, maxOp: 0.95, dur: 3.7, delay: 1.5 },
  { id: 19, top: "25.1%", left: "22%", size: 1.3, minOp: 0.2, maxOp: 0.7, dur: 4.3, delay: 0.4 },
  { id: 20, top: "20.8%", left: "33%", size: 2.3, minOp: 0.35, maxOp: 1.0, dur: 3.3, delay: 2.8, glint: true },
  { id: 21, top: "27.5%", left: "44%", size: 1.1, minOp: 0.15, maxOp: 0.65, dur: 2.7, delay: 1.0 },
  { id: 22, top: "23.9%", left: "57%", size: 1.8, minOp: 0.25, maxOp: 0.85, dur: 4.6, delay: 3.3 },
  { id: 23, top: "28.2%", left: "69%", size: 2.4, minOp: 0.35, maxOp: 0.95, dur: 3.9, delay: 0.9, glint: true },
  { id: 24, top: "21.6%", left: "81%", size: 1.4, minOp: 0.2, maxOp: 0.75, dur: 3.1, delay: 2.0 },
  { id: 25, top: "26.3%", left: "92%", size: 1.9, minOp: 0.25, maxOp: 0.9, dur: 4.2, delay: 1.3 },

  // Lower-Mid Expanse
  { id: 26, top: "33.7%", left: "6%", size: 1.5, minOp: 0.2, maxOp: 0.8, dur: 3.5, delay: 2.5 },
  { id: 27, top: "37.2%", left: "18%", size: 2.2, minOp: 0.3, maxOp: 0.95, dur: 4.4, delay: 0.7 },
  { id: 28, top: "31.5%", left: "29%", size: 1.2, minOp: 0.15, maxOp: 0.65, dur: 2.9, delay: 3.8 },
  { id: 29, top: "39.1%", left: "42%", size: 2.5, minOp: 0.35, maxOp: 1.0, dur: 3.6, delay: 1.6, glint: true },
  { id: 30, top: "34.8%", left: "54%", size: 1.6, minOp: 0.2, maxOp: 0.85, dur: 4.7, delay: 0.2 },
  { id: 31, top: "38.4%", left: "67%", size: 1.3, minOp: 0.15, maxOp: 0.7, dur: 3.2, delay: 2.1 },
  { id: 32, top: "32.1%", left: "78%", size: 2.1, minOp: 0.3, maxOp: 0.9, dur: 4.0, delay: 1.1 },
  { id: 33, top: "36.6%", left: "89%", size: 1.4, minOp: 0.2, maxOp: 0.8, dur: 2.8, delay: 3.4 },

  // Horizon & Lower Background
  { id: 34, top: "45.2%", left: "12%", size: 1.9, minOp: 0.25, maxOp: 0.9, dur: 3.8, delay: 0.5 },
  { id: 35, top: "48.9%", left: "25%", size: 1.3, minOp: 0.15, maxOp: 0.7, dur: 4.5, delay: 2.3 },
  { id: 36, top: "43.1%", left: "37%", size: 2.4, minOp: 0.35, maxOp: 1.0, dur: 3.4, delay: 1.0, glint: true },
  { id: 37, top: "51.4%", left: "49%", size: 1.2, minOp: 0.15, maxOp: 0.6, dur: 2.7, delay: 3.6 },
  { id: 38, top: "46.8%", left: "61%", size: 2.0, minOp: 0.3, maxOp: 0.95, dur: 4.1, delay: 1.8 },
  { id: 39, top: "52.3%", left: "74%", size: 1.5, minOp: 0.2, maxOp: 0.8, dur: 3.3, delay: 0.4 },
  { id: 40, top: "47.7%", left: "86%", size: 2.2, minOp: 0.3, maxOp: 0.9, dur: 4.9, delay: 2.8 },
  { id: 41, top: "54.1%", left: "95%", size: 1.4, minOp: 0.2, maxOp: 0.75, dur: 3.0, delay: 1.2 },

  // Deep Lower Expanse
  { id: 42, top: "62.3%", left: "8%", size: 1.6, minOp: 0.2, maxOp: 0.8, dur: 4.2, delay: 1.7 },
  { id: 43, top: "68.7%", left: "21%", size: 2.3, minOp: 0.3, maxOp: 0.95, dur: 3.6, delay: 0.3, glint: true },
  { id: 44, top: "65.4%", left: "35%", size: 1.2, minOp: 0.15, maxOp: 0.65, dur: 2.8, delay: 2.6 },
  { id: 45, top: "71.1%", left: "46%", size: 1.8, minOp: 0.25, maxOp: 0.85, dur: 4.4, delay: 1.4 },
  { id: 46, top: "67.8%", left: "58%", size: 2.1, minOp: 0.3, maxOp: 0.9, dur: 3.5, delay: 3.2 },
  { id: 47, top: "73.5%", left: "70%", size: 1.3, minOp: 0.15, maxOp: 0.7, dur: 4.0, delay: 0.8 },
  { id: 48, top: "69.2%", left: "83%", size: 2.5, minOp: 0.35, maxOp: 1.0, dur: 3.2, delay: 2.0, glint: true },
  { id: 49, top: "75.8%", left: "92%", size: 1.5, minOp: 0.2, maxOp: 0.8, dur: 4.6, delay: 1.1 },

  // Base Atmosphere (Deep nocturnal stars)
  { id: 50, top: "82.4%", left: "14%", size: 1.8, minOp: 0.2, maxOp: 0.85, dur: 3.9, delay: 2.2 },
  { id: 51, top: "87.1%", left: "27%", size: 1.3, minOp: 0.15, maxOp: 0.7, dur: 2.9, delay: 0.6 },
  { id: 52, top: "84.5%", left: "41%", size: 2.2, minOp: 0.3, maxOp: 0.95, dur: 4.3, delay: 1.9 },
  { id: 53, top: "89.8%", left: "53%", size: 1.2, minOp: 0.15, maxOp: 0.65, dur: 3.4, delay: 3.0 },
  { id: 54, top: "85.6%", left: "66%", size: 2.4, minOp: 0.35, maxOp: 1.0, dur: 3.7, delay: 0.1, glint: true },
  { id: 55, top: "91.2%", left: "79%", size: 1.4, minOp: 0.2, maxOp: 0.75, dur: 4.8, delay: 2.5 },
  { id: 56, top: "86.9%", left: "90%", size: 1.9, minOp: 0.25, maxOp: 0.9, dur: 3.1, delay: 1.5 },
];

// Pre-computed deterministic floating golden dust particles
const GOLDEN_DUST = [
  { id: 1, left: "7%", size: 2.5, duration: 22, delay: 0.5, opacity: 0.65 },
  { id: 2, left: "14%", size: 1.5, duration: 18, delay: 4.2, opacity: 0.45 },
  { id: 3, left: "22%", size: 3.0, duration: 25, delay: 7.8, opacity: 0.75 },
  { id: 4, left: "31%", size: 2.0, duration: 19, delay: 2.1, opacity: 0.55 },
  { id: 5, left: "41%", size: 1.5, duration: 24, delay: 9.3, opacity: 0.4 },
  { id: 6, left: "52%", size: 2.8, duration: 21, delay: 1.5, opacity: 0.7 },
  { id: 7, left: "63%", size: 1.8, duration: 26, delay: 6.4, opacity: 0.5 },
  { id: 8, left: "72%", size: 2.2, duration: 20, delay: 11.2, opacity: 0.6 },
  { id: 9, left: "81%", size: 1.5, duration: 23, delay: 3.7, opacity: 0.45 },
  { id: 10, left: "91%", size: 2.6, duration: 19, delay: 8.5, opacity: 0.65 },
  { id: 11, left: "11%", size: 2.0, duration: 27, delay: 13.1, opacity: 0.5 },
  { id: 12, left: "28%", size: 1.6, duration: 22, delay: 5.6, opacity: 0.45 },
  { id: 13, left: "46%", size: 3.2, duration: 24, delay: 10.4, opacity: 0.8 },
  { id: 14, left: "59%", size: 1.8, duration: 17, delay: 0.9, opacity: 0.55 },
  { id: 15, left: "76%", size: 2.4, duration: 23, delay: 7.1, opacity: 0.6 },
  { id: 16, left: "87%", size: 1.7, duration: 21, delay: 12.0, opacity: 0.45 },
  { id: 17, left: "95%", size: 2.1, duration: 26, delay: 4.8, opacity: 0.55 },
];

export function NatureBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % NATURAL_SCENES.length);
    }, 8500); // Cross-fades every 8.5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none">
      {/* 1. Background Image Layers with Smooth 2-Second Cross-Fade Transitions */}
      {NATURAL_SCENES.map((scene, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={scene.src}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out transform ${
              isActive
                ? "opacity-100 scale-100 filter brightness-[0.42] contrast-[1.15]"
                : "opacity-0 scale-105 filter brightness-[0.3]"
            }`}
            style={{
              backgroundImage: `url(${scene.src})`,
            }}
            aria-hidden={!isActive}
          />
        );
      })}

      {/* 2. Deep Obsidian Black Luxury Vignettes & Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/85 via-[#070707]/75 to-[#050505]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/50 to-[#050505]/90" />

      {/* 3. Celestial Starfield (Pinpoints & Shimmering Anchors in the Black Expanse) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {CELESTIAL_STARS.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.size > 2 ? "#ffffff" : "#fdf8ee",
              boxShadow: star.glint
                ? "0 0 6px 1.5px rgba(255, 255, 255, 0.9), 0 0 14px 3px rgba(212, 175, 55, 0.5)"
                : "0 0 4px 1px rgba(255, 255, 255, 0.65)",
              animation: `twinkleStar ${star.dur}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
              ["--min-opacity" as string]: star.minOp,
              ["--max-opacity" as string]: star.maxOp,
            }}
          >
            {/* Subtle Cross-Diffraction Spikes on Prominent Stars */}
            {star.glint && (
              <>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[9px] h-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[9px] w-[0.5px] bg-gradient-to-b from-transparent via-white to-transparent" />
              </>
            )}
          </div>
        ))}

        {/* 4. Occasional Elegant Shooting Stars (Meteors Gliding Across the Upper Night Sky) */}
        <div
          className="absolute top-[8%] right-[12%] w-[120px] h-[1.5px] pointer-events-none origin-right"
          style={{
            background: "linear-gradient(to left, rgba(255, 255, 255, 0.95), rgba(212, 175, 55, 0.6), transparent)",
            boxShadow: "0 0 6px rgba(212, 175, 55, 0.8)",
            animation: "shootingStar 16s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute top-[18%] right-[32%] w-[90px] h-[1px] pointer-events-none origin-right"
          style={{
            background: "linear-gradient(to left, rgba(255, 255, 255, 0.85), rgba(223, 186, 115, 0.5), transparent)",
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.7)",
            animation: "shootingStar 22s ease-in-out infinite",
            animationDelay: "11s",
          }}
        />
      </div>

      {/* 5. Breathing Golden Radial Aura behind Content */}
      <div
        className="absolute top-1/4 left-1/2 w-[700px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.14) 0%, rgba(223,186,115,0.05) 50%, transparent 75%)",
          animation: "goldPulse 9s ease-in-out infinite",
        }}
      />

      {/* 6. Fine Classical Astrolabe / Celestial Guilloché Rings */}
      <div
        className="absolute top-[28%] left-1/2 w-[780px] h-[780px] rounded-full pointer-events-none"
        style={{
          animation: "celestialRotate 220s linear infinite",
        }}
      >
        <div className="absolute inset-0 rounded-full border border-[#d4af37]/[0.08]" />
        <div className="absolute inset-10 rounded-full border border-dashed border-[#d4af37]/[0.06]" />
        <div className="absolute inset-24 rounded-full border border-[#d4af37]/[0.05]" />
        <div className="absolute inset-40 rounded-full border border-dotted border-[#d4af37]/[0.06]" />
        <div className="absolute inset-56 rounded-full border border-[#d4af37]/[0.04]" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/[0.07] to-transparent -translate-x-1/2" />
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/[0.07] to-transparent -translate-y-1/2" />
      </div>

      {/* 7. Delicate Micro-Geometric Gold Dot-Matrix & Silk Texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="celestial-mesh" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="24" cy="24" r="0.9" fill="#d4af37" />
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#d4af37" strokeWidth="0.35" strokeOpacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#celestial-mesh)" />
      </svg>

      {/* 8. Floating Golden Stardust Particles (Embers drifting smoothly upward) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {GOLDEN_DUST.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: "#dfba73",
              boxShadow: "0 0 7px 1.5px rgba(212, 175, 55, 0.65), 0 0 2px rgba(255, 255, 255, 0.8)",
              animation: `floatGoldDust ${p.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`,
              animationDelay: `${p.delay}s`,
              ["--particle-opacity" as string]: p.opacity,
            }}
          />
        ))}
      </div>

      {/* 9. Natural Scene Indicator with manual switcher */}
      <div className="absolute bottom-5 right-6 pointer-events-auto flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0a0a0a]/85 border border-[#d4af37]/30 backdrop-blur-md text-[11px] font-mono text-[#d4af37]/90 shadow-gold-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
        <span className="hidden sm:inline text-gold-300 font-sans italic tracking-wide">
          {NATURAL_SCENES[currentIndex].title}
        </span>
        <div className="flex gap-1.5 ml-1">
          {NATURAL_SCENES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
                i === currentIndex
                  ? "bg-[#d4af37] w-4"
                  : "bg-zinc-700 hover:bg-[#d4af37]/60"
              }`}
              title={`Switch to ${NATURAL_SCENES[i].title}`}
              aria-label={`View background ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
