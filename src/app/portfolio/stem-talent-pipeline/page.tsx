import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { getPortfolioById } from "@/data/portfolio";

export default function StemTalentPipelinePage() {
  const project = getPortfolioById('stem-talent-pipeline')!;
  return <ProjectDetail project={project} />;
}

