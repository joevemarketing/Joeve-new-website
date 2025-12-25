"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-joeve-blue-deep">
      {/* Background */}
      <div className="absolute inset-x-0 bottom-0 top-20 z-0">
        <Image 
            src="/images/home-hero.jpg" 
             alt="Futuristic Cityscape" 
            fill 
            className="object-cover opacity-80"
            priority
            sizes="100vw"
            unoptimized
            />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,31,63,1))] z-10" />
        {/* Grid effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [perspective:1000px] [transform:rotateX(60deg)_scale(2)] origin-bottom z-10" />
        <div
          className="absolute inset-0 z-20"
          style={{
            background: `radial-gradient(400px 400px at ${pos.x}px ${pos.y}px, rgba(0,212,255,0.18), transparent 60%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center gap-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase leading-tight tracking-wider drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]">
          AI-Powered Digital Solutions
        </h1>

        <p className="text-xl md:text-2xl text-cyan-400 font-medium max-w-3xl">
          We build AI-powered web apps, scroll-stopping social content, and Gen AI videos for Malaysian brands.
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light">
          Transform your business with our three flagship services: custom web applications, AI-generated social media content, and cinematic video production.
        </p>

        <Button className="h-14 px-10 text-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold tracking-wide shadow-[0_0_30px_rgba(0,212,255,0.6)] border border-cyan-300 rounded-full mt-8 animate-pulse" asChild>
          <Link href="/request-quotation">GET A QUOTE</Link>
        </Button>
      </div>
    </section>
  );
}
