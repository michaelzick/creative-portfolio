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
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 block">
            {year} — {role}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-stylized text-zinc-900 font-bold uppercase tracking-tighter mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 font-medium max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
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
