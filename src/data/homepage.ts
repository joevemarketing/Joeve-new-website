export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
  image?: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
  role?: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
}

export const services: Service[] = [
  {
    id: "ai-chatbot",
    title: "AI Smart Chatbot",
    description: "24/7 intelligent customer engagement with natural language processing and machine learning capabilities.",
    icon: "MessageCircle",
    gradient: "from-blue-500 to-cyan-500",
    image: "/images/ai-robot.png",
    href: "/services/smart-chatbot",
    features: ["Natural Language Processing", "Multi-language Support", "CRM Integration", "Analytics Dashboard"]
  },
  {
    id: "social-media",
    title: "Social Media Generation",
    description: "AI-powered content creation and automated posting across all social media platforms.",
    icon: "Share2",
    gradient: "from-purple-500 to-pink-500",
    image: "/images/service-social.jpg",
    href: "/services/social-media-generation",
    features: ["Content Generation", "Automated Scheduling", "Brand Consistency", "Performance Analytics"]
  },
  {
    id: "video-production",
    title: "Gen-AI Video Production",
    description: "Professional video content creation using advanced AI technology for marketing and training.",
    icon: "Video",
    gradient: "from-orange-500 to-red-500",
    image: "/images/service-video.jpg",
    href: "/services/gen-ai-video-production",
    features: ["AI Script Writing", "Voice Generation", "Visual Effects", "Multi-format Output"]
  },
  {
    id: "web-development",
    title: "Web App Development",
    description: "Custom web applications built with modern technologies and AI integration capabilities.",
    icon: "Code",
    gradient: "from-green-500 to-teal-500",
    image: "/images/service-webapp.jpg",
    href: "/services/web-app-software-development",
    features: ["Custom Development", "AI Integration", "Scalable Architecture", "Mobile Responsive"]
  },
  {
    id: "sem-services",
    title: "SEM Services",
    description: "Search engine marketing with AI-optimized campaigns and real-time performance tracking.",
    icon: "Search",
    gradient: "from-indigo-500 to-blue-500",
    image: "/images/landing-sem-hero.jpg",
    href: "/services/sem",
    features: ["Campaign Optimization", "Keyword Research", "Performance Tracking", "ROI Analysis"]
  },
  {
    id: "digital-bizcard",
    title: "Jo Bizcard",
    description: "Interactive digital business cards with NFC technology and analytics tracking.",
    icon: "CreditCard",
    gradient: "from-yellow-500 to-orange-500",
    image: "/images/landing-bizcard-hero.jpg",
    href: "/services/jo-bizcard",
    features: ["NFC Technology", "Analytics Tracking", "Custom Design", "Contact Management"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    company: "TechStart Malaysia",
    role: "Marketing Director",
    quote: "Jo Eve's AI chatbot transformed our customer service. Response time improved by 80% and customer satisfaction skyrocketed.",
    rating: 5,
    image: undefined
  },
  {
    id: "2",
    name: "Ahmad Hassan",
    company: "Kuala Lumpur Retail Group",
    role: "CEO",
    quote: "The social media automation saved us 15 hours per week. Our engagement increased 300% in just 2 months.",
    rating: 5,
    image: undefined
  },

  {
    id: "3",
    name: "Lim Wei Ming",
    company: "Penang Manufacturing Co.",
    role: "Operations Manager",
    quote: "The web app development team delivered beyond expectations. Our custom solution improved efficiency by 60%.",
    rating: 5,
    image: undefined
  },
  {
    id: "4",
    name: "Mr. Keoh",
    company: "Ducati Penang",
    role: "Manager",
    quote: "The AI chatbot has been a game-changer for our superbike sales. We're now generating quality leads 24/7 and our conversion rate has increased significantly.",
    rating: 5,
    image: undefined
  }
];

export const clients: Client[] = [
  { id: "1", name: "BSL", logo: "/images/BSL.webp", industry: "Technology" },
  { id: "2", name: "Ducati", logo: "/images/Ducati.webp", industry: "Retail" },
  { id: "3", name: "H-D", logo: "/images/H-D.webp", industry: "Software" },
  { id: "4", name: "Kamay", logo: "/images/Kamay.webp", industry: "Manufacturing" },
  { id: "5", name: "Promedia", logo: "/images/Promedia.webp", industry: "Finance" },
  { id: "6", name: "WTH", logo: "/images/WTH.webp", industry: "Hospitality" },
  { id: "7", name: "Irama", logo: "/images/irama.webp", industry: "E-commerce" },
  { id: "8", name: "Philea", logo: "/images/philea.webp", industry: "Healthcare" }
];