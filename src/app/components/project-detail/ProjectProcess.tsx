import { motion } from "motion/react";

interface ProcessStep {
  phase: string;
  description: string;
}

interface ProjectProcessProps {
  process: ProcessStep[];
}

export function ProjectProcess({ process }: ProjectProcessProps) {
  return (
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
          {process.map((step, index) => (
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
  );
}
