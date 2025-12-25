"use client";
import { Code, Share2, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    id: "web-app",
    title: "Web App & Software Development",
    icon: Code,
    description: "Custom web apps, portals, and software built with modern stacks (Next.js, Supabase) and AI automation.",
    features: ["Custom Web Applications", "Internal Tools & Portals", "AI-Enhanced Features", "Secure Authentication"],
    href: "/services/web-app-software-development",
    color: "from-blue-500 to-cyan-400",
    image: "/images/service-webapp.jpg",
  },
  {
    id: "social-media",
    title: "Social Media Generation",
    icon: Share2,
    description: "AI-assisted social posts, carousels, and short-form content – created and scheduled for your brand.",
    features: ["AI Content Generation", "Multi-Platform Posting", "Brand Consistency", "Performance Analytics"],
    href: "/services/social-media-generation",
    color: "from-purple-500 to-pink-500",
    image: "/images/service-social.jpg",
  },
  {
    id: "video-production",
    title: "Gen AI Video Production",
    icon: Video,
    description: "Turn photos, product catalogs, and scripts into cinematic AI videos at scale.",
    features: ["Product Video Creation", "AI-Powered Editing", "Multi-Format Output", "Brand Integration"],
    href: "/services/gen-ai-video-production",
    color: "from-cyan-400 to-teal-400",
    image: "/images/service-video.jpg",
  },
];

export function CoreServices() {
  return (
    <section className="py-20 bg-joeve-blue-deep relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-16 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.id} 
              href={service.href}
              className="group relative bg-joeve-blue-dark/50 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              onMouseMove={(e) => {
                const el = e.currentTarget as HTMLElement;
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `perspective(800px) rotateY(${x / 40}deg) rotateX(${(-y) / 40}deg)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
              }}
            >
              {/* Background Image Effect */}
              <div className="absolute inset-0 z-5 opacity-40 group-hover:opacity-20 transition-all duration-500">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    onError={(e) => {
                      console.log(`Failed to load image: ${service.image}`);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-joeve-blue-dark/60 via-joeve-blue-dark/20 to-transparent" />
               </div>

              {/* Service Image - Prominent Display */}
              <div className="relative z-5 w-full h-40 mb-6 rounded-xl overflow-hidden border border-cyan-500/30 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  onError={(e) => {
                    console.log(`Failed to load image: ${service.image}`);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-joeve-blue-dark/40 via-transparent to-transparent" />
              </div>

              <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] border border-white/20 backdrop-blur-sm -mt-8`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="relative z-10 space-y-2 text-left w-full pl-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className="mr-2 text-cyan-400">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
