import { motion, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Camera, X } from "lucide-react";
import { useState } from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1715558643415-04dc77392936?q=80&w=1200&auto=format&fit=crop",
    title: "Moody Portrait",
    desc: "A study of natural light and shadow."
  },
  {
    src: "https://images.unsplash.com/photo-1697200169657-fedec7f5fe0c?q=80&w=1200&auto=format&fit=crop",
    title: "Neon Streets",
    desc: "Cyberpunk aesthetics in Tokyo."
  },
  {
    src: "https://images.unsplash.com/photo-1634921553571-376a18dde21a?q=80&w=1200&auto=format&fit=crop",
    title: "Creative Film",
    desc: "Double exposure experiments on 35mm."
  },
  {
    src: "https://images.unsplash.com/photo-1669307502953-25b3f7ec16e0?q=80&w=1200&auto=format&fit=crop",
    title: "Icelandic Drone",
    desc: "Aerial perspectives of volcanic landscapes."
  },
  {
    src: "https://images.unsplash.com/photo-1772218124727-7945c097d459?q=80&w=1200&auto=format&fit=crop",
    title: "Minimal Still",
    desc: "Geometric forms and muted colors."
  },
  {
    src: "https://images.unsplash.com/photo-1575060808257-805d3bacb05c?q=80&w=1200&auto=format&fit=crop",
    title: "Vintage Lens",
    desc: "Exploring bokeh with legacy glass."
  }
];

export function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24 flex flex-col md:flex-row items-center justify-between"
      >
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-stylized text-zinc-900 mb-6 font-bold uppercase tracking-tighter">Photography</h1>
          <p className="text-zinc-600 max-w-2xl text-lg leading-relaxed md:ml-2 font-medium">
            A visual diary capturing fleeting moments, architectural lines, and raw emotions. I shoot primarily on 35mm film and medium format digital.
          </p>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center p-8 bg-zinc-900 text-zinc-50 border-4 border-zinc-900">
           <Camera size={32} strokeWidth={2} className="mb-4" />
           <span className="font-stylized text-xl font-bold uppercase tracking-widest">Through the lens</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="24px">
            {photos.map((photo, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden cursor-crosshair bg-zinc-100 border border-zinc-200/50"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full block group-hover:scale-105 transition-transform duration-[2s] ease-out mix-blend-multiply"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-zinc-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-stylized font-bold uppercase tracking-tight text-2xl mb-2">{photo.title}</h3>
                    <p className="text-white/80 text-sm font-medium uppercase tracking-widest">{photo.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={36} strokeWidth={1.5} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-full max-h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.title} 
                className="max-h-[80vh] w-auto object-contain mx-auto border-4 border-zinc-900 shadow-2xl"
              />
              <div className="mt-6 text-center">
                 <h3 className="text-white font-stylized font-bold uppercase tracking-widest text-2xl mb-2">{selectedPhoto.title}</h3>
                 <p className="text-zinc-400 text-sm uppercase tracking-widest">{selectedPhoto.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
