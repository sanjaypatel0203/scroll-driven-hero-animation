"use client";

import React, { useState } from "react";
import { ArrowRight, Check, KeyRound, Sparkles } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [chassisSerial] = useState("ITZ-2026-X889");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="cta"
      className="py-24 sm:py-32 bg-surface-200 border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-neon-lime/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neon-lime mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ALLOCATION OPEN // BATCH 01</span>
        </div>

        <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tight max-w-3xl mx-auto">
          Take Command of the Kinetic Cockpit
        </h2>

        <p className="mt-4 text-sm sm:text-lg text-zinc-400 font-mono max-w-xl mx-auto leading-relaxed">
          Request private test track telemetry access or reserve a prototype chassis build slot.
        </p>

        {/* Chassis Serial Badge */}
        <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-surface-100 border border-white/10 font-mono text-xs text-zinc-300">
          <KeyRound className="w-4 h-4 text-neon-lime" />
          <span>CURRENT CHASSIS ALLOCATION:</span>
          <span className="text-neon-lime font-bold">{chassisSerial}</span>
        </div>

        {/* Interactive Form */}
        <div className="mt-10 max-w-md mx-auto">
          {submitted ? (
            <div className="p-6 rounded-2xl bg-surface-100 border border-neon-lime/40 text-center">
              <div className="w-12 h-12 rounded-full bg-neon-lime/20 text-neon-lime flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-mono">ACCESS PASS GENERATED</h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Telemetry coordinates and chassis build documentation dispatched to <span className="text-white">{email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter engineering email..."
                className="flex-1 px-4 py-3.5 rounded-xl bg-surface-100 border border-white/10 text-sm font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-neon-lime transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-neon-lime text-black font-bold text-xs uppercase tracking-wider font-mono hover:bg-neon-lime/90 hover:box-glow-lime transition-all flex items-center justify-center gap-2"
              >
                <span>Reserve Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
