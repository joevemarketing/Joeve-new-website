"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, Award, Users, TrendingUp, Star } from "lucide-react";

export function EnhancedHero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Malaysia",
      rating: 5,
      text: "300% engagement increase with AI videos!"
    },
    {
      name: "Ahmad Rahman", 
      company: "Retail Chain",
      rating: 5,
      text: "ROI visible within 2 months!"
    },
    {
      name: "Lisa Wong",
      company: "Beauty Brand",
      rating: 5,
      text: "Never run out of content ideas!"
    }
  ];

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-joeve-blue-deep">
      {/* Background */}
      <div className="absolute inset-x-0 bottom-0 top-28 z-0">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="text-center lg:text-left">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm font-medium">150+ SMEs Served</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm font-medium">98% Success Rate</span>
              </div>
            </div>

            {/* Animated Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase leading-tight tracking-wider drop-shadow-[0_0_20px_rgba(0,212,255,0.5)] mb-6">
              Transform Your Business with AI in 90 Days
            </h1>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-4">
              Penang&apos;s Leading AI Agency for Malaysian SMEs
            </p>

            <p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-2xl">
              We build AI-powered web apps that increase efficiency by 40%, create scroll-stopping social content that boosts engagement 10x, and produce cinematic videos 5x faster than traditional methods.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="h-14 px-8 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold tracking-wide shadow-[0_0_30px_rgba(0,212,255,0.6)] border border-cyan-300 rounded-full group" asChild>
                <Link href="/request-quotation" className="flex items-center gap-2">
                  Get Free AI Strategy Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" className="h-14 px-8 text-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-joeve-blue-deep font-bold tracking-wide rounded-full backdrop-blur-sm" asChild>
                <Link href="/resources/ai-transformation-guide">
                  Download AI Guide
                </Link>
              </Button>
            </div>

            {/* Urgency Element */}
            <div className="flex items-center gap-2 text-cyan-300 text-sm">
              <Clock className="w-4 h-4" />
              <span>Limited spots available this month - Only 3 consultation slots left</span>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Live Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-white text-sm">Verified Client</span>
              </div>
              <p className="text-white text-lg mb-4 italic">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                  {testimonials[currentTestimonial].name[0]}
                </div>
                <div>
                  <p className="text-white font-medium">{testimonials[currentTestimonial].name}</p>
                  <p className="text-cyan-400 text-sm">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 text-center">
                <div className="text-2xl font-bold text-white mb-1">40%</div>
                <div className="text-cyan-300 text-sm">Efficiency Increase</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 text-center">
                <div className="text-2xl font-bold text-white mb-1">10x</div>
                <div className="text-purple-300 text-sm">Engagement Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
