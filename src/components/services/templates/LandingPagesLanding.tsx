"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BarChart3, Target, Zap, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ServiceQuoteForm } from "@/components/services/ServiceQuoteForm";
import { portfolioItems } from "@/data/portfolio";

interface LandingPagesLandingProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  mockupImage: string;
}

export function LandingPagesLanding({ title, description, image, features, benefits, faqs, mockupImage }: LandingPagesLandingProps) {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-blue-50 to-white">
      {/* Marketing Lab Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 z-0">
          <Image 
            src={image}
            alt="Landing Pages Background"
            fill
            className="object-cover opacity-20"
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/80 to-blue-900" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm mb-6">
                A/B TESTED • DATA DRIVEN
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Landing Pages that <span className="text-green-400">Convert</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 rounded-lg font-semibold" onClick={() => document.getElementById('conversion-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Boost Conversions
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-white/10 h-14 px-8 rounded-lg">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  See Analytics
                </Button>
              </div>
            </div>

            <ScrollReveal className="relative" as="div">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-blue-200">
                 <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-auto text-xs text-gray-500">Conversion Rate: 24.7%</span>
                 </div>
                 <div className="relative aspect-[16/10] bg-gray-50 rounded-lg overflow-hidden">
                    <Image 
                      src={mockupImage} 
                      alt="Landing Page Preview" 
                      fill 
                      className="object-cover" 
                      unoptimized 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                 </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Conversion Metrics Strip */}
      <div className="bg-blue-900 border-y border-blue-800 py-8">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                 { value: "24.7%", label: "Avg Conversion Rate" },
                 { value: "3.2x", label: "ROI Improvement" },
                 { value: "<2s", label: "Page Load Speed" },
                 { value: "98%", label: "Mobile Responsive" }
               ].map((metric, i) => (
                  <ScrollReveal key={i} className="text-center" delay={i * 80}>
                     <div className="text-3xl font-bold text-green-400 mb-1">{metric.value}</div>
                     <div className="text-blue-200 text-sm">{metric.label}</div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </div>

      {/* A/B Testing Showcase */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Data-Driven Optimization</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Every element is tested and optimized for maximum conversion impact.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <ScrollReveal className="space-y-8">
                  {benefits.map((benefit, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                           <Target className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                           <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                     </div>
                  ))}
               </ScrollReveal>

               <ScrollReveal className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Our Testing Process</h3>
                  <div className="space-y-6">
                     {[
                        { step: "1", title: "Hypothesis", desc: "Data-driven assumptions about user behavior" },
                        { step: "2", title: "Test Design", desc: "Create variations with clear success metrics" },
                        { step: "3", title: "Implementation", desc: "Deploy with proper tracking and analytics" },
                        { step: "4", title: "Analysis", desc: "Statistical significance and insights extraction" }
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
      <section className="py-20 bg-blue-50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Conversion-Focused Features</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Built with psychology and data science to maximize results.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {features.map((feature, i) => (
                  <ScrollReveal key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow" delay={i * 80}>
                     <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-blue-600" />
                     </div>
                     <h3 className="font-bold text-gray-900 mb-2">{feature}</h3>
                     <p className="text-gray-600 text-sm">Optimized for maximum conversion impact.</p>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-800 text-white" id="conversion-form">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Conversions?</h2>
                  <p className="text-blue-100 max-w-2xl mx-auto">Get a detailed conversion audit and optimization roadmap tailored to your business.</p>
               </div>
               
               <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-xl font-bold mb-6">What You&apos;ll Get</h3>
                     <div className="space-y-4">
                        {[
                           "Complete landing page audit",
                           "Conversion rate analysis",
                           "A/B testing strategy",
                           "Optimization roadmap",
                           "Performance benchmarks"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <Users className="w-5 h-5 text-green-400" />
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
               <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Conversion Optimization FAQ</h2>
               <div className="space-y-6">
                  {faqs.map((faq, i) => (
                     <ScrollReveal key={i} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors" delay={i * 60}>
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
