import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PortfolioItem } from "@/data/portfolio";

export function ProjectDetail({ project }: { project: PortfolioItem }) {
  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="bg-joeve-blue-deep py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
             src={project.image}
             alt={project.title}
             fill
             className="object-cover opacity-20 blur-sm"
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-joeve-blue-deep/50 to-joeve-blue-deep" />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <Link href="/portfolio" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-4 mb-4">
             <span className="text-cyan-400 font-bold uppercase tracking-wider text-sm border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-900/20">
                {project.category}
             </span>
             {project.date && (
               <span className="text-gray-400 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {project.date}
               </span>
             )}
             {project.externalUrl && (
               <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center">
                 <ExternalLink className="w-4 h-4 mr-1" /> Visit
               </a>
             )}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
               <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video">
                  <Image 
                     src={project.image}
                     alt={project.title}
                     fill
                     className="object-cover"
                     sizes="(max-width: 1024px) 100vw, 66vw"
                  />
               </div>

               <div className="space-y-8">
                  {project.coreValue && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">Core Value</h2>
                      <p className="text-gray-300 leading-relaxed">{project.coreValue}</p>
                    </div>
                  )}
                  {project.concept && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">Concept</h2>
                      <p className="text-gray-300 leading-relaxed">{project.concept}</p>
                    </div>
                  )}
                  {project.functions && project.functions.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">Key Functions</h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        {project.functions.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.challenge && (
                    <div>
                       <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                       <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div>
                       <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                       <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                    </div>
                  )}
                  {project.result && (
                    <div>
                       <h2 className="text-2xl font-bold text-white mb-4">The Result</h2>
                       <p className="text-gray-300 leading-relaxed">{project.result}</p>
                    </div>
                  )}
                  {project.media && project.media.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">Media</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.media.map((m, idx) => (
                          <div key={idx} className="rounded-xl overflow-hidden border border-white/10 bg-black aspect-video">
                            {m.type === 'youtube' && m.youtubeId ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${m.youtubeId}`}
                                title={m.title || 'YouTube video player'}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                              />
                            ) : (
                              <a href={m.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full text-cyan-400">
                                <ExternalLink className="w-5 h-5 mr-2" />
                                {m.title || 'External Link'}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
            </div>

            <div className="space-y-8">
               <div className="bg-joeve-blue-dark p-6 rounded-xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-4">Project Info</h3>
                  <div className="space-y-4">
                     {project.client && (
                       <div>
                          <span className="text-gray-500 text-sm block mb-1">Client</span>
                          <span className="text-white font-medium">{project.client}</span>
                       </div>
                     )}
                     {project.date && (
                       <div>
                          <span className="text-gray-500 text-sm block mb-1">Date</span>
                          <span className="text-white font-medium">{project.date}</span>
                       </div>
                     )}
                     <div>
                        <span className="text-gray-500 text-sm block mb-1">Category</span>
                        <span className="text-white font-medium">{project.category}</span>
                     </div>
                     {project.builtWith && (
                       <div>
                          <span className="text-gray-500 text-sm block mb-1">Built With</span>
                          <span className="text-white font-medium">{project.builtWith}</span>
                       </div>
                     )}
                  </div>
               </div>

               <div className="bg-joeve-blue-dark p-6 rounded-xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                     {(project.tags || []).map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs text-cyan-300 bg-cyan-900/30 border border-cyan-500/20 px-3 py-1 rounded-full">
                          <Tag className="w-3 h-3" /> {tag}
                        </span>
                     ))}
                  </div>
               </div>

               <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
                  <Link href="/contact">Start a Project Like This</Link>
               </Button>
            </div>
         </div>
      </div>
    </main>
  );
}

