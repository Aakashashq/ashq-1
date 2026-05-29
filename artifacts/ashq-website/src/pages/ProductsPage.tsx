import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Diamond, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/components/layout/LanguageProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

type Category = "all" | "sets" | "individual" | "custom";

const products = [
  {
    name: "Earrings",
    category: "individual" as Category,
    desc: "Studs, drops, hoops, jhumkas, chandbalis, and shoulder dusters. Traditional and contemporary designs for every market segment.",
    details: ["Available in gold-plated, silver-finish, and oxidized", "Size range: 1cm – 12cm", "MOQ: 100 pairs per design"],
    icon: "◇",
    gradient: "from-[#0D5C34] to-[#1a3a5c]",
  },
  {
    name: "Necklaces",
    category: "individual" as Category,
    desc: "Chains, chokers, layered sets, maang tikkas, and statement pieces in traditional and western styles.",
    details: ["Length range: 16\" – 40\"", "Gold, silver, and rose gold finishes", "MOQ: 50 pieces per design"],
    icon: "◈",
    gradient: "from-[#1a3a5c] to-[#0D5C34]",
  },
  {
    name: "Bangles",
    category: "individual" as Category,
    desc: "Traditional and contemporary bangle designs. Singles, sets of 2-4, and full dozen sets for bridal markets.",
    details: ["Standard sizes 2/2 – 2/12", "Lacquer, meenakari, and plain finishes", "MOQ: 50 sets"],
    icon: "○",
    gradient: "from-[#0D5C34] to-[#0a3d21]",
  },
  {
    name: "Bracelets",
    category: "individual" as Category,
    desc: "Charm bracelets, link bracelets, cuff bracelets, and tennis-style bracelets for western markets.",
    details: ["Adjustable and fixed sizes available", "Lobster clasp and toggle clasp options", "MOQ: 100 pieces"],
    icon: "◇",
    gradient: "from-[#0a3d21] to-[#0D5C34]",
  },
  {
    name: "Rings",
    category: "individual" as Category,
    desc: "Fashion rings, cocktail rings, midi rings, and adjustable statement rings in all styles.",
    details: ["Adjustable and standard sized", "Rhinestone, pearl, enamel embellishments", "MOQ: 100 pieces"],
    icon: "◯",
    gradient: "from-[#0D5C34] to-[#1a3a5c]",
  },
  {
    name: "Bridal Jewellery Sets",
    category: "sets" as Category,
    desc: "Complete bridal jewellery sets including necklace, earrings, maang tikka, nath, and bangles. South Asian bridal aesthetics.",
    details: ["Full sets and partial sets", "Heavy and light-weight options", "MOQ: 25 sets per design"],
    icon: "★",
    gradient: "from-[#1a3a5c] to-[#0a3d21]",
  },
  {
    name: "Fashion Jewellery",
    category: "individual" as Category,
    desc: "Trend-driven seasonal collections for fast-fashion retail markets. Updated designs every quarter.",
    details: ["Seasonal trend forecasting included", "Rapid turnaround for fast-fashion buyers", "MOQ: 100 pieces"],
    icon: "◈",
    gradient: "from-[#0a3d21] to-[#0D5C34]",
  },
  {
    name: "Custom Designs",
    category: "custom" as Category,
    desc: "OEM/ODM manufacturing to your exact specifications. Provide a sketch, image, or sample — we'll produce it.",
    details: ["3D rendering available on request", "Private labelling and branded packaging", "MOQ: Negotiable"],
    icon: "◆",
    gradient: "from-[#0D5C34] to-[#0a3d21]",
  },
];

const filterValues: { value: Category; key: "filterAll" | "filterSets" | "filterIndividual" | "filterCustom" }[] = [
  { value: "all", key: "filterAll" },
  { value: "sets", key: "filterSets" },
  { value: "individual", key: "filterIndividual" },
  { value: "custom", key: "filterCustom" },
];

export default function ProductsPage() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0D5C34] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="prod-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#prod-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              {t.products.label}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {t.products.heading}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              500+ product variants across 8 categories, sourced from India's finest jewellery artisans.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#F0FAF5] dark:bg-[#061e10] border-b border-border sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 flex-wrap justify-center">
            {filterValues.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                  active === f.value
                    ? "bg-[#0D5C34] text-[#D4AF37] border border-[#D4AF37]"
                    : "bg-card border border-border text-foreground hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
                data-testid={`filter-${f.value}`}
              >
                {t.products[f.key]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="bg-card border border-border rounded-lg overflow-hidden flex flex-col"
                  data-testid={`card-product-${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-15">
                      <svg width="100%" height="100%">
                        <defs>
                          <pattern id={`pp-${product.name}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <path d="M15 2 L28 15 L15 28 L2 15 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#pp-${product.name})`} />
                      </svg>
                    </div>
                    <div className="relative text-center">
                      <span className="text-5xl text-[#D4AF37] opacity-70">{product.icon}</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`text-xs px-2 py-1 rounded-full capitalize font-medium ${
                        product.category === "custom"
                          ? "bg-[#0E8A6A]/80 text-white"
                          : product.category === "sets"
                          ? "bg-[#D4AF37]/80 text-[#0D5C34]"
                          : "bg-white/20 text-white"
                      }`}>
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif font-bold text-foreground text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{product.desc}</p>
                    <ul className="space-y-1 mb-5">
                      {product.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Diamond className="w-3 h-3 text-[#D4AF37] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <motion.span
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#0D5C34] dark:bg-[#D4AF37] text-white dark:text-[#0D5C34] text-sm font-semibold rounded cursor-pointer hover:opacity-90 transition-opacity"
                        data-testid={`button-inquire-${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {t.products.inquireBtn} <ChevronRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D5C34]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-serif font-bold text-white mb-4">
              {t.products.requestBtn}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-8">
              {t.products.requestSub}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0D5C34] font-bold text-sm tracking-wide rounded cursor-pointer hover:bg-[#c9a230] transition-colors"
                  data-testid="button-custom-inquiry">
                  {t.products.requestCta}
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
