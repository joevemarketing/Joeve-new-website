"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AITransformationChecklistPage() {
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [teamSize, setTeamSize] = useState("1-10 (micro)");
  const [primaryGoal, setPrimaryGoal] = useState("Efficiency");
  const [painPoints, setPainPoints] = useState("");
  const [dataSources, setDataSources] = useState("Spreadsheets");
  const [currentTools, setCurrentTools] = useState("None");
  const [budget, setBudget] = useState("RM5k–RM20k");
  const [timeline, setTimeline] = useState("90 days");
  const [kpiFocus, setKpiFocus] = useState("Cost savings");
  const [readiness, setReadiness] = useState(3);
  const readinessText = ["Very Low", "Low", "Moderate", "High", "Very High"][Math.max(1, Math.min(5, readiness)) - 1];

  const generateReport = () => {
    const title = `AI Transformation Plan – ${company || "Your Company"}`;
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;background:#0B1220;color:#E5EAFF;margin:0;padding:24px}h1{font-size:24px;margin:0 0 12px}h2{font-size:18px;color:#8CD1FF;margin:20px 0 8px}p,li{color:#C9D7EF}section{background:#121A2C;border:1px solid #1F2A44;border-radius:12px;padding:16px;margin-bottom:16px}</style></head><body><h1>${title}</h1><section><h2>Profile</h2><p><strong>Industry:</strong> ${industry || "N/A"}<br/><strong>Team Size:</strong> ${teamSize}<br/><strong>Primary Goal:</strong> ${primaryGoal}<br/><strong>Budget:</strong> ${budget}<br/><strong>Timeline:</strong> ${timeline}<br/><strong>KPI Focus:</strong> ${kpiFocus}</p></section><section><h2>Current State</h2><p><strong>Pain Points:</strong> ${painPoints || "N/A"}</p><p><strong>Data Sources:</strong> ${dataSources}</p><p><strong>Tools:</strong> ${currentTools}</p><p><strong>Readiness Score:</strong> ${readiness}/5</p></section><section><h2>90-Day Plan</h2><ol><li>Discovery (Weeks 1–2): map processes, audit data, define KPIs</li><li>Pilot (Weeks 3–6): prioritize 2–3 use-cases, prototype, validate</li><li>Rollout (Weeks 7–10): harden solution, train staff, measure ROI</li><li>Optimize (Weeks 11–13): iterate UX/perf, expand scope, set cadence</li></ol></section><section><h2>Suggested Next Steps</h2><ul><li>Start with the highest-impact process tied to ${kpiFocus.toLowerCase()}</li><li>Establish baseline metrics before implementation</li><li>Use weekly check-ins to unblock adoption</li></ul></section></body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-transformation-report.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">AI Transformation Checklist</h1>
          <p className="text-gray-400 mb-6">Complete this quick survey to generate a personalized 90-day AI plan.</p>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-300 text-sm mb-1">Company Name</div>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g., Kamay Furniture" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-300 text-sm mb-1">Industry</div>
                  <input value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="e.g., Retail, Manufacturing" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400" />
                </div>
                <div>
                  <div className="text-gray-300 text-sm mb-1">Team Size</div>
                  <select value={teamSize} onChange={(e) => setTeamSize(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                    <option>1-10 (micro)</option>
                    <option>11-50 (small)</option>
                    <option>51-200 (mid)</option>
                    <option>200+ (enterprise)</option>
                  </select>
                  <div className="text-gray-400 text-xs mt-1">Approximate number of employees</div>
                </div>
                <div>
                  <div className="text-gray-300 text-sm mb-1">Primary Goal</div>
                  <select value={primaryGoal} onChange={(e) => setPrimaryGoal(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                    <option>Efficiency</option>
                    <option>Cost Reduction</option>
                    <option>Content Production</option>
                    <option>Revenue Growth</option>
                  </select>
                  <div className="text-gray-400 text-xs mt-1">Main outcome you want from AI</div>
                </div>
                <div>
                  <div className="text-gray-300 text-sm mb-1">Primary Data Sources</div>
                  <select value={dataSources} onChange={(e) => setDataSources(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                    <option>Spreadsheets</option>
                    <option>ERP/CRM</option>
                    <option>Databases</option>
                    <option>None</option>
                  </select>
                  <div className="text-gray-400 text-xs mt-1">Where core business data lives</div>
                </div>
                <div>
                  <div className="text-gray-300 text-sm mb-1">Current Tools</div>
                  <input value={currentTools} onChange={(e) => setCurrentTools(e.target.value)} placeholder="e.g., CRM, CMS, Excel" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-gray-300 text-sm mb-1">Top Pain Points</div>
                <textarea value={painPoints} onChange={(e) => setPainPoints(e.target.value)} placeholder="e.g., manual reporting, slow content creation, data fragmentation" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" rows={4} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <div className="text-gray-300 text-sm mb-1">Budget</div>
                  <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                    <option>RM5k–RM20k</option>
                    <option>RM20k–RM50k</option>
                    <option>RM50k+</option>
                  </select>
                </div>
                <div>
                  <div className="text-gray-300 text-sm mb-1">Timeline</div>
                  <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                    <option>90 days</option>
                    <option>6 months</option>
                    <option>12 months</option>
                  </select>
                </div>
                <div>
                  <div className="text-gray-300 text-sm mb-1">KPI Focus</div>
                  <select value={kpiFocus} onChange={(e) => setKpiFocus(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                    <option>Cost savings</option>
                    <option>Cycle-time reduction</option>
                    <option>Output volume</option>
                    <option>Revenue lift</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="text-gray-300 text-sm">Readiness (1–5)</div>
                  <div className="text-gray-400 text-xs">{readiness}/5 • {readinessText}</div>
                </div>
                <input type="range" min={1} max={5} value={readiness} onChange={(e) => setReadiness(parseInt(e.target.value))} className="w-full" />
                <div className="flex justify-between text-gray-500 text-xs mt-1"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={generateReport} className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full">Generate Report</Button>
              <a href="/resources" className="px-4 py-2 border border-white/20 text-gray-300 rounded-full text-sm">Back to resources</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
