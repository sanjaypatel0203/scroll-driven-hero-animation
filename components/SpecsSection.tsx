"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, ShieldCheck, Zap, Gauge, Wind, BatteryCharging } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SPECS = [
  {
    icon: Zap,
    title: "Dual Axial-Flux Powertrain",
    value: "1,420 HP",
    subtext: "Combined output across front and rear active drive units with sub-millisecond torque vectoring.",
    barPercent: 96,
    color: "text-neon-lime",
    barColor: "bg-neon-lime",
  },
  {
    icon: Wind,
    title: "Ground Effect Aero Tunnel",
    value: "840 KG @ 250 KM/H",
    subtext: "Venturi tunnels beneath carbon monocoque suck vehicle to pavement without drag penalty.",
    barPercent: 88,
    color: "text-neon-cyan",
    barColor: "bg-neon-cyan",
  },
  {
    icon: BatteryCharging,
    title: "Cryo-Cooled 800V Architecture",
    value: "12-Min Rapid Recharge",
    subtext: "Silicon-carbide inverters with immersion dielectric cooling handling 450 kW continuous throughput.",
    barPercent: 92,
    color: "text-neon-orange",
    barColor: "bg-neon-orange",
  },
  {
    icon: Cpu,
    title: "Neural Dynamic Chassis Control",
    value: "1,000 Hz",
    subtext: "Predictive magneto-rheological dampeners read pavement topology 30 meters ahead.",
    barPercent: 98,
    color: "text-neon-purple",
    barColor: "bg-neon-purple",
  },
];

export default function SpecsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".spec-card");

      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="specs"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-surface-200 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neon-lime" />
            <span className="text-xs font-mono uppercase tracking-widest text-neon-lime font-bold">
              02 // ENGINEERING MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Kinetic Architecture & Performance Specs
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-mono leading-relaxed">
            Every millimeter of the chassis is calibrated for extreme thermal equilibrium, zero parasitic aerodynamic drag, and instantaneous kinetic power response.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SPECS.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="spec-card p-6 sm:p-8 rounded-2xl bg-surface-100/80 border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${spec.color}`} />
                  </div>
                  <span className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-wider">
                    SPEC // 0{index + 1}
                  </span>
                </div>

                <div className="mb-2">
                  <span className={`text-2xl sm:text-3xl font-mono font-black tracking-tight ${spec.color}`}>
                    {spec.value}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{spec.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed mb-6">
                  {spec.subtext}
                </p>

                {/* Performance Progress Gauge */}
                <div className="w-full bg-white/[0.06] h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${spec.barColor} transition-all duration-1000 rounded-full`}
                    style={{ width: `${spec.barPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
