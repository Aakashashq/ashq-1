import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Globe } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useLanguage } from "@/components/layout/LanguageProvider";
import type { Language } from "@/lib/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇦🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.products, href: "/products" },
    { label: t.nav.exportServices, href: "/export-services" },
    { label: t.nav.whyUs, href: "/why-us" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const currentLang = languages.find((l) => l.code === language)!;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D5C34]/90 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer group" data-testid="logo-link">
              <img
                src="/logo.jpg"
                alt="ASHQ Logo"
                className="w-10 h-10 rounded-full object-cover ring-1 ring-[#D4AF37]/60 group-hover:ring-[#D4AF37] transition-all"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-serif font-bold text-[#D4AF37] tracking-widest">
                  ASHQ
                </span>
                <span className="text-[9px] text-white/60 tracking-[0.2em] uppercase hidden sm:block">
                  {t.nav.merchantExports}
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
                    data-testid={`nav-link-${link.href.replace(/\//g, "").replace(/-/g, "") || "home"}`}
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

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-white/80 hover:text-[#D4AF37] hover:bg-white/10 transition-colors text-sm"
                aria-label="Switch language"
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline font-medium">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-1 right-0 w-40 bg-[#0D5C34] border border-[#D4AF37]/30 rounded shadow-xl overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors text-left ${
                          language === lang.code
                            ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.label}</span>
                        {language === lang.code && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
                className="hidden md:inline-flex px-4 py-2 text-sm font-semibold bg-[#D4AF37] text-[#0D5C34] rounded hover:bg-[#c9a230] transition-colors cursor-pointer whitespace-nowrap"
                data-testid="button-get-quote"
              >
                {t.nav.getQuote}
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
            className="lg:hidden bg-[#0D5C34]/95 backdrop-blur-md border-t border-[#D4AF37]/20"
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
              <div className="pt-3 border-t border-white/10 mt-1">
                <p className="text-white/40 text-xs px-4 mb-2 uppercase tracking-wider">Language</p>
                <div className="flex gap-2 px-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setMenuOpen(false); }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm transition-colors ${
                        language === lang.code
                          ? "bg-[#D4AF37]/20 text-[#D4AF37] font-semibold"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
