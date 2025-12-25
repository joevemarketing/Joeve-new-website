import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { getPortfolioById } from "@/data/portfolio";

export default function ChatMBPPIntroVideoPage() {
  const project = getPortfolioById('chatmbpp-intro-video')!;
  return <ProjectDetail project={project} />;
}

