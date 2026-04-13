import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1760008486593-a85315610136?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1669307502953-25b3f7ec16e0?q=80&w=2000&auto=format&fit=crop",
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

export function HeroSlider() {
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
    customPaging: () => (
      <div className="custom-dot w-2.5 h-2.5 rounded-full bg-white/30 transition-all duration-300 cursor-pointer"></div>
    ),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden group">
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

      <Slider {...sliderSettings} className="h-full">
        {heroImages.map((src, index) => (
          <div key={index} className="h-screen w-full relative outline-none focus:outline-none">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(" + src + ")" }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </Slider>

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
  );
}
