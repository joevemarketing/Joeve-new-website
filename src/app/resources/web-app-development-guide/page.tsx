"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function WebAppGuidePage() {
  const [productName, setProductName] = useState("");
  const [domain, setDomain] = useState("");
  const [users, setUsers] = useState("B2C");
  const [mustHaves, setMustHaves] = useState("");
  const [niceToHaves, setNiceToHaves] = useState("");
  const [integrations, setIntegrations] = useState("Payments, Email");
  const [constraints, setConstraints] = useState("Budget and timeline");
  const [budget, setBudget] = useState("RM50k");
  const [timeline, setTimeline] = useState("12 weeks");
  const [metrics, setMetrics] = useState("Adoption, retention, ROI");
  const [platforms, setPlatforms] = useState("Web (Desktop & Mobile)");
  const [mobileRequirement, setMobileRequirement] = useState("Responsive only");
  const [personas, setPersonas] = useState("Admin, End-user");
  const [dataModel, setDataModel] = useState("Core entities and relations");
  const [security, setSecurity] = useState("Role-based access, audit logs");
  const [compliance, setCompliance] = useState("None");
  const [hosting, setHosting] = useState("Cloud PaaS");
  const [environments, setEnvironments] = useState("Dev, Staging, Production");
  const [scalability, setScalability] = useState("Horizontal scaling, CDN");
  const [performance, setPerformance] = useState("<200ms API, lazy loading");
  const [acceptance, setAcceptance] = useState("Feature demos, UAT sign-off");
  const [milestones, setMilestones] = useState("Design, MVP, Beta, Launch");

  const generatePlan = () => {
    if (typeof document === 'undefined') return;
    
    const title = `Web App Development Plan – ${productName || "Your Product"}`;
    const html = `<!doctype html><html><head><meta charset='utf-8'><title>${title}</title><style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;background:#0B1220;color:#E5EAFF;margin:0;padding:24px}h1{font-size:24px;margin:0 0 12px}h2{font-size:18px;color:#8CD1FF;margin:20px 0 8px}p,li{color:#C9D7EF}section{background:#121A2C;border:1px solid #1F2A44;border-radius:12px;padding:16px;margin-bottom:16px}</style></head><body><h1>${title}</h1><section><h2>Overview</h2><p><strong>Domain:</strong> ${domain || "N/A"}<br/><strong>Users:</strong> ${users}<br/><strong>Platforms:</strong> ${platforms}<br/><strong>Mobile:</strong> ${mobileRequirement}<br/><strong>Budget:</strong> ${budget}<br/><strong>Timeline:</strong> ${timeline}</p></section><section><h2>Personas & UX</h2><p><strong>Personas:</strong> ${personas}</p><p><strong>Acceptance Criteria:</strong> ${acceptance}</p></section><section><h2>Scope</h2><p><strong>Must-haves:</strong> ${mustHaves || "N/A"}</p><p><strong>Nice-to-haves:</strong> ${niceToHaves || "N/A"}</p><p><strong>Constraints:</strong> ${constraints || "N/A"}</p></section><section><h2>Architecture</h2><p><strong>Data Model:</strong> ${dataModel}</p><p><strong>Security:</strong> ${security}</p><p><strong>Compliance:</strong> ${compliance}</p><p><strong>Integrations:</strong> ${integrations}</p></section><section><h2>Ops & Hosting</h2><p><strong>Hosting:</strong> ${hosting}</p><p><strong>Environments:</strong> ${environments}</p><p><strong>Scalability:</strong> ${scalability}</p><p><strong>Performance:</strong> ${performance}</p></section><section><h2>Delivery Plan</h2><ol><li>Week 1–2: discovery, UX wireframes, data model</li><li>Week 3–6: MVP features, integrations</li><li>Week 7–10: polish, QA, security review</li><li>Week 11–12: launch, handover, training</li></ol><p><strong>Milestones:</strong> ${milestones}</p></section><section><h2>Success Metrics</h2><p>${metrics}</p></section></body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "web-app-development-plan.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Web App Development Guide</h1>
          <p className="text-gray-400 mb-6">Fill out this survey to generate a tailored web app plan.</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-gray-300 text-sm mb-1">Product Name</div>
                <input value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="e.g., Vendor Portal" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Domain/Industry</div>
                <input value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="e.g., Manufacturing, Hospitality" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Primary Users</div>
                <select value={users} onChange={(e) => setUsers(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                  <option>B2C</option>
                  <option>B2B</option>
                  <option>Internal</option>
                </select>
                <div className="text-gray-400 text-xs mt-1">Who primarily uses the app</div>
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Target Platforms</div>
                <select value={platforms} onChange={(e) => setPlatforms(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                  <option>Web (Desktop & Mobile)</option>
                  <option>Web + Native Mobile</option>
                  <option>Internal Desktop Only</option>
                </select>
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Mobile Requirement</div>
                <select value={mobileRequirement} onChange={(e) => setMobileRequirement(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                  <option>Responsive only</option>
                  <option>PWA</option>
                  <option>Native iOS/Android</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-gray-300 text-sm mb-1">Personas</div>
                <input value={personas} onChange={(e) => setPersonas(e.target.value)} placeholder="e.g., Admin, Manager, End-user" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Integrations</div>
                <input value={integrations} onChange={(e) => setIntegrations(e.target.value)} placeholder="e.g., payments, email, storage" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-gray-300 text-sm mb-1">Must-have Features</div>
              <textarea value={mustHaves} onChange={(e) => setMustHaves(e.target.value)} placeholder="Core flows for MVP" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" rows={3} />
            </div>
            <div className="mt-3">
              <div className="text-gray-300 text-sm mb-1">Nice-to-have Features</div>
              <textarea value={niceToHaves} onChange={(e) => setNiceToHaves(e.target.value)} placeholder="Enhancements for later phases" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" rows={3} />
            </div>
            <div className="mt-3">
              <div className="text-gray-300 text-sm mb-1">Constraints</div>
              <textarea value={constraints} onChange={(e) => setConstraints(e.target.value)} placeholder="Budget, compliance, timeline" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" rows={3} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-gray-300 text-sm mb-1">Data Model</div>
                <input value={dataModel} onChange={(e) => setDataModel(e.target.value)} placeholder="Key entities and relations" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Security</div>
                <input value={security} onChange={(e) => setSecurity(e.target.value)} placeholder="Auth, roles, audit" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <div className="text-gray-300 text-sm mb-1">Compliance</div>
                <select value={compliance} onChange={(e) => setCompliance(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                  <option>None</option>
                  <option>GDPR</option>
                  <option>HIPAA</option>
                  <option>PDPA</option>
                </select>
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Hosting</div>
                <select value={hosting} onChange={(e) => setHosting(e.target.value)} className="w-full px-4 py-3 bg-white text-slate-900 border border-white/20 rounded-lg focus:outline-none">
                  <option>Cloud PaaS</option>
                  <option>On-prem</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Environments</div>
                <input value={environments} onChange={(e) => setEnvironments(e.target.value)} placeholder="Dev, Staging, Production" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-gray-300 text-sm mb-1">Scalability</div>
                <input value={scalability} onChange={(e) => setScalability(e.target.value)} placeholder="Scaling approach" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Performance</div>
                <input value={performance} onChange={(e) => setPerformance(e.target.value)} placeholder="Targets and tactics" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-gray-300 text-sm mb-1">Acceptance Criteria</div>
                <input value={acceptance} onChange={(e) => setAcceptance(e.target.value)} placeholder="Demos, UAT sign-off" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
              <div>
                <div className="text-gray-300 text-sm mb-1">Milestones</div>
                <input value={milestones} onChange={(e) => setMilestones(e.target.value)} placeholder="Design, MVP, Beta, Launch" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none" />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button onClick={generatePlan} className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full">Generate Report</Button>
            <a href="/resources" className="px-4 py-2 border border-white/20 text-gray-300 rounded-full text-sm">Back to resources</a>
          </div>
        </div>
      </section>
    </main>
  );
}
