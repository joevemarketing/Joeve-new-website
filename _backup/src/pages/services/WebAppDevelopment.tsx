import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Code, Database, Shield, Zap, CheckCircle, Users, Building, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const WebAppDevelopment = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Modern Tech Stack",
      description: "Built with Next.js, Supabase, and cutting-edge technologies for performance and scalability."
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Database Integration",
      description: "Secure, scalable database solutions with real-time capabilities and automated backups."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Enterprise Security",
      description: "Role-based access control, secure authentication, and data protection compliance."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "AI Enhancement",
      description: "Integrate AI features like chatbots, automated workflows, and intelligent data processing."
    }
  ];

  const targetAudiences = [
    {
      icon: <Building className="h-6 w-6 text-blue-600" />,
      title: "SMEs & Enterprises",
      description: "Companies outgrowing basic websites and needing custom solutions."
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Associations & NGOs",
      description: "Organizations like RTAPPW, councils, and community groups needing member portals."
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-purple-600" />,
      title: "Retail & E-commerce",
      description: "Businesses needing internal tools, dashboards, or booking systems."
    }
  ];

  const buildTypes = [
    {
      title: "Web Applications & Portals",
      items: ["Registration systems", "Member dashboards", "Client portals", "Admin panels"]
    },
    {
      title: "AI-Enhanced Tools",
      items: ["AI diagnostic forms", "Smart search functionality", "Automated workflows", "Chatbot integration"]
    },
    {
      title: "Multi-Tenant Systems",
      items: ["Jo Bizcard-like platforms", "Project management portals", "White-label solutions", "SaaS applications"]
    }
  ];

  const process = [
    { step: "01", title: "Discovery & Requirements", description: "We analyze your needs and define project scope" },
    { step: "02", title: "UX Wireframe", description: "Create user experience blueprints and mockups" },
    { step: "03", title: "Build MVP", description: "Develop minimum viable product with core features" },
    { step: "04", title: "Test & Refine", description: "Quality assurance and user feedback integration" },
    { step: "05", title: "Launch & Support", description: "Deployment and ongoing maintenance support" }
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
              <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-800">Core Service</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Web Apps & Software That Actually{" "}
                <span className="text-blue-600">Move Your Business</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We build modern web apps, internal tools, portals, and microsites using Next.js, 
                Supabase, and AI automation. From basic websites to AI-powered internal tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Book a Free Tech & AI Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded"></div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-blue-600 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who It's For</h2>
            <p className="text-xl text-gray-600">Perfect for organizations ready to scale beyond basic websites</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {targetAudiences.map((audience, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored to your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {buildTypes.map((type, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Stack & Approach</h2>
            <p className="text-xl text-gray-600">Built with modern, reliable technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Our Technology Stack</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <p className="text-gray-600">Next.js + TypeScript + Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <p className="text-gray-600">Supabase + PostgreSQL + Edge Functions</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Deployment</h4>
                <p className="text-gray-600">Vercel + CDN + SSL Security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 5-Step Process</h2>
            <p className="text-xl text-gray-600">From concept to launch in a structured approach</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tell Us What You Want to Build</h2>
            <p className="text-xl text-gray-600">Get a free consultation and project estimate</p>
          </div>
          
          <Card className="p-8">
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
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
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
                      <SelectValue placeholder="Project timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6months+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="project">Project Description *</Label>
                <Textarea 
                  id="project" 
                  placeholder="Tell us about your project requirements, current pain points, and what you want to achieve..."
                  rows={4}
                />
              </div>
              
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Get Free Consultation & Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/" className="text-2xl font-bold text-blue-400 mb-4 block">
            JOeve Smart Solutions
          </Link>
          <p className="text-gray-400 mb-4">
            Powered by JOeve AI Engine
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/services" className="text-gray-400 hover:text-white">Services</Link>
            <Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebAppDevelopment;