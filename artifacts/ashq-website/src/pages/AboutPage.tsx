import { motion } from "framer-motion";
import { Target, Eye, Award, Package, Globe, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const values = [
  { icon: Target, title: "Precision", desc: "Every order is handled with meticulous attention to detail, from sourcing to delivery." },
  { icon: Award, title: "Quality", desc: "Pre-shipment inspection on every batch ensures only the finest pieces reach our clients." },
  { icon: Globe, title: "Global Reach", desc: "Serving buyers in 30+ countries with deep understanding of international trade requirements." },
  { icon: Package, title: "Reliability", desc: "Consistent supply, accurate documentation, and on-time delivery — every time." },
];

const capabilities = [
  "Sourcing from verified manufacturers across Mumbai, Gujarat, and Rajasthan",
  "Quality inspection and grading before every shipment",
  "Export documentation: GR forms, RCMC, Shipping Bills, Country of Origin certificates",
  "Sea and air freight coordination with trusted logistics partners",
  "Branded and export-grade packaging solutions",
  "OEM / ODM manufacturing for custom designs",
  "MOQs suitable for importers and wholesalers",
  "Samples available before bulk orders",
];

export default function AboutPage() {
  const { t } = useLanguage();
  useSEO({
    title: "About ASHQ — Artificial Jewellery Manufacturer India | OEM & Private Label",
    description: "ASHQ Shines Worldwide is a Mumbai-based artificial jewellery manufacturer and fashion jewellery manufacturer. We offer OEM, private label, and custom jewellery manufacturing for global importers. IEC · GST · MSME · FIEO registered.",
    keywords: [
      "Artificial Jewellery Manufacturer India", "Fashion Jewellery Manufacturer India",
      "Custom Jewellery Manufacturer India", "OEM Fashion Jewellery Manufacturer",
      "Private Label Jewellery Manufacturer", "Indian Jewellery Export Company",
      "Jewellery Export House India", "Mumbai jewellery manufacturer",
      "imitation jewellery manufacturer Mumbai", "costume jewellery manufacturer India",
    ],
    canonicalPath: "/about",
  });
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0D5C34] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="about-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              {t.about.label}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              {t.about.heading}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              A Mumbai-based merchant export firm built on trust, quality, and a deep connection with India's finest jewellery artisans.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#0D5C34] to-[#0a3d21] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="overview-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M40 0 L0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#overview-grid)" />
                  </svg>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 px-8">
                  <img
                    src="/logo.jpg"
                    alt="ASHQ Shines Worldwide — Mumbai Jewellery Exporter"
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-[#D4AF37]/40 shadow-2xl"
                  />
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#D4AF37] tracking-widest">ASHQ</div>
                    <div className="text-white/60 text-xs tracking-[0.2em] uppercase">Shines Worldwide</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0D5C34] to-transparent">
                  <div className="flex gap-4 justify-center">
                    <div className="text-center">
                      <div className="text-xl font-serif font-bold text-[#D4AF37]">2025</div>
                      <div className="text-white/50 text-[10px]">Established</div>
                    </div>
                    <div className="w-px bg-[#D4AF37]/20" />
                    <div className="text-center">
                      <div className="text-xl font-serif font-bold text-[#D4AF37]">Mumbai</div>
                      <div className="text-white/50 text-[10px]">Headquarters</div>
                    </div>
                    <div className="w-px bg-[#D4AF37]/20" />
                    <div className="text-center">
                      <div className="text-xl font-serif font-bold text-[#D4AF37]">IEC</div>
                      <div className="text-white/50 text-[10px]">Registered</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">{t.about.storyLabel}</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5 leading-tight">
                {t.about.storyHeading}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.about.storyP1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t.about.storyP2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.storyP3}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F0FAF5] dark:bg-[#061e10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-10"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{t.about.missionHeading}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg italic font-serif">
                "{t.about.missionText}"
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#0D5C34] rounded-lg p-10"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{t.about.visionHeading}</h3>
              <p className="text-white/70 leading-relaxed text-lg italic font-serif">
                "{t.about.visionText}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              {t.about.valuesLabel}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold text-foreground">
              {t.about.valuesHeading}
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-7 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-[#0D5C34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
                {t.about.capabilitiesLabel}
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold text-white mb-8 leading-tight">
                {t.about.capabilitiesHeading}
              </motion.h2>
              <motion.div variants={stagger} className="space-y-3">
                {capabilities.map((cap) => (
                  <motion.div key={cap} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{cap}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              {[
                { label: "GST Registered", value: "✓" },
                { label: "IEC Registered", value: "✓" },
                { label: "MSME Recognized", value: "✓" },
                { label: "FIEO Member", value: "✓" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-[#D4AF37]/20 rounded-lg p-6 flex items-center justify-between">
                  <span className="text-white/70 text-sm">{stat.label}</span>
                  <span className="text-[#D4AF37] font-serif font-bold text-2xl">{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F0FAF5] dark:bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-serif font-bold text-foreground mb-4">
              {t.whyUs.ctaHeading}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              {t.whyUs.ctaSub}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0D5C34] font-bold text-sm tracking-wide rounded cursor-pointer"
                  data-testid="button-get-in-touch"
                >
                  {t.common.contactUs}
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
