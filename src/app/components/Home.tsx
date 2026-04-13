import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

// Unsplash dummy images
const heroImages = [
  "https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe?q=80&w=2000&auto=format&fit=crop", // abstract architecture
  "https://images.unsplash.com/photo-1760008486593-a85315610136?q=80&w=2000&auto=format&fit=crop", // UI workspace replaced
  "https://images.unsplash.com/photo-1669307502953-25b3f7ec16e0?q=80&w=2000&auto=format&fit=crop", // landscape
];

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white/70 hover:bg-white/30 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer pointer-events-auto"
    aria-label="Previous slide"
  >
    <ChevronLeft size={32} strokeWidth={2} />
  </button>
);

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white/70 hover:bg-white/30 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer pointer-events-auto"
    aria-label="Next slide"
  >
    <ChevronRight size={32} strokeWidth={2} />
  </button>
);

export function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "40px", zIndex: 20, pointerEvents: "none" }}>
        <ul className="m-0 flex justify-center items-center pointer-events-auto">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="custom-dot w-2.5 h-2.5 rounded-full bg-white/30 transition-all duration-300 cursor-pointer"></div>
    ),
  };

  return (
    <div className="w-full">
      <style>{`
        .slick-dots li {
          margin: 0 12px;
          width: auto;
          height: auto;
        }
        .slick-dots li.slick-active .custom-dot {
          background-color: white;
          transform: scale(1.5);
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden group">
        <Slider {...sliderSettings} className="h-full">
          {heroImages.map((src, index) => (
            <div key={index} className="h-screen w-full relative outline-none focus:outline-none">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </Slider>

        {/* Hero Overlay Text - pointer-events-none ensures we can click arrows/dots underneath */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pt-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] text-white leading-none uppercase font-bold tracking-tight mix-blend-overlay">
              Michael
            </h1>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] text-white leading-none mt-2 md:mt-[-2%] uppercase font-bold tracking-tight">
              Zick
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base font-medium mt-4 md:mt-0"
          >
            Design. Photography. Words.
          </motion.p>
        </div>
      </section>

      {/* Quick Intro / Featured Services */}
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

      {/* Featured Areas Grid */}
      <section className="py-20 bg-zinc-900 text-zinc-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-stylized font-bold uppercase tracking-widest mb-4">Disciplines</h2>
          <div className="w-12 h-1 bg-zinc-600 mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Product Design", link: "/product-design", desc: "Digital platforms focused on user experience and aesthetics." },
            { title: "Photography", link: "/photography", desc: "Capturing light, emotion, and architectural spaces." },
            { title: "Writing", link: "/writing", desc: "Essays and articles on design theory and creative living." }
          ].map((item, idx) => (
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
    </div>
  );
}
