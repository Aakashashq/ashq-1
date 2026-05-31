import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { motion, type Variants } from "framer-motion";
import { Calendar, Clock, User, ChevronRight, ArrowLeft, Tag, BookOpen } from "lucide-react";
import { getBlogPostBySlug, getRecentPosts } from "@/lib/blogData";
import { useSEO } from "@/hooks/use-seo";
import NotFound from "@/pages/not-found";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function BlogPostContent({ slug }: { slug: string }) {
  const post = getBlogPostBySlug(slug);

  useSEO({
    title: post ? post.metaTitle : "Blog – ASHQ Merchant Exports",
    description: post ? post.metaDescription : "",
    keywords: post ? post.keywords : [],
    ogImage: post ? post.image : "/opengraph.jpg",
    canonicalPath: post ? `/blog/${post.slug}` : "/blog",
  });

  if (!post) return <NotFound />;

  const recentPosts = getRecentPosts(post.slug, 3);

  return (
    <div className="ltr">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[#0D5C34] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="post-hero-pat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 3 L37 20 L20 37 L3 20 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#post-hero-pat)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-4">
              <Link href="/blog">
                <span className="inline-flex items-center gap-1.5 text-[#D4AF37]/80 text-xs font-semibold tracking-[0.2em] uppercase hover:text-[#D4AF37] transition-colors cursor-pointer">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
                </span>
              </Link>
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              {post.category}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-snug">
              {post.title}
            </motion.h1>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                {post.author}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
          >
            {/* Featured Image */}
            <motion.div variants={fadeUp} className="relative h-64 sm:h-80 bg-gradient-to-br from-[#0D5C34] to-[#0a3d21] overflow-hidden">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D5C34]/50 to-transparent" />
            </motion.div>

            {/* Article Body */}
            <div className="p-8 sm:p-10">
              {/* Excerpt intro */}
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8 font-medium border-l-2 border-[#D4AF37] pl-4">
                {post.excerpt}
              </motion.p>

              {/* Sections */}
              <motion.div variants={stagger} className="space-y-6">
                {post.sections.map((section, i) => {
                  if (section.type === "heading") {
                    return (
                      <motion.h2
                        key={i}
                        variants={fadeUp}
                        className="text-xl sm:text-2xl font-serif font-bold text-foreground mt-8 mb-2"
                      >
                        {section.content}
                      </motion.h2>
                    );
                  }
                  if (section.type === "paragraph") {
                    return (
                      <motion.p
                        key={i}
                        variants={fadeUp}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {section.content}
                      </motion.p>
                    );
                  }
                  if (section.type === "list" && section.listItems) {
                    return (
                      <motion.ul key={i} variants={fadeUp} className="space-y-2 pl-4">
                        {section.listItems.map((item, j) => (
                          <li key={j} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </motion.ul>
                    );
                  }
                  if (section.type === "tips" && section.items) {
                    return (
                      <motion.div key={i} variants={stagger} className="space-y-4">
                        {section.items.map((tip, j) => (
                          <motion.div
                            key={j}
                            variants={fadeUp}
                            className="flex gap-4 p-5 rounded-lg bg-[#F0FAF5] dark:bg-[#061e10] border border-[#0D5C34]/15 dark:border-[#D4AF37]/10"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                            <div>
                              <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">{tip.body}</p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    );
                  }
                  return null;
                })}
              </motion.div>

              {/* Keywords */}
              <motion.div variants={fadeUp} className="mt-10 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  {post.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-full bg-[#0D5C34]/8 dark:bg-[#D4AF37]/8 border border-[#0D5C34]/20 dark:border-[#D4AF37]/20 text-[#0D5C34] dark:text-[#D4AF37] text-xs font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={fadeUp}
                className="mt-8 p-6 rounded-lg bg-[#0D5C34] text-white"
              >
                <p className="font-serif text-lg font-bold mb-2">
                  Looking for a reliable imitation jewellery exporter?
                </p>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  ASHQ Merchant Exports is a Mumbai-based manufacturer and merchant exporter of premium imitation jewellery, serving buyers across 30+ countries. Request our catalogue or get a competitive export quote today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded bg-[#D4AF37] text-[#0D5C34] text-sm font-bold hover:bg-[#c9a230] transition-colors cursor-pointer whitespace-nowrap">
                      Contact Us Today <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                  <Link href="/products">
                    <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded border border-[#D4AF37]/60 text-[#D4AF37] text-sm font-semibold hover:bg-[#D4AF37]/10 transition-colors cursor-pointer whitespace-nowrap">
                      View Our Products
                    </span>
                  </Link>
                  <Link href="/export-services">
                    <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded border border-white/20 text-white/70 text-sm font-semibold hover:bg-white/5 transition-colors cursor-pointer whitespace-nowrap">
                      Export Services
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.article>

          {/* More Posts */}
          {recentPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">More Articles</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="group bg-card border border-border rounded-lg overflow-hidden cursor-pointer"
                    >
                      <div className="h-32 bg-gradient-to-br from-[#0D5C34] to-[#0a3d21] relative overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.imageAlt}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D5C34]/60 to-transparent" />
                      </div>
                      <div className="p-4">
                        <span className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.15em] uppercase">
                          {related.category}
                        </span>
                        <h4 className="font-serif font-bold text-foreground text-sm mt-1 leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-muted-foreground text-xs mt-1">{related.date}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <Link href="/blog">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4" /> Back to all articles
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            image: `https://ashqexports.com${post.image}`,
            author: {
              "@type": "Organization",
              name: "ASHQ Merchant Exports",
            },
            publisher: {
              "@type": "Organization",
              name: "ASHQ Merchant Exports",
              logo: {
                "@type": "ImageObject",
                url: "https://ashqexports.com/logo.jpg",
              },
            },
            datePublished: post.date,
            dateModified: post.date,
            keywords: post.keywords.join(", "),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://ashqexports.com/blog/${post.slug}`,
            },
          }),
        }}
      />
    </div>
  );
}

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  return <BlogPostContent slug={params.slug ?? ""} />;
}
