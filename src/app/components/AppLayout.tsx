import { Outlet, NavLink } from "react-router";
import { Camera, PenTool, Layout as LayoutIcon, Menu, X, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/product-design", label: "Product Design" },
    { to: "/photography", label: "Photography" },
    { to: "/writing", label: "Writing" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 selection:bg-zinc-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <NavLink to="/" className="text-xl tracking-widest uppercase font-medium">
            Michael <span className="font-bold text-zinc-900">Zick</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-zinc-500 ${
                    isActive ? "text-zinc-900 pb-1 border-b-2 border-zinc-900" : "text-zinc-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl font-stylized transition-colors duration-300 ${
                      isActive ? "text-zinc-900 font-bold uppercase" : "text-zinc-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-xl tracking-widest uppercase font-medium block text-center md:text-left">
              Michael <span className="font-bold text-zinc-900">Zick</span>
            </span>
            <p className="text-sm text-zinc-500 mt-2 text-center md:text-left">Design. Photography. Words.</p>
          </div>
          
          <div className="flex space-x-6 text-zinc-400 justify-center">
            <a href="#" className="hover:text-zinc-900 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-zinc-900 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-zinc-900 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8 text-center md:text-left text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} Michael Zick. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
