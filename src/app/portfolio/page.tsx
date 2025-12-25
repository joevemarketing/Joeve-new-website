import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPage() {
  const projects = portfolioItems;

  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="bg-joeve-blue-deep py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
             src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Portfolio%20showcase%20digital%20gallery%20futuristic%20interface%20blue%20neon&image_size=landscape_16_9"
             alt="Portfolio Hero"
             fill
             className="object-cover opacity-20"
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-joeve-blue-deep/50 to-joeve-blue-deep" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing our best work in Web Development, AI Video, and Digital Marketing.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Filter (Placeholder) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
           {['All', 'Web Apps', 'AI Video', 'Social Media', 'Mobile'].map((filter) => (
              <Button key={filter} variant="outline" className="border-cyan-500/30 text-gray-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400">
                 {filter}
              </Button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {projects.map((item) => (
              <div key={item.id} className="group bg-joeve-blue-dark rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all">
                 <div className="h-48 bg-gray-800 relative overflow-hidden">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </div>
                 <div className="p-6">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">{item.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center gap-4">
                      <Link href={`/portfolio/${item.id}`} className="text-white text-sm font-medium hover:underline decoration-cyan-400 underline-offset-4 inline-flex items-center">
                        View Case Study
                      </Link>
                      {item.externalUrl && (
                        <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center text-sm">
                          <ExternalLink className="w-4 h-4 mr-1" /> Visit
                        </a>
                      )}
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </main>
  );
}
