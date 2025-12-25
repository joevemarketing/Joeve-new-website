"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/homepage";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Businesses Across Asia
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See how companies are transforming their operations with our AI solutions
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-purple-400" />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              {currentTestimonial.image ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl font-bold">
                  {currentTestimonial.name[0]}
                </div>
              )}
              <div className="text-center">
                <div className="font-semibold text-white text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="text-purple-300">
                  {currentTestimonial.role}, {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-400 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                {testimonial.image ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {testimonial.name[0]}
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-white/90 text-sm mb-3">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-purple-300 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Experience the same transformation that helped hundreds of businesses achieve remarkable growth with our AI solutions.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
