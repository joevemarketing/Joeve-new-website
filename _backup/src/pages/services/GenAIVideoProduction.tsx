import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Video, Camera, Sparkles, Zap, CheckCircle, Upload, Edit, Download, Play } from "lucide-react";
import { Link } from "react-router-dom";

const GenAIVideoProduction = () => {
  const useCases = [
    {
      icon: <Camera className="h-8 w-8 text-purple-600" />,
      title: "Product Reels",
      description: "Transform product photos into dynamic reels for retail, cosmetics, and F&B brands.",
      examples: ["Product showcases", "Feature highlights", "Before/after demos"]
    },
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      title: "Real Estate Tours",
      description: "Create engaging property video tours from photos and floor plans.",
      examples: ["Virtual walkthroughs", "Property highlights", "Neighborhood tours"]
    },
    {
      icon: <Sparkles className="h-8 w-8 text-green-600" />,
      title: "Brand Announcements",
      description: "Turn announcements and event promos into captivating video content.",
      examples: ["Event promotions", "New launches", "Company updates"]
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Catalog Videos",
      description: "Convert product catalogs into engaging video presentations for appliances and retail.",
      examples: ["Product catalogs", "Feature comparisons", "How-to guides"]
    }
  ];

  const inputRequirements = [
    {
      title: "Photos/Product Links",
      description: "High-quality product photos, property images, or links to your existing content",
      icon: <Upload className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Key Message/Offer",
      description: "Your main message, promotional offer, or call-to-action for the video",
      icon: <Edit className="h-6 w-6 text-green-600" />
    },
    {
      title: "Target Platform",
      description: "Specify whether it's for TikTok, Instagram Reels, YouTube, Facebook, or multiple platforms",
      icon: <Play className="h-6 w-6 text-purple-600" />
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Content Submission",
      description: "Upload your photos, product links, and brief through our registration form",
      icon: <Upload className="h-8 w-8" />
    },
    {
      step: "02",
      title: "AI Storyboard Generation",
      description: "Our AI creates visual storyboards and motion concepts based on your content",
      icon: <Sparkles className="h-8 w-8" />
    },
    {
      step: "03",
      title: "Human Refinement",
      description: "Our video experts add text, motion, branding, and professional touches",
      icon: <Edit className="h-8 w-8" />
    },
    {
      step: "04",
      title: "Delivery & Revisions",
      description: "Receive your videos within 3-5 days with 1-2 rounds of revisions included",
      icon: <Download className="h-8 w-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter Pack",
      price: "Custom Quote",
      originalPrice: "",
      description: "Perfect for testing AI video magic",
      features: [
        "3 AI-generated videos (30-60 seconds)",
        "Single platform optimization",
        "Basic motion effects",
        "Standard turnaround (5-7 days)",
        "1 revision round",
        "MP4 format delivery"
      ],
      credits: "3 video credits",
      bestFor: "First-time users, single product showcase"
    },
    {
      name: "Growth Pack",
      price: "Custom Quote",
      originalPrice: "",
      description: "Complete video marketing solution",
      features: [
        "8 AI-generated videos (30-60 seconds)",
        "Multi-platform optimization",
        "Advanced motion & transitions",
        "Priority turnaround (3-5 days)",
        "2 revision rounds",
        "Multiple format delivery",
        "Basic branding integration",
        "Performance tracking setup"
      ],
      credits: "8 video credits",
      bestFor: "Serious marketers, multiple products",
      popular: true
    },
    {
      name: "Enterprise Pack",
      price: "Custom Quote",
      originalPrice: "",
      description: "Complete marketing transformation",
      features: [
        "15 AI-generated videos (30-90 seconds)",
        "All platform optimization",
        "Premium effects & animations",
        "Express turnaround (2-3 days)",
        "Unlimited revisions",
        "All format delivery + raw files",
        "Full branding integration",
        "Dedicated account manager",
        "Monthly strategy consultation",
        "Performance analytics report"
      ],
      credits: "15 video credits",
      bestFor: "Scaling businesses, complete solution"
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
              <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Start Your Video
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-purple-100 text-purple-800">Core Service</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Gen AI Videos From Your{" "}
                <span className="text-purple-600">Photos, Catalogs & Scripts</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Turn product photos, promo messages, or existing creatives into dynamic short videos 
                for ads, reels, and social campaigns. From static to viral in just 3 easy steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Start Your First AI Video
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Demo Reel
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-6">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="h-16 w-16 text-purple-600" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-purple-200 rounded w-1/2"></div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-purple-600 rounded w-24 flex items-center justify-center">
                      <span className="text-white text-xs">Download</span>
                    </div>
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For Every Industry</h2>
            <p className="text-xl text-gray-600">Transform your static content into engaging video experiences</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Input Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Need From You</h2>
            <p className="text-xl text-gray-600">Simple inputs for powerful video outputs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {inputRequirements.map((requirement, index) => (
              <Card key={index} className="text-center p-8">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit shadow-sm">
                  {requirement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{requirement.title}</h3>
                <p className="text-gray-600">{requirement.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              That's it! Our AI handles the rest – from storyboarding to final video production.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">From Photos to Viral Videos</h2>
            <p className="text-xl text-gray-600">Our streamlined 4-step process</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div className="mx-auto mb-4 p-2 bg-purple-50 rounded-full w-fit">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-purple-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Powered by Advanced AI Technology</h3>
            <p className="text-gray-600 mb-6">
              Our AI Video Studio leverages cutting-edge machine learning to create professional-quality videos 
              that would typically require expensive equipment and hours of editing.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">AI Motion Generation</h4>
                <p className="text-gray-600">Intelligent camera movements and transitions</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Smart Text Integration</h4>
                <p className="text-gray-600">Automated text placement and animation</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Brand Consistency</h4>
                <p className="text-gray-600">Maintains your brand colors and style</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Video Solution</h2>
            <p className="text-xl text-gray-600">Professional AI video production that delivers measurable results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative p-8 ${plan.popular ? 'ring-2 ring-purple-500 shadow-xl' : 'shadow-lg'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
                  </div>
                  <p className="text-sm text-purple-600 font-medium mt-2">{plan.credits}</p>
                  <CardDescription className="mt-4">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mb-4">Best for: {plan.bestFor}</p>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom solution? We'll create a package that fits your specific needs and budget.
            </p>
            <Button variant="outline">
              Custom Enterprise Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your First AI Video</h2>
            <p className="text-xl text-gray-600">Tell us about your project and upload your content</p>
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
                  <Label htmlFor="company">Company/Brand *</Label>
                  <Input id="company" placeholder="Your business name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+60 12-345 6789" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="package">Package *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">Starter Pack - RM 799</SelectItem>
                      <SelectItem value="growth">Growth Pack - RM 1,299</SelectItem>
                      <SelectItem value="enterprise">Enterprise Pack - RM 1,999</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="platform">Target Platform *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Primary platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram Reels</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="youtube">YouTube Shorts</SelectItem>
                      <SelectItem value="multiple">Multiple Platforms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="video-type">Video Type *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="What type of video do you need?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">Product Showcase</SelectItem>
                    <SelectItem value="real-estate">Real Estate Tour</SelectItem>
                    <SelectItem value="brand">Brand Announcement</SelectItem>
                    <SelectItem value="catalog">Product Catalog</SelectItem>
                    <SelectItem value="promotional">Promotional Video</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Key Message/Offer *</Label>
                <Textarea 
                  id="message" 
                  placeholder="What's the main message or offer you want to communicate in your video? Include any specific text, call-to-action, or promotional details..."
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="additional-info">Additional Information</Label>
                <Textarea 
                  id="additional-info" 
                  placeholder="Any specific requirements, brand guidelines, or creative direction you'd like us to know about?"
                  rows={3}
                />
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Next Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Submit this form to get started</li>
                  <li>We'll send you a secure upload link for your photos/content</li>
                  <li>Our AI will generate your video storyboard within 24 hours</li>
                  <li>Receive your finished videos in 3-5 business days</li>
                </ol>
              </div>
              
              <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                Start My AI Video Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/" className="text-2xl font-bold text-purple-400 mb-4 block">
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

export default GenAIVideoProduction;