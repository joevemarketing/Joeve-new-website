import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Video, Share2, Bot, Globe, Search, Mail, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const coreServices = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Web App & Software Development",
      description: "Custom web apps, portals, and software built with modern stacks (Next.js, Supabase) and AI automation.",
      features: ["Custom Web Applications", "Internal Tools & Portals", "AI-Enhanced Features", "Secure Authentication"],
      link: "/services/web-app-software-development",
      badge: "Core Service"
    },
    {
      icon: <Share2 className="h-12 w-12 text-green-600" />,
      title: "Social Media Generation",
      description: "AI-assisted social posts, carousels, and short-form content – created and scheduled for your brand.",
      features: ["AI Content Generation", "Multi-Platform Posting", "Brand Consistency", "Performance Analytics"],
      link: "/services/social-media-generation",
      badge: "Core Service"
    },
    {
      icon: <Video className="h-12 w-12 text-purple-600" />,
      title: "Gen AI Video Production",
      description: "Turn photos, product catalogs, and scripts into cinematic AI videos at scale.",
      features: ["Product Video Creation", "AI-Powered Editing", "Multi-Format Output", "Brand Integration"],
      link: "/services/gen-ai-video-production",
      badge: "Core Service"
    }
  ];

  const supportingServices = [
    { icon: <Bot className="h-6 w-6" />, title: "AI Chatbots & Lead Qualification" },
    { icon: <Globe className="h-6 w-6" />, title: "Landing Pages & Funnels" },
    { icon: <Search className="h-6 w-6" />, title: "SEM & PPC" },
    { icon: <Mail className="h-6 w-6" />, title: "Jo Bizcard & Micro-sites" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Malaysia",
      quote: "JOeve transformed our digital presence completely. Their AI video production helped us increase engagement by 300%.",
      rating: 5
    },
    {
      name: "Ahmad Rahman",
      company: "Local Retail Chain",
      quote: "The web app they built streamlined our entire inventory management. ROI was visible within 2 months.",
      rating: 5
    },
    {
      name: "Lisa Wong",
      company: "Beauty Brand",
      quote: "Their social media generation service keeps our content fresh and engaging. We never run out of ideas now.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                JOeve Smart Solutions
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/ai-diagnostic" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                AI Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            AI-Powered Digital Solutions
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We build AI-powered web apps,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              scroll-stopping social content
            </span>
            , and Gen AI videos for Malaysian brands.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with our three flagship services: custom web applications, 
            AI-generated social media content, and cinematic video production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg">
              <Link to="/contact" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/ai-diagnostic">
                Try AI Diagnostic
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three powerful solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
                    {service.badge}
                  </Badge>
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Smart Solutions</h3>
            <p className="text-gray-600 mb-8">Additional services to complement your digital strategy</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {supportingServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="mx-auto mb-3 p-2 bg-blue-100 rounded-full w-fit">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{service.title}</h4>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/solutions">
                View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by Malaysian businesses of all sizes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our AI-powered solutions can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                Book Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/ai-diagnostic">
                Start AI Diagnostic
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

export default Index;