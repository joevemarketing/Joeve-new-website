import { Button } from "@/components/ui/button";

export default function AIDiagnosticPage() {
  return (
    <main className="min-h-screen pt-20 bg-background flex flex-col">
       <section className="bg-joeve-blue-deep py-12 border-b border-cyan-900/50">
          <div className="container mx-auto px-4 text-center">
             <h1 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-widest mb-4">
                AI Readiness Diagnostic
             </h1>
             <p className="text-gray-300 max-w-2xl mx-auto">
                Assess your business&apos;s AI maturity and discover opportunities for growth.
             </p>
          </div>
       </section>

       <div className="flex-1 container mx-auto px-4 py-8">
          {/* Placeholder for iframe or embed */}
          <div className="w-full h-[900px] bg-white rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20 relative">
             <div className="w-full h-full overflow-hidden rounded-xl">
                <iframe 
                   src="https://ai.joevesmartsolutions.com" 
                   className="w-full border-0"
                   style={{
                      height: '1800px',
                      marginTop: '-80px',
                      transform: 'scale(1)',
                      transformOrigin: 'top center'
                   }}
                   title="AI Diagnostic Tool"
                   scrolling="no"
                />
             </div>
             
             {/* Fallback overlay if iframe doesn't load or for demo */}
             <div className="absolute inset-0 bg-joeve-blue-dark/90 flex flex-col items-center justify-center p-8 text-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white mb-4">Loading external diagnostic tool...</p>
             </div>
          </div>
       </div>
    </main>
  );
}
