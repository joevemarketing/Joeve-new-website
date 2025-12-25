"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LightBeamBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          left: "20%",
          top: "20%",
        }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          right: "30%",
          bottom: "30%",
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          left: "60%",
          top: "50%",
        }}
      />

      {/* Mouse-following light beam - simplified */}
          <div className="absolute w-1 h-1 rounded-full" style={{ 
            background: 'linear-gradient(to right, #34, 211, 238, #59, 130, 246)',
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }} />

      {/* Grid overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)' }} />
      
      {/* Static particle effects */}
      {typeof window !== 'undefined' && [...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}
    </div>
  );
}