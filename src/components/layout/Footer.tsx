import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Phone, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 pt-16 pb-10 border-t border-cyan-900/40">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <svg className="absolute inset-x-0 bottom-0 w-full h-24 opacity-30" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#06b6d4"/>
              <stop offset="50%" stopColor="#0ea5e9"/>
              <stop offset="100%" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
          <path d="M0,80 C240,40 480,120 720,80 C960,40 1200,100 1440,60 L1440,120 L0,120 Z" fill="url(#footerGrad)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-center md:text-left">
          <div className="lg:col-span-1 flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-cyan-400 font-bold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services/web-app-software-development" className="hover:text-white transition-colors">Web/App Development</Link></li>
              <li><Link href="/services/landing-pages" className="hover:text-white transition-colors">Landing Pages</Link></li>
              <li><Link href="/services/sem" className="hover:text-white transition-colors">SEM</Link></li>
              <li><Link href="/services/jo-bizcard" className="hover:text-white transition-colors">Jo Bizcard</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image src="/images/logo.png" alt="JOeve Logo" fill className="object-contain" sizes="56px" />
              </div>
              <span className="text-2xl font-bold tracking-widest text-white">JOEVE</span>

            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-300">
              <Link href="tel:+60165572800" className="flex items-center gap-2 hover:text-cyan-400 transition-colors"><Phone className="w-4 h-4" /> +6016 557 2800</Link>
              <Link href="mailto:info@joevesmartsolutions.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">info@joevesmartsolutions.com</Link>
            </div>

            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="group w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 hover:text-white hover:bg-cyan-500/30 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="w-full max-w-xl bg-slate-800/50 border border-white/10 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <Input placeholder="Subscribe with your email" className="bg-slate-800 border-gray-600 text-white" />
                <Button className="bg-cyan-600 hover:bg-cyan-700">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4 items-center md:items-end">
            <h3 className="text-cyan-400 font-bold uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-2 text-gray-300 text-center md:text-right">
              <li><Link href="/services/smart-chatbot" className="hover:text-white transition-colors">Smart Chatbot</Link></li>
              <li><Link href="/services/gen-ai-video-production" className="hover:text-white transition-colors">Gen AI Video</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Digital Presence</Link></li>
              <li><Link href="/video-links" className="hover:text-white transition-colors">Video Links</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span>© {new Date().getFullYear()} JOEVE Smart Solutions. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
