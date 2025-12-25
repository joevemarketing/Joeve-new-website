"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6, 
  distance = 50,
  as: Component = "div",
  className = ""
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={inView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: "easeOut" as const,
      }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
  speed?: number;
}

export function ParallaxSection({ children, offset = 0, speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: springY }}>
      {children}
    </motion.div>
  );
}

interface StaggeredListProps {
  children: React.ReactNode[];
  delay?: number;
  staggerDelay?: number;
}

export function StaggeredList({ children, delay = 0, staggerDelay = 0.1 }: StaggeredListProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
  animated?: boolean;
}

export function ProgressBar({ progress, color = "#3B82F6", height = 8, animated = true }: ProgressBarProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const springProgress = useSpring(progress, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={ref}
      className="w-full bg-gray-200 rounded-full overflow-hidden"
      initial={{ width: 0 }}
      animate={inView ? { width: "100%" } : { width: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{
          backgroundColor: color,
          height: `${height}px`,
        }}
        initial={{ width: 0 }}
        animate={inView ? { width: animated ? `${springProgress.get()}%` : `${progress}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </motion.div>
  );
}

interface CounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  color?: string;
}

export function AnimatedCounter({ target, duration = 2, prefix = "", suffix = "", color = "#000000" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      const incrementTime = (duration / end) * 1000;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return (
    <motion.span
      ref={ref}
      style={{ color }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}

interface TextTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  className?: string;
}

export function TextTypewriter({ text, speed = 50, delay = 0, cursor = true, className = "" }: TextTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        let index = 0;
        const interval = setInterval(() => {
          if (index < text.length) {
            setDisplayText(text.slice(0, index + 1));
            index++;
          } else {
            clearInterval(interval);
          }
        }, speed);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, text, speed, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  magneticIntensity?: number;
}

export function MagneticButton({ children, className = "", onClick, magneticIntensity = 0.3 }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x: x * magneticIntensity, y: y * magneticIntensity });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={className}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
