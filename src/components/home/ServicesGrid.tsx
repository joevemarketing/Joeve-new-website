"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/homepage";
import { ArrowRight, CheckCircle, MessageCircle, Share2, Video, Code, Search, CreditCard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Solutions That Drive Results
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered services designed to transform your business operations and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const iconMap = {
              MessageCircle, Share2, Video, Code, Search, CreditCard
            };
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            if (!IconComponent) return null; // Fallback for missing icons
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/5 overflow-hidden group">
                  {/* Service Image Header */}
                  <div className={`h-48 bg-white/10 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    {service.image && (
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                        {IconComponent && <IconComponent className="w-8 h-8 text-white/80" />}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-white/70 mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-white/60 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href={service.href}>
                      <Button 
                        className="w-full bg-white/10 border border-white/20 text-white hover:bg-white/15 group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/70 mb-6">
            Ready to transform your business with AI?
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white/10 border border-white/20 text-white px-8 py-6 rounded-full text-lg font-semibold hover:bg-white/15">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
