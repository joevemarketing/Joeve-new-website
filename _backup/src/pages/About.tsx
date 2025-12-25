import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Award, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to solve real business problems and create competitive advantages."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that drive real business growth."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Results Driven",
      description: "Every solution we create is designed with measurable outcomes and ROI in mind."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
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
              <Link to="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
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
          <Badge className="mb-6 bg-blue-100 text-blue-800">About JOeve Smart Solutions</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Empowering Malaysian Businesses with AI-Powered Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're a digital transformation agency that combines cutting-edge AI technology with proven business strategies 
            to help Malaysian businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to democratize AI technology for Malaysian businesses, JOeve Smart Solutions 
                emerged from the recognition that many companies struggle to leverage digital tools effectively.
              </p>
              <p className="text-gray-600 mb-6">
                We saw businesses spending countless hours on manual processes, struggling with inconsistent marketing, 
                and missing opportunities to connect with their customers online. That's when we decided to create 
                solutions that would change the game.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we're proud to be at the forefront of AI-powered business solutions, helping companies of all 
                sizes transform their operations and accelerate their growth.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/contact">
                  Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600 text-sm">
                      To empower Malaysian businesses with AI-powered digital solutions that drive real growth and success.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600 text-sm">
                      To be Malaysia's leading AI-powered digital transformation partner, helping businesses thrive in the digital economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose JOeve Smart Solutions?</h2>
            <p className="text-xl text-gray-600">What sets us apart in the digital transformation landscape</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">AI-First Approach</h3>
              <p className="text-gray-600 mb-4">
                We don't just use AI as a buzzword. Our proprietary JOeve AI Engine is built specifically 
                for business applications, ensuring practical, results-driven solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom AI models for your industry</li>
                <li>• Continuous learning and improvement</li>
                <li>• Practical business applications</li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Malaysian Market Expertise</h3>
              <p className="text-gray-600 mb-4">
                We understand the unique challenges and opportunities in the Malaysian market, 
                from cultural nuances to regulatory requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Local market insights</li>
                <li>• Cultural sensitivity</li>
                <li>• Regulatory compliance</li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">End-to-End Solutions</h3>
              <p className="text-gray-600 mb-4">
                From strategy to implementation to ongoing support, we provide comprehensive 
                solutions that cover all aspects of your digital transformation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Strategic planning</li>
                <li>• Technical implementation</li>
                <li>• Ongoing support & optimization</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our AI-powered solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                Start Your Journey
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/ai-diagnostic">
                Try AI Diagnostic
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

export default About;