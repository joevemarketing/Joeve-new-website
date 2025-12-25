import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ServiceFallback } from "@/components/services/ServiceFallback";

export const dynamic = "force-dynamic";

const supportedSlugs = [
  "web-app-software-development",
  "social-media-generation",
  "gen-ai-video-production",
  "landing-pages",
  "sem",
  "jo-bizcard",
  "smart-chatbot",
];

export function generateStaticParams() {
  return supportedSlugs.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let service: any = null;
  let error: any = null;

  if (SUPABASE_URL && SUPABASE_ANON) {
    try {
      const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
      const result = await supabase
        .from("services")
        .select(`
          *,
          service_sections (
            type,
            title,
            content,
            order_index
          ),
          testimonials (
            client_name,
            role,
            company,
            quote,
            rating
          ),
          faqs (
            question,
            answer,
            order_index
          )
        `)
        .eq("slug", slug)
        .single();
      service = result.data;
      error = result.error;
    } catch (e) {
      error = e;
    }
  }

  if (error || !service) {
    if (supportedSlugs.includes(slug)) {
       return <ServiceFallback slug={slug} />;
    }
    return notFound();
  }

  // Sort sections
  const sections = service.service_sections?.sort((a: any, b: any) => a.order_index - b.order_index) || [];

  return (
    <main className="min-h-screen pt-20 bg-background">
      {/* Hero */}
      <section className="bg-joeve-blue-deep py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))] z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <Link href="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wider">
            {service.hero_title || service.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {service.hero_subtitle || service.short_tagline}
          </p>
        </div>
      </section>

      {/* Dynamic Sections */}
      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Long Description */}
        {service.long_description && (
          <section className="prose prose-invert max-w-4xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: service.long_description }} />
          </section>
        )}

        {/* Custom Sections */}
        {sections.map((section: any, index: number) => (
          <section key={index} className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">
              {section.title}
            </h2>
            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          </section>
        ))}

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq: any, i: number) => (
                <div key={i} className="bg-joeve-blue-dark border border-white/10 rounded-lg p-6">
                  <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center py-12 bg-joeve-blue-deep rounded-2xl border border-cyan-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <Button size="lg" className="bg-joeve-magenta hover:bg-purple-600 text-white rounded-full px-8 text-lg">
            Request a Quote
          </Button>
        </section>
      </div>
    </main>
  );
}
