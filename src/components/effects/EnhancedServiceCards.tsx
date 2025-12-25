"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { Code, Palette, Zap, BarChart3, Video, MessageCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  animationVariant: "tilt" | "float" | "morph";
  delay?: number;
  href?: string;
}

function ServiceCard({ 
  icon, 
  title, 
  description, 
  color, 
  gradient, 
  animationVariant, 
  delay = 0,
  href
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position tracking for 3D tilt effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    
    setMousePosition({ x, y });
  };

  // Spring animations for smooth motion
  const springConfig = { stiffness: 100, damping: 15 };
  const scale = useSpring(isHovered ? 1.05 : 1, springConfig);
  const translateZ = useSpring(isHovered ? 50 : 0, springConfig);

  // Animation variants
  const tiltVariants = {
    initial: { rotateX: 0, rotateY: 0, scale: 1 },
    hover: { 
      rotateX: -10, 
      rotateY: 10, 
      scale: 1.05,
      z: 50
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    hover: {
      y: -20,
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const morphVariants = {
    initial: { borderRadius: "1rem" },
    hover: {
      borderRadius: "2rem",
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const getVariants = () => {
    switch (animationVariant) {
      case "tilt":
        return tiltVariants;
      case "float":
        return floatVariants;
      case "morph":
        return morphVariants;
      default:
        return tiltVariants;
    }
  };

  const cardContent = (
    <motion.div
      ref={cardRef}
      className="relative p-8 rounded-2xl cursor-pointer overflow-hidden"
      style={{
        background: gradient,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      variants={getVariants()}
      initial="initial"
      animate={animationVariant === "float" ? "animate" : "initial"}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      transition={{ delay }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, ${color}40 0%, transparent 70%)`,
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
      />

      {/* Icon with animation */}
      <motion.div
        className="mb-6 relative z-10"
        animate={{
          rotate: isHovered ? [0, -10, 10, 0] : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          rotate: { duration: 0.5 },
          scale: { type: "spring", stiffness: 300 },
        }}
      >
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          {icon}
        </div>
      </motion.div>

      {/* Title with animated underline */}
      <motion.h3
        className="text-2xl font-bold text-white mb-4 relative z-10"
        animate={{
          color: isHovered ? "#ffffff" : "#f3f4f6",
        }}
      >
        {title}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-white"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.h3>

      {/* Description with fade-in */}
      <motion.p
        className="text-gray-200 leading-relaxed relative z-10"
        animate={{
          opacity: isHovered ? 1 : 0.8,
          y: isHovered ? 0 : 2,
        }}
      >
        {description}
      </motion.p>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2"
        initial={{ borderColor: "transparent" }}
        animate={{
          borderColor: isHovered ? color : "transparent",
          borderWidth: isHovered ? 2 : 0,
        }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {/* Floating particles */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              style={{
                left: `${50 + Math.random() * 20 - 10}%`,
                top: `${50 + Math.random() * 20 - 10}%`,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );

  return href ? (
    <Link href={href} className="block" aria-label={`${title} details`}>
      {cardContent}
    </Link>
  ) : cardContent;
}

interface EnhancedServiceCardsProps {
  services?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    gradient: string;
    animationVariant: "tilt" | "float" | "morph";
  }>;
}

export function EnhancedServiceCards({ services = defaultServices }: EnhancedServiceCardsProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  return (
    <motion.section
      ref={ref}
      className="py-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your business with cutting-edge digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                gradient={service.gradient}
                animationVariant={service.animationVariant}
                delay={index * 0.1}
                href={(service as any).href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Default services configuration
export const defaultServices = [
  {
    icon: <Code className="w-8 h-8 text-cyan-400" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and optimized for performance.",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #0b1220 0%, #0f172a 100%)",
    animationVariant: "tilt" as const,
    href: "/services/web-app-software-development",
  },
  {
    icon: <Palette className="w-8 h-8 text-cyan-400" />,
    title: "AI Content Generation",
    description: "Automated social media content creation with AI-powered brand voice optimization.",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #0b1220 0%, #0f172a 100%)",
    animationVariant: "float" as const,
    href: "/services/social-media-generation",
  },
  {
    icon: <Video className="w-8 h-8 text-cyan-400" />,
    title: "AI Video Production",
    description: "Professional video content created with AI technology for maximum engagement.",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #0b1220 0%, #0f172a 100%)",
    animationVariant: "morph" as const,
    href: "/services/gen-ai-video-production",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
    title: "Landing Page Optimization",
    description: "High-converting landing pages with A/B testing and data-driven design.",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #0b1220 0%, #0f172a 100%)",
    animationVariant: "tilt" as const,
    href: "/services/landing-pages",
  },
  {
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
    title: "Search Marketing",
    description: "Strategic SEM campaigns that drive qualified traffic and maximize ROI.",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #0b1220 0%, #0f172a 100%)",
    animationVariant: "float" as const,
    href: "/services/sem",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
    title: "Smart Chatbots",
    description: "Intelligent chatbot systems that provide 24/7 customer support and engagement.",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #0b1220 0%, #0f172a 100%)",
    animationVariant: "morph" as const,
    href: "/services/smart-chatbot",
  },
];
