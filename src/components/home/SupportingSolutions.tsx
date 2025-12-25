import { MessageSquare, Layout, Search, CreditCard } from "lucide-react";
import Link from "next/link";

const solutions = [
  { name: "Chatbots", icon: MessageSquare, href: "/services/smart-chatbot" },
  { name: "Landing Pages", icon: Layout, href: "/services/landing-pages" },
  { name: "SEM", icon: Search, href: "/services/sem" },
  { name: "Jo Bizcard", icon: CreditCard, href: "/services/jo-bizcard" },
];

export function SupportingSolutions() {
  return (
    <section className="py-20 bg-joeve-blue-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-white mb-4 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          More Smart Solutions
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Additional services to complement your digital strategy.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 relative">
           {/* Connector Line - simplified for now */}
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-500/20 -translate-y-1/2 hidden md:block" />

          {solutions.map((solution, index) => (
            <Link 
              key={index}
              href={solution.href}
              className="group relative z-10 flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-joeve-blue-deep border-2 border-cyan-500 flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300 shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                <solution.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
              </div>
              <span className="text-white font-medium uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                {solution.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
