"use client";

import React, { useEffect, useRef, useState } from "react";
import CarVisual from "@/components/CarVisual";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Zap, Activity, Compass, Wind } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HEADLINE_WORDS = [
  { word: "WELCOME", highlight: false },
  { word: "ITZ", highlight: true },
  { word: "FIZZ", highlight: true },
];

const METRICS_DATA = [
  {
    id: "metric-1",
    num: "58%",
    label: "Lateral Grip Increase",
    desc: "Active ground-effect aero floor channels airflow under high-G loads.",
    accent: "border-neon-lime/40 text-neon-lime shadow-neon-lime/20",
    bg: "bg-surface-100/90",
    topPos: "top-[10%] lg:top-[12%]",
    leftPos: "left-[4%] lg:left-[8%]",
  },
  {
    id: "metric-2",
    num: "2.1s",
    label: "0–100 km/h Velocity Delta",
    desc: "Instant dual-axial flux powertrain delivery with zero torque latency.",
    accent: "border-neon-cyan/40 text-neon-cyan shadow-neon-cyan/20",
    bg: "bg-surface-100/90",
    topPos: "bottom-[10%] lg:bottom-[12%]",
    leftPos: "left-[22%] lg:left-[28%]",
  },
  {
    id: "metric-3",
    num: "99.4%",
    label: "Powertrain Energy Efficiency",
    desc: "Regenerative kinetic braking recaptures maximum thermal energy.",
    accent: "border-white/30 text-white shadow-white/10",
    bg: "bg-surface-100/90",
    topPos: "top-[10%] lg:top-[12%]",
    leftPos: "left-[50%] lg:left-[55%]",
  },
  {
    id: "metric-4",
    num: "40%",
    label: "Drag Coefficient Reduction",
    desc: "Active rear aero-wing & vortex generators minimize wake turbulence.",
    accent: "border-neon-orange/40 text-neon-orange shadow-neon-orange/20",
    bg: "bg-surface-100/90",
    topPos: "bottom-[10%] lg:bottom-[12%]",
    leftPos: "left-[68%] lg:left-[72%]",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const scrollPromptRef = useRef<HTMLDivElement>(null);
  const headerMetaRef = useRef<HTMLDivElement>(null);

   const [telemetryState, setTelemetryState] = useState({
    velocityKmH: 0,
    progressPercent: 0,
    aeroLoadKg: 120,
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
   
      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl
        .from(headerMetaRef.current, {
          y: -25,
          opacity: 0,
          duration: 0.9,
          delay: 0.1,
        })
        .from(
          roadRef.current,
          {
            scaleX: 0.92,
            opacity: 0,
            duration: 1.1,
            ease: "expo.out",
          },
          "-=0.6"
        )
        .from(
          carRef.current,
          {
            x: -160,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          scrollPromptRef.current,
          {
            y: 15,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );

      if (prefersReducedMotion) {
     
        const allLetters = gsap.utils.toArray<HTMLElement>(".kinetic-letter");
        const allMetrics = gsap.utils.toArray<HTMLElement>(".metric-card");
        gsap.set(allLetters, { opacity: 1 });
        gsap.set(allMetrics, { opacity: 1, scale: 1 });
        gsap.set(trailRef.current, { width: "100%" });
        return;
      }
      const letters = gsap.utils.toArray<HTMLElement>(".kinetic-letter");
      const metricCards = gsap.utils.toArray<HTMLElement>(".metric-card");

      gsap.set(metricCards, { opacity: 0, scale: 0.85, y: 15 });

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isTablet: "(min-width: 640px) and (max-width: 1023px)",
          isMobile: "(max-width: 639px)",
        },
        (context) => {
          const { isMobile } = context.conditions as {
            isMobile: boolean;
            isTablet: boolean;
            isDesktop: boolean;
          };

          const calculateBounds = () => {
            const roadWidth = roadRef.current ? roadRef.current.clientWidth : window.innerWidth;
            const carWidth = carRef.current ? carRef.current.clientWidth : 200;
          
            const maxTravel = Math.max(roadWidth - carWidth, 250);
            return { roadWidth, carWidth, maxTravel };
          };

          const bounds = calculateBounds();

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=220%", 
              pin: trackRef.current,
              scrub: 1.2, 
              anticipatePin: 1,
              onUpdate: (self) => {
               
                const progress = self.progress;
                const speed = Math.round(progress * 342);
                const aero = Math.round(120 + progress * 580); 
                setTelemetryState({
                  velocityKmH: speed,
                  progressPercent: Math.round(progress * 100),
                  aeroLoadKg: aero,
                });

                if (carRef.current && roadRef.current) {
                  const carCurrentX = gsap.getProperty(carRef.current, "x") as number;
                  const carFrontNoseX = carCurrentX + (carRef.current.clientWidth * 0.85);

                  if (trailRef.current) {
                    gsap.set(trailRef.current, { width: Math.max(0, carCurrentX + 30) });
                  }

                  letters.forEach((letter) => {
                    const letterOffsetLeft = letter.offsetLeft;
                    if (carFrontNoseX >= letterOffsetLeft) {
                      letter.classList.add("revealed");
                    } else {
                      letter.classList.remove("revealed");
                    }
                  });
                }
              },
            },
          });

          scrollTl.to(carRef.current, {
            x: bounds.maxTravel,
            ease: "none",
          });

          scrollTl.to(
            metricCards[0],
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.25,
              ease: "power2.out",
            },
            0.15
          );

          scrollTl.to(
            metricCards[1],
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.25,
              ease: "power2.out",
            },
            0.38
          );

          scrollTl.to(
            metricCards[2],
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.25,
              ease: "power2.out",
            },
            0.6
          );

          scrollTl.to(
            metricCards[3],
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.25,
              ease: "power2.out",
            },
            0.8
          );
        }
      );
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full bg-background"
      style={{ minHeight: "320vh" }} // Provides the scroll track length
    >
      {/* Pinned Viewport Container (occupies 100vh during scroll) */}
      <div
        ref={trackRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-grid-pattern pt-20 pb-8 sm:pt-24 sm:pb-10"
      >
        {/* Background Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-lime/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Top Header & Intro Metadata */}
        <div
          ref={headerMetaRef}
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-neon-lime font-semibold">
                KINETIC PROPULSION SYSTEM // MK-IV
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Aerodynamic Velocity Track
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1 max-w-lg">
              Scroll down to propel the aerodynamic chassis. Letters ignite dynamically as velocity peaks.
            </p>
          </div>

          {/* Live Telemetry HUD Bar */}
          <div className="flex items-center gap-3 sm:gap-6 bg-surface-100/90 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-md">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-zinc-400 flex items-center gap-1">
                <Activity className="w-3 h-3 text-neon-lime" /> VELOCITY
              </span>
              <span className="text-base sm:text-xl font-mono font-bold text-white">
                {telemetryState.velocityKmH}{" "}
                <span className="text-xs text-neon-lime font-normal">KM/H</span>
              </span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-zinc-400 flex items-center gap-1">
                <Wind className="w-3 h-3 text-neon-cyan" /> DOWNFORCE
              </span>
              <span className="text-base sm:text-xl font-mono font-bold text-white">
                {telemetryState.aeroLoadKg}{" "}
                <span className="text-xs text-neon-cyan font-normal">KG</span>
              </span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-zinc-400 flex items-center gap-1">
                <Compass className="w-3 h-3 text-neon-orange" /> TRAJECTORY
              </span>
              <span className="text-base sm:text-xl font-mono font-bold text-white">
                {telemetryState.progressPercent}%
              </span>
            </div>
          </div>
        </div>

        {/* Center Arena: Kinetic Road Track with Hypercar & Revealed Letters */}
        <div className="relative w-full my-auto py-6 sm:py-10">
          {/* Main Road Track Surface */}
          <div
            ref={roadRef}
            className="relative w-full h-36 sm:h-44 md:h-52 road-track-texture border-y border-white/15 overflow-hidden flex items-center shadow-2xl"
          >
            {/* Speed Grid Lines inside Road */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex flex-col justify-between py-2">
              <div className="border-b border-dashed border-white/30 w-full" />
              <div className="border-b border-dashed border-neon-cyan/40 w-full" />
              <div className="border-b border-dashed border-white/30 w-full" />
            </div>

            {/* Glowing Neon Speed Trail expanding behind the car */}
            <div
              ref={trailRef}
              className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none transition-all duration-75"
              style={{
                width: 0,
                background: "linear-gradient(90deg, rgba(204, 255, 0, 0.02) 0%, rgba(204, 255, 0, 0.22) 70%, rgba(0, 240, 255, 0.45) 100%)",
                boxShadow: "inset 0 0 30px rgba(0, 240, 255, 0.3), 0 0 25px rgba(204, 255, 0, 0.4)",
              }}
            />

            {/* Large Letter-Spaced Headline (W E L C O M E   I T Z   F I Z Z) */}
            <div
              ref={headlineRef}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-15 select-none px-4 sm:px-12"
            >
              <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-2">
                {HEADLINE_WORDS.map((group, groupIdx) => (
                  <div key={groupIdx} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    {group.word.split("").map((char, charIdx) => (
                      <span
                        key={charIdx}
                        className={`kinetic-letter text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-mono font-black transition-all duration-300 transform select-none ${
                          group.highlight ? "text-zinc-600" : "text-zinc-600"
                        }`}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* The Aerodynamic Hypercar Element */}
            <div
              ref={carRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-44 sm:w-60 md:w-72 lg:w-80 cursor-grab active:cursor-grabbing drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
              style={{ willChange: "transform" }}
            >
              {/* Dynamic Thruster Flare */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-12 bg-neon-cyan/40 rounded-full blur-md animate-pulse pointer-events-none" />
              
              <CarVisual className="w-full h-auto object-contain filter drop-shadow-lg" />
            </div>
          </div>

          {/* Floating Impact Metric Cards (Positioned strategically around the track) */}
          <div className="pointer-events-none absolute inset-0 max-w-7xl mx-auto w-full z-30 hidden sm:block">
            {METRICS_DATA.map((metric) => (
              <div
                key={metric.id}
                className={`metric-card absolute ${metric.topPos} ${metric.leftPos} w-64 lg:w-72 p-4 rounded-xl border ${metric.accent} ${metric.bg} backdrop-blur-xl pointer-events-auto transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-3xl lg:text-4xl font-mono font-extrabold tracking-tight">
                    {metric.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                    TELEMETRY
                  </span>
                </div>
                <h2 className="text-xs lg:text-sm font-semibold text-white tracking-wide">
                  {metric.label}
                </h2>
                <p className="text-[11px] text-zinc-400 font-mono mt-1 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Metric Cards Row (Displays neatly stacked on mobile without clipping) */}
          <div className="sm:hidden px-4 mt-6 grid grid-cols-2 gap-3 z-30 relative">
            {METRICS_DATA.slice(0, 2).map((metric) => (
              <div
                key={metric.id}
                className={`metric-card p-3 rounded-lg border ${metric.accent} bg-surface-100/90 backdrop-blur-md`}
              >
                <span className="text-2xl font-mono font-bold block">{metric.num}</span>
                <span className="text-[11px] font-semibold text-white block mt-0.5">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Prompt Bar */}
        <div
          ref={scrollPromptRef}
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono text-zinc-500 z-20"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-neon-lime animate-bounce" />
            <span className="uppercase tracking-widest text-zinc-400">
              Scroll Driven Kinetic scrub enabled
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <span className="uppercase tracking-widest text-[11px]">Scroll to Accelerate</span>
            <ChevronDown className="w-4 h-4 text-neon-lime animate-bounce" />
          </div>
        </div>
      </div>

      {/* Global Scoped CSS for revealed letter glowing effects */}
      <style jsx>{`
        :global(.kinetic-letter) {
          opacity: 0.18;
          transform: scale(0.92);
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }
        :global(.kinetic-letter.revealed) {
          opacity: 1;
          color: #ffffff;
          transform: scale(1.08) translateY(-2px);
          text-shadow: 0 0 16px rgba(0, 240, 255, 0.8), 0 0 32px rgba(204, 255, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
