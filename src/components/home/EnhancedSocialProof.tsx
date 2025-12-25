"use client";
import { Quote, Star, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const clientLogos = [
  { name: "Kamay", industry: "Furniture Shop", result: "Retail showcase", logoUrl: "/images/Kamay.webp" },
  { name: "BSL", industry: "Furniture Factory", result: "Manufacturing efficiency", logoUrl: "/images/BSL.webp" },
  { name: "Penang STEM", industry: "Education (Gov-linked)", result: "STEM initiatives", logoUrl: "/images/pgstem.webp" },
  { name: "Philea", industry: "Hotel (Selangor)", result: "Hospitality marketing", logoUrl: "/images/philea.webp" },
  { name: "Promedia", industry: "Event Organiser", result: "Event promotion", logoUrl: "/images/Promedia.webp" },
  { name: "Harley-Davidson Penang", industry: "Automotive", result: "Showroom traffic", logoUrl: "/images/H-D.webp" },
  { name: "Ducati Penang", industry: "Automotive", result: "Lead generation", logoUrl: "/images/Ducati.webp" },
  { name: "WTH", industry: "Pharmaceutical Manufacturer", result: "Compliance and branding", logoUrl: "/images/WTH.webp" },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechStart Malaysia",
    industry: "Technology",
    rating: 5,
    quote: "JOeve transformed our digital presence completely. Their AI video production helped us increase engagement by 300%. The ROI was visible within the first month!",
    metrics: {
      engagement: "+300%",
      timeline: "4 weeks",
      roi: "5x return"
    },
    avatar: "/images/testimonials/sarah-chen.jpg",
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: "Ahmad Rahman",
    role: "Operations Manager",
    company: "Local Retail Chain",
    industry: "Retail",
    rating: 5,
    quote: "The web app they built streamlined our entire inventory management system. We saw a 40% reduction in operational costs and ROI was visible within 2 months. Absolutely game-changing!",
    metrics: {
      efficiency: "+40%",
      costReduction: "-30%",
      timeline: "6 weeks"
    },
    avatar: "/images/testimonials/ahmad-rahman.jpg",
    verified: true,
    featured: true
  },
  {
    id: 3,
    name: "Lisa Wong",
    role: "Marketing Director",
    company: "Beauty Brand KL",
    industry: "Beauty & Cosmetics",
    rating: 5,
    quote: "Their social media generation service keeps our content fresh and engaging. We've never run out of ideas, and our engagement has grown 10x. The AI understands our brand voice perfectly!",
    metrics: {
      engagement: "+1000%",
      followers: "+5,000",
      content: "50+ posts/month"
    },
    avatar: "/images/testimonials/lisa-wong.jpg",
    verified: true,
    featured: true
  },
  {
    id: 4,
    name: "Michael Tan",
    role: "General Manager",
    company: "Manufacturing Solutions",
    industry: "Manufacturing",
    rating: 5,
    quote: "The custom web application with AI features has revolutionized our production tracking. We've achieved 50% faster processing times and significantly reduced errors.",
    metrics: {
      speed: "+50%",
      errors: "-75%",
      productivity: "+35%"
    },
    avatar: "/images/testimonials/michael-tan.jpg",
    verified: true,
    featured: false
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Brand Manager",
    company: "F&B Group",
    industry: "Food & Beverage",
    rating: 5,
    quote: "The AI-generated videos have been incredible for our marketing campaigns. We achieved 200% ROI within 3 months and the production speed is 5x faster than traditional methods.",
    metrics: {
      roi: "+200%",
      speed: "5x faster",
      views: "100K+"
    },
    avatar: "/images/testimonials/priya-sharma.jpg",
    verified: true,
    featured: false
  }
];

// Awards & Recognition section removed per request

export function EnhancedSocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-b from-joeve-blue-dark to-joeve-blue-deep relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,212,255,0.1),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(155,89,182,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Trusted by 150+ Malaysian SMEs
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            See why businesses across Malaysia choose JOeve for their AI transformation journey
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Our Clients</h3>
            <p className="text-gray-400">Industry leaders who trust our AI solutions</p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
              <div className="px-6 py-4">
                <div className="marquee">
                  <div className="track">
                    {[...clientLogos, ...clientLogos].map((client, index) => (
                      <div key={index} className="flex items-center justify-center w-28 h-16 relative">
                        <Image src={client.logoUrl} alt={`${client.name} logo`} fill className="object-contain" sizes="112px" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .marquee { overflow: hidden; }
            .track { display: flex; align-items: center; gap: 2rem; min-width: max-content; animation: scroll 28s linear infinite; }
            @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          `}</style>
        </div>

        {/* Featured Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Client Success Stories</h3>
            <p className="text-gray-400">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-0">
            {testimonials.filter(t => t.featured).map((testimonial) => (
              <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
                
                <Quote className="w-8 h-8 text-cyan-500/30 mb-4" />
                
                <p className="text-white text-lg leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                    {Object.entries(testimonial.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-green-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Testimonial Carousel */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    {current.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{current.name}</h4>
                    <p className="text-cyan-400">{current.role}, {current.company}</p>
                    <p className="text-gray-400 text-sm">{current.industry}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex text-yellow-400">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  {current.verified && (
                    <span className="bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Verified Client
                    </span>
                  )}
                </div>
              </div>
              
              <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                <Quote className="w-10 h-10 text-cyan-500/30 mb-4" />
                <p className="text-white text-xl leading-relaxed mb-6 italic">
                  &ldquo;{current.quote}&rdquo;
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(current.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-green-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  >
                    ←
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  >
                    →
                  </button>
                </div>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setCurrentTestimonial(index);
                          setIsAnimating(false);
                        }, 300);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-cyan-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition section removed */}

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400 text-sm">SMEs Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-400 text-sm">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
