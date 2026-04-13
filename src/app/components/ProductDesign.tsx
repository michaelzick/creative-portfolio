import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const projects = [
  {
    id: "aura-ecommerce",
    title: "Aura E-Commerce",
    role: "UX/UI Design & Frontend",
    description: "A comprehensive redesign for a modern sustainable fashion brand. The goal was to create an immersive, minimalist shopping experience that highlights the organic textures of the clothing while maintaining a frictionless checkout flow.",
    image: "https://images.unsplash.com/photo-1760008486593-a85315610136?q=80&w=2000&auto=format&fit=crop",
    year: "2025"
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    role: "Product Design",
    description: "An intuitive web application dashboard for a new financial technology startup. Focused on data visualization, ensuring complex analytics are presented in a clean, digestible format without overwhelming the user.",
    image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?q=80&w=2000&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "nexus-mobile-app",
    title: "Nexus Mobile App",
    role: "Lead Interface Designer",
    description: "A productivity application designed to seamlessly blend task management with calendar integrations. The interface relies heavily on micro-interactions and a calming monochromatic color palette.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?q=80&w=2000&auto=format&fit=crop",
    year: "2023"
  }
];

export function ProductDesign() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center md:text-left"
      >
        <h1 className="text-6xl md:text-8xl font-stylized text-zinc-900 mb-6 font-bold uppercase tracking-tighter">Product Design</h1>
        <p className="text-zinc-600 max-w-2xl text-lg leading-relaxed md:ml-2 font-medium">
          Crafting digital environments that are not only aesthetically pleasing but deeply functional. Every pixel serves a purpose, marrying form and utility to elevate user experiences.
        </p>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="mb-8 overflow-hidden bg-zinc-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                loading="lazy"
              />
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-4 items-start">
              <div className="md:col-span-5 lg:col-span-4">
                <h2 className="text-3xl md:text-4xl font-stylized text-zinc-900 mb-2 font-bold uppercase tracking-tight">
                  {project.title}
                </h2>
                <div className="flex items-center space-x-4 text-xs tracking-widest uppercase text-zinc-500 font-bold mb-6">
                  <span>{project.role}</span>
                  <span>&mdash;</span>
                  <span>{project.year}</span>
                </div>
              </div>

              <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
                <p className="text-zinc-600 leading-loose mb-6">
                  {project.description}
                </p>
                <Link
                  to={`/product-design/${project.id}`}
                  className="inline-flex items-center space-x-2 text-sm font-bold border-b-2 border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors uppercase tracking-wider group-hover:text-zinc-600"
                >
                  <span>View Project</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
