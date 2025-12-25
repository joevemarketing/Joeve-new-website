import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Globe, Search, Mail, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const supportingSolutions = [
    {
      icon: <Bot className="h-12 w-12 text-blue-600" />,
      title: "AI Chatbots & Customer Support",
      description: "Intelligent chatbots that provide 24/7 customer support and qualify leads automatically.",
      features: [
        "24/7 automated customer support",
        "Lead qualification and scoring",
        "Integration with CRM systems",
        "Multi-language support",
        "Custom conversation flows",
        "Analytics and reporting"
      ],
      pricing: "Contact for Quote",
      coreServiceLink: "/services/web-app-software-development"
    },
    {
      icon: <Globe className="h-12 w-12 text-green-600" />,
      title: "Landing Pages & Funnels",
      description: "High-converting landing pages and marketing funnels optimized for maximum conversions.",
      features: [
        "Conversion-optimized design",
        "A/B testing capabilities",
        "Mobile-responsive layouts",
        "Fast loading speeds",
        "Analytics integration",
        "Lead capture forms"
      ],
      pricing: "Contact for Quote",
      coreServiceLink: "/services/web-app-software-development"
    },
    {
      icon: <Search className="h-12 w-12 text-orange-600" />,
      title: "SEM & PPC Management",
      description: "Search engine marketing and pay-per-click advertising campaign management and optimization.",
      features: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "Keyword research & optimization",
        "Campaign performance tracking",
        "ROI optimization",
        "Monthly reporting"
      ],
      pricing: "Contact for Quote",
      coreServiceLink: "/services/social-media-generation"
    },
    {
      icon: <Mail className="h-12 w-12 text-purple-600" />,
      title: "Email Marketing Automation",
      description: "Automated email marketing campaigns that nurture leads and drive conversions.",
      features: [
        "Automated email sequences",
        "Segmentation and personalization",
        "Template design",
        "Performance analytics",
        "Integration with CRM",
        "A/B testing"
      ],
      pricing: "Contact for Quote",
      coreServiceLink: "/services/social-media-generation"
    },
    {
      icon: <Users className="h-12 w-12 text-indigo-600" />,
      title: "Jo Bizcard Digital Profiles",
      description: "Professional digital business cards and micro-sites for networking and lead generation.",
      features: [
        "Custom digital business cards",
        "QR code integration",
        "Contact information management",
        "Analytics tracking",
        "Social media integration",
        "Lead capture capabilities"
      ],
      pricing: "Contact for Quote",
      coreServiceLink: "/services/web-app-software-development"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: "Marketing Automation",
      description: "Complete marketing automation workflows that nurture leads and drive sales.",
      features: [
        "Lead scoring and nurturing",
        "Automated follow-up sequences",
        "Behavioral triggers",
        "Multi-channel campaigns",
        "Performance tracking",
        "CRM integration"
      ],
      pricing: "Contact for Quote",
      coreServiceLink: "/services/social-media-generation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              JOeve Smart Solutions
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Core Services</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
              <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-gray-100 text-gray-800">Supporting Solutions</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            More Smart Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complementary services that enhance and support your core digital transformation strategy
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/services">
              View Core Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Supporting Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These services work best when combined with our three core offerings to create a comprehensive digital strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportingSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {solution.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-blue-600">
                    {solution.pricing}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/contact">
                        Get Quote
                      </Link>
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Works best with{" "}
                      <Link to={solution.coreServiceLink} className="text-blue-600 hover:underline">
                        our core services
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Message */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Best Results Come from Integration</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              While these supporting solutions can work independently, they deliver maximum value when 
              integrated with our three core services. Let us create a comprehensive digital strategy for your business.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Web App + Chatbots</h3>
                <p className="text-sm text-blue-100">Intelligent applications with automated customer support</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Social Media + SEM</h3>
                <p className="text-sm text-blue-100">Comprehensive content strategy with paid amplification</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">AI Video + Email</h3>
                <p className="text-sm text-blue-100">Engaging video content delivered through automated sequences</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link to="/contact">
                  Plan My Strategy
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/ai-diagnostic">
                  AI Diagnostic
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JOeve Smart Solutions</h3>
              <p className="text-gray-400 mb-4">
                AI-powered digital solutions for Malaysian businesses.
              </p>
              <p className="text-sm text-gray-500">PC0024318-U</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Core Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services/web-app-software-development" className="hover:text-white">Web App Development</Link></li>
                <li><Link to="/services/social-media-generation" className="hover:text-white">Social Media Generation</Link></li>
                <li><Link to="/services/gen-ai-video-production" className="hover:text-white">Gen AI Video Production</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="/ai-diagnostic" className="hover:text-white">AI Diagnostic</Link></li>
                <li><Link to="/solutions" className="hover:text-white">All Solutions</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 JOeve Smart Solutions PC0024318-U. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Solutions;