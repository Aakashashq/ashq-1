import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Diamond } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Export Services", href: "/export-services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A2342]/90 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group" data-testid="logo-link">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-sm flex items-center justify-center">
                <Diamond className="w-5 h-5 text-[#0A2342]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-serif font-bold text-[#D4AF37] tracking-widest">
                  ASHQ
                </span>
                <span className="text-[9px] text-white/60 tracking-[0.2em] uppercase hidden sm:block">
                  Merchant Exports
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-white/80 hover:text-[#D4AF37]"
                    }`}
                    data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-white/80 hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
              data-testid="button-toggle-theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link href="/contact">
              <span
                className="hidden md:inline-flex px-4 py-2 text-sm font-semibold bg-[#D4AF37] text-[#0A2342] rounded hover:bg-[#c9a230] transition-colors cursor-pointer"
                data-testid="button-get-quote"
              >
                Get a Quote
              </span>
            </Link>

            <button
              className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-testid="button-hamburger"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0A2342]/95 backdrop-blur-md border-t border-[#D4AF37]/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`block px-4 py-3 rounded text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                        isActive
                          ? "text-[#D4AF37] bg-white/10"
                          : "text-white/80 hover:text-[#D4AF37] hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
