import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AIStudioBanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-joeve-blue-dark">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 bg-gradient-to-r from-joeve-blue-deep to-transparent border border-cyan-500/20 rounded-2xl px-6 sm:px-8 md:px-12 pt-8 md:pt-12 pb-0 relative">
          
          {/* Content */}
          <div className="flex-1 text-center md:text-left z-20 pb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]">
              AI Video Studio & <br/>
              <span className="text-cyan-400">Gen AI Visual Lab</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Web/App Experiences / Smart Chatbots with AI Diagnostic
            </p>
            
            <Button asChild className="bg-transparent hover:bg-cyan-500/10 text-cyan-400 border border-cyan-400 hover:text-white rounded-full px-8 h-12 text-lg group">
              <Link href="https://ai.joevesmartsolutions.com" target="_blank">
                ai.joevesmartsolutions.com
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Robot Image */}
          <div className="flex-1 relative w-full max-w-md h-[350px] md:h-[450px] z-20 flex items-end justify-center -mt-20 md:-mt-24">
            {/* AI Orb Effect behind robot */}
            <div className="absolute w-[200px] h-[200px] bg-cyan-500 rounded-full blur-[80px] opacity-50 animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative w-full h-full">
               <Image 
                 src="/images/ai-robot.png" 
                 alt="AI Robot Assistant" 
                 fill 
                 className="object-contain object-bottom drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
