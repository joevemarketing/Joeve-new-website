"use client";

import { Button } from "@/components/ui/button";
import { Calculator, FileText, TrendingUp, Code, BarChart3, Download, Zap, Shield, Rocket, Users, Star, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/effects/ScrollAnimations";
import { motion } from "framer-motion";

export default function ToolsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-joeve-blue-deep via-joeve-blue-dark to-joeve-blue-deep">
      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
              rotate: [0, 90, 180]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.15, 0.2],
              rotate: [180, 90, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-2xl opacity-15"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-500/30"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-cyan-300 font-medium">AI-Powered Business Tools</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wider drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]">
              Free Business Tools
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Calculate ROI and get personalized development guides
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Use our interactive tools to analyze your business potential and get customized recommendations. 
              No registration required to start - just provide your email to receive detailed reports.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">80+</div>
                <div className="text-sm text-gray-300">Businesses Helped</div>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">2 Min</div>
                <div className="text-sm text-gray-300">Average Time</div>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                <Star className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-gray-300">User Rating</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* ROI Calculator Card */}
            <ScrollReveal className="group" delay={100}>
              <motion.div
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.2)" }}
              >
                {/* Glow Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse" />
                
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Calculator className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Digital Marketing ROI Calculator</h3>
                    <p className="text-cyan-400 font-medium">Calculate your potential return on investment</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <motion.div 
                    className="flex items-center gap-3 text-gray-300 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="font-medium">Instant ROI calculations based on your business metrics</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3 text-gray-300 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">Detailed breakdown of costs and projected savings</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3 text-gray-300 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    <Download className="w-5 h-5 text-purple-400" />
                    <span className="font-medium">Download comprehensive PDF report</span>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all w-full sm:w-auto group relative overflow-hidden" asChild>
                      <Link href="/tools/roi-calculator" className="flex items-center gap-2">
                        Calculate ROI
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <Button variant="outline" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold px-6 py-3 rounded-full transition-all" asChild>
                    <Link href="/resources/digital-marketing-roi-calculator">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Web App Guide Card */}
            <ScrollReveal className="group" delay={200}>
              <motion.div
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)" }}
              >
                {/* Glow Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FileText className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Web App Development Guide</h3>
                    <p className="text-purple-400 font-medium">Get a personalized development roadmap</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <motion.div 
                    className="flex items-center gap-3 text-gray-300 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Code className="w-5 h-5 text-purple-400" />
                    <span className="font-medium">Customized technology stack recommendations</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3 text-gray-300 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">Timeline and budget planning insights</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3 text-gray-300 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    <Download className="w-5 h-5 text-green-400" />
                    <span className="font-medium">Download comprehensive development guide</span>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all w-full sm:w-auto group relative overflow-hidden" asChild>
                      <Link href="/tools/web-app-guide" className="flex items-center gap-2">
                        Get Guide
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  <Button variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold px-6 py-3 rounded-full transition-all" asChild>
                    <Link href="/resources/web-app-development-guide">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-wider">
              How It Works
            </h2>
            <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
              Simple 3-step process to get your personalized insights
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Answer Questions</h4>
              <p className="text-gray-300">Complete our interactive survey about your business needs and goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Get Instant Results</h4>
              <p className="text-gray-300">View preliminary insights and calculations based on your responses</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Download Report</h4>
              <p className="text-gray-300">Enter your email to receive a comprehensive PDF report with detailed recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ScrollReveal className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Take our free assessments and get personalized recommendations based on your specific business needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="/tools/roi-calculator">
                  Start ROI Calculator
                </Link>
              </Button>
              <Button variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold px-8 py-3 rounded-full" asChild>
                <Link href="/tools/web-app-guide">
                  Get Development Guide
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}