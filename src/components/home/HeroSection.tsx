"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import UnicornAuraEmbed from "@/components/effects/UnicornAuraEmbed";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <UnicornAuraEmbed projectId="bmaMERjX2VZDtPrh4Zwx" className="absolute inset-0 z-0" />
      
      {/* Optional fallback gradient overlay - won't block the lightbeam */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-purple-950/5 to-black/20 z-[1] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">AI-Powered Digital Solutions</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"> AI Intelligence</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            JOeve Smart Solutions delivers cutting-edge AI solutions that drive real results for Malaysian businesses. 
            From smart chatbots to automated marketing, we help you scale faster and smarter.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-white/60" />
                300%
              </div>
              <div className="text-sm text-white/60">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                <Zap className="w-6 h-6 text-white/60" />
                80%
              </div>
              <div className="text-sm text-white/60">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">80+</div>
              <div className="text-sm text-white/60">Businesses Transformed</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white/10 border border-white/20 text-white px-8 py-6 rounded-full text-lg font-semibold hover:bg-white/15 transition-all"
              asChild
            >
              <Link href="/contact">
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-full text-lg font-semibold backdrop-blur-sm transition-all"
              asChild
            >
              <Link href="/portfolio">
                View Success Stories
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}