import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Share2, Video, Bot, Globe, Search, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const coreServices = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Web App & Software Development",
      description: "Custom web apps, portals, and software built with modern stacks (Next.js, Supabase) and AI automation.",
      features: ["Custom Web Applications", "Internal Tools & Portals", "AI-Enhanced Features", "Secure Authentication"],
      link: "/services/web-app-software-development",
      price: "Custom Quote",
      timeline: "4-12 weeks"
    },
    {
      icon: <Share2 className="h-12 w-12 text-green-600" />,
      title: "Social Media Generation",
      description: "AI-assisted social posts, carousels, and short-form content – created and scheduled for your brand.",
      features: ["AI Content Generation", "Multi-Platform Posting", "Brand Consistency", "Performance Analytics"],
      link: "/services/social-media-generation",
      price: "Custom Quote",
      timeline: "Ongoing"
    },
    {
      icon: <Video className="h-12 w-12 text-purple-600" />,
      title: "Gen AI Video Production",
      description: "Turn photos, product catalogs, and scripts into cinematic AI videos at scale.",
      features: ["Product Video Creation", "AI-Powered Editing", "Multi-Format Output", "Brand Integration"],
      link: "/services/gen-ai-video-production",
      price: "Custom Quote",
      timeline: "3-5 days"
    }
  ];

  const supportingServices = [
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "AI Chatbots & Lead Qualification",
      description: "Intelligent chatbots that qualify leads and provide 24/7 customer support.",
      features: ["Lead qualification", "Customer support", "Integration with CRM"]
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Landing Pages & Funnels",
      description: "High-converting landing pages and marketing funnels optimized for conversions.",
      features: ["Conversion optimization", "A/B testing", "Analytics integration"]
    },
    {
      icon: <Search className="h-8 w-8 text-orange-600" />,
      title: "SEM & PPC",
      description: "Search engine marketing and pay-per-click advertising management.",
      features: ["Google Ads", "Facebook Ads", "Campaign optimization"]
    },
    {
      icon: <Mail className="h-8 w-8 text-purple-600" />,
      title: "Jo Bizcard & Micro-sites",
      description: "Digital business cards and micro-sites for professional networking.",
      features: ["Digital profiles", "QR code integration", "Analytics tracking"]
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
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive AI-powered digital solutions designed to accelerate your business growth
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Core Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Three Flagship Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions that form the backbone of your digital transformation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{service.price}</span>
                    <span>{service.timeline}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-800">Supporting Solutions</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Smart Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to enhance your digital strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportingServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 bg-white rounded-full w-fit shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center">
                      <div className="h-1 w-1 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Need more information about our supporting solutions?
            </p>
            <Button variant="outline" asChild>
              <Link to="/solutions">
                View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Powered by JOeve AI Engine</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              All our services are enhanced by our proprietary AI technology, ensuring cutting-edge solutions 
              that adapt and evolve with your business needs.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">AI Video Studio</h3>
                <p className="text-sm text-blue-100">Advanced video generation</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Gen AI Visual Lab</h3>
                <p className="text-sm text-blue-100">Smart content creation</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Web/App Experiences</h3>
                <p className="text-sm text-blue-100">Intelligent applications</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Smart Chatbots</h3>
                <p className="text-sm text-blue-100">AI-powered conversations</p>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link to="/ai-diagnostic">
                  Try AI Diagnostic Tool
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss which services are right for your business and create a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/contact">
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
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

export default Services;