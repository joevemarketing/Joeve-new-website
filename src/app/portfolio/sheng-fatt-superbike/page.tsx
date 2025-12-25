import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { getPortfolioById } from "@/data/portfolio";

export default function ShengFattSuperbikePage() {
  const project = getPortfolioById('sheng-fatt-superbike')!;
  return <ProjectDetail project={project} />;
}

