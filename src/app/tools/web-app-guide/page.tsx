"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Code, DollarSign, Users, Clock, Mail, CheckCircle, Target, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollAnimations";

interface SurveyData {
  projectScope: string;
  budgetRange: string;
  timelineUrgency: string;
  technicalRequirements: string[];
  teamSize: string;
  email: string;
}

interface DevelopmentRecommendations {
  technologyStack: string[];
  estimatedTimeline: string;
  teamSize: string;
  budgetEstimate: string;
  riskLevel: string;
  recommendedApproach: string;
}

interface QuestionOption {
  value: string;
  label: string;
  complexity?: number;
  budget?: number;
  urgency?: number;
  size?: number;
}

interface Question {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  type?: string;
  placeholder?: string;
  options?: QuestionOption[];
  multiSelect?: boolean;
}

export default function WebAppGuide() {
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    projectScope: "",
    budgetRange: "",
    timelineUrgency: "",
    technicalRequirements: [],
    teamSize: "",
    email: ""
  });
  const [recommendations, setRecommendations] = useState<DevelopmentRecommendations | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 5;

  const questions: Question[] = [
    {
      id: "projectScope",
      title: "Project Scope",
      subtitle: "What's the complexity of your web application?",
      icon: <Target className="w-6 h-6" />,
      options: [
        { value: "simple", label: "Simple Website (Landing pages, basic forms)", complexity: 1 },
        { value: "moderate", label: "Business Application (CRM, Dashboard, E-commerce)", complexity: 2 },
        { value: "complex", label: "Enterprise Solution (Multi-tenant, API integrations)", complexity: 3 },
        { value: "innovative", label: "Innovative Platform (AI/ML, Real-time features)", complexity: 4 }
      ]
    },
    {
      id: "budgetRange",
      title: "Budget Range",
      subtitle: "What's your estimated budget for this project?",
      icon: <DollarSign className="w-6 h-6" />,
      options: [
        { value: "10-25k", label: "RM 10,000 - RM 25,000", budget: 1 },
        { value: "25-50k", label: "RM 25,000 - RM 50,000", budget: 2 },
        { value: "50-100k", label: "RM 50,000 - RM 100,000", budget: 3 },
        { value: "100k+", label: "RM 100,000+", budget: 4 }
      ]
    },
    {
      id: "timelineUrgency",
      title: "Timeline Urgency",
      subtitle: "When do you need this project completed?",
      icon: <Clock className="w-6 h-6" />,
      options: [
        { value: "urgent", label: "Urgent (1-2 months)", urgency: 4 },
        { value: "standard", label: "Standard (3-6 months)", urgency: 2 },
        { value: "flexible", label: "Flexible (6-12 months)", urgency: 1 }
      ]
    },
    {
      id: "technicalRequirements",
      title: "Technical Requirements",
      subtitle: "Select the technologies/features you need (multiple selections allowed)",
      icon: <Code className="w-6 h-6" />,
      multiSelect: true,
      options: [
        { value: "responsive", label: "Responsive Design" },
        { value: "authentication", label: "User Authentication" },
        { value: "database", label: "Database Integration" },
        { value: "api", label: "API Development" },
        { value: "payment", label: "Payment Processing" },
        { value: "realtime", label: "Real-time Features" },
        { value: "mobile", label: "Mobile App Integration" },
        { value: "ai", label: "AI/ML Features" },
        { value: "analytics", label: "Analytics Dashboard" },
        { value: "cms", label: "Content Management System" }
      ]
    },
    {
      id: "teamSize",
      title: "Team Size",
      subtitle: "How many developers will be working on this project?",
      icon: <Users className="w-6 h-6" />,
      options: [
        { value: "solo", label: "Solo Developer", size: 1 },
        { value: "small", label: "Small Team (2-3 developers)", size: 2 },
        { value: "medium", label: "Medium Team (4-6 developers)", size: 3 },
        { value: "large", label: "Large Team (7+ developers)", size: 4 }
      ]
    }
  ];

  const generateRecommendations = (data: SurveyData): DevelopmentRecommendations => {
    const projectQuestion = questions[0];
    const budgetQuestion = questions[1];
    const timelineQuestion = questions[2];
    const teamQuestion = questions[4];
    
    const complexity = projectQuestion.options?.find(opt => opt.value === data.projectScope)?.complexity || 2;
    const budget = budgetQuestion.options?.find(opt => opt.value === data.budgetRange)?.budget || 2;
    const urgency = timelineQuestion.options?.find(opt => opt.value === data.timelineUrgency)?.urgency || 2;
    const teamSize = teamQuestion.options?.find(opt => opt.value === data.teamSize)?.size || 2;
    const techCount = data.technicalRequirements.length;

    // Technology Stack Recommendations
    const techStack = [];
    if (complexity <= 2) {
      techStack.push("React.js", "Node.js", "PostgreSQL");
    } else if (complexity <= 3) {
      techStack.push("Next.js", "TypeScript", "PostgreSQL", "Redis");
    } else {
      techStack.push("Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes");
    }

    if (techCount > 5) {
      techStack.push("Microservices Architecture", "API Gateway");
    }

    // Timeline Estimation
    let timeline = "3-6 months";
    if (urgency === 4) timeline = "1-2 months";
    else if (urgency === 1) timeline = "6-12 months";

    // Budget Estimation
    let budgetEstimate = "RM 25,000 - RM 50,000";
    if (budget === 1) budgetEstimate = "RM 10,000 - RM 25,000";
    else if (budget === 3) budgetEstimate = "RM 50,000 - RM 100,000";
    else if (budget === 4) budgetEstimate = "RM 100,000+";

    // Risk Assessment
    let riskLevel = "Low";
    if (complexity >= 3 && urgency >= 3) riskLevel = "High";
    else if (complexity >= 2 || urgency >= 3) riskLevel = "Medium";

    // Recommended Approach
    let approach = "Agile Development";
    if (urgency === 4) approach = "Rapid Prototyping + Agile";
    else if (complexity >= 3) approach = "Scaled Agile Framework (SAFe)";

    return {
      technologyStack: techStack,
      estimatedTimeline: timeline,
      teamSize: data.teamSize,
      budgetEstimate: budgetEstimate,
      riskLevel: riskLevel,
      recommendedApproach: approach
    };
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Generate recommendations
      const results = generateRecommendations(surveyData);
      setRecommendations(results);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!surveyData.email || !recommendations) {
      alert('Please complete all steps and provide your email address.');
      return;
    }

    setIsLoading(true);
    try {
      // Submit survey data to API
      const response = await fetch('/api/submit-dev-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...surveyData,
          recommendations,
          survey_type: 'web_app_guide'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert(error instanceof Error ? error.message : 'There was an error submitting your survey. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const updateSurveyData = (field: keyof SurveyData, value: string | string[]) => {
    setSurveyData(prev => ({ ...prev, [field]: value }));
  };

  const toggleTechnicalRequirement = (requirement: string) => {
    const current = surveyData.technicalRequirements;
    if (current.includes(requirement)) {
      updateSurveyData('technicalRequirements', current.filter(r => r !== requirement));
    } else {
      updateSurveyData('technicalRequirements', [...current, requirement]);
    }
  };

  const currentQuestion = questions[currentStep - 1];

  if (isSubmitted) {
    return (
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-joeve-blue-deep via-joeve-blue-dark to-joeve-blue-deep">
        <div className="container mx-auto px-4 py-20">
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Development Guide Generated!</h2>
              <p className="text-gray-300 mb-6">
                Thank you for completing our assessment. Your personalized development guide has been sent to {surveyData.email}.
              </p>
              <p className="text-gray-400 mb-8">
                Check your email for the download link. The guide includes technology stack recommendations, timeline estimates, and implementation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded-full" asChild>
                  <a href="/tools/download-center">Access Download Center</a>
                </Button>
                <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold px-6 py-3 rounded-full" asChild>
                  <Link href="/tools">Back to Tools</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-joeve-blue-deep via-joeve-blue-dark to-joeve-blue-deep">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <FileText className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Web App Development Guide</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get personalized recommendations for your web application development project based on your specific needs
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
          </div>

          {/* Survey Content */}
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                {currentQuestion.icon}
                <CardTitle className="text-xl text-white">{currentQuestion.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-300">
                {currentQuestion.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentQuestion.multiSelect ? (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id={option.value}
                        checked={surveyData.technicalRequirements.includes(option.value)}
                        onChange={() => toggleTechnicalRequirement(option.value)}
                        className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                      />
                      <Label htmlFor={option.value} className="text-white cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              ) : currentQuestion.options ? (
                <RadioGroup
                  value={surveyData[currentQuestion.id as keyof SurveyData] as string}
                  onValueChange={(value) => updateSurveyData(currentQuestion.id as keyof SurveyData, value)}
                  className="space-y-3"
                >
                  {currentQuestion.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="text-white cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      type={currentQuestion.type || "text"}
                      placeholder={currentQuestion.placeholder}
                      value={surveyData[currentQuestion.id as keyof SurveyData] as string}
                      onChange={(e) => updateSurveyData(currentQuestion.id as keyof SurveyData, e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              variant="outline"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold px-6 py-3 rounded-full"
            >
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!surveyData[currentQuestion.id as keyof SurveyData] || (currentQuestion.id === 'technicalRequirements' && surveyData.technicalRequirements.length === 0)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all"
              >
                Generate Guide
              </Button>
            )}
          </div>

          {/* Recommendations */}
          {recommendations && currentStep > totalSteps && (
            <ScrollReveal className="mt-8">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Zap className="w-6 h-6 text-green-400" />
                    Your Development Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Technology Stack */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Recommended Technology Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {recommendations.technologyStack.map((tech, index) => (
                          <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Timeline & Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                        <div className="text-xl font-bold text-blue-400 mb-1">{recommendations.estimatedTimeline}</div>
                        <div className="text-gray-300">Estimated Timeline</div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                        <div className="text-xl font-bold text-green-400 mb-1">{recommendations.budgetEstimate}</div>
                        <div className="text-gray-300">Budget Estimate</div>
                      </div>
                    </div>

                    {/* Risk & Approach */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                        <div className="text-xl font-bold text-yellow-400 mb-1">{recommendations.riskLevel}</div>
                        <div className="text-gray-300">Risk Level</div>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                        <div className="text-lg font-bold text-purple-400 mb-1">{recommendations.recommendedApproach}</div>
                        <div className="text-gray-300">Recommended Approach</div>
                      </div>
                    </div>

                    {/* Email Capture */}
                    <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Mail className="w-5 h-5 text-yellow-400" />
                        <h4 className="text-white font-semibold">Get Your Detailed Development Guide</h4>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Enter your email to receive a comprehensive PDF guide with detailed technology recommendations, 
                        implementation roadmap, and best practices for your specific project.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={surveyData.email}
                          onChange={(e) => updateSurveyData('email', e.target.value)}
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                        />
                        <Button
                          onClick={handleSubmit}
                          disabled={!surveyData.email || isLoading}
                          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all"
                        >
                          {isLoading ? "Sending..." : "Get Guide"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}