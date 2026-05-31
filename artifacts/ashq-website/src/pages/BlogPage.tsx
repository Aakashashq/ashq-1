import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Clock, User, BookOpen, ChevronRight, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function BlogPage() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  useSEO({
    title: "Blog – Jewellery Care & Export Insights | ASHQ Merchant Exports",
    description:
      "Expert tips, trade insights, and care guides for imitation jewellery buyers, importers, and wholesalers from ASHQ — a leading Indian jewellery exporter based in Mumbai.",
    keywords: [
      "imitation jewellery blog",
      "jewellery care guide",
      "fashion jewellery exporter",
      "artificial jewellery supplier",
      "Indian jewellery export",
    ],
    canonicalPath: "/blog",
  });

  const [featuredPost, ...restPosts] = blogPosts;

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
              Expert tips, trade insights, and care guides from ASHQ's jewellery specialists — serving importers, wholesalers, and retailers worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Latest Article
            </motion.p>

            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group grid md:grid-cols-2 gap-0 bg-card border border-border rounded-xl overflow-hidden shadow-sm cursor-pointer"
              >
                {/* Featured image */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-[#0D5C34] to-[#0a3d21] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D5C34]/50 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#D4AF37] text-[#0D5C34] text-xs font-bold tracking-wide">
                    {featuredPost.category}
                  </span>
                </div>

                {/* Featured content */}
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {featuredPost.author}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4 leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#D4AF37] text-sm font-semibold group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              All Articles
            </motion.p>

            <motion.div
              variants={stagger}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {restPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <motion.article
                    variants={fadeUp}
                    whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
                    className="group h-full bg-card border border-border rounded-xl overflow-hidden shadow-sm cursor-pointer flex flex-col"
                  >
                    {/* Card image */}
                    <div className="relative h-48 bg-gradient-to-br from-[#0D5C34] to-[#0a3d21] overflow-hidden shrink-0">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D5C34]/60 to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#D4AF37]/90 text-[#0D5C34] text-[10px] font-bold tracking-wide">
                        {post.category}
                      </span>
                    </div>

                    {/* Card content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#D4AF37]" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#D4AF37]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-foreground text-base leading-snug mb-3 group-hover:text-[#D4AF37] transition-colors flex-1">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-1 text-[#D4AF37] text-xs font-semibold group-hover:gap-2 transition-all mt-auto">
                        Read More <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#F0FAF5] dark:bg-[#061e10]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-6">
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              More articles coming soon
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Ready to Start Importing?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Looking for a reliable imitation jewellery exporter? ASHQ Merchant Exports ships premium fashion jewellery to 30+ countries. Contact us to request our catalogue or get a competitive quote.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D5C34] text-[#D4AF37] font-semibold text-sm rounded hover:bg-[#0a4828] transition-colors cursor-pointer whitespace-nowrap">
                  Contact Us Today <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/products">
                <span className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-semibold text-sm rounded hover:bg-[#D4AF37]/10 transition-colors cursor-pointer whitespace-nowrap">
                  View Products
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
