import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router";
import { articles } from "../data/articles";

export function Writing() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24 flex flex-col md:flex-row items-center justify-between border-b-2 border-zinc-900 pb-16"
      >
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-stylized text-zinc-900 mb-6 font-bold uppercase tracking-tighter">Words</h1>
          <p className="text-zinc-600 max-w-xl text-lg leading-relaxed md:ml-2 font-medium">
            Essays, thoughts, and technical deep-dives. I write to clarify my own thinking and share insights gathered from a decade in the creative industry.
          </p>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-zinc-900 text-zinc-50 w-32 h-32">
           <BookOpen size={32} strokeWidth={2} />
        </div>
      </motion.div>

      <div className="space-y-16">
        {articles.map((article, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group grid md:grid-cols-4 gap-8 md:gap-12 items-start"
          >
            {/* Meta Information */}
            <div className="md:col-span-1 text-sm text-zinc-500 uppercase tracking-widest leading-loose pt-2">
              <span className="block text-zinc-900 font-bold mb-1 border-b border-zinc-200 pb-2">{article.category}</span>
              <span className="block mt-2">{article.date}</span>
              <span className="block text-xs mt-2 text-zinc-400">{article.readTime}</span>
            </div>
            
            {/* Content */}
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-stylized text-zinc-900 mb-4 font-bold tracking-tight uppercase group-hover:text-zinc-600 transition-all duration-300">
                <Link to={`/writing/${article.slug}`} className="hover:text-zinc-600 transition-colors">
                  {article.title}
                </Link>
              </h2>
              <p className="text-zinc-600 leading-relaxed text-lg mb-6 font-medium">
                {article.excerpt}
              </p>
              
              <Link to={`/writing/${article.slug}`} className="inline-flex items-center text-sm font-bold border-b-2 border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors uppercase tracking-wider">
                Read Article
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <p className="text-zinc-900 font-stylized font-bold uppercase tracking-widest text-2xl">More thoughts coming soon...</p>
      </motion.div>
    </div>
  );
}
