import { motion } from "motion/react";

interface ProjectOverviewProps {
  overview: string;
}

export function ProjectOverview({ overview }: ProjectOverviewProps) {
  return (
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
              {overview}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
