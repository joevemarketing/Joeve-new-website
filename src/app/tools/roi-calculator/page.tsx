"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calculator, TrendingUp, DollarSign, Users, Clock, Mail, CheckCircle, Download } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollAnimations";
import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

interface SurveyData {
  companySize: string;
  currentMonthlyCost: string;
  targetImprovement: string;
  timelineMonths: string;
  email: string;
}

interface ROICalculation {
  estimatedROI: number;
  monthlySavings: number;
  paybackPeriod: number;
  annualSavings: number;
}

interface QuestionOption {
  value: string;
  label: string;
  multiplier?: number;
  improvement?: number;
  urgency?: number;
}

interface Question {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  type?: string;
  placeholder?: string;
  options?: QuestionOption[];
}

export default function ROICalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    companySize: "",
    currentMonthlyCost: "",
    targetImprovement: "",
    timelineMonths: "",
    email: ""
  });
  const [calculation, setCalculation] = useState<ROICalculation | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 4;

  const questions: Question[] = [
    {
      id: "companySize",
      title: "Company Size",
      subtitle: "Tell us about your business scale",
      icon: <Users className="w-6 h-6" />,
      options: [
        { value: "small", label: "Small (1-10 employees)", multiplier: 0.8 },
        { value: "medium", label: "Medium (11-50 employees)", multiplier: 1.0 },
        { value: "large", label: "Large (50+ employees)", multiplier: 1.2 }
      ]
    },
    {
      id: "currentMonthlyCost",
      title: "Current Monthly Digital Marketing Cost",
      subtitle: "Include all digital marketing expenses",
      icon: <DollarSign className="w-6 h-6" />,
      type: "number",
      placeholder: "Enter amount in RM"
    },
    {
      id: "targetImprovement",
      title: "Primary Improvement Goal",
      subtitle: "What do you want to optimize most?",
      icon: <TrendingUp className="w-6 h-6" />,
      options: [
        { value: "leads", label: "Lead Generation", improvement: 40 },
        { value: "conversion", label: "Conversion Rate", improvement: 30 },
        { value: "efficiency", label: "Marketing Efficiency", improvement: 35 },
        { value: "automation", label: "Process Automation", improvement: 50 }
      ]
    },
    {
      id: "timelineMonths",
      title: "Implementation Timeline",
      subtitle: "When do you want to see results?",
      icon: <Clock className="w-6 h-6" />,
      options: [
        { value: "3", label: "3 months", urgency: 1.2 },
        { value: "6", label: "6 months", urgency: 1.0 },
        { value: "12", label: "12 months", urgency: 0.8 }
      ]
    }
  ];

  const calculateROI = (data: SurveyData): ROICalculation => {
    const monthlyCost = parseFloat(data.currentMonthlyCost) || 0;
    const companyQuestion = questions[0];
    const improvementQuestion = questions[2];
    const timelineQuestion = questions[3];
    
    const companyMultiplier = companyQuestion.options?.find(opt => opt.value === data.companySize)?.multiplier || 1.0;
    const improvementRate = improvementQuestion.options?.find(opt => opt.value === data.targetImprovement)?.improvement || 30;
    const urgencyMultiplier = timelineQuestion.options?.find(opt => opt.value === data.timelineMonths)?.urgency || 1.0;

    const baseImprovement = (improvementRate / 100) * monthlyCost;
    const adjustedImprovement = baseImprovement * companyMultiplier * urgencyMultiplier;
    
    const monthlySavings = adjustedImprovement * 0.7; // Conservative estimate
    const annualSavings = monthlySavings * 12;
    const estimatedROI = (annualSavings / (monthlyCost * 12)) * 100;
    const paybackPeriod = Math.ceil((monthlyCost * 3) / monthlySavings); // 3 months implementation cost

    return {
      estimatedROI: Math.max(estimatedROI, 200), // Minimum 200% ROI
      monthlySavings: Math.round(monthlySavings),
      paybackPeriod: Math.max(paybackPeriod, 2),
      annualSavings: Math.round(annualSavings)
    };
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === totalSteps) {
      // Calculate results when reaching step 4
      const results = calculateROI(surveyData);
      setCalculation(results);
      setCurrentStep(currentStep + 1); // Move to step 5 to show results
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generatePDFReport = async () => {
    setIsLoading(true);
    try {
      // Create PDF content
      const pdf = new jsPDF();
      
      // Add custom font for better Unicode support
      pdf.setFont('helvetica');
      
      // Title
      pdf.setFontSize(24);
      pdf.setTextColor(0, 123, 255); // Blue color
      pdf.text('Digital Marketing ROI Analysis Report', 105, 30, { align: 'center' });
      
      // Date
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 45, { align: 'center' });
      
      // Business Information
      pdf.setFontSize(16);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Business Information', 20, 70);
      pdf.setLineWidth(0.5);
      pdf.line(20, 75, 190, 75);
      
      pdf.setFontSize(12);
      pdf.setTextColor(60, 60, 60);
      pdf.text(`Company Size: ${surveyData.companySize || 'Not specified'}`, 20, 85);
      pdf.text(`Current Monthly Cost: RM${surveyData.currentMonthlyCost || 'Not specified'}`, 20, 95);
      pdf.text(`Target Improvement: ${surveyData.targetImprovement || 'Not specified'}`, 20, 105);
      pdf.text(`Timeline: ${surveyData.timelineMonths || 'Not specified'} months`, 20, 115);
      
      // ROI Analysis Results
      pdf.setFontSize(16);
      pdf.setTextColor(0, 0, 0);
      pdf.text('ROI Analysis Results', 20, 135);
      pdf.setLineWidth(0.5);
      pdf.line(20, 140, 190, 140);
      
      pdf.setFontSize(12);
      pdf.setTextColor(60, 60, 60);
      pdf.text(`Estimated ROI: ${calculation?.estimatedROI.toFixed(1)}%`, 20, 150);
      pdf.text(`Monthly Savings: RM${calculation?.monthlySavings.toLocaleString()}`, 20, 160);
      pdf.text(`Annual Savings: RM${calculation?.annualSavings.toLocaleString()}`, 20, 170);
      pdf.text(`Payback Period: ${calculation?.paybackPeriod} months`, 20, 180);
      
      // Recommendations
      pdf.setFontSize(16);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Key Recommendations', 20, 200);
      pdf.setLineWidth(0.5);
      pdf.line(20, 205, 190, 205);
      
      pdf.setFontSize(11);
      pdf.setTextColor(60, 60, 60);
      const recommendations = [
        'Implement AI-powered chatbot to reduce customer service costs',
        'Automate marketing campaigns for better lead generation',
        'Optimize website conversion rate with AI analytics',
        'Use predictive analytics for targeted marketing'
      ];
      
      recommendations.forEach((rec, index) => {
        const y = 215 + (index * 12);
        pdf.text(`${index + 1}. ${rec}`, 25, y);
      });
      
      // Footer
      pdf.setFontSize(10);
      pdf.setTextColor(150, 150, 150);
      pdf.text('Generated by JOeve Smart Solutions - AI-Powered Digital Solutions', 105, 280, { align: 'center' });
      
      // Save the PDF
      pdf.save('Digital-Marketing-ROI-Analysis.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Submit survey data to API
      const response = await fetch('/api/submit-roi-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...surveyData,
          calculation,
          survey_type: 'roi_calculator'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('There was an error submitting your survey. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const updateSurveyData = (field: keyof SurveyData, value: string) => {
    setSurveyData(prev => ({ ...prev, [field]: value }));
  };

  const currentQuestion = currentStep <= questions.length ? questions[currentStep - 1] : null;

  if (isSubmitted) {
    return (
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-joeve-blue-deep via-joeve-blue-dark to-joeve-blue-deep">
        <div className="container mx-auto px-4 py-20">
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Survey Completed!</h2>
              <p className="text-gray-300 mb-6">
                Thank you for completing our ROI calculator. Your detailed report has been sent to {surveyData.email}.
              </p>
              <p className="text-gray-400 mb-8">
                Check your email for the download link. The report includes detailed analysis, implementation roadmap, and next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-6 py-3 rounded-full" asChild>
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
        <ScrollReveal className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Calculator className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Digital Marketing ROI Calculator</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Calculate your potential return on investment with our AI-powered digital marketing solutions
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
                {currentQuestion?.icon}
                <CardTitle className="text-xl text-white">{currentQuestion?.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-300">
                {currentQuestion?.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {currentQuestion?.options ? (
                <RadioGroup
                  value={currentQuestion ? surveyData[currentQuestion.id as keyof SurveyData] : ""}
                  onValueChange={(value) => currentQuestion && updateSurveyData(currentQuestion.id as keyof SurveyData, value)}
                  className="space-y-3"
                >
                  {currentQuestion?.options?.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="text-white cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : currentQuestion ? (
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      type={currentQuestion?.type || "text"}
                      placeholder={currentQuestion?.placeholder}
                      value={currentQuestion ? surveyData[currentQuestion.id as keyof SurveyData] : ""}
                      onChange={(e) => currentQuestion && updateSurveyData(currentQuestion.id as keyof SurveyData, e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">Loading next question...</p>
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
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold px-6 py-3 rounded-full"
            >
              Previous
            </Button>

            {currentStep < totalSteps && currentQuestion ? (
              <Button
                onClick={handleNext}
                disabled={!surveyData[currentQuestion.id as keyof SurveyData]}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all"
              >
                Calculate ROI
              </Button>
            )}
          </div>

          {/* ROI Results Display */}
          {calculation && currentStep > totalSteps && (
            <ScrollReveal className="mt-8">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    Your ROI Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                      <div className="text-3xl font-bold text-green-400 mb-2">{calculation.estimatedROI.toFixed(0)}%</div>
                      <div className="text-gray-300">Estimated ROI</div>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                      <div className="text-3xl font-bold text-blue-400 mb-2">RM {calculation.monthlySavings.toLocaleString()}</div>
                      <div className="text-gray-300">Monthly Savings</div>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{calculation.paybackPeriod}</div>
                      <div className="text-gray-300">Months to Payback</div>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">RM {calculation.annualSavings.toLocaleString()}</div>
                      <div className="text-gray-300">Annual Savings</div>
                    </div>
                  </div>

                  {/* Email Capture */}
                  <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                    <div className="flex items-center gap-2 mb-3">
                      <Mail className="w-5 h-5 text-yellow-400" />
                      <h4 className="text-white font-semibold">Get Your Detailed Report</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Enter your email to receive a comprehensive PDF report with detailed analysis, implementation roadmap, and next steps.
                    </p>
                    <div className="space-y-3">
                      <p className="text-gray-300 mb-4">
                        Get your comprehensive ROI analysis instantly or receive via email:
                      </p>
                      
                      {/* Download PDF Option */}
                      <div className="flex flex-col sm:flex-row gap-3 mb-4">
                        <Button
                          onClick={generatePDFReport}
                          disabled={isLoading}
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          {isLoading ? "Generating..." : "Download PDF Report"}
                        </Button>
                      </div>
                      
                      {/* Email Option */}
                      <div className="border-t border-white/20 pt-4">
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
                            {isLoading ? "Sending..." : "Email Report"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          )}
        </ScrollReveal>
      </div>
    </main>
  );
}