import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechStart Malaysia",
      industry: "Technology",
      rating: 5,
      quote: "JOeve transformed our digital presence completely. Their AI video production helped us increase engagement by 300%, and the social media generation service keeps our content fresh and consistent. The ROI has been incredible.",
      services: ["Gen AI Video Production", "Social Media Generation"],
      results: "300% increase in engagement"
    },
    {
      name: "Ahmad Rahman",
      role: "Operations Manager",
      company: "Local Retail Chain",
      industry: "Retail",
      rating: 5,
      quote: "The web app they built streamlined our entire inventory management system. What used to take hours now takes minutes. ROI was visible within 2 months, and our team productivity has increased dramatically.",
      services: ["Web App Development"],
      results: "ROI visible within 2 months"
    },
    {
      name: "Lisa Wong",
      role: "Founder",
      company: "Beauty Brand Malaysia",
      industry: "Beauty & Wellness",
      rating: 5,
      quote: "Their social media generation service is a game-changer. We never run out of content ideas, and the AI-generated posts perform better than our manually created ones. Our social media presence has never been stronger.",
      services: ["Social Media Generation", "Gen AI Video Production"],
      results: "Never run out of content"
    },
    {
      name: "David Lim",
      role: "CEO",
      company: "Property Solutions",
      industry: "Real Estate",
      rating: 5,
      quote: "The AI video tours they created for our properties are phenomenal. We've seen a 400% increase in virtual viewings and a 30% faster sales cycle. Clients love the professional quality and convenience.",
      services: ["Gen AI Video Production"],
      results: "400% increase in virtual viewings"
    },
    {
      name: "Priya Sharma",
      role: "Marketing Manager",
      company: "F&B Chain",
      industry: "Food & Beverage",
      rating: 5,
      quote: "JOeve's comprehensive approach to our digital transformation was exactly what we needed. From social media to AI videos, everything works together seamlessly. Our foot traffic increased by 35%.",
      services: ["Social Media Generation", "Gen AI Video Production"],
      results: "35% increase in foot traffic"
    },
    {
      name: "Michael Tan",
      role: "President",
      company: "Professional Association",
      industry: "Professional Services",
      rating: 5,
      quote: "The member portal they developed has revolutionized how we manage our association. Administrative workload reduced by 90%, and member satisfaction has never been higher. Excellent work and ongoing support.",
      services: ["Web App Development"],
      results: "90% reduction in admin workload"
    }
  ];

  const clientLogos = [
    "TechStart Malaysia",
    "Local Retail Chain", 
    "Beauty Brand Malaysia",
    "Property Solutions",
    "F&B Chain",
    "Professional Association",
    "Ducati Malaysia",
    "Ban Huat Trading"
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
              <Link to="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800">Client Testimonials</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Malaysian businesses say about working with JOeve Smart Solutions.
          </p>
          <div className="flex justify-center items-center space-x-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 50+ reviews</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-blue-600 opacity-50" />
                  </div>
                  <CardDescription className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs mb-2">
                      {testimonial.industry}
                    </Badge>
                    <div className="flex flex-wrap gap-1">
                      {testimonial.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Key Result:</p>
                    <p className="text-sm text-green-700">{testimonial.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Malaysian Businesses</h2>
            <p className="text-gray-600">Join successful companies already using our AI-powered solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-gray-600 font-medium text-sm">{logo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Metrics</h2>
            <p className="text-xl text-gray-600">The results speak for themselves</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <p className="text-gray-600">Average Growth Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2 Months</div>
              <p className="text-gray-600">Average ROI Timeline</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600">Successful Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Hear directly from our satisfied clients</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Client Success Story #{item}</h3>
                  <p className="text-sm text-gray-600">Coming soon - Video testimonial from one of our satisfied clients</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a success story for your business. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                Start Your Success Story
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

export default Testimonials;