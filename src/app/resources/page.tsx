import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Transformation Checklist",
      slug: "ai-transformation-checklist",
      description: "Step-by-step checklist to adopt AI in 90 days",
      download: "/downloads/ai-transformation-checklist.html",
    },
    {
      title: "Digital Marketing ROI Calculator",
      slug: "digital-marketing-roi-calculator",
      description: "Simple worksheet to estimate channel ROI and CAC/LTV",
      download: "/downloads/digital-marketing-roi-calculator.html",
    },
    {
      title: "Web App Development Guide",
      slug: "web-app-development-guide",
      description: "Practical guide to plan and scope your custom web app",
      download: "/downloads/web-app-development-guide.html",
    },
    {
      title: "AI Transformation Guide",
      slug: "ai-transformation-guide",
      description: "25-page overview of strategies, use-cases and ROI",
      download: "/downloads/ai-transformation-guide.html",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Resources</h1>
          <p className="text-gray-400 mb-10">Free tools and guides to help you evaluate and implement AI.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <div key={r.slug} className="bg-joeve-blue-deep border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-2">{r.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{r.description}</p>
                <div className="flex gap-3">
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full">
                    <Link href={`/resources/${r.slug}`}>View details</Link>
                  </Button>
                  <a href={r.download} download className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full text-sm hover:bg-cyan-400 hover:text-joeve-blue-deep">
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
