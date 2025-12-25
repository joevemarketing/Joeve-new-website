"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Gift, Shield, Star, Users, Zap, Download, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function EnhancedConversionCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [spotsLeft, setSpotsLeft] = useState(3);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const spotTimer = setInterval(() => {
      setSpotsLeft(prev => prev > 1 ? prev - 1 : 5);
    }, 15000);

    return () => clearInterval(spotTimer);
  }, []);

  const handleLeadMagnetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Show success message or redirect
    alert("AI Transformation Guide sent to your email!");
  };

  const leadMagnets = [
    {
      title: "AI Transformation Checklist",
      description: "Step-by-step guide to transform your business with AI in 90 days",
      value: "RM299",
      free: true,
      icon: Download,
      color: "from-blue-500 to-cyan-500",
      href: "/resources/ai-transformation-checklist"
    },
    {
      title: "Digital Marketing ROI Calculator",
      description: "Interactive tool to measure your campaign effectiveness",
      value: "RM199",
      free: true,
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      href: "/resources/digital-marketing-roi-calculator"
    },
    {
      title: "Web App Development Guide",
      description: "Comprehensive resource for planning custom applications",
      value: "RM399",
      free: true,
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      href: "/resources/web-app-development-guide"
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "30-Day Money Back Guarantee",
      description: "Full refund if not satisfied with our services"
    },
    {
      icon: Clock,
      title: "24-Hour Response Guarantee",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: Users,
      title: "Local Support Team",
      description: "Penang-based support team ready to help"
    },
    {
      icon: Star,
      title: "5-Star Service Promise",
      description: "Committed to delivering exceptional quality"
    }
  ];

  return (
    <>
      {/* Primary Conversion Section */}
      <section className="py-20 bg-gradient-to-r from-joeve-blue-deep via-joeve-blue-dark to-joeve-blue-deep relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,212,255,0.1),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(155,89,182,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Value Proposition */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-red-500/30">
                    <Clock className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 text-sm font-medium">Limited Time Offer</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider">
                    Get Your Free AI Strategy Session
                  </h2>
                  
                  <p className="text-xl text-cyan-400 font-medium">
                    Worth RM1,500 • Now FREE for a limited time
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Discover how AI can transform your business operations, reduce costs by 30%, and increase efficiency by 40%. Our expert consultants will analyze your current processes and create a customized AI roadmap.
                  </p>
                </div>

                {/* Urgency Indicators */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold">Offer Ends In:</h3>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 text-sm font-medium">{spotsLeft} spots left</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-red-500/20 rounded-lg p-3 text-center border border-red-500/30">
                      <div className="text-2xl font-bold text-red-400">{timeLeft.hours}</div>
                      <div className="text-xs text-red-300">Hours</div>
                    </div>
                    <div className="bg-red-500/20 rounded-lg p-3 text-center border border-red-500/30">
                      <div className="text-2xl font-bold text-red-400">{timeLeft.minutes}</div>
                      <div className="text-xs text-red-300">Minutes</div>
                    </div>
                    <div className="bg-red-500/20 rounded-lg p-3 text-center border border-red-500/30">
                      <div className="text-2xl font-bold text-red-400">{timeLeft.seconds}</div>
                      <div className="text-xs text-red-300">Seconds</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm text-center">
                    Don&apos;t miss out - this offer expires soon!
                  </p>
                </div>

                {/* Guarantees */}
                <div className="grid grid-cols-2 gap-4">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <guarantee.icon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold text-sm">{guarantee.title}</h4>
                        <p className="text-gray-400 text-xs">{guarantee.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - CTA Form */}
              <div className="space-y-6">
                {/* Primary CTA Button */}
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">Instant Booking</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Book Your Free Session</h3>
                    <p className="text-gray-300">No commitment required • 100% free consultation</p>
                  </div>
                  
                  <Button 
                    className="w-full h-14 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold tracking-wide shadow-[0_0_30px_rgba(0,212,255,0.6)] border border-cyan-300 rounded-full group" 
                    asChild
                  >
                    <Link href="/request-quotation" className="flex items-center justify-center gap-2">
                      Book Free Strategy Session
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>30 min session</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      <span>No spam guarantee</span>
                    </div>
                  </div>
                </div>

                {/* Lead Magnet */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Gift className="w-5 h-5 text-purple-400" />
                    <h3 className="text-white font-bold">Free Bonus: AI Transformation Guide</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    Get our exclusive 25-page AI transformation guide (worth RM299) absolutely FREE when you book your consultation today.
                  </p>
                  
                  <form onSubmit={handleLeadMagnetSubmit} className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      required
                    />
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg"
                    >
                      {isSubmitting ? "Sending..." : "Get Free Guide"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnets Section */}
      <section className="py-20 bg-joeve-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-wider">
              Free Resources
            </h2>
            <p className="text-xl text-cyan-400 max-w-2xl mx-auto">
              Download our premium guides and tools to accelerate your AI transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {leadMagnets.map((magnet, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${magnet.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <magnet.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2 text-center">{magnet.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{magnet.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm line-through">{magnet.value}</span>
                  <span className="bg-green-500/20 text-green-400 text-sm px-2 py-1 rounded-full font-medium">FREE</span>
                </div>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${magnet.color} text-white font-bold py-2 rounded-lg group-hover:shadow-lg transition-all`}
                  asChild
                >
                  <Link href={magnet.href} className="flex items-center justify-center gap-2">
                    View & Download
                    <Download className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6">
                Join 150+ Malaysian SMEs who have already transformed their operations with our AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="/request-quotation">Get Free AI Strategy Session</Link>
                </Button>
                <Button variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold px-8 py-3 rounded-full" asChild>
                  <Link href="/ai-diagnostic">Take AI Readiness Quiz</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
