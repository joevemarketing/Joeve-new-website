"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Code, Server, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceQuoteForm } from "@/components/services/ServiceQuoteForm";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { portfolioItems } from "@/data/portfolio";

interface WebAppLandingProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  dashboardImage: string;
}

export function WebAppLanding({ title, description, image, features, benefits, faqs, dashboardImage }: WebAppLandingProps) {
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Tech-focused Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          {/* Background image using provided 'image' */}
          <Image 
            src={image}
            alt="Web App Background"
            fill
            className="object-cover opacity-25"
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 font-mono text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> ./back_to_services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-sm mb-6">
                v2.0_RELEASED
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Build <span className="text-emerald-500">Scalable</span> Software
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed font-light">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-8 rounded-lg font-mono" onClick={() => document.getElementById('build-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Start_Project()
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-white/5 h-14 px-8 rounded-lg font-mono">
                  View_Stack
                </Button>
              </div>
            </div>

            <ScrollReveal className="relative" as="div">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-30" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-2xl">
                 <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-800 bg-slate-900 rounded-t-lg">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 <div className="relative aspect-video bg-slate-950 rounded-b-lg overflow-hidden">
                    <Image 
                      src={dashboardImage} 
                      alt="Dashboard Preview" 
                      fill 
                      className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" 
                      unoptimized 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                 </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

  {/* Tech Stack Grid */}
  <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Modern Technology Stack</h2>
              <p className="text-gray-400">We use the latest frameworks to ensure performance and scalability.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Code, title: "Frontend", desc: "React, Next.js, Tailwind" },
                { icon: Server, title: "Backend", desc: "Node.js, Supabase, Python" },
                { icon: Shield, title: "Security", desc: "OAuth, Row Level Security" },
                { icon: Smartphone, title: "Mobile", desc: "Responsive, PWA, Native" },
              ].map((item, i) => (
                <ScrollReveal key={i} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all group" delay={i * 80}>
                   <item.icon className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                   <p className="text-gray-400 text-sm font-mono">{item.desc}</p>
                </ScrollReveal>
              ))}
          </div>
        </div>
  </section>

  <section className="py-20 bg-slate-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Selected Case Studies</h2>
        <p className="text-gray-400">Real projects delivered in web development and product sites.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioItems.filter(p => p.category === "Web Development").slice(0,3).map((item, i) => (
          <ScrollReveal key={item.id} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-colors" delay={i * 80}>
            <div className="h-40 relative">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
              <Link href={`/portfolio/${item.id}`} className="text-emerald-400 hover:text-emerald-300 text-sm mt-3 inline-block">View Case Study</Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>

      {/* Benefits & Form Split */}
      <section className="py-20 bg-slate-900" id="build-form">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12">
               <div className="lg:col-span-7">
                  <h2 className="text-3xl font-bold text-white mb-8">Why Develop With Us?</h2>
                  <div className="space-y-8">
                     {benefits.map((benefit, i) => (
                        <ScrollReveal key={i} className="flex gap-4" delay={i * 80}>
                           <div className="w-12 h-12 rounded-lg bg-emerald-900/30 flex items-center justify-center shrink-0 border border-emerald-500/20">
                              <span className="text-emerald-400 font-bold font-mono">0{i + 1}</span>
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                              <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                           </div>
                        </ScrollReveal>
                     ))}
                  </div>

                  <div className="mt-12">
                     <h3 className="text-white font-bold mb-6">Key Features</h3>
                     <div className="grid grid-cols-2 gap-4">
                        {features.map((feature, i) => (
                           <div key={i} className="flex items-center text-gray-400">
                              <Check className="w-4 h-4 text-emerald-500 mr-2" />
                              <span className="text-sm">{feature}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-5">
                  <div className="sticky top-24">
                     <ServiceQuoteForm serviceName={title} className="bg-slate-950 border-slate-800" />
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-slate-950 border-t border-slate-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/30 transition-colors" delay={i * 60}>
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start">
                    <span className="text-emerald-500 mr-3 font-mono">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 pl-8 leading-relaxed">
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
