import { motion } from "framer-motion";
import { Diamond, Target, Eye, Award, Package, Globe, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/components/layout/LanguageProvider";

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
  "Sourcing from 200+ verified manufacturers across Mumbai, Gujarat, and Rajasthan",
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
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2342] py-24 relative overflow-hidden">
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
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#0A2342] to-[#0d3060] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="overview-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M40 0 L0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#overview-grid)" />
                  </svg>
                </div>
                <Diamond className="w-36 h-36 text-[#D4AF37] opacity-20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A2342] to-transparent">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold text-[#D4AF37]">2009</div>
                      <div className="text-white/50 text-xs">Established</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold text-[#D4AF37]">Mumbai</div>
                      <div className="text-white/50 text-xs">Headquarters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-serif font-bold text-[#D4AF37]">IEC</div>
                      <div className="text-white/50 text-xs">Registered</div>
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
                ASHQ is a proprietorship merchant export firm established in Mumbai, Maharashtra, specializing in the sourcing, quality inspection, and international export of premium imitation jewellery. We are not a manufacturer — we are a merchant exporter with an extensive network of verified suppliers across India's leading jewellery production hubs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our clients include importers, wholesalers, distributors, and retail chains in Europe, the Middle East, North America, Southeast Asia, and Africa. We handle the complete export process — from product sourcing and quality control to packaging, documentation, and international logistics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Registered under India's Foreign Trade Policy with a valid IEC (Import Export Code), we operate with full regulatory compliance, ensuring smooth customs clearance and transparent transactions for every buyer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8F9FA] dark:bg-[#061829]">
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
              className="bg-[#0A2342] rounded-lg p-10"
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
      <section className="py-20 bg-[#0A2342]">
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
                { label: "Countries Exported To", value: "30+" },
                { label: "Product Variants", value: "500+" },
                { label: "Years of Export Experience", value: "15+" },
                { label: "Verified Suppliers", value: "200+" },
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
      <section className="py-16 bg-[#F8F9FA] dark:bg-background">
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2342] font-bold text-sm tracking-wide rounded cursor-pointer"
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
