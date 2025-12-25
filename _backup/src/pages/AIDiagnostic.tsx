import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Brain, Zap, Target, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AIDiagnostic = () => {
  const diagnosticBenefits = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Analysis",
      description: "Our advanced AI analyzes your business needs and recommends the best digital solutions."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Personalized Recommendations",
      description: "Get tailored suggestions based on your industry, goals, and current digital maturity."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Growth Roadmap",
      description: "Receive a clear roadmap with prioritized actions to accelerate your digital transformation."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Instant Results",
      description: "Get your diagnostic report immediately with actionable insights and next steps."
    }
  ];

  const businessChallenges = [
    "Low online visibility",
    "Inconsistent social media presence",
    "Manual processes taking too much time",
    "Difficulty generating leads online",
    "Poor website performance",
    "Lack of customer engagement",
    "No clear digital strategy",
    "Competitors outperforming online"
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-800">Free AI Diagnostic</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Discover Your{" "}
                <span className="text-blue-600">Digital Growth</span>{" "}
                Opportunities
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get a personalized AI-powered analysis of your business and discover which of our 
                three core services can accelerate your growth the most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Free Diagnostic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  See Sample Report
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <Brain className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">AI Analysis in Progress</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm">Business profile analyzed</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm">Digital maturity assessed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3"></div>
                    <span className="text-sm">Generating recommendations...</span>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">
                      Recommended: Web App Development + Social Media Generation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Use Our AI Diagnostic?</h2>
            <p className="text-xl text-gray-600">Get clarity on your digital transformation journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diagnosticBenefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Free AI Diagnostic</h2>
            <p className="text-xl text-gray-600">Takes 3-5 minutes • Get instant results</p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-8">
              {/* Business Information */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Business Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="business-name">Business Name *</Label>
                    <Input id="business-name" placeholder="Your business name" />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry *</Label>
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
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <Label htmlFor="business-size">Business Size *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of employees" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 employees</SelectItem>
                        <SelectItem value="6-20">6-20 employees</SelectItem>
                        <SelectItem value="21-50">21-50 employees</SelectItem>
                        <SelectItem value="51-100">51-100 employees</SelectItem>
                        <SelectItem value="100+">100+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="revenue">Annual Revenue (Optional)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-100k">Under RM 100K</SelectItem>
                        <SelectItem value="100k-500k">RM 100K - RM 500K</SelectItem>
                        <SelectItem value="500k-1m">RM 500K - RM 1M</SelectItem>
                        <SelectItem value="1m-5m">RM 1M - RM 5M</SelectItem>
                        <SelectItem value="5m+">RM 5M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Current Digital Presence */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Current Digital Presence</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="website">Do you have a website? *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-modern">Yes, modern and updated</SelectItem>
                        <SelectItem value="yes-outdated">Yes, but outdated</SelectItem>
                        <SelectItem value="basic">Basic website/landing page</SelectItem>
                        <SelectItem value="no">No website</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="social-media">Social Media Presence *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active on multiple platforms</SelectItem>
                        <SelectItem value="some">Some presence, inconsistent</SelectItem>
                        <SelectItem value="minimal">Minimal presence</SelectItem>
                        <SelectItem value="none">No social media presence</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Business Challenges */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Current Business Challenges</h3>
                <p className="text-gray-600 mb-4">Select all that apply to your business:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {businessChallenges.map((challenge, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Checkbox id={`challenge-${index}`} />
                      <Label htmlFor={`challenge-${index}`} className="text-sm">
                        {challenge}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Primary Business Goals</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="primary-goal">What's your main goal? *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select primary goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="increase-sales">Increase online sales</SelectItem>
                        <SelectItem value="generate-leads">Generate more leads</SelectItem>
                        <SelectItem value="brand-awareness">Build brand awareness</SelectItem>
                        <SelectItem value="automate-processes">Automate business processes</SelectItem>
                        <SelectItem value="improve-efficiency">Improve operational efficiency</SelectItem>
                        <SelectItem value="customer-engagement">Enhance customer engagement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">When do you want to achieve this? *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="3months">Within 3 months</SelectItem>
                        <SelectItem value="6months">Within 6 months</SelectItem>
                        <SelectItem value="1year">Within 1 year</SelectItem>
                        <SelectItem value="planning">Just planning ahead</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Investment Budget</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget-range">Monthly marketing budget *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under RM 1,000</SelectItem>
                        <SelectItem value="1k-3k">RM 1,000 - RM 3,000</SelectItem>
                        <SelectItem value="3k-5k">RM 3,000 - RM 5,000</SelectItem>
                        <SelectItem value="5k-10k">RM 5,000 - RM 10,000</SelectItem>
                        <SelectItem value="10k+">RM 10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="project-budget">One-time project budget</Label>
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
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contact-name">Your Name *</Label>
                    <Input id="contact-name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <Label htmlFor="contact-phone">Phone (Optional)</Label>
                    <Input id="contact-phone" placeholder="+60 12-345 6789" />
                  </div>
                  <div>
                    <Label htmlFor="contact-role">Your Role *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="owner">Business Owner</SelectItem>
                        <SelectItem value="ceo">CEO/Founder</SelectItem>
                        <SelectItem value="marketing">Marketing Manager</SelectItem>
                        <SelectItem value="operations">Operations Manager</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additional-info">Additional Information (Optional)</Label>
                <Textarea 
                  id="additional-info" 
                  placeholder="Tell us anything else about your business, specific challenges, or goals that might help us provide better recommendations..."
                  rows={4}
                />
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">What happens next?</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Our AI analyzes your responses instantly</li>
                  <li>You receive a personalized diagnostic report via email</li>
                  <li>We recommend the best services for your business</li>
                  <li>Optional: Book a free consultation to discuss your roadmap</li>
                </ol>
              </div>
              
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg">
                Get My AI Diagnostic Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Integration Note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Powered by JOeve AI Engine</h3>
            <p className="text-blue-100 mb-6">
              This diagnostic tool uses the same AI technology that powers our core services, 
              ensuring accurate analysis and recommendations tailored to your business.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link to="/" className="text-2xl font-bold text-blue-400 mb-4 block">
            JOeve Smart Solutions
          </Link>
          <p className="text-gray-400 mb-4">
            AI-powered digital solutions for Malaysian businesses
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

export default AIDiagnostic;