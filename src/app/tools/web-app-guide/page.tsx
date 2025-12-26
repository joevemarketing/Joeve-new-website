"use client";

import { useState } from "react";
import { FileText, Code, DollarSign, Users, Clock, Mail, CheckCircle, Target, Zap, Settings, Download } from "lucide-react";

interface ProjectData {
  appType: string;
  complexity: string;
  framework: string;
  description: string;
  features: string[];
}

interface TechStack {
  frontend: string;
  framework: string;
  styling: string;
  state: string;
}

export default function WebAppGuide() {
  const [projectData, setProjectData] = useState<ProjectData>({
    appType: "",
    complexity: "",
    framework: "",
    description: "",
    features: []
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<any>(null);
  const [loadingStep, setLoadingStep] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const techStacks: { [key: string]: TechStack } = {
    react: { frontend: "React", framework: "Next.js", styling: "Tailwind CSS", state: "Zustand/Redux" },
    vue: { frontend: "Vue", framework: "Nuxt", styling: "Tailwind CSS / Vuetify", state: "Pinia" },
    angular: { frontend: "Angular", framework: "Angular Universal", styling: "Angular Material", state: "NgRx" },
    svelte: { frontend: "Svelte", framework: "SvelteKit", styling: "Tailwind CSS", state: "Svelte Stores" },
    vanilla: { frontend: "Vanilla JS", framework: "Vite (Build Tool)", styling: "CSS Variables", state: "Custom State Pattern" },
    suggest: { frontend: "To be decided", framework: "Based on complexity", styling: "CSS Modules", state: "Context API" }
  };

  const complexStrategies: { [key: string]: string } = {
    mvp: "Focus on speed to market. Use managed services (Firebase/Supabase) to reduce backend overhead. Avoid over-engineering.",
    growth: "Implement separation of concerns. Build a modular monolith or microservices backend. Use CI/CD pipelines from day one.",
    enterprise: "Prioritize security (OAuth2, RBAC), scalability (Load Balancing, Caching), and maintainability. Document all APIs."
  };

  const appTypes = [
    { value: "landing", label: "Landing Page / Marketing" },
    { value: "dashboard", label: "Admin Dashboard / SaaS" },
    { value: "ecommerce", label: "E-Commerce Store" },
    { value: "social", label: "Social Network / Community" },
    { value: "portfolio", label: "Portfolio / Blog" }
  ];

  const complexities = [
    { value: "mvp", label: "MVP (Minimum Viable Product)" },
    { value: "growth", label: "Growth Stage (Scalable)" },
    { value: "enterprise", label: "Enterprise (High Security/Load)" }
  ];

  const frameworks = [
    { value: "suggest", label: "Suggest based on needs" },
    { value: "react", label: "React / Next.js" },
    { value: "vue", label: "Vue / Nuxt" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte / SvelteKit" },
    { value: "vanilla", label: "Vanilla HTML/JS" }
  ];

  const features = [
    { id: "auth", label: "Auth & Users", icon: "🔐" },
    { id: "database", label: "Database", icon: "🗄️" },
    { id: "payments", label: "Payments", icon: "💳" },
    { id: "api", label: "3rd Party API", icon: "🔗" },
    { id: "realtime", label: "Real-time", icon: "⚡" },
    { id: "cms", label: "CMS / Blog", icon: "📝" }
  ];

  const handleInputChange = (field: keyof ProjectData, value: string | string[]) => {
    setProjectData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature: string) => {
    setProjectData(prev => {
      const newFeatures = prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature];
      return { ...prev, features: newFeatures };
    });
  };

  const generatePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectData.appType || !projectData.complexity) {
      alert("Please select application type and complexity");
      return;
    }

    setIsGenerating(true);
    setPlan(null);
    setIsComplete(false);

    const steps = [
      "Parsing project requirements...",
      "Consulting architectural patterns...",
      "Calculating optimal tech stack...",
      "Compiling strategy roadmap...",
      "Finalizing plan..."
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setLoadingStep(steps[stepIndex]);
        stepIndex++;
      }
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      
      // Generate plan
      let stackKey = projectData.framework;
      if (stackKey === "suggest") {
        if (projectData.appType === "dashboard" || projectData.appType === "ecommerce") stackKey = "react";
        else if (projectData.appType === "portfolio") stackKey = "svelte";
        else stackKey = "vanilla";
      }

      const selectedStack = techStacks[stackKey];
      const baseStrategy = complexStrategies[projectData.complexity];
      
      let strategyPoints = [baseStrategy];
      
      if (projectData.features.includes("realtime")) {
        strategyPoints.push("Implement WebSockets (Socket.io) or Server-Sent Events for live updates.");
      }
      if (projectData.features.includes("payments")) {
        strategyPoints.push("Integrate Stripe or PayPal SDK with webhooks for secure transaction handling.");
      }
      if (projectData.features.includes("auth")) {
        strategyPoints.push("Use NextAuth.js or Firebase Auth for JWT-based session management.");
      }

      const archItems = [
        `Pattern: ${projectData.complexity === "enterprise" ? "Microservices Architecture" : "Monolithic Architecture"}`,
        `Deployment: ${projectData.complexity === "mvp" ? "Serverless/Edge Functions (Vercel/Netlify)" : "Containerized (Docker/K8s)"}`,
        `Data Structure: ${projectData.features.includes("database") ? "Relational (PostgreSQL) or NoSQL (MongoDB) depending on data consistency needs" : "Stateless primarily, possible LocalStorage usage"}`
      ];

      const stackItems = [
        `Frontend Library: ${selectedStack.frontend}`,
        `Framework/Runner: ${selectedStack.framework}`,
        `Styling: ${selectedStack.styling}`,
        `State Management: ${selectedStack.state}`
      ];

      const newPlan = {
        date: new Date().toLocaleDateString(),
        type: projectData.appType.charAt(0).toUpperCase() + projectData.appType.slice(1),
        complexity: projectData.complexity.charAt(0).toUpperCase() + projectData.complexity.slice(1),
        archItems,
        stackItems,
        strategyPoints
      };

      setPlan(newPlan);
      setIsGenerating(false);
      setIsComplete(true);
    }, 2500);
  };

  const downloadPDF = () => {
    if (!plan) return;

    const pdfContent = `WEB APP DEVELOPMENT PLAN
========================

Project Configuration
--------------------
Date: ${plan.date}
Type: ${plan.type}
Complexity: ${plan.complexity}
${projectData.description ? `Description: ${projectData.description}` : ''}
${projectData.features.length > 0 ? `Features: ${projectData.features.join(', ')}` : ''}

Architecture Overview
------------------
${plan.archItems.map((item: string) => `• ${item}`).join('\n')}

Recommended Tech Stack
--------------------
${plan.stackItems.map((item: string) => `• ${item}`).join('\n')}

Development Strategy
--------------------
${plan.strategyPoints.map((item: string) => `• ${item}`).join('\n')}

Next Steps
----------
1. Set up development environment
2. Initialize project structure
3. Implement core functionality
4. Add authentication and security
5. Deploy and test

Generated by JOeve Smart Solutions
${new Date().getFullYear()} - All rights reserved`;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'web-app-development-plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 pt-28 max-w-7xl">
        {/* Header */}
        <div>
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">Web App Development Guide</h1>
            <p className="text-lg text-gray-300">Generate a professional technical roadmap for your next project</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Form */}
          <div>
            <div className="bg-black/40 backdrop-blur-md border border-gray-800 shadow-2xl">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-b border-gray-700 p-6">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Settings className="w-5 h-5" />
                  Configuration
                </div>
              </div>
              <div className="p-6">
                <form onSubmit={generatePlan} className="space-y-6">
                  {/* Application Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Application Type</label>
                    <select
                      value={projectData.appType}
                      onChange={(e) => handleInputChange("appType", e.target.value)}
                      className="w-full px-4 py-2 bg-black/60 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                      required
                    >
                      <option value="" disabled>Select type...</option>
                      {appTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-gray-900">{type.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Complexity */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Scale & Complexity</label>
                    <select
                      value={projectData.complexity}
                      onChange={(e) => handleInputChange("complexity", e.target.value)}
                      className="w-full px-4 py-2 bg-black/60 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                      required
                    >
                      {complexities.map((complexity) => (
                        <option key={complexity.value} value={complexity.value} className="bg-gray-900">{complexity.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Core Features</label>
                    <span className="text-xs text-gray-400 mb-3 block">Select all that apply</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {features.map((feature) => (
                        <label key={feature.id} className="relative">
                          <input
                            type="checkbox"
                            checked={projectData.features.includes(feature.id)}
                            onChange={() => handleFeatureToggle(feature.id)}
                            className="sr-only"
                          />
                          <div className={`flex flex-col items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                            projectData.features.includes(feature.id)
                              ? "border-cyan-500 bg-cyan-500/20 text-cyan-300 font-semibold"
                              : "border-gray-600 text-gray-400 hover:border-gray-500 hover:bg-gray-500/10"
                          }`}>
                            <span className="text-xl mb-1">{feature.icon}</span>
                            <span className="text-xs text-center">{feature.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Framework */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Preferred Tech Stack (Optional)</label>
                    <select
                      value={projectData.framework}
                      onChange={(e) => handleInputChange("framework", e.target.value)}
                      className="w-full px-4 py-2 bg-black/60 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                    >
                      {frameworks.map((framework) => (
                        <option key={framework.value} value={framework.value} className="bg-gray-900">{framework.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Project Description</label>
                    <textarea
                      value={projectData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Briefly describe the main goal of your application..."
                      rows={4}
                      className="w-full px-4 py-2 bg-black/60 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Generate Development Plan
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div>
            <div className="bg-black/40 backdrop-blur-md border border-gray-800 shadow-2xl">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border-b border-gray-700 p-6">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Target className="w-5 h-5" />
                  Your Development Roadmap
                </div>
              </div>
              
              <div className="p-6">
                {/* Placeholder State */}
                {!isGenerating && !plan && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <FileText className="w-16 h-16 text-gray-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">Ready to Plan</h3>
                    <p className="text-gray-500">Configure your project details to generate a comprehensive architecture and strategy plan</p>
                  </div>
                )}

                {/* Loading State */}
                {isGenerating && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-10 h-10 border-4 border-gray-600 border-t-gray-400 rounded-full animate-spin mb-4"></div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">Calculating Requirements...</h3>
                    <p className="text-sm text-gray-400">{loadingStep}</p>
                  </div>
                )}

                {/* Results State */}
                {plan && isComplete && (
                  <div className="space-y-6">
                    {/* Metadata */}
                    <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/30 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-cyan-300">Date:</span>
                        <div className="text-white">{plan.date}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-cyan-300">Type:</span>
                        <div className="text-white">{plan.type}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-cyan-300">Complexity:</span>
                        <div className="text-white">{plan.complexity}</div>
                      </div>
                    </div>

                    {/* Architecture */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-l-cyan-500 pl-3">Architecture Overview</h3>
                      <ul className="space-y-2">
                        {plan.archItems.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-200">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-l-cyan-500 pl-3">Recommended Tech Stack</h3>
                      <ul className="space-y-2">
                        {plan.stackItems.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Code className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-200">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Strategy */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-l-cyan-500 pl-3">Development Strategy</h3>
                      <ul className="space-y-2">
                        {plan.strategyPoints.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Zap className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-200">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Download Actions */}
                    <div className="flex justify-end items-center pt-6 border-t border-gray-700">
                      <span className="text-sm text-gray-400 mr-4">Select &quot;Save as PDF&quot; in print dialog</span>
                      <button
                        onClick={downloadPDF}
                        className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}