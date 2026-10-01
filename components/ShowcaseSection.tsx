"use client";

import React, { useState } from "react";
import { Sliders, Wind, Layers, Disc3, CheckCircle2 } from "lucide-react";

const INNOVATIONS = [
  {
    id: "aero-wing",
    name: "Active Aero Wing",
    category: "Dynamic Downforce",
    headline: "Variable pitch rear airfoil tilts up to 45° for air-braking.",
    details: [
      "Generates up to 450kg of stabilizing downforce at track speeds.",
      "Dual hydraulic actuators shift angle of attack within 80 milliseconds.",
      "Integrates high-mount LED tertiary brake telemetry bar.",
    ],
    accent: "text-neon-lime border-neon-lime/40",
    badge: "HYDRAULIC ACTIVE",
  },
  {
    id: "venturi",
    name: "Venturi Floor Tunnels",
    category: "Ground Effect Physics",
    headline: "Underbody sculpted channels pull the chassis straight down.",
    details: [
      "Generates pure low-pressure vacuum without protruding drag elements.",
      "Maintains cornering stability even over abrupt elevation drops.",
      "Constructed from 4-ply pre-preg autoclave carbon fiber.",
    ],
    accent: "text-neon-cyan border-neon-cyan/40",
    badge: "CARBON COMPOSITE",
  },
  {
    id: "monocoque",
    name: "Torsional Monocoque",
    category: "Structural Rigidity",
    headline: "Full structural carbon tub weighing under 94 kilograms.",
    details: [
      "Over 65,000 Nm/degree torsional stiffness for razor-sharp steering.",
      "Integrated honeycomb crash cells exceed FIA safety benchmarks.",
      "Houses integrated structural battery pack as a load-bearing member.",
    ],
    accent: "text-neon-orange border-neon-orange/40",
    badge: "FIA LEVEL 1",
  },
  {
    id: "braking",
    name: "Carbon-Ceramic Matrix",
    category: "Deceleration Tech",
    headline: "410mm front discs clamped by monobloc 6-piston calipers.",
    details: [
      "Zero brake fade under continuous repeated 250 to 0 km/h deceleration.",
      "Blended kinetic regeneration captures up to 350kW of braking force.",
      "Unsprung rotational mass reduced by 48% over steel discs.",
    ],
    accent: "text-neon-purple border-neon-purple/40",
    badge: "350kW REGEN",
  },
];

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = INNOVATIONS[activeTab];

  return (
    <section
      id="showcase"
      className="py-24 sm:py-32 bg-background border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-neon-cyan" />
              <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan font-bold">
                03 // AERODYNAMIC LAB
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Kinetic Subsystems & Innovations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono max-w-md">
            Click through subsystem modules to inspect aerospace-grade composite components engineered for track dominance.
          </p>
        </div>

        {/* Interactive Tab Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {INNOVATIONS.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                  isActive
                    ? "bg-surface-100 border-white/30 shadow-lg scale-[1.02]"
                    : "bg-surface-300/60 border-white/[0.06] hover:border-white/15 text-zinc-400"
                }`}
              >
                <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                  MODULE // 0{idx + 1}
                </span>
                <span
                  className={`font-mono text-sm sm:text-base font-bold block ${
                    isActive ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Module Detail Display Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-100/90 border border-white/10 relative overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neon-lime mb-4">
                <span>{current.badge}</span>
                <span>•</span>
                <span>{current.category}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                {current.headline}
              </h3>

              <div className="space-y-3 mt-6">
                {current.details.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-neon-lime flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-zinc-300 font-mono leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsystem Telemetry Visual Box */}
            <div className="w-full lg:w-96 rounded-2xl bg-surface-200 border border-white/10 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <span className="text-xs font-mono text-zinc-400">TELEMETRY BENCHMARK</span>
                <span className="text-xs font-mono text-neon-lime">ACTIVE</span>
              </div>

              <div className="space-y-4 font-mono text-xs text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-500">DYNAMIC REACTION:</span>
                  <span className="text-white font-bold">&lt; 12 MS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">HEAT DISSIPATION:</span>
                  <span className="text-white font-bold">1,150°C RATED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">MASS PROFILE:</span>
                  <span className="text-white font-bold">AEROSPACE ALLOY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">SENSOR SAMPLE RATE:</span>
                  <span className="text-white font-bold">4,000 HZ</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">CALIBRATION PASS</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-neon-lime/10 text-neon-lime border border-neon-lime/30">
                  READY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
