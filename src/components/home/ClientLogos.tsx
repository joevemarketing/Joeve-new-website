"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients } from "@/data/homepage";

export default function ClientLogos() {
  // Duplicate the array for seamless scrolling
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            Trusted by Industry Leaders
          </h3>
          <p className="text-white/70">
            Join hundreds of businesses transforming with AI
          </p>
        </motion.div>

        {/* Scrolling Marquee */}
        <div className="relative px-4 py-8">

          <motion.div
            className="flex gap-16"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 min-w-[160px] text-center">
                  <div className="relative w-16 h-16 mx-auto">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-2xl mx-auto"
        >
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-white mb-2">80+</div>
            <div className="text-sm text-white/70">Happy Clients</div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-sm text-white/70">Success Rate</div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-white/70">AI Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
