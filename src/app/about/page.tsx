import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Eye, Lightbulb, TrendingUp, Award, Users, Cpu, MapPin, Layers, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="bg-joeve-blue-deep py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
             src="/images/about-hero.jpg"
             alt="About Hero"
             fill
             className="object-cover opacity-80"
             unoptimized
             style={{ filter: "brightness(1.05) contrast(1.05)" }}
           />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-joeve-blue-deep/30 to-joeve-blue-deep/60" />
        </div>
        <ScrollReveal className="container mx-auto px-4 text-center relative z-10" as="div">
          <div className="mx-auto max-w-4xl bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm mb-6 uppercase tracking-wider">
            About JOeve Smart Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Empowering Malaysian Businesses with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI-Powered Digital Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            We&apos;re a digital transformation agency that combines cutting-edge AI technology with proven business strategies to help Malaysian businesses thrive in the digital age.
          </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Our Story */}
      <section className="py-20">
         <div className="container mx-auto px-4">
            <ScrollReveal className="flex flex-col md:flex-row gap-16 items-center" as="div">
               <div className="flex-1 relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-2xl blur opacity-20" />
                  <div className="order-1 md:order-2 h-[300px] rounded-xl overflow-hidden border border-cyan-500/20 relative shadow-2xl">
                    <Image 
                      src="/images/about-mission.jpg"
                      alt="Our Mission"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
               </div>
               <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold text-white">Our Story</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                     <p>
                        Founded with a vision to democratize AI technology for Malaysian businesses, JOeve Smart Solutions emerged from the recognition that many companies struggle to leverage digital tools effectively.
                     </p>
                     <p>
                        We saw businesses spending countless hours on manual processes, struggling with inconsistent marketing, and missing opportunities to connect with their customers online. That&apos;s when we decided to create solutions that would change the game.
                     </p>
                     <p className="font-medium text-white">
                        Today, we&apos;re proud to be at the forefront of AI-powered business solutions, helping companies of all sizes transform their operations and accelerate their growth.
                     </p>
                  </div>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-joeve-blue-dark border-y border-white/5">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-joeve-blue-deep p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Target className="w-32 h-32 text-cyan-500" />
                  </div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 text-cyan-400">
                        <Target className="w-6 h-6" />
                     </div>
                     <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                     <p className="text-gray-300 text-lg">
                        To empower Malaysian businesses with AI-powered digital solutions that drive real growth and success.
                     </p>
                  </div>
               </div>

               <div className="bg-joeve-blue-deep p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-all">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Eye className="w-32 h-32 text-purple-500" />
                  </div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                        <Eye className="w-6 h-6" />
                     </div>
                     <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                     <p className="text-gray-300 text-lg">
                        To be Malaysia&apos;s leading AI-powered digital transformation partner, helping businesses thrive in the digital economy.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
               <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { title: "Innovation First", desc: "We leverage cutting-edge AI technology to solve real business problems and create competitive advantages.", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-400/10" },
                  { title: "Client Success", desc: "Your success is our success. We're committed to delivering results that drive real business growth.", icon: Users, color: "text-blue-400", bg: "bg-blue-400/10" },
                  { title: "Results Driven", desc: "Every solution we create is designed with measurable outcomes and ROI in mind.", icon: TrendingUp, color: "text-green-400", bg: "bg-green-400/10" },
                  { title: "Quality Excellence", desc: "We maintain the highest standards in everything we do, from code quality to customer service.", icon: Award, color: "text-purple-400", bg: "bg-purple-400/10" }
               ].map((value, i) => (
                  <ScrollReveal key={i} className="bg-joeve-blue-dark p-6 rounded-xl border border-white/5 hover:-translate-y-1 transition-transform duration-300" delay={i * 80}>
                     <div className={`w-12 h-12 ${value.bg} rounded-lg flex items-center justify-center mb-6 ${value.color}`}>
                        <value.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Why Choose JOeve */}
      <section className="py-24 bg-black/20 relative">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose JOeve Smart Solutions?</h2>
               <p className="text-gray-400">What sets us apart in the digital transformation landscape</p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
               {/* Feature 1 */}
               <ScrollReveal className="bg-joeve-blue-deep rounded-2xl p-8 md:p-10 border border-white/5 flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0 text-cyan-400">
                     <Cpu className="w-8 h-8" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-4">AI-First Approach</h3>
                     <p className="text-gray-300 mb-6">
                        We don&apos;t just use AI as a buzzword. Our proprietary JOeve AI Engine is built specifically for business applications, ensuring practical, results-driven solutions.
                     </p>
                     <ul className="grid sm:grid-cols-2 gap-3">
                        {["Custom AI models for your industry", "Continuous learning and improvement", "Practical business applications"].map((item, i) => (
                           <li key={i} className="flex items-center text-sm text-gray-400">
                              <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </ScrollReveal>

               {/* Feature 2 */}
               <ScrollReveal className="bg-joeve-blue-deep rounded-2xl p-8 md:p-10 border border-white/5 flex flex-col md:flex-row gap-8 items-start" delay={80}>
                  <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0 text-red-400">
                     <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-4">Malaysian Market Expertise</h3>
                     <p className="text-gray-300 mb-6">
                        We understand the unique challenges and opportunities in the Malaysian market, from cultural nuances to regulatory requirements.
                     </p>
                     <ul className="grid sm:grid-cols-2 gap-3">
                        {["Local market insights", "Cultural sensitivity", "Regulatory compliance"].map((item, i) => (
                           <li key={i} className="flex items-center text-sm text-gray-400">
                              <CheckCircle2 className="w-4 h-4 text-red-500 mr-2" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </ScrollReveal>

               {/* Feature 3 */}
               <ScrollReveal className="bg-joeve-blue-deep rounded-2xl p-8 md:p-10 border border-white/5 flex flex-col md:flex-row gap-8 items-start" delay={160}>
                  <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0 text-green-400">
                     <Layers className="w-8 h-8" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-4">End-to-End Solutions</h3>
                     <p className="text-gray-300 mb-6">
                        From strategy to implementation to ongoing support, we provide comprehensive solutions that cover all aspects of your digital transformation.
                     </p>
                     <ul className="grid sm:grid-cols-2 gap-3">
                        {["Strategic planning", "Technical implementation", "Ongoing support & optimization"].map((item, i) => (
                           <li key={i} className="flex items-center text-sm text-gray-400">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </ScrollReveal>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
         <div className="container mx-auto px-4 max-w-3xl">
           <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
           <p className="text-xl text-gray-300 mb-10">
              Let&apos;s discuss how our AI-powered solutions can help you achieve your business goals.
           </p>
           <Button asChild className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-cyan-500/20">
              <Link href="/contact">
                 Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
           </Button>
         </div>
      </section>
    </main>
  );
}
