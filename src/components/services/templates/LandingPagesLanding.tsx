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
  // SEO Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "JOeve Smart Solutions",
      "url": "https://joevesmartsolutions.com"
    },
    "serviceType": "Web Design & Development",
    "areaServed": "Malaysia",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Landing Page Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Basic Landing Page",
          "price": "1299",
          "priceCurrency": "MYR"
        },
        {
          "@type": "Offer", 
          "name": "Professional Landing Page",
          "price": "2499",
          "priceCurrency": "MYR"
        },
        {
            "@type": "Offer",
            "name": "Enterprise Landing Page", 
            "price": "3999",
            "priceCurrency": "MYR"
          }
        ]
      }
    };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Main Content */}
      <main>
        {/* Marketing Lab Hero */}
        <header className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 z-0">
          {/* Massive animated gradients */}
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mix-blend-screen filter blur-[128px] animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-screen filter blur-[100px] animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mix-blend-screen filter blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-gradient-to-br from-green-400 to-teal-500 rounded-full mix-blend-screen filter blur-[80px] animate-ping" style={{ animationDuration: '10s' }} />
          </div>
          
          {/* Dramatic light rays */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-45 origin-center" />
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 origin-center" />
            <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent transform rotate-12 origin-center" />
            <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-cyan to-transparent transform -rotate-45 origin-center" />
          </div>
          
          {/* Large floating elements */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-cyan-400/50 transform-gpu animate-spin" style={{ animationDuration: '6s' }} />
            <div className="absolute top-40 right-32 w-48 h-48 border-4 border-purple-400/50 transform-gpu animate-bounce" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-32 left-1/3 w-56 h-56 border-4 border-pink-400/50 transform-gpu animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-20 right-1/4 w-40 h-40 border-4 border-yellow-400/50 transform-gpu animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
            
            {/* Additional moving elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-green-400/60 transform-gpu" style={{ animation: 'floatMove 15s ease-in-out infinite' }} />
            <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-red-400/60 transform-gpu" style={{ animation: 'floatRotate 20s linear infinite' }} />
            <div className="absolute bottom-1/4 left-1/2 w-36 h-36 border-2 border-orange-400/60 transform-gpu" style={{ animation: 'floatMove 18s ease-in-out infinite reverse' }} />
            <div className="absolute top-2/3 right-1/4 w-28 h-28 border-2 border-teal-400/60 transform-gpu" style={{ animation: 'floatRotate 25s linear infinite reverse' }} />
          </div>
          
          {/* Moving elements with custom animations */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-green-400/60 animate-bounce" style={{ animationDuration: '15s' }} />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-red-400/60 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-36 h-36 border-2 border-orange-400/60 animate-pulse" style={{ animationDuration: '18s' }} />
          <div className="absolute top-2/3 right-1/4 w-28 h-28 border-2 border-teal-400/60 animate-bounce" style={{ animationDuration: '25s' }} />
          
          {/* Dense particle field */}
          <div className="absolute inset-0">
            {[
              { top: "5%", left: "10%", size: "w-1 h-1", opacity: 0.3, delay: "0s", duration: "3s" },
              { top: "15%", left: "25%", size: "w-2 h-2", opacity: 0.5, delay: "0.5s", duration: "4s" },
              { top: "8%", left: "45%", size: "w-1 h-1", opacity: 0.4, delay: "1s", duration: "3.5s" },
              { top: "25%", left: "65%", size: "w-2 h-2", opacity: 0.6, delay: "1.5s", duration: "5s" },
              { top: "12%", left: "80%", size: "w-1 h-1", opacity: 0.3, delay: "2s", duration: "4.5s" },
              { top: "35%", left: "15%", size: "w-1 h-1", opacity: 0.5, delay: "0.8s", duration: "3.8s" },
              { top: "42%", left: "35%", size: "w-2 h-2", opacity: 0.7, delay: "2.5s", duration: "4.2s" },
              { top: "30%", left: "55%", size: "w-1 h-1", opacity: 0.4, delay: "1.2s", duration: "3.3s" },
              { top: "55%", left: "75%", size: "w-2 h-2", opacity: 0.6, delay: "3s", duration: "5.5s" },
              { top: "48%", left: "90%", size: "w-1 h-1", opacity: 0.3, delay: "0.3s", duration: "4.8s" },
              { top: "65%", left: "20%", size: "w-1 h-1", opacity: 0.5, delay: "2.2s", duration: "3.7s" },
              { top: "70%", left: "40%", size: "w-2 h-2", opacity: 0.8, delay: "1.8s", duration: "4.3s" },
              { top: "78%", left: "60%", size: "w-1 h-1", opacity: 0.4, delay: "3.2s", duration: "3.9s" },
              { top: "85%", left: "85%", size: "w-2 h-2", opacity: 0.6, delay: "0.7s", duration: "5.2s" },
              { top: "20%", left: "95%", size: "w-1 h-1", opacity: 0.3, delay: "2.8s", duration: "4.1s" },
              { top: "50%", left: "5%", size: "w-2 h-2", opacity: 0.7, delay: "1.5s", duration: "3.6s" },
              { top: "88%", left: "30%", size: "w-1 h-1", opacity: 0.5, delay: "3.5s", duration: "4.7s" }
            ].map((particle, i) => (
              <div
                key={i}
                className={`absolute ${particle.size} bg-white rounded-full animate-pulse`}
                style={{
                  top: particle.top,
                  left: particle.left,
                  opacity: particle.opacity,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration
                }}
              />
            ))}
          </div>
          
          {/* Animated mesh grid */}
          <div className="absolute inset-0 opacity-20 animate-pulse" style={{ animationDuration: '20s' }} />
          
          {/* Spotlight effects */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-gradient-radial from-white/30 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-gradient-radial from-blue-400/30 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
          </div>
          
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex-1 text-center lg:text-left lg:w-1/2">
              <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs sm:text-sm mb-4 sm:mb-6">
                A/B TESTED • AI OPTIMIZED • PROVEN RESULTS
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                Landing Pages that <span className="text-green-400">Dominate Your Market</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed font-light">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-12 sm:h-14 px-6 sm:px-8 rounded-lg font-semibold text-sm sm:text-base" onClick={() => document.getElementById('conversion-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Converting Today
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-white/10 h-12 sm:h-14 px-6 sm:px-8 rounded-lg text-sm sm:text-base" onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}>
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View Case Studies
                </Button>
              </div>
            </div>

            <ScrollReveal className="relative lg:w-1/2" as="div">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-20" />
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-blue-200 max-w-xl mx-auto lg:mx-0">
                 <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-auto text-xs text-gray-500">Conversion Rate: 24.7%</span>
                 </div>
                 <div className="relative aspect-[16/9] bg-gray-50 rounded-lg overflow-hidden">
                    <Image 
                      src="/landing-pages-mockup.svg" 
                      alt="Landing Page Preview" 
                      fill 
                      className="object-contain" 
                      unoptimized 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                 </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </header>

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

      {/* Case Studies */}
      <section className="py-20 bg-white" id="case-studies">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Real impact for real businesses across Malaysia.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  {
                    company: "TechStart Malaysia",
                    industry: "SaaS",
                    challenge: "Low conversion rates on existing landing pages",
                    solution: "Conversion-focused redesign with A/B testing",
                    results: "187% increase in lead generation",
                    timeframe: "3 months"
                  },
                  {
                    company: "Kuala Lumpur Retail Group",
                    industry: "E-commerce",
                    challenge: "Poor mobile conversion optimization",
                    solution: "Mobile-first responsive design implementation",
                    results: "45% increase in mobile conversions",
                    timeframe: "2 months"
                  },
                  {
                    company: "Penang Manufacturing Co.",
                    industry: "B2B",
                    challenge: "Low quality lead capture",
                    solution: "Multi-step form optimization and trust signals",
                    results: "63% improvement in qualified leads",
                    timeframe: "4 months"
                  }
               ].map((study, i) => (
                  <ScrollReveal key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow" delay={i * 100}>
                     <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                           <h3 className="text-lg font-bold text-gray-900">{study.company}</h3>
                           <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded">{study.industry}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 italic">Challenge: {study.challenge}</p>
                     </div>
                     <div className="mb-4">
                        <p className="text-gray-800 font-medium mb-2">Solution: {study.solution}</p>
                        <div className="bg-blue-100 text-blue-800 text-2xl font-bold px-4 py-2 rounded-lg text-center">
                           {study.results}
                        </div>
                        <p className="text-gray-500 text-sm text-center mt-2">Achieved in {study.timeframe}</p>
                     </div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Landing Page Investment</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Get instant pricing based on your specific requirements.</p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Page Type</label>
                     <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                        <option value="lead-magnet">Lead Magnet</option>
                        <option value="sales-page">Sales Page</option>
                        <option value="click-funnel">Click Funnel</option>
                        <option value="product-launch">Product Launch</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Features Needed</label>
                     <div className="space-y-2">
                        {["Conversion Optimization", "A/B Testing", "Mobile Responsive", "SEO Content", "Analytics Integration"].map((feature) => (
                           <label key={feature} className="flex items-center gap-2">
                              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                              <span className="text-sm text-gray-700">{feature}</span>
                           </label>
                        ))}
                     </div>
                  </div>
               </div>
               
               <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                     <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900">
                        <option value="rush">Rush (1 week)</option>
                        <option value="standard">Standard (2 weeks)</option>
                        <option value="extended">Extended (4 weeks)</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Complexity</label>
                     <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900">
                        <option value="simple">Simple</option>
                        <option value="moderate">Moderate</option>
                        <option value="complex">Complex</option>
                     </select>
                  </div>
               </div>
               
               <div className="bg-blue-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                     <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">RM 1,299</div>
                        <div className="text-sm text-gray-600">Basic Package</div>
                     </div>
                     <div className="text-center border-2 border-blue-200 rounded-lg p-4 bg-blue-100">
                        <div className="text-2xl font-bold text-blue-800">RM 2,499</div>
                        <div className="text-sm text-blue-700">Professional</div>
                     </div>
                     <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">RM 3,999</div>
                        <div className="text-sm text-gray-600">Enterprise</div>
                     </div>
                  </div>
                  <div className="text-center">
                     <p className="text-sm text-gray-600 mb-4">Final pricing based on your selections. Contact us for custom quote.</p>
                     <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                        Get Detailed Quote
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </main>

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
                     <div className="space-y-3">
                        {[
                           "Complete landing page audit",
                           "Conversion rate analysis", 
                           "A/B testing strategy",
                           "Optimization roadmap",
                           "Performance benchmarks",
                           "Mobile optimization review",
                           "User experience audit",
                           "Speed optimization plan",
                           "SEO structure analysis",
                           "CTA optimization tactics"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <Users className="w-5 h-5 text-green-400 shrink-0" />
                              <span className="text-lg">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
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
