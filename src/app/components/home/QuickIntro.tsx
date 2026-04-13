import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function QuickIntro() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-stylized mb-6 text-zinc-900 leading-tight font-bold uppercase tracking-tight">
            Crafting <span className="text-zinc-600">impactful</span> digital experiences
          </h2>
          <p className="text-zinc-600 mb-8 leading-relaxed max-w-md font-medium">
            A multi-disciplinary creative based in New York. I blend intuitive product design with evocative photography and thoughtful writing to build cohesive brand narratives that resonate.
          </p>
          <Link to="/product-design" className="inline-flex items-center space-x-2 text-zinc-900 font-bold hover:text-zinc-600 transition-colors group uppercase tracking-wider text-sm border-b-2 border-zinc-900 pb-1">
            <span>View Selected Work</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] w-full bg-zinc-100"
        >
           <img 
             src="https://images.unsplash.com/photo-1715558643415-04dc77392936?q=80&w=1200&auto=format&fit=crop" 
             alt="Michael Zick working" 
             className="w-full h-full object-cover shadow-2xl"
           />
           <div className="absolute -bottom-6 -left-6 bg-zinc-900 text-white p-6 shadow-xl w-48 hidden md:block border border-zinc-800">
              <span className="font-stylized text-2xl font-bold uppercase tracking-wider block mb-2">Since 2018</span>
              <p className="text-xs text-zinc-400 uppercase tracking-widest leading-loose">Creating with purpose and passion</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
