import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Malaysian Business: Trends for 2025",
      excerpt: "Explore how AI technology is reshaping the Malaysian business landscape and what opportunities lie ahead for forward-thinking companies.",
      category: "AI Trends",
      author: "Thomas Tan",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "bg-gradient-to-br from-blue-100 to-purple-100"
    },
    {
      title: "Why Every Malaysian SME Needs AI-Generated Video Content",
      excerpt: "Discover how AI-generated videos are revolutionizing marketing for small and medium enterprises across Malaysia, with real case studies and ROI data.",
      category: "Video Marketing",
      author: "Sarah Chen",
      date: "December 3, 2024",
      readTime: "7 min read",
      image: "bg-gradient-to-br from-purple-100 to-pink-100"
    },
    {
      title: "Social Media Automation: A Game-Changer for Malaysian Brands",
      excerpt: "Learn how automated social media generation is helping Malaysian businesses maintain consistent online presence while saving time and resources.",
      category: "Social Media",
      author: "Ahmad Rahman",
      date: "December 1, 2024",
      readTime: "6 min read",
      image: "bg-gradient-to-br from-green-100 to-blue-100"
    },
    {
      title: "Building Custom Web Apps: A Malaysian Business Guide",
      excerpt: "Everything you need to know about developing custom web applications for your Malaysian business, from planning to deployment.",
      category: "Web Development",
      author: "Lisa Wong",
      date: "November 28, 2024",
      readTime: "8 min read",
      image: "bg-gradient-to-br from-orange-100 to-red-100"
    },
    {
      title: "Digital Transformation Success Stories from Penang",
      excerpt: "Real stories of how Penang-based businesses have successfully transformed their operations using AI-powered digital solutions.",
      category: "Case Studies",
      author: "David Lim",
      date: "November 25, 2024",
      readTime: "10 min read",
      image: "bg-gradient-to-br from-indigo-100 to-purple-100"
    },
    {
      title: "ROI of AI: Measuring Success in Digital Transformation",
      excerpt: "A comprehensive guide to measuring the return on investment of AI implementations in Malaysian businesses, with practical metrics and benchmarks.",
      category: "Business Strategy",
      author: "Priya Sharma",
      date: "November 22, 2024",
      readTime: "9 min read",
      image: "bg-gradient-to-br from-yellow-100 to-orange-100"
    }
  ];

  const categories = [
    "All Posts",
    "AI Trends",
    "Video Marketing", 
    "Social Media",
    "Web Development",
    "Case Studies",
    "Business Strategy"
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
          <Badge className="mb-6 bg-blue-100 text-blue-800">Insights & Resources</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            JOeve Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights on AI, digital transformation, and business growth strategies for Malaysian companies.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4">Featured Post</Badge>
          </div>
          
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 lg:h-auto"></div>
              <div className="p-8 lg:p-12">
                <Badge variant="secondary" className="mb-4">
                  {blogPosts[0].category}
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Insights and strategies for your digital transformation journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className={`h-48 ${post.image} rounded-t-lg`}></div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with JOeve Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles, case studies, and AI insights delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-gray-600">Explore our most read content categories</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI & Automation</h3>
              <p className="text-gray-600 mb-4">
                Latest trends and practical applications of AI in Malaysian businesses.
              </p>
              <Button variant="outline">
                Explore Articles
              </Button>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Strategies</h3>
              <p className="text-gray-600 mb-4">
                Proven strategies for scaling your business with digital solutions.
              </p>
              <Button variant="outline">
                Read More
              </Button>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Real success stories from Malaysian businesses using our solutions.
              </p>
              <Button variant="outline">
                View Cases
              </Button>
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

export default Blog;