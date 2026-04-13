import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { articles } from "../data/articles";

export function Article() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-40 text-center font-stylized text-4xl font-bold uppercase tracking-tight text-zinc-900 min-h-screen">
        Article not found
        <div className="mt-8">
          <Link to="/writing" className="text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-wider border-b-2 border-zinc-500 pb-1">
            Back to Writing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link 
          to="/writing" 
          className="inline-flex items-center space-x-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Writing</span>
        </Link>
      </motion.div>

      {/* Hero Title Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mb-16 border-b-2 border-zinc-900 pb-16"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-stylized text-zinc-900 mb-8 font-bold uppercase tracking-tighter leading-tight max-w-4xl">
          {article.title}
        </h1>
      </motion.div>

      {/* Content Grid mirroring the Writing page layout */}
      <div className="grid md:grid-cols-4 gap-8 md:gap-12 items-start">
        
        {/* Left Column - Meta Information */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:col-span-1 text-sm text-zinc-500 uppercase tracking-widest leading-loose pt-2 md:sticky md:top-32"
        >
          <span className="block text-zinc-900 font-bold mb-1 border-b border-zinc-200 pb-2">{article.category}</span>
          <span className="block mt-2">{article.date}</span>
          <span className="block text-xs mt-2 text-zinc-400">{article.readTime}</span>
          
          <div className="hidden md:block mt-8 pt-8 border-t border-zinc-200">
             <div className="w-8 h-1 bg-zinc-900"></div>
          </div>
        </motion.div>
        
        {/* Right Column - Article Body */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:col-span-3"
        >
          <div className="mb-12 overflow-hidden bg-zinc-100">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-auto md:h-[500px] object-cover border-2 border-zinc-900"
              loading="lazy"
            />
          </div>
          
          <div className="space-y-8 text-lg leading-relaxed text-zinc-700 font-medium">
            <p className="text-2xl text-zinc-900 font-stylized font-bold leading-relaxed tracking-tight mb-12">
              {article.excerpt}
            </p>
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* End of article marker */}
          <div className="mt-16 pt-8 border-t-2 border-zinc-900 flex items-center justify-between">
             <div className="w-4 h-4 bg-zinc-900 rounded-full"></div>
             <Link 
                to="/writing" 
                className="text-xs font-bold text-zinc-900 hover:text-zinc-500 uppercase tracking-widest transition-colors"
              >
                Back to all words
              </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
