import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { getPortfolioById } from "@/data/portfolio";

export default function JoeveSmartSolutionsSitePage() {
  const project = getPortfolioById('joevesmartsolutions-site')!;
  return <ProjectDetail project={project} />;
}

