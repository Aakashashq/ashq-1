import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Clock, User, Droplets, Archive, Sparkles, ChevronRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const tips = [
  {
    icon: Droplets,
    title: "Keep it Dry",
    body: "Always remove your artificial jewellery before showering, swimming, or applying perfume. Moisture and chemicals can cause plating to tarnish quickly.",
  },
  {
    icon: Archive,
    title: "Store Properly",
    body: "Store each piece in an airtight ziplock bag or a separate fabric-lined box. Keeping them separate prevents scratches and tangles.",
  },
  {
    icon: Sparkles,
    title: "Gentle Cleaning",
    body: "Clean your jewellery using a dry, soft cotton cloth after every wear to wipe away sweat and body oils. Avoid harsh liquid jewelry cleaners as they can strip the polish.",
  },
];

export default function BlogPage() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[#0D5C34] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="blog-hero-pat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 3 L37 20 L20 37 L3 20 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-hero-pat)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              {t.nav.blog}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Jewellery Care &amp; Insights
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              Expert tips, trade insights, and care guides from ASHQ's jewellery specialists.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog post */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
          >
            {/* Article header banner */}
            <div className="h-56 bg-gradient-to-br from-[#0D5C34] to-[#0a3d21] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-15">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="post-banner-pat" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M15 2 L28 15 L15 28 L2 15 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#post-banner-pat)" />
                </svg>
              </div>
              <div className="relative text-center px-6">
                <Droplets className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-90" />
                <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Care Guide</span>
              </div>
            </div>

            {/* Article body */}
            <div className="p-8 sm:p-10">
              <motion.div variants={fadeUp}>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    May 2025
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    3 min read
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    ASHQ Team
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4 leading-snug">
                  💧 How to Make Your Jewellery Last
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Imitation jewellery is a fantastic investment, but it needs a little TLC to keep it looking brand new.
                  Follow these simple steps to preserve the finish, shine, and life of every piece.
                </p>
              </motion.div>

              {/* Tips */}
              <motion.div variants={stagger} className="space-y-6 mb-10">
                {tips.map((tip) => (
                  <motion.div
                    key={tip.title}
                    variants={fadeUp}
                    className="flex gap-4 p-5 rounded-lg bg-[#F0FAF5] dark:bg-[#061e10] border border-[#0D5C34]/15 dark:border-[#D4AF37]/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0D5C34] flex items-center justify-center shrink-0 mt-0.5">
                      <tip.icon className="w-4.5 h-4.5 text-[#D4AF37]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{tip.body}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={fadeUp}
                className="border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Interested in ASHQ Jewellery?</p>
                  <p className="text-xs text-muted-foreground">Browse our catalogue or get in touch for bulk export inquiries.</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <Link href="/products">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#0D5C34] text-[#D4AF37] text-sm font-semibold hover:bg-[#0a4828] transition-colors cursor-pointer whitespace-nowrap">
                      View Products <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                  <Link href="/contact">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#D4AF37] text-[#D4AF37] text-sm font-semibold hover:bg-[#D4AF37]/10 transition-colors cursor-pointer whitespace-nowrap">
                      Contact Us
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.article>

          {/* More posts coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              More articles coming soon
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
