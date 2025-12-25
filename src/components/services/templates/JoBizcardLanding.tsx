"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Smartphone, Wifi, QrCode, Users, TrendingUp, Zap, Globe, Share2, CreditCard, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ServiceQuoteForm } from "@/components/services/ServiceQuoteForm";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface JoBizcardLandingProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  cardImage: string;
}

export function JoBizcardLanding({ title, description, image, features, benefits, faqs, cardImage }: JoBizcardLandingProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [nfcActive, setNfcActive] = useState(false);

  useEffect(() => {
    const nfcInterval = setInterval(() => {
      setNfcActive(true);
      setTimeout(() => setNfcActive(false), 2000);
    }, 4000);

    return () => clearInterval(nfcInterval);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-50 to-white">
      {/* NFC Connection Hub Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src={image}
            alt="JO Bizcard Background"
            fill
            className="object-cover opacity-10"
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(13,148,136,0.1),transparent_50%),radial-gradient(circle_at_60%_70%,rgba(30,41,59,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900" />
        </div>

        {/* NFC Wave Animation */}
        <div className="absolute top-32 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <motion.div 
                className={`relative w-32 h-32 rounded-full border-2 ${nfcActive ? 'border-teal-400' : 'border-slate-600'} transition-colors duration-500`}
                animate={nfcActive ? {
                  boxShadow: [
                    '0 0 0 0 rgba(13, 148, 136, 0.7)',
                    '0 0 0 20px rgba(13, 148, 136, 0)',
                    '0 0 0 0 rgba(13, 148, 136, 0)'
                  ]
                } : {}}
                transition={{ duration: 2, repeat: nfcActive ? Infinity : 0 }}
              >
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                {nfcActive && (
                  <>
                    <div className="absolute -inset-2 rounded-full border border-teal-400 opacity-50 animate-ping" />
                    <div className="absolute -inset-4 rounded-full border border-teal-400 opacity-30 animate-ping" style={{ animationDelay: '0.5s' }} />
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32">
          <Link href="/services" className="inline-flex items-center text-teal-200 hover:text-white mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-200 text-sm mb-6">
                TAP • CONNECT • NETWORK
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Smart <span className="text-teal-400">Networking</span> Revolution
              </h1>
              <p className="text-xl text-slate-100 mb-8 leading-relaxed font-light">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white h-14 px-8 rounded-lg font-semibold" onClick={() => document.getElementById('bizcard-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <CreditCard className="w-5 h-5 mr-2" />
                  Get Smart Cards
                </Button>
                <Button size="lg" variant="outline" className="border-teal-300 text-teal-100 hover:bg-white/10 h-14 px-8 rounded-lg">
                  <QrCode className="w-5 h-5 mr-2" />
                  See Demo
                </Button>
              </div>
            </div>

            <ScrollReveal className="relative" as="div">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-slate-500 rounded-2xl blur opacity-20" />
              
              {/* Digital Card Mockup */}
              <motion.div 
                className="relative bg-white rounded-2xl p-8 shadow-2xl border border-slate-200"
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="text-center mb-6">
                  <h3 className="font-bold text-slate-900 text-lg">Digital Business Card</h3>
                  <p className="text-slate-500 text-sm">Tap to flip • NFC Enabled</p>
                </div>
                
                <motion.div 
                  className="relative aspect-[16/9] bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl overflow-hidden"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6" style={{ backfaceVisibility: 'hidden' }}>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-1">John Doe</h4>
                      <p className="text-slate-300 text-sm">Marketing Director</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-white">
                        <p className="text-xs opacity-75">john@company.com</p>
                        <p className="text-xs opacity-75">+1 234 567 890</p>
                      </div>
                      <div className={`p-2 rounded-full ${nfcActive ? 'bg-teal-500' : 'bg-slate-600'} transition-colors`}>
                        <Wifi className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 flex items-center justify-center p-6" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="text-center">
                      <QrCode className="w-16 h-16 text-white mb-2 mx-auto" />
                      <p className="text-white text-xs">Scan QR Code</p>
                    </div>
                  </div>
                </motion.div>
                
                <div className="mt-6 flex justify-center gap-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Smartphone className="w-4 h-4" />
                    <span className="text-xs">NFC</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <QrCode className="w-4 h-4" />
                    <span className="text-xs">QR Code</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Share2 className="w-4 h-4" />
                    <span className="text-xs">Share</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Connection Metrics Strip */}
      <div className="bg-slate-900 border-y border-slate-800 py-8">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                 { value: "1 Tap", label: "Instant Share" },
                 { value: "100%", label: "Update Anytime" },
                 { value: "24/7", label: "Analytics" },
                 { value: "Unlimited", label: "Edits" }
               ].map((metric, i) => (
                  <ScrollReveal key={i} className="text-center" delay={i * 80}>
                     <div className="text-3xl font-bold text-teal-400 mb-1">{metric.value}</div>
                     <div className="text-slate-300 text-sm">{metric.label}</div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </div>

      {/* Networking Revolution */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Modern Networking Revolution</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Transform every interaction into a lasting digital connection with smart technology.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <ScrollReveal className="space-y-8">
                  {benefits.map((benefit, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                           <Users className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                           <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                     </div>
                  ))}
               </ScrollReveal>

               <ScrollReveal className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">How It Works</h3>
                  <div className="space-y-6">
                     {[
                        { step: "1", title: "Tap or Scan", desc: "Share contact info instantly via NFC tap or QR code" },
                        { step: "2", title: "Digital Profile", desc: "Recipients save your complete digital business card" },
                        { step: "3", title: "Live Updates", desc: "Edit your info anytime without reprinting cards" },
                        { step: "4", title: "Track Engagement", desc: "Monitor views, saves, and interactions in real-time" }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">{item.step}</div>
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
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Card Features</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Advanced technology meets professional networking.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {features.map((feature, i) => (
                  <ScrollReveal key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow" delay={i * 80}>
                     <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                        <CreditCard className="w-6 h-6 text-teal-600" />
                     </div>
                     <h3 className="font-bold text-gray-900 mb-2">{feature}</h3>
                     <p className="text-gray-600 text-sm">Professional networking made simple.</p>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-teal-900 text-white" id="bizcard-form">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Networking?</h2>
                  <p className="text-slate-100 max-w-2xl mx-auto">Get premium smart business cards that make every connection count.</p>
               </div>
               
               <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-xl font-bold mb-6">What You&apos;ll Get</h3>
                     <div className="space-y-4">
                        {[
                           "Premium NFC smart cards",
                           "Custom branded design",
                           "Real-time analytics dashboard",
                           "Unlimited profile updates",
                           "Team management tools"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <Award className="w-5 h-5 text-teal-400" />
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
               <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">JO Bizcard FAQ</h2>
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