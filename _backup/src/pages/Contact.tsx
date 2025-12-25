import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
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
              <Link to="/ai-diagnostic" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                AI Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI-powered digital solutions? 
            Get in touch for a free consultation and discover how we can help you grow.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Get Your Free Consultation</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" placeholder="Your full name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Your company name" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="+60 12-345 6789" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Service Interest *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Which service interests you most?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-app">Web App & Software Development</SelectItem>
                          <SelectItem value="social-media">Social Media Generation</SelectItem>
                          <SelectItem value="ai-video">Gen AI Video Production</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under RM 5,000</SelectItem>
                            <SelectItem value="5k-15k">RM 5,000 - RM 15,000</SelectItem>
                            <SelectItem value="15k-30k">RM 15,000 - RM 30,000</SelectItem>
                            <SelectItem value="30k-50k">RM 30,000 - RM 50,000</SelectItem>
                            <SelectItem value="50k+">RM 50,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="When do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1month">Within 1 month</SelectItem>
                            <SelectItem value="3months">Within 3 months</SelectItem>
                            <SelectItem value="6months">Within 6 months</SelectItem>
                            <SelectItem value="planning">Just planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={5}
                      />
                    </div>
                    
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message & Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you succeed. Reach out through any of these channels 
                  and we'll respond quickly to discuss your project.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600 mb-2">Get a response within 24 hours</p>
                      <a href="mailto:hello@joevesmartsolutions.com" className="text-blue-600 hover:underline">
                        hello@joevesmartsolutions.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600 mb-2">Speak directly with our team</p>
                      <a href="tel:+60123456789" className="text-green-600 hover:underline">
                        +60 12-345 6789
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600 mb-2">Meet us in person</p>
                      <p className="text-purple-600">
                        Penang, Malaysia<br />
                        <span className="text-sm text-gray-500">By appointment only</span>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-100 rounded-full">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Prefer to Start with AI Diagnostic?</h3>
                <p className="text-blue-100 mb-4">
                  Get personalized recommendations before we talk. Our AI diagnostic takes 3-5 minutes 
                  and provides instant insights about which services are best for your business.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link to="/ai-diagnostic">
                    Try AI Diagnostic
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How quickly can you start my project?</h3>
              <p className="text-gray-600">
                We typically start new projects within 1-2 weeks after the initial consultation and contract signing. 
                Rush projects can be accommodated with priority scheduling.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you work with businesses outside Malaysia?</h3>
              <p className="text-gray-600">
                Yes! While we're based in Malaysia, we work with clients globally. All our services can be delivered remotely, 
                and we're experienced in working across different time zones.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What makes your AI solutions different?</h3>
              <p className="text-gray-600">
                Our JOeve AI Engine is specifically designed for business applications. Unlike generic AI tools, 
                our solutions are trained on business data and optimized for real-world commercial use cases.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I combine multiple services?</h3>
              <p className="text-gray-600">
                Absolutely! Many clients benefit from combining our services. For example, web app development 
                with social media generation, or AI video production with social media management. We offer package discounts for multiple services.
              </p>
            </Card>
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

export default Contact;