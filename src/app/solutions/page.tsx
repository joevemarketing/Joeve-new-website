import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bot, Video, Globe, CreditCard, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Smart Chatbot",
      description: "24/7 customer engagement with AI-powered conversational agents that understand context and sentiment.",
      icon: Bot,
      link: "/services/smart-chatbot",
      color: "text-cyan-400",
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20chatbot%20interface%20hologram%20futuristic%20customer%20service%20robot%20blue%20neon%20tech%20background&image_size=landscape_16_9"
    },
    {
      title: "Gen AI Video Production",
      description: "Create professional marketing videos at scale using advanced Generative AI, reducing costs and production time.",
      icon: Video,
      link: "/services/gen-ai-video-production",
      color: "text-purple-400",
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Generative%20AI%20video%20creation%20studio%20digital%20media%20production%20cinematic%20lighting%20futuristic&image_size=landscape_16_9"
    },
    {
      title: "Digital Presence & SEM",
      description: "Dominate search results and social feeds with AI-optimized strategies for SEO, SEM, and content distribution.",
      icon: Globe,
      link: "/services/sem",
      color: "text-green-400",
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Digital%20marketing%20analytics%20dashboard%20global%20network%20connections%20data%20visualization%20blue%20tech&image_size=landscape_16_9"
    },
    {
      title: "Jo Bizcard",
      description: "The last business card you'll ever need. NFC-enabled smart cards that instantly share your digital profile.",
      icon: CreditCard,
      link: "/services/jo-bizcard",
      color: "text-pink-400",
      image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Smart%20NFC%20business%20card%20digital%20contact%20sharing%20futuristic%20device%20neon%20glow&image_size=landscape_16_9"
    }
  ];

  return (
    <main className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="bg-joeve-blue-deep py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
             src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Futuristic%20digital%20solutions%20AI%20technology%20abstract%20visualization%20blue%20and%20cyan%20neon%20lights%20circuit%20board%20patterns%20high%20tech%204k%20render&image_size=landscape_16_9"
             alt="Solutions Hero"
             fill
             className="object-cover opacity-20"
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-joeve-blue-deep/50 to-joeve-blue-deep" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wider">
            Comprehensive <span className="text-cyan-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end digital strategies powered by cutting-edge AI technology to transform your business operations and growth.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image 
                    src={solution.image} 
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${solution.color}`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{solution.title}</h2>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {solution.description}
                </p>
                
                <Button asChild variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-white group">
                  <Link href={solution.link}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-joeve-blue-dark to-indigo-950 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Abstract%20digital%20network%20background%20blue%20purple%20gradient&image_size=landscape_16_9')] opacity-10 bg-cover bg-center" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of engineers and strategists can build bespoke AI tools tailored to your specific industry challenges.
            </p>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 text-lg shadow-[0_0_20px_rgba(0,212,255,0.4)]">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
