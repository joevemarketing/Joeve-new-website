import { Button } from "@/components/ui/button";

export default function AITransformationGuidePage() {
  const downloadHref = "/downloads/ai-transformation-guide.html";
  return (
    <main className="min-h-screen pt-20 bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Transformation Guide</h1>
          <p className="text-gray-400 mb-6">A concise guide covering strategies, use-cases, and ROI frameworks for Malaysian SMEs.</p>
          <div className="bg-joeve-blue-deep border border-white/10 rounded-xl p-6 mb-6">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
              <li>Identify high-impact AI opportunities in your business</li>
              <li>Evaluate build vs. buy options and integration paths</li>
              <li>Measure ROI and align outcomes with business goals</li>
            </ul>
          </div>
          <div className="flex gap-3">
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full">
              <a href={downloadHref} download>Download Guide</a>
            </Button>
            <a href="/resources" className="px-4 py-2 border border-white/20 text-gray-300 rounded-full text-sm">Back to resources</a>
          </div>
        </div>
      </section>
    </main>
  );
}
