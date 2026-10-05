import React from "react";

export default function CarVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 180"
      className={className}
      fill="none"
      role="img"
      aria-label="Kinetic Prototype Aero Hypercar - Top Down View"
    >
      <defs>
        {/* Body Gradient */}
        <linearGradient id="bodyGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0d0f14" />
          <stop offset="25%" stopColor="#1c202a" />
          <stop offset="50%" stopColor="#2a303f" />
          <stop offset="75%" stopColor="#1a1d26" />
          <stop offset="100%" stopColor="#0c0e12" />
        </linearGradient>

        {/* Cockpit Canopy Glass Gradient */}
        <linearGradient id="canopyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#05070a" />
          <stop offset="40%" stopColor="#0f1923" />
          <stop offset="60%" stopColor="#1a3245" />
          <stop offset="100%" stopColor="#05080c" />
        </linearGradient>

        {/* Neon Cyan Headlight Glow */}
        <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </linearGradient>

        {/* Tail Light Neon Red Glow */}
        <linearGradient id="tailGlow" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ff1744" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ff1744" stopOpacity="0" />
        </linearGradient>

        {/* Filter for headlamp glow bloom */}
        <filter id="glowBloom" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="beamBloom" x="-20%" y="-50%" width="160%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground Ambient Drop Shadow */}
      <ellipse
        cx="205"
        cy="90"
        rx="195"
        ry="60"
        fill="#000000"
        fillOpacity="0.65"
        filter="url(#glowBloom)"
      />

      {/* Aerodynamic Undertray / Rear Diffuser Fins */}
      <path
        d="M 22 55 L 45 60 L 45 120 L 22 125 Z"
        fill="#0b0c10"
        stroke="#1f2430"
        strokeWidth="1.5"
      />
      <rect x="12" y="70" width="22" height="6" rx="2" fill="#141720" />
      <rect x="12" y="87" width="24" height="6" rx="2" fill="#141720" />
      <rect x="12" y="104" width="22" height="6" rx="2" fill="#141720" />

      {/* Rear Diffuser Exhaust Accent Lights (Red) */}
      <line
        x1="28"
        y1="62"
        x2="38"
        y2="64"
        stroke="#ff2a5f"
        strokeWidth="2.5"
        filter="url(#glowBloom)"
      />
      <line
        x1="28"
        y1="118"
        x2="38"
        y2="116"
        stroke="#ff2a5f"
        strokeWidth="2.5"
        filter="url(#glowBloom)"
      />
      <circle cx="24" cy="90" r="4" fill="#ff1744" filter="url(#glowBloom)" />

      {/* Rear Left Tire */}
      <rect
        x="80"
        y="24"
        width="62"
        height="24"
        rx="6"
        fill="#15171c"
        stroke="#252933"
        strokeWidth="1.5"
      />
      <line
        x1="88"
        y1="28"
        x2="88"
        y2="44"
        stroke="#00f0ff"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="134"
        y1="28"
        x2="134"
        y2="44"
        stroke="#00f0ff"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Rear Right Tire */}
      <rect
        x="80"
        y="132"
        width="62"
        height="24"
        rx="6"
        fill="#15171c"
        stroke="#252933"
        strokeWidth="1.5"
      />
      <line
        x1="88"
        y1="136"
        x2="88"
        y2="152"
        stroke="#00f0ff"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="134"
        y1="136"
        x2="134"
        y2="152"
        stroke="#00f0ff"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Front Left Tire */}
      <rect
        x="300"
        y="27"
        width="58"
        height="22"
        rx="5"
        fill="#15171c"
        stroke="#252933"
        strokeWidth="1.5"
      />
      <line
        x1="308"
        y1="31"
        x2="308"
        y2="45"
        stroke="#ccff00"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Front Right Tire */}
      <rect
        x="300"
        y="131"
        width="58"
        height="22"
        rx="5"
        fill="#15171c"
        stroke="#252933"
        strokeWidth="1.5"
      />
      <line
        x1="308"
        y1="135"
        x2="308"
        y2="149"
        stroke="#ccff00"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Main Body Shell */}
      <path
        d="
          M 385 90
          C 385 76, 360 48, 325 44
          C 285 40, 240 46, 210 46
          C 175 46, 145 38, 105 38
          C 55 38, 38 60, 36 78
          C 35 84, 35 96, 36 102
          C 38 120, 55 142, 105 142
          C 145 142, 175 134, 210 134
          C 240 134, 285 140, 325 136
          C 360 132, 385 104, 385 90 Z"
        fill="url(#bodyGrad)"
        stroke="#3b4254"
        strokeWidth="1.8"
      />

      {/* Side Pod Air Intakes */}
      <path d="M 180 50 C 195 56, 220 56, 235 50 L 235 46 Z" fill="#08090d" />
      <path
        d="M 180 130 C 195 124, 220 124, 235 130 L 235 134 Z"
        fill="#08090d"
      />

      {/* Aerodynamic Body Crease Character Lines */}
      <path
        d="M 60 62 C 120 62, 180 66, 250 62 C 300 58, 345 68, 370 82"
        stroke="#4f5970"
        strokeWidth="1.2"
        opacity="0.6"
        fill="none"
      />
      <path
        d="M 60 118 C 120 118, 180 114, 250 118 C 300 122, 345 112, 370 98"
        stroke="#4f5970"
        strokeWidth="1.2"
        opacity="0.6"
        fill="none"
      />

      {/* Cockpit & Windshield */}
      <path
        d="
          M 305 90
          C 305 78, 280 62, 235 60
          C 180 58, 140 64, 130 90
          C 140 116, 180 122, 235 120
          C 280 118, 305 102, 305 90 Z"
        fill="url(#canopyGrad)"
        stroke="#00f0ff"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />

      {/* Cockpit Reflection Highlights */}
      <path
        d="M 285 86 C 275 75, 235 68, 185 70 C 220 66, 265 72, 285 86 Z"
        fill="#ffffff"
        fillOpacity="0.18"
      />
      <circle
        cx="215"
        cy="85"
        r="7"
        fill="#ccff00"
        fillOpacity="0.3"
        filter="url(#glowBloom)"
      />
      <circle
        cx="215"
        cy="95"
        r="7"
        fill="#00f0ff"
        fillOpacity="0.3"
        filter="url(#glowBloom)"
      />

      {/* Front Nose Splitter & Aero Winglets */}
      <path
        d="M 370 70 L 398 84 C 404 88, 404 92, 398 96 L 370 110"
        stroke="#00f0ff"
        strokeWidth="2.5"
        fill="none"
        filter="url(#glowBloom)"
      />

      {/* Laser Headlights */}
      <path
        d="M 355 64 L 376 74"
        stroke="#00f0ff"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="url(#glowBloom)"
      />
      <path
        d="M 355 116 L 376 106"
        stroke="#00f0ff"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="url(#glowBloom)"
      />

      <circle cx="377" cy="74" r="3" fill="#ffffff" filter="url(#glowBloom)" />
      <circle cx="377" cy="106" r="3" fill="#ffffff" filter="url(#glowBloom)" />

      {/* Forward Laser Beams */}
      <polygon
        points="377,73 420,55 420,85 377,75"
        fill="url(#cyanGlow)"
        opacity="0.45"
        filter="url(#beamBloom)"
      />
      <polygon
        points="377,105 420,95 420,125 377,107"
        fill="url(#cyanGlow)"
        opacity="0.45"
        filter="url(#beamBloom)"
      />

      {/* Center Aero Spine / Fin */}
      <line
        x1="85"
        y1="90"
        x2="165"
        y2="90"
        stroke="#ccff00"
        strokeWidth="2"
        filter="url(#glowBloom)"
      />
      <polygon points="165,88 175,90 165,92" fill="#ccff00" />

      {/* Rear Wing Spoiler */}
      <rect
        x="42"
        y="44"
        width="16"
        height="92"
        rx="4"
        fill="#0a0c10"
        stroke="#333b4d"
        strokeWidth="1.5"
      />
      <line
        x1="44"
        y1="46"
        x2="44"
        y2="134"
        stroke="#ff1744"
        strokeWidth="2"
        opacity="0.85"
        filter="url(#glowBloom)"
      />
    </svg>
  );
}
