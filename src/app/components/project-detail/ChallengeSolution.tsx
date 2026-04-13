import { motion } from "motion/react";

interface ChallengeSolutionProps {
  challenge: string;
  solution: string;
}

export function ChallengeSolution({ challenge, solution }: ChallengeSolutionProps) {
  return (
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
            <p className="text-lg text-zinc-600 leading-relaxed">{challenge}</p>
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
            <p className="text-lg text-zinc-600 leading-relaxed">{solution}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
