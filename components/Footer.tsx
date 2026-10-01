"use client";

import React from "react";
import { ArrowUp, Gauge, Terminal, GitBranch } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-300 border-t border-white/[0.08] py-16 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Logo & Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest">
              <Gauge className="w-4 h-4 text-neon-lime" />
              <span>ITZ FIZZ // KINETIC</span>
            </div>
            <p className="text-zinc-500 text-[11px] max-w-sm">
              Portfolio Assignment: Scroll-Driven Hero Section Animation built with Next.js, React, Tailwind CSS &amp; GSAP ScrollTrigger.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-wider text-zinc-400">
            <a href="#hero" className="hover:text-neon-lime transition-colors">
              01. Track Hero
            </a>
            <a href="#specs" className="hover:text-neon-lime transition-colors">
              02. Telemetry
            </a>
            <a href="#showcase" className="hover:text-neon-lime transition-colors">
              03. Aero Lab
            </a>
            <a href="#cta" className="hover:text-neon-lime transition-colors">
              04. Cockpit Access
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-100 border border-white/10 text-white hover:border-neon-lime transition-colors text-xs"
          >
            <span>TOP OF TRACK</span>
            <ArrowUp className="w-3.5 h-3.5 text-neon-lime" />
          </button>
        </div>

        {/* Bottom Credits & Tech Stack Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
              STACK: NEXT.JS 14 • GSAP 3 • TAILWIND
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-neon-lime" />
              PROD BUILD VERIFIED
            </span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} ITZ FIZZ ANIMATION LAB • FRONTEND ASSIGNMENT SUBMISSION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
