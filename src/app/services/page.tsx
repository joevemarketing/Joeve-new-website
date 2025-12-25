"use client";
import { Button } from "@/components/ui/button";
import { Code, Share2, Video, Bot, Globe, Search, CreditCard, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const coreServices = [
  {
    id: "web-app",
    title: "AI-Powered Web Applications",
    icon: Code,
    description: "Custom web applications with AI automation that streamline your business operations and boost productivity.",
    tagline: "Increase Efficiency by 40% • Reduce Costs by 30%",
    image: "/images/service-webapp.jpg",
    features: [
      "Custom Web Applications",
      "Internal Tools & Portals", 
      "AI-Enhanced Features",
      "Secure Authentication",
      "Real-time Analytics",
      "Mobile-Responsive Design"
    ],
    benefits: [
      "40% efficiency increase through automation",
      "30% cost reduction in operations",
      "Enterprise-grade security compliance",
      "Scalable architecture for growth"
    ],
    stats: {
      projects: "85+",
      satisfaction: "98%",
      avgTimeline: "4-6 weeks",
      roi: "5x average"
    },
    pricing: {
      startingFrom: "RM15,000",
      paymentTerms: "50% upfront, 50% on delivery",
      guarantee: "30-day satisfaction guarantee"
    },
    href: "/services/web-app-software-development",
    color: "from-blue-500 to-cyan-500",
    ctaText: "Get Free Web App Consultation"
  },
  {
    id: "social-media",
    title: "AI Social Media Generation",
    icon: Share2,
    description: "AI-assisted social media content creation and scheduling that keeps your brand active and engaging across all platforms.",
    tagline: "10x Engagement • 24/7 Automation • Brand Consistency",
    image: "/images/service-social.jpg",
    features: [
      "AI Content Generation",
      "Multi-Platform Posting",
      "Brand Consistency",
      "Performance Analytics",
      "Hashtag Optimization",
      "Content Calendar"
    ],
    benefits: [
      "10x engagement boost with AI-optimized content",
      "24/7 automated posting schedule",
      "Perfect brand voice consistency",
      "Significant time savings on content creation"
    ],
    stats: {
      postsGenerated: "50K+",
      engagementBoost: "10x",
      platformsSupported: "8+",
      avgGrowth: "+500 followers/month"
    },
    pricing: {
      startingFrom: "RM2,500/month",
      paymentTerms: "Monthly subscription",
      guarantee: "Cancel anytime"
    },
    href: "/services/social-media-generation",
    color: "from-purple-500 to-pink-500",
    ctaText: "Start Free Social Media Trial"
  },
  {
    id: "video-production",
    title: "Gen AI Video Production",
    icon: Video,
    description: "Transform photos, product catalogs, and scripts into cinematic AI videos at scale with professional quality.",
    tagline: "5x Faster Production • 80% Cost Reduction • Cinematic Quality",
    image: "/images/service-video.jpg",
    features: [
      "Product Video Creation",
      "AI-Powered Editing",
      "Multi-Format Output",
      "Brand Integration",
      "Voice-over Generation",
      "Motion Graphics"
    ],
    benefits: [
      "5x faster video production timeline",
      "80% cost reduction vs traditional methods",
      "Multi-platform optimization",
      "Professional cinematic quality"
    ],
    stats: {
      videosCreated: "1,200+",
      costReduction: "80%",
      productionSpeed: "5x faster",
      satisfaction: "99%"
    },
    pricing: {
      startingFrom: "RM1,500/video",
      paymentTerms: "50% upfront, 50% on delivery",
      guarantee: "Unlimited revisions until satisfied"
    },
    href: "/services/gen-ai-video-production",
    color: "from-cyan-500 to-teal-500",
    ctaText: "Get Free Video Sample"
  },
];

const supportingSolutions = [
  {
    id: "chatbots",
    title: "AI Chatbots & Automation",
    icon: Bot,
    description: "Intelligent chatbots that provide 24/7 customer support and automate routine tasks.",
    href: "/services/smart-chatbot",
    color: "from-green-500 to-emerald-500",
    features: ["24/7 Customer Support", "Multi-language Support", "CRM Integration", "Analytics Dashboard"]
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    icon: Globe,
    description: "Conversion-optimized landing pages that turn visitors into qualified leads.",
    href: "/services/landing-pages",
    color: "from-orange-500 to-red-500",
    features: ["A/B Testing", "Lead Generation", "Mobile Optimization", "SEO Ready"]
  },
  {
    id: "sem",
    title: "Search Engine Marketing",
    icon: Search,
    description: "AI-powered SEM campaigns that maximize ROI and drive qualified traffic.",
    href: "/services/sem",
    color: "from-yellow-500 to-orange-500",
    features: ["Google Ads Management", "Keyword Optimization", "Performance Tracking", "Budget Optimization"]
  },
  {
    id: "jo-bizcard",
    title: "Jo Bizcard Digital Solutions",
    icon: CreditCard,
    description: "Digital business card solutions with contactless sharing and analytics.",
    href: "/services/jo-bizcard",
    color: "from-indigo-500 to-purple-500",
    features: ["Contactless Sharing", "Analytics Dashboard", "CRM Integration", "Custom Branding"]
  },
];

const serviceCategories = [
  { id: "all", name: "All Services", count: 7 },
  { id: "core", name: "Core Services", count: 3 },
  { id: "supporting", name: "Supporting Solutions", count: 4 },
  { id: "ai-powered", name: "AI-Powered", count: 5 },
];

export default function ServicesHub() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-joeve-blue-deep via-joeve-blue-dark to-joeve-blue-deep">
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/landing-webapp-hero.jpg" alt="Services Hero" fill className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-joeve-blue-deep/20 via-joeve-blue-deep/60 to-joeve-blue-deep/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.12),transparent_45%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-28">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 uppercase tracking-wider drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]">
              AI Solutions That Transform
            </h1>
            <p className="text-lg md:text-2xl text-cyan-400 mb-6 md:mb-8">
              Comprehensive AI-powered services designed for Malaysian SMEs
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8">
              From web applications to social media automation, we provide end-to-end AI solutions that drive real business results. 
              Join 150+ Malaysian businesses already transforming with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 md:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="#core-services">Explore Our Services</Link>
              </Button>
              <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-joeve-blue-deep font-bold px-6 md:px-8 py-3 rounded-full" asChild>
                <Link href="/ai-diagnostic">Find Your Solution</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="core-services" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-wider">
              Core AI Services
            </h2>
            <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
              Our flagship AI-powered solutions delivering measurable business impact
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {coreServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-5 md:space-y-6 overflow-visible px-4 sm:px-6 md:px-0 pl-[env(safe-area-inset-left)] pr-3 min-w-0">
                  <div className="space-y-4">
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-xs md:text-sm font-medium flex-wrap`}>
                      <service.icon className="w-4 h-4" />
                      {service.tagline}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white break-words hyphens-auto text-pretty leading-tight md:leading-snug pl-1">
                      {service.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed break-words text-pretty pl-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold pl-1 sm:pl-0">Key Benefits:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold pl-1 sm:pl-0">Features Include:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                          <span className="text-sm break-words text-pretty">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-3 pl-1 sm:pl-0">Proven Results:</h4>
                    <div className="space-y-3">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-4">
                          <div className="text-xs text-gray-400 uppercase tracking-wide pr-2">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-xl font-bold text-white w-full sm:w-auto break-words text-left sm:text-right">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing removed per request */}

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 min-w-0">
                    <Button 
                      className={`w-full sm:w-auto bg-gradient-to-r ${service.color} text-white font-bold px-6 md:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                      asChild
                    >
                      <Link href={service.href} className="truncate">
                        {service.ctaText}
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-joeve-blue-deep font-bold px-6 md:px-8 py-3 rounded-full" asChild>
                      <Link href={service.href} className="truncate">Learn More</Link>
                    </Button>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full">
                  <div className={`relative rounded-2xl overflow-hidden border-2 border-white/20 transition-all duration-500 ${
                    hoveredService === service.id ? 'scale-105 shadow-2xl' : ''
                  }`}>
                    <div className="aspect-video relative">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        REC
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex items-center gap-3`}>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                          <service.icon className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-white text-sm font-medium">Trusted by 150+ Malaysian SMEs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Solutions Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-wider">
              Supporting Solutions
            </h2>
            <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
              Additional AI-powered tools to enhance your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportingSolutions.map((solution) => (
              <div 
                key={solution.id} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white font-bold text-lg mb-3 text-center">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 text-center">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-4">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300 text-xs">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${solution.color} text-white font-bold py-2 rounded-lg group-hover:shadow-lg transition-all`}
                  asChild
                >
                  <Link href={solution.href} className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not Sure Which Solution Fits Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Take our AI Readiness Assessment and get personalized recommendations based on your business size, industry, and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 md:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="/ai-diagnostic">Take AI Assessment</Link>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold px-6 md:px-8 py-3 rounded-full" asChild>
                <Link href="/request-quotation">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
