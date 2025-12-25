"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Target, BarChart3, Search, Zap, Globe, DollarSign, MousePointer, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ServiceQuoteForm } from "@/components/services/ServiceQuoteForm";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SEMLandingProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  dashboardImage: string;
}

export function SEMLanding({ title, description, image, features, benefits, faqs, dashboardImage }: SEMLandingProps) {
  const [searchQuery, setSearchQuery] = useState("digital marketing services");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const queries = ["digital marketing services", "SEO optimization", "Google Ads management", "conversion tracking"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % queries.length;
        setSearchQuery(queries[currentIndex]);
        setIsTyping(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-50 to-white">
      {/* Search Command Center Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src={image}
            alt="SEM Services Background"
            fill
            className="object-cover opacity-15"
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(66,133,244,0.1),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(52,168,83,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900" />
        </div>

        {/* Animated Search Bar */}
        <div className="absolute top-20 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-blue-300" />
                <div className="flex-1 text-white font-mono text-sm">
                  {searchQuery}
                  {isTyping && <span className="animate-pulse">|</span>}
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <Link href="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm mb-6">
                DATA-DRIVEN • ROI-FOCUSED
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Dominate <span className="text-green-400">Search</span> Results
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 rounded-lg font-semibold" onClick={() => document.getElementById('sem-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Boost Rankings
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-white/10 h-14 px-8 rounded-lg">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Analytics
                </Button>
              </div>
            </div>

            <ScrollReveal className="relative" as="div">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Campaign Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { metric: "Click-Through Rate", value: "4.2%", change: "+12%", color: "text-green-600" },
                    { metric: "Cost Per Click", value: "$1.24", change: "-8%", color: "text-green-600" },
                    { metric: "Conversion Rate", value: "3.8%", change: "+15%", color: "text-green-600" },
                    { metric: "Quality Score", value: "9/10", change: "+2", color: "text-green-600" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">{item.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{item.value}</span>
                        <span className={`text-xs ${item.color}`}>{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Real-time Metrics Strip */}
      <div className="bg-slate-900 border-y border-slate-800 py-8">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                 { value: "4.2%", label: "Avg CTR" },
                 { value: "$1.24", label: "Avg CPC" },
                 { value: "3.8%", label: "Conv. Rate" },
                 { value: "9/10", label: "Quality Score" }
               ].map((metric, i) => (
                  <ScrollReveal key={i} className="text-center" delay={i * 80}>
                     <div className="text-3xl font-bold text-green-400 mb-1">{metric.value}</div>
                     <div className="text-slate-300 text-sm">{metric.label}</div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </div>

      {/* Search Intent Analysis */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Search Intent Optimization</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">We analyze search patterns to target high-intent keywords that drive qualified traffic.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <ScrollReveal className="space-y-8">
                  {benefits.map((benefit, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                           <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                           <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                     </div>
                  ))}
               </ScrollReveal>

               <ScrollReveal className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Our SEM Process</h3>
                  <div className="space-y-6">
                     {[
                        { step: "1", title: "Keyword Research", desc: "Deep analysis of search intent and competition" },
                        { step: "2", title: "Campaign Setup", desc: "Strategic ad groups and compelling creatives" },
                        { step: "3", title: "Conversion Tracking", desc: "Full-funnel attribution and ROI measurement" },
                        { step: "4", title: "Optimization", desc: "Continuous A/B testing and bid management" }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">{item.step}</div>
                           <div>
                              <h4 className="font-bold text-gray-900">{item.title}</h4>
                              <p className="text-gray-600 text-sm">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </ScrollReveal>
            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced SEM Features</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Enterprise-level tools and strategies for maximum search visibility.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {features.map((feature, i) => (
                  <ScrollReveal key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow" delay={i * 80}>
                     <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Search className="w-6 h-6 text-blue-600" />
                     </div>
                     <h3 className="font-bold text-gray-900 mb-2">{feature}</h3>
                     <p className="text-gray-600 text-sm">Optimized for maximum search performance.</p>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-b from-blue-600 to-slate-900 text-white" id="sem-form">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to Dominate Search Results?</h2>
                  <p className="text-blue-100 max-w-2xl mx-auto">Get a comprehensive SEM audit and strategy tailored to your business goals.</p>
               </div>
               
               <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-xl font-bold mb-6">What You&apos;ll Get</h3>
                     <div className="space-y-4">
                        {[
                           "Complete SEM audit and analysis",
                           "Keyword research and strategy",
                           "Competitor analysis report",
                           "Campaign optimization roadmap",
                           "ROI projection and timeline"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <Globe className="w-5 h-5 text-green-400" />
                              <span>{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                     <ServiceQuoteForm serviceName={title} className="bg-transparent border-0 shadow-none p-0" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
               <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">SEM Services FAQ</h2>
               <div className="space-y-6">
                  {faqs.map((faq, i) => (
                     <ScrollReveal key={i} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors" delay={i * 60}>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                     </ScrollReveal>
                  ))}
               </div>
            </div>
         </section>
      )}
    </div>
  );
}