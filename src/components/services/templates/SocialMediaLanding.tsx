"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ServiceQuoteForm } from "@/components/services/ServiceQuoteForm";
import { portfolioItems } from "@/data/portfolio";

interface SocialMediaLandingProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  contentImage: string;
}

export function SocialMediaLanding({ title, description, image, features, benefits, faqs, contentImage }: SocialMediaLandingProps) {
  return (
    <div className="min-h-screen pt-20 bg-background overflow-hidden relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image}
          alt="Social Media Background"
          fill
          className="object-cover opacity-25"
          unoptimized
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>
      {/* Dynamic Glow Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 lg:py-20">
        <Link href="/services" className="inline-flex items-center text-pink-400 hover:text-pink-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mb-6 leading-tight pb-2">
              Go Viral with <br/> AI Precision
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              {description}
            </p>
            
            <div className="flex gap-4 mb-12">
               {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/60">
                     <Icon className="w-5 h-5" />
                  </div>
               ))}
            </div>

            <ScrollReveal className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8">
               <h3 className="text-white font-bold mb-4">Why Brands Love Us</h3>
               <div className="grid gap-6">
                  {benefits.map((benefit, i) => (
                     <ScrollReveal key={i} delay={i * 80}>
                        <h4 className="text-pink-400 font-bold mb-1">{benefit.title}</h4>
                        <p className="text-gray-400 text-sm">{benefit.desc}</p>
                     </ScrollReveal>
                  ))}
               </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Phone Mockup & Form */}
          <div className="flex-1 w-full max-w-md relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 to-orange-500 rounded-[2.5rem] blur opacity-30 rotate-3" />
             <div className="relative bg-black rounded-[2rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />
                
                {/* Content inside phone */}
                <div className="h-[600px] bg-slate-900 relative overflow-y-auto no-scrollbar">
                   <div className="relative h-64 w-full">
                      <Image 
                        src={contentImage} 
                        alt="Social Content" 
                        fill 
                        className="object-cover" 
                        unoptimized 
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                   </div>
                   
                   <div className="p-6 -mt-12 relative z-10">
                      <div className="bg-slate-800/80 backdrop-blur rounded-xl p-4 mb-6 border border-white/5">
                         <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                            <div className="h-2 w-24 bg-white/20 rounded" />
                         </div>
                         <div className="space-y-2">
                            <div className="h-2 w-full bg-white/10 rounded" />
                            <div className="h-2 w-3/4 bg-white/10 rounded" />
                         </div>
                      </div>

                      {/* Embedded Form inside the "Phone" view for unique layout */}
                      <div className="mt-8">
                         <h3 className="text-white font-bold mb-4 text-center">Start Your Campaign</h3>
                         <ServiceQuoteForm serviceName={title} className="bg-transparent border-0 p-0 shadow-none" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Ticker/Features Strip */}
      <div className="bg-black/40 border-y border-white/5 py-8 backdrop-blur-sm">
         <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
               {features.map((feature, i) => (
                  <ScrollReveal key={i} className="flex items-center text-gray-400 font-medium" delay={i * 60}>
                     <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse" />
                     {feature}
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </div>

      <section className="py-20 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Selected Case Studies</h2>
            <p className="text-gray-400">Work that demonstrates brand storytelling and growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.slice(0,3).map((item, i) => (
              <ScrollReveal key={item.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors" delay={i * 80}>
                <div className="h-40 relative">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                  <Link href={`/portfolio/${item.id}`} className="text-pink-400 hover:text-pink-300 text-sm mt-3 inline-block">View Case Study</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-display font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12">
              Common Questions
            </h2>
            <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors" delay={i * 60}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
