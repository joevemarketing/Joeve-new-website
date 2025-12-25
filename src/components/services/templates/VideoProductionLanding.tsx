"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play, Film, Mic, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ServiceQuoteForm } from "@/components/services/ServiceQuoteForm";
import { portfolioItems } from "@/data/portfolio";

interface VideoProductionLandingProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  studioImage: string;
}

export function VideoProductionLanding({ title, description, image, features, benefits, faqs, studioImage }: VideoProductionLandingProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={image} 
            alt="Cinematic Background" 
            fill 
            className="object-cover opacity-80 scale-105 animate-slow-zoom" 
            unoptimized 
            sizes="100vw"
            style={{ filter: "brightness(1.05) contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/30 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link href="/services" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors absolute top-8 left-4 lg:left-0">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            REC
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-widest mb-6 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light mb-12">
            {description}
          </p>
          
          <Button size="lg" className="h-16 px-10 bg-white text-black hover:bg-gray-200 rounded-full text-lg font-bold tracking-wide transition-transform hover:scale-[1.03]" onClick={() => document.getElementById('studio-form')?.scrollIntoView({ behavior: 'smooth' })}>
            <Play className="w-5 h-5 mr-2 fill-current" />
            Start Production
          </Button>
        </div>
      </section>

      {/* Process Strip */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-12">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
               {[
                  { icon: Film, title: "Scripting", desc: "AI-generated storylines" },
                  { icon: Mic, title: "Voiceover", desc: "Multi-lingual dubbing" },
                  { icon: Zap, title: "Rendering", desc: "4K Cinema Quality" }
               ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
                     <step.icon className="w-8 h-8 text-red-500" />
                     <div>
                        <h3 className="font-bold uppercase tracking-wider">{step.title}</h3>
                        <p className="text-xs text-gray-400">{step.desc}</p>
                     </div>
                     {i < 2 && <div className="hidden md:block w-px h-12 bg-zinc-700 ml-8" />}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Main Content Split */}
      <section className="py-20">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
               <div className="space-y-16">
                  <div>
                     <h2 className="text-3xl font-bold mb-6">Production Features</h2>
                     <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, i) => (
                           <ScrollReveal key={i} className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800" delay={i * 80}>
                              <span className="text-red-500 font-mono text-xs block mb-2">0{i+1}</span>
                              <p className="font-medium">{feature}</p>
                           </ScrollReveal>
                        ))}
                     </div>
                  </div>

                  <div>
                     <h2 className="text-3xl font-bold mb-6">Studio Benefits</h2>
                     <div className="space-y-6">
                        {benefits.map((benefit, i) => (
                           <ScrollReveal key={i} className="flex gap-4" delay={i * 80}>
                              <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                              <div>
                                 <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                                 <p className="text-gray-400">{benefit.desc}</p>
                              </div>
                           </ScrollReveal>
                        ))}
                     </div>
                  </div>
               </div>

               <div id="studio-form" className="lg:pl-12">
                  <div className="sticky top-24">
                     <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-1 overflow-hidden">
                        <div className="relative h-48 w-full mb-4 rounded-xl overflow-hidden">
                           <Image src={studioImage} alt="Studio Preview" fill className="object-cover" unoptimized />
                        </div>
                        <div className="bg-black rounded-xl p-8">
                           <h3 className="text-2xl font-bold mb-2 text-center uppercase tracking-widest">Studio Booking</h3>
                           <p className="text-center text-gray-500 mb-8 text-sm">Tell us about your video project</p>
                           <ServiceQuoteForm serviceName={title} className="bg-transparent border-0 shadow-none p-0" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Selected Case Studies</h2>
            <p className="text-gray-400">Recent corporate video work and launch pieces.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.filter(p => p.category === "Corporate Video").slice(0,3).map((item, i) => (
              <ScrollReveal key={item.id} className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-500/40 transition-colors" delay={i * 80}>
                <div className="h-40 relative">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                  <Link href={`/portfolio/${item.id}`} className="text-red-400 hover:text-red-300 text-sm mt-3 inline-block">View Case Study</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-zinc-950 border-t border-zinc-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase tracking-widest">Production FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} className="group border-b border-zinc-800 pb-6" delay={i * 60}>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors flex justify-between items-center cursor-pointer">
                    {faq.question}
                    <span className="text-zinc-600 group-hover:text-red-500 text-2xl">+</span>
                  </h3>
                  <p className="text-gray-400 leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
