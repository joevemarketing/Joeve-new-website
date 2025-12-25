"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Brain, Zap, Globe, Users, TrendingUp, Shield, Award, Bot, Cpu, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { ServiceQuoteForm } from "@/components/services/ServiceQuoteForm";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SmartChatbotLandingProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  chatbotImage: string;
}

export function SmartChatbotLanding({ title, description, image, features, benefits, faqs, chatbotImage }: SmartChatbotLandingProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const messages = [
    "Hello! How can I help you today?",
    "I can answer questions about your services",
    "Let me connect you with a human agent",
    "Here's the information you requested"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(false);
      }, 300);
    }, 4000);

    return () => clearInterval(messageInterval);
  }, [messages.length]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-50 to-white">
      {/* AI Communication Hub Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src={image}
            alt="Smart Chatbot Background"
            fill
            className="object-cover opacity-10"
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.1),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900" />
        </div>

        {/* Neural Network Animation */}
        <div className="absolute top-32 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <motion.div 
                className="relative w-40 h-40"
                animate={{ 
                  rotate: 360 
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {/* Neural network visualization */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"
                      style={{
                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                    {[...Array(8)].map((_, i) => (
                      [...Array(8)].map((_, j) => {
                        if (i < j) {
                          const x1 = 80 + 40 * Math.cos((i * Math.PI * 2) / 8);
                          const y1 = 80 + 40 * Math.sin((i * Math.PI * 2) / 8);
                          const x2 = 80 + 40 * Math.cos((j * Math.PI * 2) / 8);
                          const y2 = 80 + 40 * Math.sin((j * Math.PI * 2) / 8);
                          
                          return (
                            <motion.line
                              key={`${i}-${j}`}
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="rgba(99, 102, 241, 0.3)"
                              strokeWidth="1"
                              animate={{
                                opacity: [0.3, 0.8, 0.3]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: (i + j) * 0.1
                              }}
                            />
                          );
                        }
                        return null;
                      })
                    ))}
                  </svg>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-purple-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32">
          <Link href="/services" className="inline-flex items-center text-purple-200 hover:text-white mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200 text-sm mb-6">
                AI-POWERED • 24/7 AVAILABLE
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Intelligent <span className="text-green-400">Conversations</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed font-light">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 rounded-lg font-semibold" onClick={() => document.getElementById('chatbot-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Deploy AI Bot
                </Button>
                <Button size="lg" variant="outline" className="border-purple-300 text-purple-100 hover:bg-white/10 h-14 px-8 rounded-lg">
                  <Brain className="w-5 h-5 mr-2" />
                  See AI Demo
                </Button>
              </div>
            </div>

            <ScrollReveal className="relative" as="div">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-green-500 rounded-2xl blur opacity-20" />
              
              {/* Chat Interface Mockup */}
              <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-green-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">AI Assistant</h3>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs text-gray-500">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-start">
                    <div className="bg-purple-100 text-purple-900 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">{messages[currentMessage]}</p>
                      {isTyping && (
                        <div className="flex gap-1 mt-1">
                          <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" />
                          <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-tr-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">Tell me about your services</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                    <p className="text-sm text-gray-500">Type your message...</p>
                  </div>
                  <Button size="sm" className="rounded-full bg-purple-600 hover:bg-purple-700">
                    <Zap className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Performance Metrics Strip */}
      <div className="bg-slate-900 border-y border-slate-800 py-8">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {[
                 { value: "99.9%", label: "Uptime" },
                 { value: "<1s", label: "Response Time" },
                 { value: "24/7", label: "Availability" },
                 { value: "95%", label: "Accuracy" }
               ].map((metric, i) => (
                  <ScrollReveal key={i} className="text-center" delay={i * 80}>
                     <div className="text-3xl font-bold text-green-400 mb-1">{metric.value}</div>
                     <div className="text-slate-300 text-sm">{metric.label}</div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </div>

      {/* AI Intelligence Showcase */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AI Intelligence</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Natural language processing that understands context and intent for human-like conversations.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <ScrollReveal className="space-y-8">
                  {benefits.map((benefit, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                           <Brain className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                           <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                     </div>
                  ))}
               </ScrollReveal>

               <ScrollReveal className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">AI Training Process</h3>
                  <div className="space-y-6">
                     {[
                        { step: "1", title: "Data Collection", desc: "Gather and organize your business knowledge" },
                        { step: "2", title: "Intent Recognition", desc: "Train AI to understand customer queries" },
                        { step: "3", title: "Response Generation", desc: "Create natural, contextual responses" },
                        { step: "4", title: "Continuous Learning", desc: "Improve accuracy with every interaction" }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">{item.step}</div>
                           <div>
                              <h4 className="font-bold text-gray-900">{item.title}</h4>
                              <p className="text-gray-600 text-sm">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </ScrollReveal>
            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Chatbot Features</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Enterprise-grade AI capabilities for superior customer experience.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {features.map((feature, i) => (
                  <ScrollReveal key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow" delay={i * 80}>
                     <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <Cpu className="w-6 h-6 text-purple-600" />
                     </div>
                     <h3 className="font-bold text-gray-900 mb-2">{feature}</h3>
                     <p className="text-gray-600 text-sm">Powered by advanced AI technology.</p>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-b from-purple-600 to-slate-900 text-white" id="chatbot-form">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Ready to Deploy AI Intelligence?</h2>
                  <p className="text-purple-100 max-w-2xl mx-auto">Get a custom AI chatbot trained on your business data and ready to engage customers 24/7.</p>
               </div>
               
               <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-xl font-bold mb-6">What You&apos;ll Get</h3>
                     <div className="space-y-4">
                        {[
                           "Custom AI chatbot trained on your data",
                           "Natural language understanding",
                           "Multi-platform deployment",
                           "Real-time analytics dashboard",
                           "Human handoff integration"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <Shield className="w-5 h-5 text-green-400" />
                              <span>{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                     <ServiceQuoteForm serviceName={title} className="bg-transparent border-0 shadow-none p-0" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
               <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Smart Chatbot FAQ</h2>
               <div className="space-y-6">
                  {faqs.map((faq, i) => (
                     <ScrollReveal key={i} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors" delay={i * 60}>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                     </ScrollReveal>
                  ))}
               </div>
            </div>
         </section>
      )}
    </div>
  );
}