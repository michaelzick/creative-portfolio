import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export function ProjectCTA() {
  return (
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
  );
}
