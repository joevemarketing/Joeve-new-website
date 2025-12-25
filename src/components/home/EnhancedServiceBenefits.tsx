"use client";
import { Code, Share2, Video, TrendingUp, DollarSign, Clock, Target, Zap, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "web-app",
    title: "AI-Powered Web Applications",
    icon: Code,
    tagline: "Increase Efficiency by 40% • Reduce Costs by 30%",
    description: "Custom web applications with AI automation that streamline your business operations and boost productivity.",
    benefits: [
      {
        icon: TrendingUp,
        title: "40% Efficiency Increase",
        description: "Automate repetitive tasks and streamline workflows with AI-powered features"
      },
      {
        icon: DollarSign,
        title: "30% Cost Reduction",
        description: "Reduce operational costs through intelligent automation and optimized processes"
      },
      {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description: "Built with modern security standards and data protection compliance"
      }
    ],
    features: [
      "Custom Web Applications",
      "Internal Tools & Portals", 
      "AI-Enhanced Features",
      "Secure Authentication",
      "Real-time Analytics",
      "Mobile-Responsive Design"
    ],
    stats: {
      projects: "85+",
      satisfaction: "98%",
      avgTimeline: "4-6 weeks"
    },
    href: "/services/web-app-software-development",
    color: "from-blue-500 to-cyan-400",
    image: "/images/service-webapp.jpg",
    ctaText: "Get Free Web App Consultation"
  },
  {
    id: "social-media",
    title: "AI Social Media Generation",
    icon: Share2,
    tagline: "10x Engagement • 24/7 Automation • Brand Consistency",
    description: "AI-assisted social media content creation and scheduling that keeps your brand active and engaging across all platforms.",
    benefits: [
      {
        icon: Target,
        title: "10x Engagement Boost",
        description: "AI-optimized content that resonates with your audience and drives interaction"
      },
      {
        icon: Clock,
        title: "24/7 Automated Posting",
        description: "Never miss peak engagement times with intelligent scheduling"
      },
      {
        icon: Zap,
        title: "Brand Voice Consistency",
        description: "Maintain perfect brand consistency across all platforms and content"
      }
    ],
    features: [
      "AI Content Generation",
      "Multi-Platform Posting",
      "Brand Consistency",
      "Performance Analytics",
      "Hashtag Optimization",
      "Content Calendar"
    ],
    stats: {
      postsGenerated: "50K+",
      engagementBoost: "10x",
      platformsSupported: "8+"
    },
    href: "/services/social-media-generation",
    color: "from-purple-500 to-pink-500",
    image: "/images/service-social.jpg",
    ctaText: "Start Free Social Media Trial"
  },
  {
    id: "video-production",
    title: "Gen AI Video Production",
    icon: Video,
    tagline: "5x Faster Production • 80% Cost Reduction • Cinematic Quality",
    description: "Transform photos, product catalogs, and scripts into cinematic AI videos at scale with professional quality.",
    benefits: [
      {
        icon: Clock,
        title: "5x Faster Production",
        description: "Create professional videos in days instead of weeks with AI-powered editing"
      },
      {
        icon: DollarSign,
        title: "80% Cost Reduction",
        description: "Significantly lower production costs compared to traditional video creation"
      },
      {
        icon: Target,
        title: "Multi-Format Output",
        description: "Optimized for all platforms: Instagram, TikTok, YouTube, LinkedIn"
      }
    ],
    features: [
      "Product Video Creation",
      "AI-Powered Editing",
      "Multi-Format Output",
      "Brand Integration",
      "Voice-over Generation",
      "Motion Graphics"
    ],
    stats: {
      videosCreated: "1,200+",
      costReduction: "80%",
      productionSpeed: "5x faster"
    },
    href: "/services/gen-ai-video-production",
    color: "from-cyan-400 to-teal-400",
    image: "/images/service-video.jpg",
    ctaText: "Get Free Video Sample"
  },
];

export function EnhancedServiceBenefits() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-joeve-blue-deep to-joeve-blue-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(155,89,182,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            Discover how our AI-powered solutions deliver measurable results for Malaysian SMEs
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center md:px-0 px-4`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-medium sm:ml-0 ml-1 mr-1`}>
                    <service.icon className="w-4 h-4" />
                    {service.tagline}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:px-0 px-1">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                      <benefit.icon className="w-8 h-8 text-cyan-400 mb-3" />
                      <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 sm:px-0 px-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-6">
                  {Object.entries(service.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Button 
                    className={`bg-gradient-to-r ${service.color} text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                    asChild
                  >
                    <Link href={service.href}>
                      {service.ctaText}
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-joeve-blue-deep font-bold px-8 py-3 rounded-full" asChild>
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1">
                <div className={`relative rounded-2xl overflow-hidden border-2 border-white/20 transition-all duration-500 ${hoveredService === service.id ? 'scale-105 shadow-2xl' : ''}`}>
                  <div className="aspect-video relative">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex items-center gap-3">
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

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join 150+ Malaysian SMEs who have already transformed their operations with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/request-quotation">Get Free AI Strategy Session</Link>
              </Button>
              <Button variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold px-8 py-3 rounded-full" asChild>
                <Link href="/ai-diagnostic">Take AI Readiness Quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
