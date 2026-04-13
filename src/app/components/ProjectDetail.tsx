import { useParams, Navigate, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { projectsData, Project } from "../data/projects";
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
    <div className="min-h-screen bg-white pt-32">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="px-6 max-w-7xl mx-auto mb-12"
      >
        <Link
          to="/product-design"
          className="inline-flex items-center space-x-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      <div className="px-6">
        <ProjectHero
          title={project.title}
          subtitle={project.subtitle}
          role={project.role}
          year={project.year}
          heroImage={project.heroImage}
        />
      </div>
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
