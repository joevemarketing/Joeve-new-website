"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/effects/ScrollAnimations";

interface ROICalculatorData {
  monthlyAdSpend: number;
  currentConversionRate: number;
  averageOrderValue: number;
  aiOptimizationBoost: number;
}

interface ROICalculationResults {
  standardROI: number;
  aiOptimizedROI: number;
  standardRevenue: number;
  aiOptimizedRevenue: number;
  standardConversions: number;
  aiOptimizedConversions: number;
  standardProfit: number;
  aiOptimizedProfit: number;
  aiConversionRate: number;
}

export default function AdvancedROICalculator() {
  const [calculatorData, setCalculatorData] = useState<ROICalculatorData>({
    monthlyAdSpend: 5000,
    currentConversionRate: 2.0,
    averageOrderValue: 150,
    aiOptimizationBoost: 30
  });

  const [results, setResults] = useState<ROICalculationResults | null>(null);

  const formatCurrency = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(num);
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0
    }).format(num);
  };

  const formatPercent = (num: number): string => {
    return num.toFixed(2) + '%';
  };

  const calculateROI = useCallback(() => {
    const { monthlyAdSpend, currentConversionRate, averageOrderValue, aiOptimizationBoost } = calculatorData;
    
    // Constants
    const CPC = 1.50; // Assumed average Cost Per Click
    
    // Scenario A: Standard (Without AI)
    const trafficStandard = monthlyAdSpend / CPC;
    const conversionsStandard = trafficStandard * (currentConversionRate / 100);
    const revenueStandard = conversionsStandard * averageOrderValue;
    const profitStandard = revenueStandard - monthlyAdSpend;
    const roiStandard = monthlyAdSpend > 0 ? ((profitStandard / monthlyAdSpend) * 100) : 0;

    // Scenario B: AI Optimized
    const aiConversionRate = currentConversionRate * (1 + (aiOptimizationBoost / 100));
    const conversionsAi = trafficStandard * (aiConversionRate / 100);
    const revenueAi = conversionsAi * averageOrderValue;
    const profitAi = revenueAi - monthlyAdSpend;
    const roiAi = monthlyAdSpend > 0 ? ((profitAi / monthlyAdSpend) * 100) : 0;

    setResults({
      standardROI: roiStandard,
      aiOptimizedROI: roiAi,
      standardRevenue: revenueStandard,
      aiOptimizedRevenue: revenueAi,
      standardConversions: conversionsStandard,
      aiOptimizedConversions: conversionsAi,
      standardProfit: profitStandard,
      aiOptimizedProfit: profitAi,
      aiConversionRate: aiConversionRate
    });
  }, [calculatorData]);

  useEffect(() => {
    calculateROI();
  }, [calculatorData]);

  const handleSliderChange = (field: keyof ROICalculatorData, value: number[]) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value[0]
    }));
  };

  const getBarWidth = (standardValue: number, aiValue: number, isStandard: boolean): number => {
    const maxValue = Math.max(standardValue, aiValue);
    const percentage = maxValue > 0 ? ((isStandard ? standardValue : aiValue) / maxValue) * 100 : 0;
    return percentage;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-joeve-blue-deep via-joeve-blue-dark to-joeve-blue-deep py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Page Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Digital Marketing ROI Calculator
            </h1>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Estimate the impact of AI-powered optimization on your ad spend, conversion rates, and overall revenue.
          </p>
        </header>

        {/* Instructions */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">📊 How to Use</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-sm">
            <div>
              <h3 className="font-medium text-cyan-400 mb-2">1. Input Your Data</h3>
              <p>Enter your current ad spend, conversion rate, and average order value using the sliders. Use real data from your ad platforms for accurate results.</p>
            </div>
            <div>
              <h3 className="font-medium text-cyan-400 mb-2">2. Set AI Expectations</h3>
              <p>Adjust the AI Optimization Lift (5-100%). Conservative: 20-30%, Aggressive: 50-100% based on your industry and campaign type.</p>
            </div>
            <div>
              <h3 className="font-medium text-cyan-400 mb-2">3. Review Results</h3>
              <p>Compare Standard vs AI-optimized metrics. The calculator shows revenue differences, ROI improvements, and conversion lifts.</p>
            </div>
            <div>
              <h3 className="font-medium text-cyan-400 mb-2">4. Make Decisions</h3>
              <p>Use the projections to plan campaigns, justify budgets, or present ROI analysis to stakeholders.</p>
            </div>
          </div>
        </div>

        {/* Formula Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">🧮 Calculation Formulas</h2>
          <div className="space-y-4 text-gray-300 text-sm">
            <div>
              <h3 className="font-medium text-cyan-400 mb-2">Traffic & Conversions</h3>
              <div className="bg-black/20 rounded p-3 font-mono text-xs">
                <p><span className="text-cyan-400">Traffic</span> = Ad Spend ÷ CPC ($1.50)</p>
                <p><span className="text-cyan-400">Conversions</span> = Traffic × (Conversion Rate ÷ 100)</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-cyan-400 mb-2">Revenue & Profit</h3>
              <div className="bg-black/20 rounded p-3 font-mono text-xs">
                <p><span className="text-cyan-400">Revenue</span> = Conversions × Average Order Value</p>
                <p><span className="text-cyan-400">Profit</span> = Revenue - Ad Spend</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-cyan-400 mb-2">Return on Investment</h3>
              <div className="bg-black/20 rounded p-3 font-mono text-xs">
                <p><span className="text-cyan-400">ROI</span> = (Profit ÷ Ad Spend) × 100</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-cyan-400 mb-2">AI Enhancement</h3>
              <div className="bg-black/20 rounded p-3 font-mono text-xs">
                <p><span className="text-cyan-400">AI Conversion Rate</span> = Current Rate × (1 + Optimization % ÷ 100)</p>
                <p><span className="text-cyan-400">AI Revenue</span> = Traffic × AI Conversion Rate × Order Value</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <CardHeader className="border-b border-white/20">
                <CardTitle className="flex items-center gap-3 text-xl text-white">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 12h6m6 0h6"/>
                    </svg>
                  </div>
                  Campaign Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Monthly Ad Spend */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-semibold text-white">Monthly Ad Spend</label>
                    <span className="font-mono font-bold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded text-sm">
                      {formatCurrency(calculatorData.monthlyAdSpend)}
                    </span>
                  </div>
                  <Slider
                    value={[calculatorData.monthlyAdSpend]}
                    onValueChange={(value) => handleSliderChange('monthlyAdSpend', value)}
                    max={50000}
                    min={500}
                    step={500}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-400">
                    Total budget allocated for paid ads (Search, Social, Display).
                  </p>
                </div>

                {/* Current Conversion Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-semibold text-white">Current Conversion Rate</label>
                    <span className="font-mono font-bold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded text-sm">
                      {formatPercent(calculatorData.currentConversionRate)}
                    </span>
                  </div>
                  <Slider
                    value={[calculatorData.currentConversionRate]}
                    onValueChange={(value) => handleSliderChange('currentConversionRate', value)}
                    max={10.0}
                    min={0.1}
                    step={0.1}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-400">
                    Percentage of visitors who currently become customers.
                  </p>
                </div>

                {/* Average Order Value */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="font-semibold text-white">Avg. Order Value (AOV)</label>
                    <span className="font-mono font-bold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded text-sm">
                      {formatCurrency(calculatorData.averageOrderValue)}
                    </span>
                  </div>
                  <Slider
                    value={[calculatorData.averageOrderValue]}
                    onValueChange={(value) => handleSliderChange('averageOrderValue', value)}
                    max={1000}
                    min={20}
                    step={10}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-400">
                    Average revenue generated per conversion.
                  </p>
                </div>

                {/* AI Optimization Boost */}
                <div className="space-y-2 pt-4 border-t border-dashed">
                  <div className="flex justify-between items-center">
                    <label className="font-semibold text-cyan-400 flex items-center gap-2">
                      AI Optimization Lift
                      <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs">
                        New
                      </Badge>
                    </label>
                    <span className="font-mono font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-1 rounded text-sm">
                      +{calculatorData.aiOptimizationBoost}%
                    </span>
                  </div>
                  <Slider
                    value={[calculatorData.aiOptimizationBoost]}
                    onValueChange={(value) => handleSliderChange('aiOptimizationBoost', value)}
                    max={100}
                    min={5}
                    step={5}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-400">
                    Estimated increase in conversion rate using our AI targeting and personalization engine.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <CardHeader className="border-b border-white/20">
                <CardTitle className="flex items-center gap-3 text-xl text-white">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  Projections
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {results && (
                  <>
                    {/* Summary Boxes */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 p-4 rounded-lg text-center border border-white/20">
                        <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Standard ROI</div>
                        <div className="text-2xl font-bold text-white">{formatPercent(results.standardROI)}</div>
                      </div>
                      <div className="bg-green-500/10 p-4 rounded-lg text-center border border-green-500/30">
                        <div className="text-xs uppercase tracking-wide text-green-400 mb-1">AI Optimized ROI</div>
                        <div className="text-2xl font-bold text-green-400">{formatPercent(results.aiOptimizedROI)}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 p-4 rounded-lg text-center border border-white/20">
                        <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Est. Revenue</div>
                        <div className="text-2xl font-bold text-white">{formatCurrency(results.standardRevenue)}</div>
                      </div>
                      <div className="bg-green-500/10 p-4 rounded-lg text-center border border-green-500/30">
                        <div className="text-xs uppercase tracking-wide text-green-400 mb-1">AI Est. Revenue</div>
                        <div className="text-2xl font-bold text-green-400">{formatCurrency(results.aiOptimizedRevenue)}</div>
                      </div>
                    </div>

                    {/* Visual Comparison Bars */}
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-400 mb-3">Performance Comparison</h3>
                      
                      {/* Revenue Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1 font-medium text-white">
                          <span>Total Revenue</span>
                          <span className="text-green-400 font-bold">
                            +{formatCurrency(results.aiOptimizedRevenue - results.standardRevenue)}
                          </span>
                        </div>
                        <div className="h-3 bg-white/20 rounded-full overflow-hidden relative">
                          <div 
                            className="h-full bg-gray-400 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${getBarWidth(results.standardRevenue, results.aiOptimizedRevenue, true)}%` }}
                          />
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${getBarWidth(results.standardRevenue, results.aiOptimizedRevenue, false)}%` }}
                          />
                        </div>
                      </div>

                      {/* Conversions Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1 font-medium text-white">
                          <span>Total Conversions</span>
                          <span className="text-green-400 font-bold">
                            +{formatNumber(results.aiOptimizedConversions - results.standardConversions)}
                          </span>
                        </div>
                        <div className="h-3 bg-white/20 rounded-full overflow-hidden relative">
                          <div 
                            className="h-full bg-gray-400 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${getBarWidth(results.standardConversions, results.aiOptimizedConversions, true)}%` }}
                          />
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${getBarWidth(results.standardConversions, results.aiOptimizedConversions, false)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Detailed Table */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3">Monthly Breakdown</h3>
                      <div className="overflow-hidden rounded-lg border border-white/20">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-white/10 border-b border-white/20">
                              <th className="text-left py-2 px-3 font-medium text-gray-400">Metric</th>
                              <th className="text-right py-2 px-3 font-medium text-gray-400">Current</th>
                              <th className="text-right py-2 px-3 font-medium text-cyan-400">With AI</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            <tr>
                              <td className="py-2 px-3 text-white">Ad Spend</td>
                              <td className="text-right py-2 px-3 text-gray-300">{formatCurrency(calculatorData.monthlyAdSpend)}</td>
                              <td className="text-right py-2 px-3 font-bold text-white">{formatCurrency(calculatorData.monthlyAdSpend)}</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3 text-white">Conversion Rate</td>
                              <td className="text-right py-2 px-3 text-gray-300">{formatPercent(calculatorData.currentConversionRate)}</td>
                              <td className="text-right py-2 px-3 font-bold text-cyan-400">{formatPercent(results.aiConversionRate)}</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3 text-white">Conversions</td>
                              <td className="text-right py-2 px-3 text-gray-300">{formatNumber(results.standardConversions)}</td>
                              <td className="text-right py-2 px-3 font-bold text-white">{formatNumber(results.aiOptimizedConversions)}</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3 text-white">Gross Revenue</td>
                              <td className="text-right py-2 px-3 text-gray-300">{formatCurrency(results.standardRevenue)}</td>
                              <td className="text-right py-2 px-3 font-bold text-white">{formatCurrency(results.aiOptimizedRevenue)}</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-3 text-white">Net Profit</td>
                              <td className="text-right py-2 px-3 text-gray-300">{formatCurrency(results.standardProfit)}</td>
                              <td className="text-right py-2 px-3 font-bold text-green-400">{formatCurrency(results.aiOptimizedProfit)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-400">
          <p>&copy; 2024 AI Marketing Solutions. Calculations are estimates based on input variables.</p>
        </footer>
      </div>
    </div>
  );
}