"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Share2, 
  Video, 
  Code, 
  Search, 
  CreditCard,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";

const services = [
  { name: "AI Smart Chatbot", href: "/services/smart-chatbot" },
  { name: "Social Media Generation", href: "/services/social-media-generation" },
  { name: "Gen-AI Video Production", href: "/services/gen-ai-video-production" },
  { name: "Web App Development", href: "/services/web-app-software-development" },
  { name: "SEM Services", href: "/services/sem" },
  { name: "Jo Bizcard", href: "/services/jo-bizcard" }
];

const resources = [
  { name: "ROI Calculator", href: "/tools/roi-calculator" },
  { name: "Web App Guide", href: "/tools/web-app-guide" },
  { name: "AI Diagnostic", href: "/ai-diagnostic" },
  { name: "Blog", href: "/resources" },
  { name: "Case Studies", href: "/portfolio" },
  { name: "Support", href: "/contact" }
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 border-b border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get the latest AI trends, case studies, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Link href="/" className="inline-block mb-6">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  JOeve Smart Solutions
                </div>
              </Link>
              <p className="text-white/80 mb-6 max-w-md">
                Empowering Malaysian freelancers and influencers with cutting-edge AI solutions. 
                We help you scale your career and business through intelligent automation and digital innovation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>freelance@joevesmartsolutions.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+60165572800</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Penang, Malaysia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href} 
                      className="text-white/80 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.href}>
                    <Link 
                      href={resource.href} 
                      className="text-white/80 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} JOeve Smart Solutions (PC0024318-U). All rights reserved.
            </div>
            <div className="flex gap-6 text-white/60 text-sm">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <span className="text-white/40">Malaysia Only</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
