import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const disciplines = [
  { title: "Product Design", link: "/product-design", desc: "Digital platforms focused on user experience and aesthetics." },
  { title: "Photography", link: "/photography", desc: "Capturing light, emotion, and architectural spaces." },
  { title: "Writing", link: "/writing", desc: "Essays and articles on design theory and creative living." }
];

export function DisciplinesGrid() {
  return (
    <section className="py-20 bg-zinc-900 text-zinc-50 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-stylized font-bold uppercase tracking-widest mb-4">Disciplines</h2>
        <div className="w-12 h-1 bg-zinc-600 mx-auto"></div>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {disciplines.map((item, idx) => (
           <motion.div 
             key={idx}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: idx * 0.2 }}
             className="group p-8 border border-zinc-800 hover:border-zinc-500 transition-colors flex flex-col h-full bg-zinc-950/50"
           >
             <h3 className="text-2xl font-stylized font-bold uppercase tracking-tight mb-4 group-hover:text-zinc-300 transition-colors duration-300">{item.title}</h3>
             <p className="text-zinc-400 text-sm mb-8 flex-1 leading-relaxed">{item.desc}</p>
             <Link to={item.link} className="inline-flex items-center text-xs uppercase tracking-widest text-zinc-300 font-bold group-hover:text-white transition-colors">
                Explore <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
             </Link>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
