import { motion } from "motion/react";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  role: string;
  year: string;
  heroImage: string;
}

export function ProjectHero({ title, subtitle, role, year, heroImage }: ProjectHeroProps) {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-12 border-b-2 border-zinc-900 pb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-5 block">
            {year} — {role}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-stylized text-zinc-900 font-bold uppercase tracking-tighter leading-tight mb-6 max-w-5xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 font-medium max-w-3xl md:ml-2">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative overflow-hidden bg-zinc-100"
        >
          <img
            src={heroImage}
            alt={title}
            className="w-full h-[60vh] md:h-[70vh] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
