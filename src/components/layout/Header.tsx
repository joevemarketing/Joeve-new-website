"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-16 h-16">
              <Image 
                src="/images/logo.png" 
                alt="JOeve Logo" 
                fill 
                className="object-contain"
                sizes="64px"
              />
            </div>
            <span className="hidden md:block text-xs font-medium tracking-wider text-cyan-400 uppercase">AI-Powered Digital Solutions</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {['About', 'Services', 'Portfolio', 'ROI Calculator', 'Web App Guide', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={
                item === 'ROI Calculator' ? '/tools/roi-calculator' : 
                item === 'Web App Guide' ? '/tools/web-app-guide' : 
                `/${item.toLowerCase()}`
              }
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wide"
            >
              {item}
            </Link>
          ))}
        </nav>

        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(0,212,255,0.4)] border border-cyan-300 rounded-full px-6" asChild>
          <Link href="/request-quotation">GET A QUOTE</Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-joeve-blue-deep border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-accordion-down">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wide py-2 border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(0,212,255,0.4)] border border-cyan-300 rounded-full mt-2" asChild>
            <Link href="/request-quotation">GET A QUOTE</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
