import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { getPortfolioById } from "@/data/portfolio";

export default function RadioTradersAssociationPage() {
  const project = getPortfolioById('radio-traders-association')!;
  return <ProjectDetail project={project} />;
}

