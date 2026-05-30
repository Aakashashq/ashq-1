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

type Category = "all" | "sets" | "individual";

const products = [
  {
    name: "Bridal Jewellery Set",
    category: "sets" as Category,
    desc: "Elaborate multi-strand bridal necklace set with traditional temple jewellery design. Perfect for South Asian bridal markets.",
    details: ["Gold-plated antique finish", "Multi-piece set with matching earrings", "MOQ: 10 sets per design"],
    gradient: "from-[#0D5C34] to-[#0a3d21]",
    image: "/products/bridal-jewellery-set.jpg",
  },
  {
    name: "Festive Gold Set",
    category: "sets" as Category,
    desc: "Elegant festive necklace and earring set featuring emerald green stones and pearl drops. Ideal for festive and occasion wear.",
    details: ["Kundan and emerald stone work", "Necklace + chandbali earring set", "MOQ: 20 sets per design"],
    gradient: "from-[#0a3d21] to-[#0D5C34]",
    image: "/products/festive-gold-set.png",
  },
  {
    name: "Gold-Plated Choker Set",
    category: "sets" as Category,
    desc: "Heavy gold-plated choker necklace with matching jhumka earrings and maang tikka. Traditional craftsmanship, premium finish.",
    details: ["22kt gold-plated brass base", "Choker + jhumkas + tikka set", "MOQ: 15 sets per design"],
    gradient: "from-[#0D5C34] to-[#1a3a5c]",
    image: "/products/gold-choker-set.webp",
  },
  {
    name: "Kundan Bridal Necklace Set",
    category: "sets" as Category,
    desc: "Stunning Kundan bridal set with multi-colour gemstone drops and chandbali earrings. Vibrant, show-stopping bridal piece.",
    details: ["Kundan polki with semi-precious drops", "Necklace + earrings + maang tikka", "MOQ: 10 sets per design"],
    gradient: "from-[#1a3a5c] to-[#0a3d21]",
    image: "/products/kundan-bridal-set.webp",
  },
  {
    name: "Kundan Pendant Necklace",
    category: "individual" as Category,
    desc: "Classic pearl-chain Kundan pendant necklace with matching stud earrings. Versatile piece for daily wear and occasions.",
    details: ["Pearl + antique bead chain", "Kundan pendant with matching earrings", "MOQ: 25 pieces per design"],
    gradient: "from-[#0D5C34] to-[#0a3d21]",
    image: "/products/kundan-pendant-necklace.webp",
  },
  {
    name: "Layered Chain Necklace",
    category: "individual" as Category,
    desc: "Minimalist triple-layered gold chain necklace with clover motifs. Contemporary design for western and fashion markets.",
    details: ["Gold-plated fine chain", "Triple-layer with clover pendants", "MOQ: 50 pieces per design"],
    gradient: "from-[#0a3d21] to-[#0D5C34]",
    image: "/products/layered-chain-necklace.webp",
  },
  {
    name: "Oxidized Silver Jhumka Earrings",
    category: "individual" as Category,
    desc: "Teardrop oxidized silver jhumka earrings with intricate filigree work. Popular in Middle Eastern and European markets.",
    details: ["Oxidized silver-toned brass", "Teardrop stud with bell jhumka", "MOQ: 50 pairs per design"],
    gradient: "from-[#0D5C34] to-[#0a3d21]",
    image: "/products/oxidized-jhumka-earrings.jpg",
  },
  {
    name: "Pearl Drop Studs",
    category: "individual" as Category,
    desc: "Elegant pearl drop stud earrings with CZ baguette setting. Clean, classic design for international fashion markets.",
    details: ["Shell pearl with CZ baguette top", "Gold and silver finish available", "MOQ: 100 pairs per design"],
    gradient: "from-[#0a3d21] to-[#1a3a5c]",
    image: "/products/pearl-drop-studs.webp",
  },
  {
    name: "Statement Chandelier Earrings",
    category: "individual" as Category,
    desc: "Glamorous crystal tassel chandelier earrings. High-impact statement piece for evening and party wear markets.",
    details: ["Full rhinestone tassel design", "Lightweight construction despite size", "MOQ: 50 pairs per design"],
    gradient: "from-[#1a3a5c] to-[#0D5C34]",
    image: "/products/chandelier-earrings.webp",
  },
  {
    name: "Traditional Jhumka Earrings — Gold",
    category: "individual" as Category,
    desc: "Classic gold-plated temple jhumka with intricate filigree dome and bead fringe. Timeless traditional design.",
    details: ["22kt gold-plated brass", "Dome jhumka with bead fringe", "MOQ: 50 pairs per design"],
    gradient: "from-[#0D5C34] to-[#0a3d21]",
    image: "/products/jhumka-earrings-gold.jpg",
  },
  {
    name: "Traditional Jhumka Earrings — Stone",
    category: "individual" as Category,
    desc: "Gold jhumka earrings with embedded ruby and emerald stone work. Rich colour, traditional craftsmanship.",
    details: ["Gold-plated with ruby & emerald stones", "Heavy dome jhumka with ghungroo fringe", "MOQ: 30 pairs per design"],
    gradient: "from-[#0a3d21] to-[#0D5C34]",
    image: "/products/jhumka-earrings-stone.png",
  },
];

const filterValues: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "sets", label: "Sets" },
  { value: "individual", label: "Individual Pieces" },
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
              {t.products.sub}
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
                {f.label}
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
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                    ) : (
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
                    )}
                    <div className="absolute top-3 right-3">
                      <span className={`text-xs px-2 py-1 rounded-full capitalize font-medium ${
                        product.category === "sets"
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
