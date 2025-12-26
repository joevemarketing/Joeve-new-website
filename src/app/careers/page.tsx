"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Users, Briefcase, Send } from "lucide-react";
import { useState } from "react";

const positions = [
  {
    title: "Freelance AI Developer",
    type: "Remote Freelance",
    location: "Malaysia",
    duration: "Part-time / Project-based",
    description: "We&apos;re looking for talented AI developers to help build cutting-edge solutions for Malaysian businesses. Work on exciting AI chatbots, automation tools, and web applications.",
    requirements: [
      "Experience with React, Next.js, and TypeScript",
      "Knowledge of AI/ML frameworks (TensorFlow, PyTorch)",
      "Strong understanding of APIs and integrations",
      "Ability to work independently and meet deadlines",
      "Good communication skills in English/Malay"
    ],
    benefits: [
      "Flexible working hours - choose your projects",
      "Work with cutting-edge AI technologies",
      "Competitive project-based compensation",
      "Build your portfolio with real client work",
      "Opportunity for long-term collaboration"
    ],
    contactMethod: "joevesmartsolutions@gmail.com"
  },
  {
    title: "Part-time Social Media Influencer",
    type: "Part-time Partnership",
    location: "Malaysia",
    duration: "Flexible schedule",
    description: "Join our growing network of social media influencers focusing on cosmetic and beauty products. Perfect for students, content creators, or anyone looking to monetize their social presence.",
    requirements: [
      "Active presence on at least 2 social platforms",
      "Interest in beauty, cosmetic, or lifestyle content",
      "Basic understanding of content creation",
      "Minimum 1,000 engaged followers combined",
      "Age 18+ with valid identification",
      "Based in Malaysia (any state)"
    ],
    benefits: [
      "Free product samples and testing opportunities",
      "Performance-based compensation structure",
      "Creative freedom with content direction",
      "Build your personal brand and portfolio",
      "Networking opportunities with other creators",
      "Potential for long-term brand partnerships"
    ],
    contactMethod: "joevesmartsolutions@gmail.com"
  }
];

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-0 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our <span className="text-cyan-400">Freelance Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We&apos;re looking for talented Malaysian freelancers and influencers to join our growing team. 
            Work on exciting projects with flexible schedules and competitive compensation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
              <Users className="w-4 h-4" />
              Open Positions: 2
            </div>
            <div className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">
              <MapPin className="w-4 h-4" />
              Malaysia Only
            </div>
            <div className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30">
              <Clock className="w-4 h-4" />
              Flexible Hours
            </div>
          </div>
        </motion.div>

        {/* Positions Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-white/10"
            >
              {/* Position Header */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{position.title}</h3>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {position.duration}
                  </div>
                </div>
              </div>

              {/* Position Details */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {position.description}
                </p>

                {/* Toggle Button */}
                <Button
                  variant="outline"
                  className="w-full mb-4 justify-between"
                  onClick={() => setSelectedPosition(selectedPosition === index ? null : index)}
                >
                  <span>View Details</span>
                  <ArrowLeft className={`w-4 h-4 transition-transform ${
                    selectedPosition === index ? 'rotate-180' : ''
                  }`} />
                </Button>

                {/* Expanded Details */}
                {selectedPosition === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10 pt-4"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Requirements */}
                      <div>
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          What You Get
                        </h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benIndex) => (
                            <li key={benIndex} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-white/10">
                      <p className="text-sm text-gray-400 mb-3">
                        Interested? Send us your portfolio and we&apos;ll get in touch!
                      </p>
                      <Button className="w-full" asChild>
                        <Link href={`mailto:${position.contactMethod}?subject=Application for ${encodeURIComponent(position.title)}`}>
                          <Send className="w-4 h-4 mr-2" />
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Work With JOeve?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Flexible Work</h4>
                <p className="text-gray-300 text-sm">
                  Choose your projects and work hours that fit your lifestyle. Perfect for students, parents, or anyone seeking work-life balance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Skill Development</h4>
                <p className="text-gray-300 text-sm">
                  Gain hands-on experience with cutting-edge AI and digital technologies. Build your portfolio while earning.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Community</h4>
                <p className="text-gray-300 text-sm">
                  Join a growing network of Malaysian freelancers and creators. Share knowledge, find opportunities, and grow together.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
