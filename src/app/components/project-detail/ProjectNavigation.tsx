import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function ProjectNavigation() {
  return (
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
  );
}
