import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Layers, Users, Clock, Target } from "lucide-react";
import { useParams, Link, Navigate } from "react-router";

const projectsData: Record<string, Project> = {
  "aura-ecommerce": {
    id: "aura-ecommerce",
    title: "Aura E-Commerce",
    subtitle: "Sustainable Fashion Platform",
    role: "UX/UI Design & Frontend",
    year: "2025",
    duration: "4 months",
    team: "3 designers, 2 developers",
    client: "Aura Fashion Co.",
    heroImage: "https://images.unsplash.com/photo-1760008486593-a85315610136?q=80&w=2400&auto=format&fit=crop",
    overview: "A comprehensive redesign for a modern sustainable fashion brand. The goal was to create an immersive, minimalist shopping experience that highlights the organic textures of the clothing while maintaining a frictionless checkout flow.",
    challenge: "The existing platform suffered from high cart abandonment rates and poor mobile conversion. Users found the navigation confusing and the checkout process too lengthy.",
    solution: "We implemented a streamlined single-page checkout, introduced immersive product galleries with zoom functionality, and created a sustainable materials filter that aligns with the brand's eco-conscious values.",
    results: [
      { metric: "42%", label: "Increase in mobile conversions" },
      { metric: "28%", label: "Reduction in cart abandonment" },
      { metric: "3.2x", label: "Increase in average session duration" }
    ],
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
    ],
    process: [
      {
        phase: "Discovery",
        description: "Conducted user interviews with 15 sustainable fashion shoppers and analyzed competitor platforms to identify pain points."
      },
      {
        phase: "Strategy",
        description: "Defined key user journeys and prioritized features based on business impact and user needs."
      },
      {
        phase: "Design",
        description: "Created high-fidelity prototypes with extensive micro-interactions and responsive breakpoints."
      },
      {
        phase: "Development",
        description: "Built the frontend using React and Tailwind CSS, ensuring pixel-perfect implementation."
      }
    ]
  },
  "fintech-dashboard": {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    subtitle: "Financial Analytics Platform",
    role: "Product Design",
    year: "2024",
    duration: "6 months",
    team: "2 designers, 5 developers",
    client: "Nexus Financial",
    heroImage: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?q=80&w=2400&auto=format&fit=crop",
    overview: "An intuitive web application dashboard for a new financial technology startup. Focused on data visualization, ensuring complex analytics are presented in a clean, digestible format without overwhelming the user.",
    challenge: "Financial data is inherently complex. Users needed to understand portfolio performance, risk metrics, and market trends at a glance without feeling overwhelmed by numbers.",
    solution: "Designed a modular dashboard with customizable widgets, implemented progressive disclosure for detailed metrics, and created an intuitive color-coded system for quick data comprehension.",
    results: [
      { metric: "89%", label: "User satisfaction score" },
      { metric: "65%", label: "Faster task completion" },
      { metric: "4.8/5", label: "App store rating" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b91d7a?q=80&w=2000&auto=format&fit=crop"
    ],
    process: [
      {
        phase: "Research",
        description: "Shadowed 10 financial analysts and conducted usability testing on existing tools."
      },
      {
        phase: "Information Architecture",
        description: "Organized complex data hierarchies and defined clear navigation patterns."
      },
      {
        phase: "Visual Design",
        description: "Developed a design system with data visualization components and accessibility standards."
      },
      {
        phase: "Iteration",
        description: "Conducted 3 rounds of user testing and refined interactions based on feedback."
      }
    ]
  },
  "nexus-mobile-app": {
    id: "nexus-mobile-app",
    title: "Nexus Mobile App",
    subtitle: "Productivity & Task Management",
    role: "Lead Interface Designer",
    year: "2023",
    duration: "5 months",
    team: "4 designers, 6 developers",
    client: "Nexus Labs",
    heroImage: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?q=80&w=2400&auto=format&fit=crop",
    overview: "A productivity application designed to seamlessly blend task management with calendar integrations. The interface relies heavily on micro-interactions and a calming monochromatic color palette.",
    challenge: "Users were juggling multiple apps for tasks, calendar, and notes. The challenge was to create a unified experience without adding cognitive load.",
    solution: "Designed a contextual interface that adapts based on time of day and user behavior. Introduced smart suggestions and gesture-based interactions for quick task management.",
    results: [
      { metric: "2.1M", label: "Downloads in first month" },
      { metric: "4.9/5", label: "User rating" },
      { metric: "47%", label: "Daily active users" }
    ],
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
    ],
    process: [
      {
        phase: "Concept",
        description: "Explored interaction patterns and conducted competitive analysis of productivity apps."
      },
      {
        phase: "Prototyping",
        description: "Built interactive prototypes to test gesture interactions and micro-animations."
      },
      {
        phase: "Design System",
        description: "Created a comprehensive component library with dark mode and accessibility features."
      },
      {
        phase: "Launch",
        description: "Collaborated with marketing on App Store presence and onboarding experience."
      }
    ]
  }
};

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  duration: string;
  team: string;
  client: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  images: string[];
  process: { phase: string; description: string }[];
}

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return <Navigate to="/product-design" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-white/80 backdrop-blur-md"
      >
        <Link
          to="/product-design"
          className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </Link>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block">
              {project.year} — {project.role}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-stylized text-zinc-900 font-bold uppercase tracking-tighter mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-medium max-w-2xl">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative overflow-hidden bg-zinc-100"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-[60vh] md:h-[70vh] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="py-16 px-6 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-zinc-400 mb-2">
                <Clock size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Duration</span>
              </div>
              <p className="text-lg font-bold text-zinc-900">{project.duration}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center space-x-2 text-zinc-400 mb-2">
                <Users size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Team</span>
              </div>
              <p className="text-lg font-bold text-zinc-900">{project.team}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-2 text-zinc-400 mb-2">
                <Target size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Client</span>
              </div>
              <p className="text-lg font-bold text-zinc-900">{project.client}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center space-x-2 text-zinc-400 mb-2">
                <Layers size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Role</span>
              </div>
              <p className="text-lg font-bold text-zinc-900">{project.role}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block">Overview</span>
              <h2 className="text-3xl md:text-4xl font-stylized font-bold uppercase tracking-tight text-zinc-900">
                The Project
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-8"
            >
              <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed font-medium">
                {project.overview}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block">Challenge</span>
              <h3 className="text-2xl md:text-3xl font-stylized font-bold uppercase tracking-tight text-zinc-900 mb-6">
                The Problem
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block">Solution</span>
              <h3 className="text-2xl md:text-3xl font-stylized font-bold uppercase tracking-tight text-zinc-900 mb-6">
                Our Approach
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block">Impact</span>
            <h2 className="text-4xl md:text-5xl font-stylized font-bold uppercase tracking-tight">
              Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 border border-zinc-700"
              >
                <span className="text-5xl md:text-6xl font-stylized font-bold text-white mb-4 block">
                  {result.metric}
                </span>
                <span className="text-sm uppercase tracking-widest text-zinc-400 font-bold">
                  {result.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-stylized font-bold uppercase tracking-tight text-zinc-900">
              Visual Journey
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden bg-zinc-100"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-stylized font-bold uppercase tracking-tight text-zinc-900">
              How We Got There
            </h2>
          </motion.div>

          <div className="space-y-12">
            {project.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-12 gap-8 items-start"
              >
                <div className="md:col-span-3">
                  <span className="text-6xl font-stylized font-bold text-zinc-200">
                    0{index + 1}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-stylized font-bold uppercase tracking-tight text-zinc-900 mb-4">
                    {step.phase}
                  </h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 px-6 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block">Next Project</span>
              <h2 className="text-3xl md:text-4xl font-stylized font-bold uppercase tracking-tight text-zinc-900">
                Explore More Work
              </h2>
            </div>
            <Link
              to="/product-design"
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-sm font-bold border-b-2 border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors uppercase tracking-wider"
            >
              <span>View All Projects</span>
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
