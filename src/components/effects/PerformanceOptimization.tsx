"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PerformanceMonitorProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function PerformanceMonitor({ children, fallback }: PerformanceMonitorProps) {
  const [performance, setPerformance] = useState({
    fps: 60,
    memory: 0,
    connection: "unknown",
  });
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const frameCount = useRef(0);
  const lastTime = useRef(typeof window !== 'undefined' ? window.performance.now() : 0);

  useEffect(() => {
    const checkPerformance = () => {
      // Check FPS
      frameCount.current++;
      const currentTime = typeof window !== 'undefined' ? window.performance.now() : 0;
      
      if (currentTime >= lastTime.current + 1000) {
        const fps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
        frameCount.current = 0;
        lastTime.current = currentTime;
        
        // Check memory usage
        const memoryUsage = (performance as any).memory ? 
          Math.round(((performance as any).memory.usedJSHeapSize / (performance as any).memory.totalJSHeapSize) * 100) : 0;
        
        // Check connection
        const connection = (navigator as any).connection?.effectiveType || "unknown";
        
        setPerformance({ fps, memory: memoryUsage, connection });
        
        // Determine if low performance
        setIsLowPerformance(fps < 30 || memoryUsage > 80 || connection === "2g");
      }
      
      requestAnimationFrame(checkPerformance);
    };

    const animationId = requestAnimationFrame(checkPerformance);
    return () => cancelAnimationFrame(animationId);
  }, []);

  if (isLowPerformance) {
    return fallback || children;
  }

  return children;
}

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  placeholder?: React.ReactNode;
  height?: number;
}

export function LazyLoad({ children, threshold = 0.1, placeholder, height = 200 }: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={elementRef} style={{ minHeight: height }}>
      {isVisible ? children : placeholder}
    </div>
  );
}

interface ImageOptimizationProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy",
  priority = false 
}: ImageOptimizationProps) {
  const [imageSrc, setImageSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
  }, [src]);

  if (isLoading) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height }}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
    />
  );
}

interface AnimationToggleProps {
  children: React.ReactNode;
}

export function AnimationToggle({ children }: AnimationToggleProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isEnabled, setIsEnabled] = useState(!shouldReduceMotion);

  useEffect(() => {
    setIsEnabled(!shouldReduceMotion);
  }, [shouldReduceMotion]);

  if (!isEnabled) {
    return <>{children}</>;
  }

  return children;
}

interface BundleSplitProps {
  loadComponent: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  placeholder?: React.ReactNode;
}

export function BundleSplit({ loadComponent, fallback, placeholder }: BundleSplitProps) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    loadComponent()
      .then((module) => {
        if (isMounted) {
          setComponent(() => module.default);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Failed to load component:", error);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [loadComponent]);

  if (isLoading) {
    return placeholder || fallback || <div>Loading...</div>;
  }

  if (!Component) {
    return fallback || <div>Failed to load component</div>;
  }

  return <Component />;
}

interface WebPConverterProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function WebPImage({ src, alt, className = "", fallbackSrc }: WebPConverterProps) {
  const [supportsWebP, setSupportsWebP] = useState(true);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    // Check WebP support
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const isSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    setSupportsWebP(isSupported);
    
    if (!isSupported && fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  }, [src, fallbackSrc]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

interface PerformanceMetrics {
  fps: number;
  memory: number;
  connection: string;
  timestamp: number;
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    connection: "unknown",
    timestamp: Date.now(),
  });

  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    const checkPerformance = () => {
      frameCount.current++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime.current + 1000) {
        const fps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
        frameCount.current = 0;
        lastTime.current = currentTime;
        
        const memoryUsage = (performance as any).memory ? 
          Math.round(((performance as any).memory.usedJSHeapSize / (performance as any).memory.totalJSHeapSize) * 100) : 0;
        
        const connection = (navigator as any).connection?.effectiveType || "unknown";
        
        setMetrics({
          fps,
          memory: memoryUsage,
          connection,
          timestamp: Date.now(),
        });
      }
      
      requestAnimationFrame(checkPerformance);
    };

    const animationId = requestAnimationFrame(checkPerformance);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return metrics;
}