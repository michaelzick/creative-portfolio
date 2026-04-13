import { useParams, Navigate } from "react-router";
import { projectsData, Project } from "../data/projects";
import { ProjectNavigation } from "./project-detail/ProjectNavigation";
import { ProjectHero } from "./project-detail/ProjectHero";
import { ProjectMeta } from "./project-detail/ProjectMeta";
import { ProjectOverview } from "./project-detail/ProjectOverview";
import { ChallengeSolution } from "./project-detail/ChallengeSolution";
import { ProjectResults } from "./project-detail/ProjectResults";
import { ImageGallery } from "./project-detail/ImageGallery";
import { ProjectProcess } from "./project-detail/ProjectProcess";
import { ProjectCTA } from "./project-detail/ProjectCTA";

export type { Project };

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return <Navigate to="/product-design" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <ProjectNavigation />
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        role={project.role}
        year={project.year}
        heroImage={project.heroImage}
      />
      <ProjectMeta
        duration={project.duration}
        team={project.team}
        client={project.client}
        role={project.role}
      />
      <ProjectOverview overview={project.overview} />
      <ChallengeSolution challenge={project.challenge} solution={project.solution} />
      <ProjectResults results={project.results} />
      <ImageGallery images={project.images} title={project.title} />
      <ProjectProcess process={project.process} />
      <ProjectCTA />
    </div>
  );
}
