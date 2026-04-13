import { motion } from "motion/react";

interface Result {
  metric: string;
  label: string;
}

interface ProjectResultsProps {
  results: Result[];
}

export function ProjectResults({ results }: ProjectResultsProps) {
  return (
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
          {results.map((result, index) => (
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
  );
}
