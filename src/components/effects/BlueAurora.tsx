"use client";

import { motion } from "framer-motion";

interface BlueAuroraProps {
  intensity?: number; // 0.0 - 1.0
}

export default function BlueAurora({ intensity = 1 }: BlueAuroraProps) {
  const baseOpacity = 0.25 * intensity;
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Soft horizontal sweep */}
      <motion.div
        className="absolute left-[-20%] top-[20%] w-[140%] h-[40%]"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 50%, rgba(16, 185, 255, 0.4) 0%, rgba(16, 185, 255, 0) 60%), radial-gradient(40% 70% at 80% 50%, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)",
          filter: "blur(60px)",
          opacity: baseOpacity,
          mixBlendMode: "screen",
        }}
        animate={{ x: ["-5%", "5%", "-5%"], y: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Diagonal beam */}
      <motion.div
        className="absolute left-[-10%] bottom-[10%] w-[120%] h-[35%]"
        style={{
          background:
            "radial-gradient(50% 50% at 30% 50%, rgba(14, 165, 233, 0.35) 0%, rgba(14, 165, 233, 0) 60%), radial-gradient(50% 50% at 70% 50%, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0) 60%)",
          transform: "rotate(-8deg)",
          filter: "blur(70px)",
          opacity: baseOpacity,
          mixBlendMode: "screen",
        }}
        animate={{ x: ["0%", "-3%", "0%"], y: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating glow orb */}
      <motion.div
        className="absolute right-[10%] top-[25%] w-[320px] h-[320px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(56, 189, 248, 0.5), rgba(56, 189, 248, 0.0))",
          borderRadius: "50%",
          filter: "blur(40px)",
          opacity: baseOpacity + 0.1,
          mixBlendMode: "screen",
        }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

