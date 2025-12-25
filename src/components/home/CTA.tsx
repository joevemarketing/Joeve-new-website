"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export function CTA() {
  const btnRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <section className="py-20 relative overflow-hidden">
       {/* CTA Background */}
       <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-cta-bg.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-30"
            unoptimized
          />
       </div>
       <div className="absolute inset-0 bg-gradient-to-r from-joeve-magenta/20 to-purple-600/20 z-10" />
       
       <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-joeve-magenta/50 rounded-2xl p-12 shadow-[0_0_50px_rgba(255,0,255,0.2)]"
               onMouseMove={(e) => {
                 const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                 const x = e.clientX - rect.left - rect.width / 2;
                 const y = e.clientY - rect.top - rect.height / 2;
                 if (btnRef.current) {
                   btnRef.current.style.transform = `translate(${x / 20}px, ${y / 20}px)`;
                 }
               }}
               onMouseLeave={() => {
                 if (btnRef.current) btnRef.current.style.transform = "translate(0,0)";
               }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-widest">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-light">
              Let&apos;s discuss how our AI-powered solutions can accelerate your business growth.
            </p>
            <Button className="h-14 px-10 text-lg bg-joeve-magenta hover:bg-purple-600 text-white font-bold tracking-wide shadow-[0_0_30px_rgba(255,0,255,0.6)] border border-purple-400 rounded-full transition-transform" asChild>
              <Link ref={btnRef} href="/contact">CONTACT US</Link>
            </Button>
          </div>
       </div>
    </section>
  );
}
