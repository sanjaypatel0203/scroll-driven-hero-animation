"use client";

import React, { useState } from "react";
import { Gauge, Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-background/85 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-lg bg-surface-100 border border-white/10 flex items-center justify-center group-hover:border-neon-lime/60 transition-colors">
            <Gauge className="w-5 h-5 text-neon-lime group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-widest text-white flex items-center gap-2">
              ITZ FIZZ
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-neon-lime/10 text-neon-lime border border-neon-lime/30">
                PROTOTYPE
              </span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
              KINETIC MOTION LAB
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-400">
          <a href="#hero" className="hover:text-neon-lime transition-colors">
            01. Kinetic Track
          </a>
          <a href="#specs" className="hover:text-neon-lime transition-colors">
            02. Telemetry
          </a>
          <a href="#showcase" className="hover:text-neon-lime transition-colors">
            03. Aero Dynamics
          </a>
          <a href="#cta" className="hover:text-neon-lime transition-colors">
            04. Cockpit Access
          </a>
        </nav>

        {/* Live System Status & Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-lime"></span>
            </span>
            <span>60 FPS SCROLL SYNC</span>
          </div>

          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neon-lime text-black font-semibold text-xs tracking-wider uppercase hover:bg-neon-lime/90 hover:box-glow-lime transition-all duration-200"
          >
            <span>Explore Telemetry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-surface-100 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-200 border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-zinc-300 hover:text-neon-lime"
          >
            01. Kinetic Track
          </a>
          <a
            href="#specs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-zinc-300 hover:text-neon-lime"
          >
            02. Telemetry
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-zinc-300 hover:text-neon-lime"
          >
            03. Aero Dynamics
          </a>
          <a
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-zinc-300 hover:text-neon-lime"
          >
            04. Cockpit Access
          </a>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-neon-lime">SYS: ONLINE</span>
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded bg-neon-lime text-black font-semibold text-xs uppercase"
            >
              Get Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
