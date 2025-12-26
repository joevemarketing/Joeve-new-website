"use client";

import { WebAppLanding } from "@/components/services/templates/WebAppLanding";
import { SocialMediaLanding } from "@/components/services/templates/SocialMediaLanding";
import { VideoProductionLanding } from "@/components/services/templates/VideoProductionLanding";
import { LandingPagesLanding } from "@/components/services/templates/LandingPagesLanding";
import { SEMLanding } from "@/components/services/templates/SEMLanding";
import { JoBizcardLanding } from "@/components/services/templates/JoBizcardLanding";
import { SmartChatbotLanding } from "@/components/services/templates/SmartChatbotLanding";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ServiceQuoteForm } from "@/components/services/ServiceQuoteForm";

export function ServiceFallback({ slug }: { slug: string }) {
  const titles: Record<string, string> = {
    "web-app-software-development": "Web App & Software Development",
    "social-media-generation": "Social Media Generation",
    "gen-ai-video-production": "Gen AI Video Production",
    "landing-pages": "High-Conversion Landing Pages",
    "sem": "Search Engine Marketing (SEM)",
    "jo-bizcard": "JO Bizcard Smart Solutions",
    "smart-chatbot": "Intelligent Chatbot Systems"
  };

  const descriptions: Record<string, string> = {
    "web-app-software-development": "Custom web apps, portals, and software built with modern stacks (Next.js, Supabase) and AI automation.",
    "social-media-generation": "AI-assisted social posts, carousels, and short-form content – created and scheduled for your brand.",
    "gen-ai-video-production": "Turn photos, product catalogs, and scripts into cinematic AI videos at scale.",
    "landing-pages": "Design and deploy landing pages optimized for maximum conversion rates and user experience.",
    "sem": "Drive targeted traffic and increase ROI with data-driven Search Engine Marketing strategies.",
    "jo-bizcard": "NFC-enabled smart business cards that let contacts save your digital profile instantly via tap or QR. Update details anytime without reprints, track engagement with analytics, and capture leads in seconds.",
    "smart-chatbot": "Enhance customer support with 24/7 AI chatbots that understand natural language and intent."
  };

  const images: Record<string, string> = {
    "web-app-software-development": "/images/landing-webapp-hero.jpg",
    "social-media-generation": "/images/landing-social-hero.jpg",
    "gen-ai-video-production": "/images/landing-video-hero.jpg",
    "landing-pages": "/images/landing-pages-hero.jpg",
    "sem": "/images/landing-sem-hero.jpg",
    "jo-bizcard": "/images/landing-bizcard-hero.jpg",
    "smart-chatbot": "/images/landing-chatbot-hero.jpg"
  };

  const title = titles[slug] || "Service";
  const description = descriptions[slug] || "Discover our innovative solutions tailored for your business.";
  const image = images[slug] || "/images/default-service-hero.jpg";

  const features: Record<string, string[]> = {
    "web-app-software-development": [
        "Custom React & Next.js Development",
        "Scalable Cloud Architecture",
        "Secure Authentication & Authorization",
        "API Development & Integration",
        "Real-time Data Processing",
        "Mobile-Responsive Design"
    ],
    "social-media-generation": [
        "AI-Powered Content Creation",
        "Automated Scheduling",
        "Multi-Platform Support",
        "Engagement Analytics",
        "Trend Analysis",
        "Brand Voice Customization"
    ],
    "gen-ai-video-production": [
      "Text-to-Video Generation",
      "AI Avatar Creation",
      "Automated Video Editing",
      "Multi-Language Dubbing",
      "Script Generation",
      "Custom Brand Assets"
    ],
    "landing-pages": [
      "Conversion-focused UI/UX",
      "A/B testing and heatmaps",
      "SEO-friendly structure",
      "Fast-loading pages",
      "CRM and form integrations",
      "Analytics and goal tracking"
    ],
    "sem": [
      "Keyword and intent research",
      "Google Ads campaign setup",
      "Conversion tracking with pixels",
      "A/B testing creatives",
      "Landing page alignment",
      "Monthly performance reporting"
    ],
    "jo-bizcard": [
      "NFC tap-to-share with QR fallback",
      "Live-updatable digital profile",
      "Multiple profiles (personal/business)",
      "Links to socials, website, maps & WhatsApp",
      "Real-time analytics dashboard",
      "Team management & admin controls"
    ],
    "smart-chatbot": [
      "Natural language understanding",
      "Intent detection and slots",
      "Knowledge-base embedding",
      "Human handoff integration",
      "Analytics and feedback loops",
      "Multi-language support"
    ]
  };

  const benefits: Record<string, { title: string; desc: string }[]> = {
    "web-app-software-development": [
        { title: "Faster Time-to-Market", desc: "Leverage our pre-built modules and AI coding assistants to launch your product faster." },
        { title: "High Performance", desc: "Optimized code and cloud infrastructure ensure your app runs smoothly under load." },
        { title: "Future-Proof Tech", desc: "Built with the latest technologies ensuring longevity and ease of maintenance." }
    ],
    "social-media-generation": [
        { title: "Consistent Presence", desc: "Never miss a posting schedule with our automated content pipeline." },
        { title: "Cost Effective", desc: "Reduce content production costs by up to 70% using Generative AI." },
        { title: "Higher Engagement", desc: "Data-driven content strategies that resonate with your target audience." }
    ],
    "gen-ai-video-production": [
      { title: "Scale Production", desc: "Generate large volumes of on-brand videos quickly using reusable prompts and templates." },
      { title: "Studio Quality", desc: "Cinematic lighting, framing and sound design tuned by presets for corporate and product storytelling." },
      { title: "Global Reach", desc: "Multi-language voice, subtitles and region-specific cuts to localize content without re-shoots." },
      { title: "Brand Consistency", desc: "Lock fonts, palettes, motion styles and lower-thirds so every output matches brand guidelines." },
      { title: "Cost Efficiency", desc: "Reduce production cost by replacing repeated shoots with AI renders and stock-to-studio upgrades." },
      { title: "Rapid Iteration", desc: "Update scripts, pacing, aspect ratios and CTAs in minutes and instantly preview variations." },
      { title: "Asset Library", desc: "Centralize B-roll, logos, product photos and music; auto-suggest suitable assets per cut." },
      { title: "Compliance Ready", desc: "Watermarking, usage logs and approval workflow to align with legal and platform policies." }
    ],
    "landing-pages": [
      { title: "Higher Conversions", desc: "Pages engineered for clear value propositions and focused CTAs." },
      { title: "Rapid Deployment", desc: "Launch campaigns fast with reusable sections and tested patterns." },
      { title: "Data-Driven Improvements", desc: "Iterate with analytics, A/B tests and session recordings." }
    ],
    "sem": [
      { title: "High-Intent Traffic", desc: "Reach users actively searching for your offer." },
      { title: "Budget Efficiency", desc: "Optimize bids and quality score to lower cost per acquisition." },
      { title: "Measurable ROI", desc: "Full-funnel tracking from ad click to conversion." }
    ],
    "jo-bizcard": [
      { title: "Always Up-to-Date", desc: "Edit your profile anytime—no reprint costs or outdated cards." },
      { title: "Higher Conversions", desc: "Instant digital save and actionable links outperform paper cards." },
      { title: "Measurable Engagement", desc: "See views, taps and leads with simple analytics." },
      { title: "Stronger Branding", desc: "Modern, premium card experience aligned to your brand." }
    ],
    "smart-chatbot": [
      { title: "24/7 Support", desc: "Instant answers at any time without human wait times." },
      { title: "Reduced Workload", desc: "Deflect repetitive queries so your team handles complex cases." },
      { title: "Consistent Responses", desc: "Stay on-brand with trained knowledge-base and rules." }
    ]
  };

  const faqs: Record<string, { question: string; answer: string }[]> = {
    "web-app-software-development": [
      { question: "What tech stack do you use?", answer: "We primarily use Next.js, React, TypeScript, Supabase, and Tailwind CSS. We can also work with Node.js, Python, and other modern frameworks based on your requirements." },
      { question: "How long does development take?", answer: "Timeline varies by scope. A typical MVP takes 6-8 weeks, while complex enterprise applications may take 3-6 months. We provide detailed timelines after requirements analysis." },
      { question: "Do you provide ongoing support?", answer: "Yes, we offer maintenance packages including bug fixes, updates, and feature enhancements. We also provide documentation and training for your team." }
    ],
    "social-media-generation": [
      { question: "Which platforms do you support?", answer: "We support Instagram, Facebook, LinkedIn, Twitter, TikTok, and YouTube. Each platform gets content optimized for its specific format and audience." },
      { question: "How does the AI content work?", answer: "Our AI analyzes your brand voice, industry trends, and audience preferences to generate relevant posts. You review and approve all content before publishing." },
      { question: "Can I customize the content?", answer: "Absolutely! You have full control to edit, approve, or reject any generated content. We also incorporate your feedback to improve future content." }
    ],
    "gen-ai-video-production": [
      { question: "What types of videos can you create?", answer: "We create product demos, explainer videos, social media content, training videos, and marketing campaigns. Our AI can generate videos from scripts, images, or product catalogs." },
      { question: "How long does video production take?", answer: "AI-generated videos can be ready in hours. For more complex projects with custom requirements, typical turnaround is 3-5 business days." },
      { question: "Can you add voiceovers?", answer: "Yes, we offer AI voiceovers in multiple languages and accents. We can also work with professional voice actors for premium projects." }
    ],
    "landing-pages": [
      { question: "Do you handle the design and development?", answer: "Yes, we provide end-to-end landing page services including strategy, design, development, and optimization. We also offer A/B testing and performance monitoring." },
      { question: "How do you optimize for conversions?", answer: "We use data-driven approaches including heatmap analysis, A/B testing, user behavior tracking, and industry best practices to maximize conversion rates." },
      { question: "Can you integrate with my existing tools?", answer: "Absolutely! We can integrate with your CRM, email marketing, analytics, and other marketing tools to ensure seamless lead capture and tracking." }
    ],
    "sem": [
      { question: "Which ad platforms do you manage?", answer: "We specialize in Google Ads, Bing Ads, and social media advertising. We can manage search, display, shopping, and video campaigns across these platforms." },
      { question: "What's your approach to keyword research?", answer: "We use advanced tools and competitor analysis to identify high-intent, cost-effective keywords. We focus on both short-tail and long-tail keywords relevant to your business." },
      { question: "How do you measure success?", answer: "We track metrics like click-through rates, conversion rates, cost per acquisition, return on ad spend, and overall ROI. We provide detailed monthly reports with insights and recommendations." }
    ],
    "jo-bizcard": [
      { question: "How does the NFC technology work?", answer: "NFC (Near Field Communication) allows instant data transfer when someone taps their phone to your card. Most modern smartphones support this feature without requiring any app installation." },
      { question: "Can I update my information after printing?", answer: "Yes! That's the beauty of digital cards. You can update your contact details, links, and profile anytime through our dashboard, and anyone who has your card will see the updated information." },
      { question: "What analytics do you provide?", answer: "We track card taps, profile views, contact saves, and link clicks. You can see when and where your card was used, helping you understand your networking effectiveness." }
    ],
    "smart-chatbot": [
      { question: "How intelligent are the chatbots?", answer: "Our chatbots use advanced NLP to understand context and intent. They can handle complex queries, learn from interactions, and escalate to human agents when needed." },
      { question: "Can you train the chatbot on my data?", answer: "Yes, we can train the chatbot on your website content, FAQs, product information, and other business data to provide accurate, relevant responses." },
      { question: "What platforms can the chatbot integrate with?", answer: "We support integration with websites, Facebook Messenger, WhatsApp, Slack, and custom platforms through APIs. We can also connect with your existing CRM and support systems." }
    ]
  };

  const currentFeatures = features[slug] || [];
  const currentBenefits = benefits[slug] || [];
  const currentFaqs = faqs[slug] || [];

  // Render specific template based on slug
  if (slug === "web-app-software-development") {
    return <WebAppLanding title={title} description={description} image={image} features={currentFeatures} benefits={currentBenefits} faqs={currentFaqs} dashboardImage="/images/landing-webapp-dashboard.jpg" />;
  }

  if (slug === "social-media-generation") {
    return <SocialMediaLanding title={title} description={description} image={image} features={currentFeatures} benefits={currentBenefits} faqs={currentFaqs} contentImage="/images/landing-social-hero.jpg" />;
  }

  if (slug === "gen-ai-video-production") {
    return <VideoProductionLanding title={title} description={description} image={image} features={currentFeatures} benefits={currentBenefits} faqs={currentFaqs} studioImage="/images/landing-video-studio.jpg" />;
  }

  if (slug === "landing-pages") {
    return <LandingPagesLanding title={title} description={description} image={image} features={currentFeatures} benefits={currentBenefits} faqs={currentFaqs} mockupImage="/landing-pages-mockup.svg" />;
  }

  if (slug === "sem") {
    return <SEMLanding title={title} description={description} image={image} features={currentFeatures} benefits={currentBenefits} faqs={currentFaqs} dashboardImage="/images/landing-sem-dashboard.jpg" />;
  }

  if (slug === "jo-bizcard") {
    return <JoBizcardLanding title={title} description={description} image={image} features={currentFeatures} benefits={currentBenefits} faqs={currentFaqs} cardImage="/images/landing-bizcard-mockup.jpg" />;
  }

  if (slug === "smart-chatbot") {
    return <SmartChatbotLanding title={title} description={description} image={image} features={currentFeatures} benefits={currentBenefits} faqs={currentFaqs} chatbotImage="/images/landing-chatbot-interface.jpg" />;
  }

  // Default Template for other services
  return (
    <main className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="bg-joeve-blue-deep py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover opacity-80"
            unoptimized
            sizes="100vw"
            style={{ filter: "brightness(1.05) contrast(1.05) saturate(1.05)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-joeve-blue-deep/30 to-joeve-blue-deep/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <Link href="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wider leading-tight">
                  {title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
                  {description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                   <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 text-lg font-bold" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                      Get a Quote
                   </Button>
                   <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 text-lg" asChild>
                      <Link href="#details">Learn More</Link>
                   </Button>
                </div>
             </div>

             <div className="w-full max-w-md lg:w-[450px]">
                <ServiceQuoteForm serviceName={title} />
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="details" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to succeed with {title.toLowerCase()}.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentFeatures.map((feature, index) => (
              <div key={index} className="bg-joeve-blue-deep/30 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-joeve-blue-deep/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our {title}?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Real results that drive your business forward.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentBenefits.map((benefit, index) => (
              <div key={index} className="bg-joeve-blue-deep/30 border border-cyan-500/20 rounded-xl p-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Tell us about your project and we&apos;ll provide a tailored solution.</p>
            </div>
            <div className="bg-joeve-blue-deep/30 border border-cyan-500/20 rounded-xl p-8">
              <ServiceQuoteForm serviceName={title} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {currentFaqs.length > 0 && (
        <section className="py-20 bg-joeve-blue-deep/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Everything you need to know about our {title.toLowerCase()} services.</p>
            </div>
            <div className="space-y-6">
              {currentFaqs.map((faq, index) => (
                <div key={index} className="bg-joeve-blue-deep/30 border border-cyan-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
