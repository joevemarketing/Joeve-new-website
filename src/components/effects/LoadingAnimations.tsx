"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  thickness?: number;
  speed?: number;
}

export function LoadingSpinner({ 
  size = "md", 
  color = "#3B82F6", 
  thickness = 4, 
  speed = 1 
}: LoadingSpinnerProps) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div className={`${sizes[size]} relative`}>
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: `${thickness}px solid transparent`,
          borderTopColor: color,
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1 / speed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: `${thickness}px solid transparent`,
          borderRightColor: color,
          borderRadius: "50%",
          opacity: 0.3,
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5 / speed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  animated?: boolean;
  count?: number;
}

export function SkeletonLoader({ 
  width = "100%", 
  height = "1rem", 
  borderRadius = "0.25rem", 
  animated = true, 
  count = 1 
}: SkeletonLoaderProps) {
  const skeletonVariants = {
    initial: { opacity: 0.4 },
    animate: {
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <>
      {[...Array(count)].map((_, index) => (
        <motion.div
          key={index}
          className="bg-gray-200"
          style={{
            width,
            height,
            borderRadius,
          }}
          variants={skeletonVariants}
          initial="initial"
          animate={animated ? "animate" : "initial"}
        />
      ))}
    </>
  );
}

interface PulseLoaderProps {
  count?: number;
  color?: string;
  size?: number;
  spacing?: number;
}

export function PulseLoader({ count = 3, color = "#3B82F6", size = 12, spacing = 8 }: PulseLoaderProps) {
  return (
    <div className="flex items-center justify-center">
      {[...Array(count)].map((_, index) => (
        <motion.div
          key={index}
          className="rounded-full"
          style={{
            backgroundColor: color,
            width: size,
            height: size,
            marginRight: index < count - 1 ? spacing : 0,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

interface ProgressLoaderProps {
  progress: number;
  color?: string;
  backgroundColor?: string;
  height?: number;
  animated?: boolean;
  showPercentage?: boolean;
}

export function ProgressLoader({ 
  progress, 
  color = "#3B82F6", 
  backgroundColor = "#E5E7EB", 
  height = 8, 
  animated = true,
  showPercentage = true 
}: ProgressLoaderProps) {
  return (
    <div className="w-full">
      <motion.div
        className="rounded-full overflow-hidden"
        style={{
          backgroundColor: backgroundColor,
          height: height,
        }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: animated ? 1 : 0,
            ease: "easeOut",
          }}
        />
      </motion.div>
      {showPercentage && (
        <motion.div
          className="text-center mt-2 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}%
        </motion.div>
      )}
    </div>
  );
}

interface PageTransitionProps {
  children: React.ReactNode;
  type?: "fade" | "slide" | "scale" | "rotate";
  duration?: number;
  delay?: number;
}

export function PageTransition({ 
  children, 
  type = "fade", 
  duration = 0.5, 
  delay = 0 
}: PageTransitionProps) {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.1 },
    },
    rotate: {
      initial: { opacity: 0, rotateY: -90 },
      animate: { opacity: 1, rotateY: 0 },
      exit: { opacity: 0, rotateY: 90 },
    },
  };

  const selectedVariants = variants[type];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={type}
        initial={selectedVariants.initial}
        animate={selectedVariants.animate}
        exit={selectedVariants.exit}
        transition={{
          duration,
          delay,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  type?: "spinner" | "pulse" | "progress";
  progress?: number;
}

export function LoadingOverlay({ 
  isLoading, 
  message = "Loading...", 
  type = "spinner",
  progress = 0 
}: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-sm w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center">
              {type === "spinner" && <LoadingSpinner size="lg" />}
              {type === "pulse" && <PulseLoader />}
              {type === "progress" && <ProgressLoader progress={progress} />}
              <p className="mt-4 text-gray-600 text-center">{message}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface SkeletonCardProps {
  animated?: boolean;
  lines?: number;
  hasImage?: boolean;
  hasButton?: boolean;
}

export function SkeletonCard({ 
  animated = true, 
  lines = 3, 
  hasImage = true, 
  hasButton = true 
}: SkeletonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {hasImage && (
        <SkeletonLoader
          width="100%"
          height="200px"
          borderRadius="0.5rem"
          animated={animated}
        />
      )}
      <div className="mt-4 space-y-3">
        <SkeletonLoader
          width="60%"
          height="1.5rem"
          animated={animated}
        />
        {[...Array(lines)].map((_, index) => (
          <SkeletonLoader
            key={index}
            width={index === lines - 1 ? "80%" : "100%"}
            height="1rem"
            animated={animated}
          />
        ))}
        {hasButton && (
          <SkeletonLoader
            width="120px"
            height="40px"
            borderRadius="1rem"
            animated={animated}
          />
        )}
      </div>
    </div>
  );
}