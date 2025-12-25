import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Share2, Bot, Calendar, BarChart3, CheckCircle, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const SocialMediaGeneration = () => {
  const outcomes = [
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Consistent Posting Schedule",
      description: "Never miss a post with our automated content calendar and scheduling system."
    },
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "AI-Generated Ideas + Human Refinement",
      description: "Perfect blend of AI creativity and human expertise for authentic brand voice."
    },
    {
      icon: <Share2 className="h-8 w-8 text-purple-600" />,
      title: "Ready-to-Post Graphics & Captions",
      description: "Complete content packages with visuals, captions, and hashtags optimized for each platform."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Performance Analytics",
      description: "Track engagement, reach, and ROI with detailed performance reports and insights."
    }
  ];

  const platforms = [
    { icon: <Instagram className="h-6 w-6" />, name: "Instagram", color: "text-pink-600" },
    { icon: <Facebook className="h-6 w-6" />, name: "Facebook", color: "text-blue-600" },
    { icon: <Linkedin className="h-6 w-6" />, name: "LinkedIn", color: "text-blue-700" },
    { icon: <Youtube className="h-6 w-6" />, name: "TikTok", color: "text-black" }
  ];

  const workflow = [
    {
      step: "01",
      title: "Brand Discovery",
      description: "We analyze your brand voice, target audience, and content preferences to create your unique content strategy."
    },
    {
      step: "02",
      title: "AI Content Generation",
      description: "Our AI system leverages JOeve's visual/video stack to draft engaging posts, carousels, and short videos."
    },
    {
      step: "03",
      title: "Human Refinement",
      description: "Our content experts refine, design, and optimize each piece to match your brand perfectly."
    },
    {
      step: "04",
      title: "Schedule & Deliver",
      description: "Content is scheduled for optimal posting times or delivered to your team for manual posting."
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "Custom Quote",
      originalPrice: "",
      description: "Perfect for small businesses getting started",
      features: [
        "12 posts per month",
        "4 short videos/reels",
        "2 platforms (Instagram + Facebook)",
        "Basic analytics report",
        "Content calendar",
        "Brand voice development"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "Custom Quote",
      originalPrice: "",
      description: "Ideal for growing businesses",
      features: [
        "20 posts per month",
        "8 short videos/reels",
        "4 platforms (all major platforms)",
        "Advanced analytics & insights",
        "Content calendar + scheduling",
        "Monthly strategy review",
        "Hashtag research & optimization",
        "Community management (basic)"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      originalPrice: "",
      description: "Complete solution for established brands",
      features: [
        "40 posts per month",
        "16 short videos/reels",
        "All platforms + emerging channels",
        "Comprehensive analytics dashboard",
        "Advanced scheduling & automation",
        "Weekly strategy calls",
        "Influencer collaboration content",
        "Full community management",
        "Crisis management support",
        "Custom branded templates"
      ],
      popular: false
    }
  ];

  const testimonialLogos = [
    "Ducati Malaysia", "Ban Huat", "TechStart", "Local Retail", "Beauty Brand"
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
              <Link to="/contact" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-green-100 text-green-800">Core Service</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Never Run Out of{" "}
                <span className="text-green-600">Social Content</span>{" "}
                Again.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We combine AI generation with human editing to produce high-quality posts, 
                carousels, and short videos for your brand – month after month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Start Your Content Engine
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Sample Content
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="h-24 bg-gradient-to-br from-blue-100 to-green-100 rounded mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="h-28 bg-gradient-to-br from-yellow-100 to-orange-100 rounded mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="h-36 bg-gradient-to-br from-green-100 to-blue-100 rounded mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Outcomes</h2>
            <p className="text-xl text-gray-600">What you'll achieve with our social media generation service</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {outcome.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{outcome.title}</h3>
                <p className="text-gray-600 text-sm">{outcome.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Focus</h2>
            <p className="text-xl text-gray-600">Optimized content for all major social media platforms</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className={`mx-auto mb-4 p-4 bg-gray-50 rounded-full w-fit ${platform.color}`}>
                  {platform.icon}
                </div>
                <h3 className="text-lg font-semibold">{platform.name}</h3>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Each platform gets content optimized for its unique format, audience, and algorithm
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>✓ Platform-specific sizing</span>
              <span>✓ Optimal posting times</span>
              <span>✓ Hashtag strategies</span>
              <span>✓ Engagement optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Our proven 4-step process for consistent, high-quality content</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Powered by JOeve AI Engine</h3>
            <p className="text-gray-600 mb-4">
              Our AI system leverages advanced visual and video generation technology to create engaging content at scale
            </p>
            <Button variant="outline" asChild>
              <Link to="/ai-diagnostic">
                Try Our AI Diagnostic Tool
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Solution</h2>
            <p className="text-xl text-gray-600">Tailored packages designed to maximize your social media ROI</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative p-8 ${pkg.popular ? 'ring-2 ring-green-500 shadow-xl' : 'shadow-lg'}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
                    <p className="text-sm text-gray-600 mt-1">Tailored to your needs</p>
                  </div>
                  <CardDescription className="mt-4">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Malaysian Brands</h2>
            <p className="text-gray-600">Join successful businesses already using our social media generation service</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {testimonialLogos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Social Media?</h2>
            <p className="text-xl text-gray-600">Tell us about your brand and we'll create a custom content strategy</p>
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
                  <Input id="company" placeholder="Your brand name" />
                </div>
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="beauty">Beauty & Wellness</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label className="text-base font-medium">Current Social Media Platforms *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={platform.name.toLowerCase()} />
                      <Label htmlFor={platform.name.toLowerCase()} className="text-sm">
                        {platform.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="posting-frequency">Current Posting Frequency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How often do you post?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="few-times-week">Few times a week</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="rarely">Rarely/Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget">Monthly Budget</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">RM 500 - RM 1,000</SelectItem>
                      <SelectItem value="growth">RM 1,000 - RM 2,000</SelectItem>
                      <SelectItem value="enterprise">RM 2,000 - RM 5,000</SelectItem>
                      <SelectItem value="custom">RM 5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="pain-points">Current Social Media Challenges *</Label>
                <Textarea 
                  id="pain-points" 
                  placeholder="What are your biggest challenges with social media? (e.g., lack of time, running out of ideas, low engagement, inconsistent posting...)"
                  rows={4}
                />
              </div>
              
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                Get My Custom Content Strategy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/" className="text-2xl font-bold text-green-400 mb-4 block">
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

export default SocialMediaGeneration;