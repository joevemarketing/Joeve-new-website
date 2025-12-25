import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "E-commerce Platform Transformation",
      client: "Local Retail Chain",
      industry: "Retail",
      services: ["Web App Development", "Social Media Generation"],
      description: "Complete digital transformation including custom inventory management system and automated social media content.",
      results: ["300% increase in online sales", "50% reduction in manual processes", "200% boost in social engagement"],
      image: "bg-gradient-to-br from-blue-100 to-purple-100"
    },
    {
      title: "AI Video Marketing Campaign",
      client: "Beauty Brand Malaysia",
      industry: "Beauty & Wellness",
      services: ["Gen AI Video Production", "Social Media Generation"],
      description: "AI-generated product videos and comprehensive social media strategy for product launches.",
      results: ["500% increase in video engagement", "40% boost in conversion rates", "60% reduction in content creation time"],
      image: "bg-gradient-to-br from-pink-100 to-purple-100"
    },
    {
      title: "Member Portal Development",
      client: "Professional Association",
      industry: "Professional Services",
      services: ["Web App Development"],
      description: "Custom member portal with event management, certification tracking, and payment processing.",
      results: ["90% reduction in admin workload", "Improved member satisfaction", "Streamlined certification process"],
      image: "bg-gradient-to-br from-green-100 to-blue-100"
    },
    {
      title: "Restaurant Chain Digital Presence",
      client: "F&B Chain",
      industry: "Food & Beverage",
      services: ["Social Media Generation", "Gen AI Video Production"],
      description: "Consistent social media content and AI-generated food videos across multiple locations.",
      results: ["250% increase in social followers", "35% boost in foot traffic", "Consistent brand presence"],
      image: "bg-gradient-to-br from-orange-100 to-red-100"
    },
    {
      title: "Real Estate Virtual Tours",
      client: "Property Developer",
      industry: "Real Estate",
      services: ["Gen AI Video Production", "Web App Development"],
      description: "AI-generated property tour videos and custom property management portal.",
      results: ["400% increase in virtual viewings", "30% faster sales cycle", "Reduced physical viewing needs"],
      image: "bg-gradient-to-br from-gray-100 to-blue-100"
    },
    {
      title: "Tech Startup Growth Strategy",
      client: "SaaS Startup",
      industry: "Technology",
      services: ["Web App Development", "Social Media Generation", "Gen AI Video Production"],
      description: "Complete digital ecosystem including product portal, content strategy, and demo videos.",
      results: ["10x increase in user signups", "500% boost in demo requests", "Successful Series A funding"],
      image: "bg-gradient-to-br from-purple-100 to-indigo-100"
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
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Start Project
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800">Our Work</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Success Stories & Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            See how we've helped Malaysian businesses transform their digital presence and achieve remarkable growth
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <div className={`h-48 ${item.image} rounded-t-lg`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Services Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {item.results.map((result, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <div className="h-1 w-1 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Case Study <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <p className="text-gray-600">Average Growth Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-gray-600">Support & Maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Expertise across diverse sectors</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Retail & E-commerce",
              "Beauty & Wellness",
              "Food & Beverage",
              "Real Estate",
              "Technology",
              "Professional Services",
              "Healthcare",
              "Education",
              "Manufacturing",
              "Non-Profit",
              "Automotive",
              "Financial Services"
            ].map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/ai-diagnostic">
                Get AI Analysis
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

export default Portfolio;