"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import { Plus, Trash2, Calculator, TrendingUp, DollarSign, Users, BarChart3, Target, ArrowUpRight } from "lucide-react";

type LtvSettings = {
  avgOrderValue: number;
  purchaseFrequency: number;
  customerLifespan: number;
  grossMargin: number;
};

type Channel = {
  id: number;
  name: string;
  spend: number;
  impressions: number;
  clicks: number;
  leads: number;
  customers: number;
  revenue: number;
};

export default function DigitalMarketingROICalculatorPage() {
  const [ltvSettings, setLtvSettings] = useState<LtvSettings>({
    avgOrderValue: 150,
    purchaseFrequency: 4,
    customerLifespan: 3,
    grossMargin: 60,
  });

  const [channels, setChannels] = useState<Channel[]>([
    { id: 1, name: "Google Ads (Search)", spend: 5000, impressions: 25000, clicks: 1200, leads: 150, customers: 45, revenue: 12000 },
    { id: 2, name: "Facebook/IG Ads", spend: 3500, impressions: 45000, clicks: 800, leads: 90, customers: 20, revenue: 4500 },
    { id: 3, name: "LinkedIn Sponsored", spend: 2000, impressions: 8000, clicks: 150, leads: 40, customers: 5, revenue: 3000 },
    { id: 4, name: "Email Marketing", spend: 500, impressions: 10000, clicks: 2000, leads: 500, customers: 80, revenue: 8000 },
  ]);

  const [activeTab, setActiveTab] = useState<"dashboard" | "inputs">("dashboard");

  const calculatedLTV = useMemo(() => {
    const raw = ltvSettings.avgOrderValue * ltvSettings.purchaseFrequency * ltvSettings.customerLifespan;
    const profit = raw * (ltvSettings.grossMargin / 100);
    return { raw, profit };
  }, [ltvSettings]);

  const analyzedChannels = useMemo(() => {
    return channels.map((ch) => {
      const cpc = ch.clicks > 0 ? ch.spend / ch.clicks : 0;
      const cpl = ch.leads > 0 ? ch.spend / ch.leads : 0;
      const cac = ch.customers > 0 ? ch.spend / ch.customers : 0;
      const roas = ch.spend > 0 ? ch.revenue / ch.spend : 0;
      const roi = ch.spend > 0 ? ((ch.revenue - ch.spend) / ch.spend) * 100 : 0;
      const ctr = ch.impressions > 0 ? (ch.clicks / ch.impressions) * 100 : 0;
      const leadConv = ch.clicks > 0 ? (ch.leads / ch.clicks) * 100 : 0;
      const custConv = ch.leads > 0 ? (ch.customers / ch.leads) * 100 : 0;
      const ltvCac = cac > 0 ? calculatedLTV.profit / cac : 0;
      const firstOrderProfit = ltvSettings.avgOrderValue * (ltvSettings.grossMargin / 100);
      const ordersToPayback = firstOrderProfit > 0 ? cac / firstOrderProfit : 0;
      return { ...ch, cpc, cpl, cac, roas, roi, ctr, leadConv, custConv, ltvCac, ordersToPayback };
    });
  }, [channels, calculatedLTV, ltvSettings]);

  const totals = useMemo(() => {
    return analyzedChannels.reduce(
      (acc, curr) => ({ spend: acc.spend + curr.spend, revenue: acc.revenue + curr.revenue, leads: acc.leads + curr.leads, customers: acc.customers + curr.customers }),
      { spend: 0, revenue: 0, leads: 0, customers: 0 }
    );
  }, [analyzedChannels]);

  const totalROI = totals.spend > 0 ? ((totals.revenue - totals.spend) / totals.spend) * 100 : 0;
  const totalROAS = totals.spend > 0 ? totals.revenue / totals.spend : 0;
  const blendedCAC = totals.customers > 0 ? totals.spend / totals.customers : 0;

  const handleLtvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLtvSettings((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const updateChannel = (id: number, field: keyof Channel, value: string) => {
    setChannels((prev) => prev.map((ch) => (ch.id === id ? { ...ch, [field]: field === "name" ? value : parseFloat(value) || 0 } : ch)));
  };

  const addChannel = () => {
    const newId = Math.max(...channels.map((c) => c.id), 0) + 1;
    setChannels([...channels, { id: newId, name: "New Channel", spend: 0, impressions: 0, clicks: 0, leads: 0, customers: 0, revenue: 0 }]);
  };

  const removeChannel = (id: number) => {
    setChannels((prev) => prev.filter((c) => c.id !== id));
  };

  const MetricCard = ({ title, value, subtext, icon: Icon, trend }: { title: string; value: string; subtext?: string; icon: LucideIcon; trend: "positive" | "negative" | "neutral" }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div className={`p-2 rounded-lg ${trend === "positive" ? "bg-green-50 text-green-600" : trend === "negative" ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"}`}>
          <Icon size={18} />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      {subtext && <p className={`${trend === "positive" ? "text-green-600" : trend === "negative" ? "text-red-600" : "text-slate-400"} text-xs mt-1`}>{subtext}</p>}
    </div>
  );

  const formatCurrency = (val: number) => new Intl.NumberFormat("en-MY", { style: "currency", currency: "MYR", maximumFractionDigits: 0 }).format(val);
  const formatPercent = (val: number) => `${val.toFixed(1)}%`;

  const exportCSV = () => {
    const headers = ["Channel","Spend","Impressions","Clicks","Leads","Customers","Revenue","CAC","ROAS","ROI%","CTR%","LeadConv%","CustConv%","LTV:CAC","OrdersToPayback"];
    const rows = analyzedChannels.map(c => [
      c.name,c.spend,c.impressions,c.clicks,c.leads,c.customers,c.revenue,
      (c.cac || 0).toFixed(2),(c.roas || 0).toFixed(2),(c.roi || 0).toFixed(1),(c.ctr || 0).toFixed(1),(c.leadConv || 0).toFixed(1),(c.custConv || 0).toFixed(1),(c.ltvCac || 0).toFixed(2),(c.ordersToPayback || 0).toFixed(2)
    ]);
    const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "roi-calculator-data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadReport = () => {
    const title = "Digital Marketing ROI Summary";
    const html = `<!doctype html><html><head><meta charset='utf-8'><title>${title}</title><style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;background:#0B1220;color:#E5EAFF;margin:0;padding:24px}h1{font-size:24px;margin:0 0 12px}h2{font-size:18px;color:#8CD1FF;margin:20px 0 8px}p,li{color:#C9D7EF}section{background:#121A2C;border:1px solid #1F2A44;border-radius:12px;padding:16px;margin-bottom:16px}table{width:100%;border-collapse:collapse}th,td{border-bottom:1px solid #1F2A44;padding:8px;text-align:right}th{text-align:left;color:#8CD1FF}</style></head><body><h1>${title}</h1><section><h2>Inputs</h2><p><strong>Avg Order Value:</strong> ${ltvSettings.avgOrderValue} • <strong>Purchase Freq:</strong> ${ltvSettings.purchaseFrequency}/yr • <strong>Lifespan:</strong> ${ltvSettings.customerLifespan}yr • <strong>Gross Margin:</strong> ${ltvSettings.grossMargin}%</p><p><strong>Profit LTV:</strong> ${formatCurrency(calculatedLTV.profit)}</p></section><section><h2>KPIs</h2><p><strong>Total Spend:</strong> ${formatCurrency(totals.spend)} • <strong>Total Revenue:</strong> ${formatCurrency(totals.revenue)} • <strong>Blended CAC:</strong> ${formatCurrency(blendedCAC)} • <strong>ROAS:</strong> ${totalROAS.toFixed(2)}x • <strong>ROI:</strong> ${formatPercent(totalROI)}</p></section><section><h2>Channels</h2><table><thead><tr><th>Channel</th><th>Spend</th><th>Revenue</th><th>CAC</th><th>ROAS</th><th>ROI%</th><th>LTV:CAC</th></tr></thead><tbody>${analyzedChannels.map(c=>`<tr><td style='text-align:left'>${c.name}</td><td>${formatCurrency(c.spend)}</td><td>${formatCurrency(c.revenue)}</td><td>${formatCurrency(c.cac)}</td><td>${c.roas.toFixed(2)}x</td><td>${c.roi.toFixed(1)}%</td><td>${c.ltvCac.toFixed(2)}</td></tr>`).join("")}</tbody></table></section></body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "roi-summary.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background text-white font-sans">
      <header className="bg-background/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-cyan-600 p-2 rounded-lg">
              <Calculator className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold text-white">Growth ROI Calculator</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={exportCSV} variant="outline" className="border-white/20 text-cyan-300 hover:bg-cyan-600/20">Export CSV</Button>
            <Button onClick={downloadReport} className="bg-cyan-600 hover:bg-cyan-700 text-white">Download Report</Button>
            <div className="flex space-x-1 bg-white/10 p-1 rounded-lg">
            {(["dashboard", "inputs"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === tab ? "bg-white text-cyan-700 shadow-sm" : "text-gray-300 hover:text-white"}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="bg-white/10 rounded-2xl p-6 text-white border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Target size={20} className="text-cyan-300" />
                Customer Lifetime Value (LTV) Basics
              </h2>
              <p className="text-gray-300 text-sm mt-1">Define your business economics to calculate accurate profitability.</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
              <span className="text-cyan-300 text-xs uppercase tracking-wider font-semibold">Estimated Profit LTV</span>
              <div className="text-2xl font-bold">{formatCurrency(calculatedLTV.profit)}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300 uppercase">Avg. Order Value (RM)</label>
              <input type="number" name="avgOrderValue" value={ltvSettings.avgOrderValue} onChange={handleLtvChange} className="w-full bg-white text-slate-900 border border-white/20 rounded-lg px-3 py-2 placeholder-slate-400 focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300 uppercase">Purchase Freq. / Year</label>
              <input type="number" name="purchaseFrequency" value={ltvSettings.purchaseFrequency} onChange={handleLtvChange} className="w-full bg-white text-slate-900 border border-white/20 rounded-lg px-3 py-2 placeholder-slate-400 focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300 uppercase">Customer Lifespan (Yrs)</label>
              <input type="number" name="customerLifespan" value={ltvSettings.customerLifespan} onChange={handleLtvChange} className="w-full bg-white text-slate-900 border border-white/20 rounded-lg px-3 py-2 placeholder-slate-400 focus:outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-300 uppercase">Gross Margin (%)</label>
              <input type="number" name="grossMargin" value={ltvSettings.grossMargin} onChange={handleLtvChange} className="w-full bg-white text-slate-900 border border-white/20 rounded-lg px-3 py-2 placeholder-slate-400 focus:outline-none" />
            </div>
          </div>
        </section>

        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard title="Total Spend" value={formatCurrency(totals.spend)} icon={DollarSign} trend="neutral" />
              <MetricCard title="Blended CAC" value={formatCurrency(blendedCAC)} subtext={`Target: < ${formatCurrency(calculatedLTV.profit / 3)}`} icon={Users} trend={blendedCAC < calculatedLTV.profit / 3 ? "positive" : "negative"} />
              <MetricCard title="Total Revenue" value={formatCurrency(totals.revenue)} subtext={`${totalROI.toFixed(1)}% ROI`} icon={TrendingUp} trend={totalROI > 0 ? "positive" : "negative"} />
              <MetricCard title="Overall ROAS" value={`${totalROAS.toFixed(2)}x`} subtext={totalROAS > 4 ? "Excellent Efficiency" : "Needs Optimization"} icon={BarChart3} trend={totalROAS > 3 ? "positive" : "neutral"} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <ArrowUpRight className="text-green-400" size={20} /> Best Performers (by ROI)
                </h3>
                <div className="space-y-4">
                  {[...analyzedChannels].sort((a, b) => b.roi - a.roi).slice(0, 3).map((ch, idx) => (
                    <div key={ch.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-600/20 text-cyan-300 flex items-center justify-center text-xs font-bold">{idx + 1}</div>
                        <div>
                          <p className="font-semibold text-white">{ch.name}</p>
                          <p className="text-xs text-gray-300">Spend: {formatCurrency(ch.spend)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-400">{formatPercent(ch.roi)} ROI</p>
                        <p className="text-xs text-gray-300">{formatCurrency(ch.cac)} CAC</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-blue-400" size={20} /> Scale Opportunities
                </h3>
                <p className="text-sm text-gray-300 mb-4">Channels with high ROAS but lower spend compared to others.</p>
                <div className="space-y-4">
                  {[...analyzedChannels]
                    .filter((c) => c.roas > 3 && c.spend < (totals.spend / channels.length) * 1.5)
                    .sort((a, b) => b.roas - a.roas)
                    .slice(0, 3)
                    .map((ch) => (
                      <div key={ch.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-semibold text-white">{ch.name}</p>
                            <p className="text-xs text-gray-300">ROAS: {ch.roas.toFixed(2)}x</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-400">Scale Budget</p>
                          <p className="text-xs text-gray-300">Efficiency is high</p>
                        </div>
                      </div>
                    ))}
                  {[...analyzedChannels].filter((c) => c.roas > 3 && c.spend < (totals.spend / channels.length) * 1.5).length === 0 && (
                    <div className="text-center py-6 text-gray-400 text-sm">No obvious scaling opportunities detected based on current data.</div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                <h3 className="font-bold text-white">Performance Summary</h3>
                <button onClick={() => setActiveTab("inputs")} className="text-sm text-cyan-300 hover:text-white font-medium">
                  Edit Data →
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-white/5 text-gray-300 font-medium border-b border-white/10">
                    <tr>
                      <th className="px-6 py-3">Channel</th>
                      <th className="px-6 py-3 text-right">Spend</th>
                      <th className="px-6 py-3 text-right">Revenue</th>
                      <th className="px-6 py-3 text-right">CAC</th>
                      <th className="px-6 py-3 text-right">ROAS</th>
                      <th className="px-6 py-3 text-right">LTV:CAC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {analyzedChannels.map((ch) => (
                      <tr key={ch.id} className="hover:bg-white/5">
                        <td className="px-6 py-3 font-medium text-white">{ch.name}</td>
                        <td className="px-6 py-3 text-right text-gray-300">{formatCurrency(ch.spend)}</td>
                        <td className="px-6 py-3 text-right text-gray-300">{formatCurrency(ch.revenue)}</td>
                        <td className={`px-6 py-3 text-right font-medium ${ch.cac > calculatedLTV.profit ? "text-red-400" : "text-gray-200"}`}>{formatCurrency(ch.cac)}</td>
                        <td className="px-6 py-3 text-right">{ch.roas.toFixed(2)}x</td>
                        <td className="px-6 py-3 text-right">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${ch.ltvCac >= 3 ? "bg-green-500/20 text-green-300" : ch.ltvCac >= 1 ? "bg-yellow-500/20 text-yellow-300" : "bg-red-500/20 text-red-300"}`}>{ch.ltvCac.toFixed(1)}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "inputs" && (
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Channel Data Entry</h3>
                  <p className="text-sm text-gray-300">Enter your raw data. Metrics are calculated automatically.</p>
                </div>
                <button onClick={addChannel} className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  <Plus size={16} /> Add Channel
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-white/10 text-gray-300">
                      <th className="text-left py-3 px-2 w-48">Channel Name</th>
                      <th className="text-right py-3 px-2">Spend (RM)</th>
                      <th className="text-right py-3 px-2">Impressions</th>
                      <th className="text-right py-3 px-2">Clicks</th>
                      <th className="text-right py-3 px-2">Leads</th>
                      <th className="text-right py-3 px-2 bg-white/10 rounded-t-lg text-white">Customers</th>
                      <th className="text-right py-3 px-2 bg-white/10 rounded-t-lg text-white">Revenue (RM)</th>
                      <th className="w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {channels.map((ch) => (
                      <tr key={ch.id} className="group hover:bg-white/5 transition-colors">
                        <td className="p-2">
                          <input type="text" value={ch.name} onChange={(e) => updateChannel(ch.id, "name", e.target.value)} className="w-full font-medium bg-transparent border-b border-transparent text-white focus:border-cyan-500 focus:outline-none px-1 py-1" />
                        </td>
                        <td className="p-2">
                          <input type="number" value={ch.spend} onChange={(e) => updateChannel(ch.id, "spend", e.target.value)} className="w-full text-right bg-white text-slate-900 border border-white/20 rounded px-2 py-1 focus:outline-none" />
                        </td>
                        <td className="p-2">
                          <input type="number" value={ch.impressions} onChange={(e) => updateChannel(ch.id, "impressions", e.target.value)} className="w-full text-right bg-white text-slate-900 border border-white/20 rounded px-2 py-1 focus:outline-none" />
                        </td>
                        <td className="p-2">
                          <input type="number" value={ch.clicks} onChange={(e) => updateChannel(ch.id, "clicks", e.target.value)} className="w-full text-right bg-white text-slate-900 border border-white/20 rounded px-2 py-1 focus:outline-none" />
                        </td>
                        <td className="p-2">
                          <input type="number" value={ch.leads} onChange={(e) => updateChannel(ch.id, "leads", e.target.value)} className="w-full text-right bg-white text-slate-900 border border-white/20 rounded px-2 py-1 focus:outline-none" />
                        </td>
                        <td className="p-2 bg-white/10">
                          <input type="number" value={ch.customers} onChange={(e) => updateChannel(ch.id, "customers", e.target.value)} className="w-full text-right bg-white text-slate-900 border border-white/20 rounded px-2 py-1 focus:outline-none font-medium" />
                        </td>
                        <td className="p-2 bg-white/10">
                          <input type="number" value={ch.revenue} onChange={(e) => updateChannel(ch.id, "revenue", e.target.value)} className="w-full text-right bg-white text-slate-900 border border-white/20 rounded px-2 py-1 focus:outline-none font-medium" />
                        </td>
                        <td className="p-2 text-center">
                          <button onClick={() => removeChannel(ch.id)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-4">Metric Explanations & Formulas Used</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
                <div>
                  <span className="font-semibold block text-white mb-1">CAC (Customer Acquisition Cost)</span>
                  <code>Total Spend / # Customers</code>
                  <p className="mt-1 text-xs text-gray-400">How much you pay to buy a customer. Lower is better.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white mb-1">ROAS (Return on Ad Spend)</span>
                  <code>Revenue / Spend</code>
                  <p className="mt-1 text-xs text-gray-400">For every RM1 spent, how much revenue you get. &gt; 4.0 is usually strong.</p>
                </div>
                <div>
                  <span className="font-semibold block text-white mb-1">LTV:CAC Ratio</span>
                  <code>(LTV * Margin) / CAC</code>
                  <p className="mt-1 text-xs text-gray-400">Target ~3:1 for healthy growth.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
