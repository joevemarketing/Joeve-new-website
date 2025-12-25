"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LightBeamBackgroundProps {
  intensity?: number;
}

export default function LightBeamBackground({ intensity = 1 }: LightBeamBackgroundProps) {
  const base = Math.min(Math.max(intensity, 0.2), 1);
  const [isClient, setIsClient] = useState(false);
  const [travel, setTravel] = useState(600);
  
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      setTravel(Math.max(window.innerHeight * 0.7, 500));
    }
  }, []);
  
  // Generate particles only on client side
  const particles = isClient ? Array.from({ length: 50 }).map((_, i) => ({
    key: i,
    left: 45 + Math.random() * 10,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 4,
    size: 1 + Math.random() * 2,
    opacity: 0.3 + Math.random() * 0.5,
  })) : [];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[-45%] h-[45%] w-[16px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(147,197,253,0.95), rgba(56,189,248,0.6))",
          filter: "blur(8px)",
          opacity: 1 * base,
          boxShadow:
            "0 0 30px rgba(147,197,253,0.6), 0 0 60px rgba(56,189,248,0.4)",
        }}
        animate={{ y: [0, travel, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[900px] h-[380px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.7), rgba(56,189,248,0.0))",
          filter: "blur(70px)",
          opacity: 1.2 * base,
          mixBlendMode: "screen",
        }}
        animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.8 * base, 1.3 * base, 0.8 * base] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[12px]"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(59,130,246,0.9), rgba(59,130,246,0.0))",
          filter: "blur(8px)",
          opacity: 1 * base,
        }}
        animate={{ opacity: [0.8 * base, 1 * base, 0.8 * base] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[180px]"
        style={{
          background: "linear-gradient(to bottom, rgba(147,197,253,0.45), rgba(56,189,248,0.35), rgba(56,189,248,0.0))",
          filter: "blur(60px)",
          opacity: 1.2 * base,
          mixBlendMode: "screen",
        }}
        animate={{ scaleX: [1, 1.12, 1], opacity: [1 * base, 1.3 * base, 1 * base] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1400px] h-[600px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(56,189,248,0.9), rgba(56,189,248,0.0))",
          filter: "blur(80px)",
          opacity: 1.4 * base,
          mixBlendMode: "screen",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [1.2 * base, 1.5 * base, 1.2 * base] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated wave line - full width */}
      <svg className="absolute bottom-0 left-0 w-full h-[180px]" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beamWave" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="1" />
          </linearGradient>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <motion.path
          d="M0,120 C240,140 480,100 720,120 C960,140 1200,90 1440,110"
          fill="none"
          stroke="url(#beamWave)"
          strokeWidth="5"
          filter="url(#softBlur)"
          initial={{ pathLength: 0.7, opacity: 1 * base }}
          animate={{ pathLength: [0.6, 0.8, 0.6], opacity: [0.9 * base, 1.2 * base, 0.9 * base] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Falling light particles */}
      {particles.map(p => (
        <motion.span
          key={p.key}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-10%",
            width: `${p.size}px`,
            height: `${120 + Math.random() * 50}px`,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))",
            filter: "blur(1px)",
            opacity: p.opacity * base,
          }}
          animate={{ y: [0, 800], opacity: [p.opacity * base, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}
