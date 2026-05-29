import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, Diamond } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

type GalleryFilter = "all" | "earrings" | "necklaces" | "sets" | "custom";

const galleryItems = [
  { id: 1, category: "earrings" as GalleryFilter, label: "Traditional Jhumka Earrings", span: "row-span-2", gradient: "from-[#0D5C34] to-[#1a3a5c]" },
  { id: 2, category: "necklaces" as GalleryFilter, label: "Gold-Plated Choker Set", span: "", gradient: "from-[#1a4a2e] to-[#0E8A6A]/80" },
  { id: 3, category: "sets" as GalleryFilter, label: "Bridal Jewellery Set", span: "", gradient: "from-[#4a3000] to-[#8B6914]" },
  { id: 4, category: "earrings" as GalleryFilter, label: "Oxidized Silver Drop Earrings", span: "", gradient: "from-[#0a3d21] to-[#0D5C34]" },
  { id: 5, category: "necklaces" as GalleryFilter, label: "Layered Chain Necklace", span: "row-span-2", gradient: "from-[#1a3a5c] to-[#0a3d21]" },
  { id: 6, category: "custom" as GalleryFilter, label: "Custom Branded Packaging", span: "", gradient: "from-[#0D5C34] to-[#061e10]" },
  { id: 7, category: "sets" as GalleryFilter, label: "Festive Gold Set", span: "", gradient: "from-[#3d2800] to-[#7a5200]" },
  { id: 8, category: "earrings" as GalleryFilter, label: "Statement Chandelier Earrings", span: "", gradient: "from-[#0E8A6A]/70 to-[#1a4a2e]" },
  { id: 9, category: "necklaces" as GalleryFilter, label: "Kundan Pendant Necklace", span: "row-span-2", gradient: "from-[#1a3a5c] to-[#061e10]" },
  { id: 10, category: "custom" as GalleryFilter, label: "OEM Design Collection", span: "", gradient: "from-[#0D5C34] to-[#1a3a5c]" },
  { id: 11, category: "sets" as GalleryFilter, label: "South Indian Wedding Set", span: "", gradient: "from-[#4a2800] to-[#8a5000]" },
  { id: 12, category: "earrings" as GalleryFilter, label: "Pearl Drop Studs", span: "", gradient: "from-[#0a3d21] to-[#0D5C34]" },
  { id: 13, category: "necklaces" as GalleryFilter, label: "Multi-Layer Boho Necklace", span: "", gradient: "from-[#1a4a2e] to-[#0E8A6A]/60" },
  { id: 14, category: "custom" as GalleryFilter, label: "Private Label Export Lot", span: "", gradient: "from-[#061e10] to-[#0D5C34]" },
];

const galleryFilterValues: { value: GalleryFilter; key: "filterAll" | "filterEarrings" | "filterNecklaces" | "filterSets" | "filterCustom" }[] = [
  { value: "all", key: "filterAll" },
  { value: "earrings", key: "filterEarrings" },
  { value: "necklaces", key: "filterNecklaces" },
  { value: "sets", key: "filterSets" },
  { value: "custom", key: "filterCustom" },
];

export default function GalleryPage() {
  const { t } = useLanguage();
  const [active, setActive] = useState<GalleryFilter>("all");
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  const filtered = active === "all" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0D5C34] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="gal-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gal-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              {t.gallery.label}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {t.gallery.heading}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              A glimpse of the premium imitation jewellery we source and export for our global clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#F0FAF5] dark:bg-[#061e10] border-b border-border sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 flex-wrap justify-center">
            {galleryFilterValues.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                  active === f.value
                    ? "bg-[#0D5C34] text-[#D4AF37] border border-[#D4AF37]"
                    : "bg-card border border-border text-foreground hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
                data-testid={`gallery-filter-${f.value}`}
              >
                {t.gallery[f.key]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className={`relative break-inside-avoid group cursor-pointer rounded-lg overflow-hidden ${
                    item.span === "row-span-2" ? "h-80" : "h-48"
                  } bg-gradient-to-br ${item.gradient}`}
                  onClick={() => setSelected(item)}
                  data-testid={`gallery-item-${item.id}`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id={`gp-${item.id}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M15 2 L28 15 L15 28 L2 15 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#gp-${item.id})`} />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Diamond className="w-12 h-12 text-[#D4AF37] opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full aspect-[4/3] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${selected.gradient}`}>
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="lb-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M20 2 L38 20 L20 38 L2 20 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#lb-pattern)" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Diamond className="w-32 h-32 text-[#D4AF37] opacity-20" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-serif text-lg">{selected.label}</p>
                <p className="text-[#D4AF37] text-xs mt-1 capitalize">{selected.category}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close"
                data-testid="button-close-lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
