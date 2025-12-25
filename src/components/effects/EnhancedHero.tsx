"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface EnhancedHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  backgroundType?: "gradient" | "particles";
  parallaxIntensity?: number;
  titleLines?: string[];
}


// Particle Background Component
function ParticleBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        />
      ))}
    </div>
  );
}

// Gradient Mesh Background
function GradientMeshBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(2,6,23,0.9) 0%, rgba(3,7,18,0.95) 50%, rgba(15,23,42,0.95) 100%)`,
        }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
    </div>
  );
}

// Main Hero Component
export function EnhancedHero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaHref = "/contact",
  backgroundType = "gradient",
  parallaxIntensity = 0.5,
  titleLines
}: EnhancedHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxIntensity * 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Spring animations for smooth motion
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  // Text reveal animations
  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        type: "spring" as const,
        stiffness: 60,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Split title into words, then letters, keep specific words on one line
  const words = title.split(" ");
  const computedLines = titleLines && titleLines.length > 0
    ? titleLines
    : (words.length === 3 ? [words[0] + " " + words[1], words[2]] : [title]);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y: springY, opacity: springOpacity, scale }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {backgroundType === "gradient" && <GradientMeshBackground />}
        {backgroundType === "particles" && <ParticleBackground />}
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        {/* Animated Title with Word grouping to avoid breaking 'Solutions' */}
        <motion.h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
          {computedLines.map((line, li) => (
            <motion.span
              key={`line-${li}`}
              className={li === computedLines.length - 1 ? "block whitespace-nowrap" : "block"}
              variants={titleVariants}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>

        {/* CTA Button (subtle) */}
        <motion.a
          href={ctaHref}
          className="inline-flex px-8 py-4 rounded-full text-lg font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/15"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className="flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {ctaText}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.span>
        </motion.a>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
