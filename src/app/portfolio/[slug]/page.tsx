import { getPortfolioById, portfolioItems } from "@/data/portfolio";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
export const dynamic = 'force-dynamic'
export const revalidate = 0

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.id }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fallback: any = {
    id: slug,
    title: 'Project Detail',
    category: 'Uncategorized',
    date: '2024',
    client: 'Client Name',
    description: 'Project description placeholder.',
    image:
      'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Abstract%20project%20showcase%20minimalist&image_size=landscape_16_9',
    tags: ['Tech 1', 'Tech 2']
  };
  const project = (getPortfolioById(slug) as any) || fallback;
  return <ProjectDetail project={project} />;
}
