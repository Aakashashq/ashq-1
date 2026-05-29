import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  Diamond, Globe, Shield, Clock, Package, Star,
  Award, TrendingUp, ChevronRight, ArrowRight, Download, MessageSquare
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function useCounter(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(value, 1800, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37]">
        {count}{suffix}
      </div>
      <div className="mt-2 text-white/60 text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
}

const categories = [
  { name: "Earrings", desc: "Studs, drops, hoops, and traditional jhumkas for every occasion.", icon: "◇" },
  { name: "Necklaces", desc: "Chains, chokers, layered sets, and statement pieces.", icon: "◈" },
  { name: "Bangles", desc: "Traditional and contemporary bangle designs in sets and singles.", icon: "○" },
  { name: "Bracelets", desc: "Charm, link, and tennis bracelet styles for global markets.", icon: "◇" },
  { name: "Rings", desc: "Fashion and statement rings in adjustable and fixed sizes.", icon: "◯" },
  { name: "Bridal Sets", desc: "Complete bridal jewellery sets for South Asian weddings.", icon: "★" },
  { name: "Fashion Jewellery", desc: "Trendy seasonal collections for fast-fashion markets.", icon: "◈" },
  { name: "Custom Designs", desc: "OEM/ODM manufacturing per buyer specifications.", icon: "◆" },
];

const whyUsItems = [
  { icon: TrendingUp, title: "Competitive Pricing", desc: "Factory-direct pricing without quality compromise. Best value in the Indian imitation jewellery export market." },
  { icon: Globe, title: "Export Experience", desc: "15+ years of merchant export expertise serving buyers across Europe, the Middle East, and Southeast Asia." },
  { icon: Package, title: "Reliable Supply Chain", desc: "Strong manufacturer network across Mumbai, Gujarat, and Rajasthan ensures consistent availability." },
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous pre-shipment quality inspection on every order. We stand behind what we ship." },
  { icon: Clock, title: "Timely Delivery", desc: "Committed delivery timelines with regular updates. Sea and air freight options available." },
  { icon: Award, title: "Customized Orders", desc: "Minimum order quantities to suit importers and wholesalers. Custom packaging and labelling available." },
];

const testimonials = [
  {
    name: "James D.",
    role: "Wholesale Importer, United Kingdom",
    quote: "ASHQ has been a reliable supplier for our UK fashion jewellery brand for over three years. Their quality is consistent and their documentation is always in order. Highly recommend.",
    initials: "JD",
  },
  {
    name: "Fatima Al-Rashidi",
    role: "Distributor, United Arab Emirates",
    quote: "We source exclusively from ASHQ for our Dubai wholesale operation. Their bridal jewellery sets are our best-selling line. Professional, responsive, and trustworthy.",
    initials: "FA",
  },
  {
    name: "Sarah Mitchell",
    role: "Retail Buyer, United States",
    quote: "As a small boutique owner, I appreciate ASHQ's flexible MOQs and their ability to customize packaging with our brand name. Outstanding service from inquiry to delivery.",
    initials: "SM",
  },
];

const exportRegions = [
  { cx: "22%", cy: "35%", label: "North America" },
  { cx: "37%", cy: "28%", label: "Europe" },
  { cx: "50%", cy: "40%", label: "Middle East" },
  { cx: "25%", cy: "65%", label: "South America" },
  { cx: "45%", cy: "62%", label: "Africa" },
  { cx: "73%", cy: "37%", label: "Southeast Asia" },
  { cx: "82%", cy: "68%", label: "Australia" },
];

export default function HomePage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });
  const catRef = useRef(null);
  const catInView = useInView(catRef, { once: true, margin: "-80px" });
  const testRef = useRef(null);
  const testInView = useInView(testRef, { once: true, margin: "-80px" });

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0A2342] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diamond-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
                <path d="M30 15 L45 30 L30 45 L15 30 Z" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342] via-[#0A2342]/90 to-[#061829]" />

        {/* Floating decorative elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          >
            <Diamond className="w-6 h-6 text-[#D4AF37]" />
          </motion.div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-xs tracking-[0.2em] uppercase">
                <Diamond className="w-3 h-3" /> Mumbai, India — Est. 2009
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6"
            >
              Trusted Indian{" "}
              <span className="text-[#D4AF37]">Manufacturer</span> &{" "}
              <br className="hidden md:block" />
              Merchant Exporter of{" "}
              <span className="text-[#D4AF37]">Premium Imitation Jewellery</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Connecting Global Buyers with High-Quality Fashion Jewellery from India.
              Serving importers, wholesalers, and distributors across 30+ countries.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2342] font-bold text-sm tracking-wide rounded hover:bg-[#c9a230] transition-colors cursor-pointer"
                  data-testid="button-request-catalogue"
                >
                  <Download className="w-4 h-4" /> Request Catalogue
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold text-sm tracking-wide rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer"
                  data-testid="button-contact-us-hero"
                >
                  <MessageSquare className="w-4 h-4" /> Contact Us
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-[#061829] py-16 border-y border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
          >
            <motion.div variants={fadeUp}><StatCounter value={500} suffix="+" label="Products" /></motion.div>
            <motion.div variants={fadeUp}><StatCounter value={30} suffix="+" label="Countries" /></motion.div>
            <motion.div variants={fadeUp}><StatCounter value={1000} suffix="+" label="Happy Clients" /></motion.div>
            <motion.div variants={fadeUp}><StatCounter value={15} suffix="+" label="Years Experience" /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">About ASHQ</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                India's Trusted Imitation Jewellery Export Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Based in the heart of Mumbai's thriving jewellery trade, ASHQ is a proprietorship merchant export firm with over 15 years of experience connecting international buyers with India's finest imitation jewellery artisans.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From intricate bridal sets to contemporary fashion jewellery, we source and export across 30+ countries — handling everything from quality inspection and documentation to packaging and international logistics.
              </p>
              <Link href="/about">
                <motion.span
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-sm tracking-wide cursor-pointer"
                >
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#0A2342] to-[#0d3060]">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M40 0 L0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Diamond className="w-32 h-32 text-[#D4AF37] opacity-30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A2342] to-transparent">
                  <p className="text-white font-serif text-lg">"Quality from India, trusted worldwide."</p>
                  <p className="text-[#D4AF37] text-xs mt-1 tracking-wide">— ASHQ Mission Statement</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0E8A6A]/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="py-20 bg-[#F8F9FA] dark:bg-[#061829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Our Advantage
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Why Choose ASHQ?
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyUsItems.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(10,35,66,0.15)" }}
                className="bg-card border border-border rounded-lg p-7 cursor-default"
                data-testid={`card-why-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section ref={catRef} className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={catInView ? "visible" : "hidden"}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Our Collections
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Product Categories
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Explore our comprehensive range of imitation jewellery designed for global markets.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={catInView ? "visible" : "hidden"}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.name}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group bg-card border border-border rounded-lg overflow-hidden"
                data-testid={`card-product-${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="h-40 bg-gradient-to-br from-[#0A2342] to-[#0d3060] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id={`p-${cat.name}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M15 2 L28 15 L15 28 L2 15 Z" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#p-${cat.name})`} />
                    </svg>
                  </div>
                  <div className="relative text-center">
                    <span className="text-4xl text-[#D4AF37] opacity-80">{cat.icon}</span>
                    <Diamond className="w-8 h-8 text-[#D4AF37]/40 absolute -bottom-2 -right-2" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-foreground text-base mb-2">{cat.name}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{cat.desc}</p>
                  <Link href="/contact">
                    <span className="inline-flex items-center gap-1 text-[#D4AF37] text-xs font-semibold tracking-wide hover:gap-2 transition-all cursor-pointer">
                      Inquire Now <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link href="/products">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#0A2342] dark:bg-[#D4AF37] text-white dark:text-[#0A2342] font-semibold text-sm tracking-wide rounded hover:opacity-90 transition-opacity cursor-pointer"
                data-testid="button-view-all-products"
              >
                View All Products <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-[#0A2342] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="globe-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="#D4AF37" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#globe-grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Global Reach
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Exporting to 30+ Countries Worldwide
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 max-w-xl mx-auto">
              From Mumbai's jewellery artisans to buyers across Europe, the Middle East, North America, Africa, and Southeast Asia.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-4xl mx-auto aspect-[2/1]">
              <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40">
                <path d="M 80 100 Q 120 80 160 90 Q 200 100 220 120 Q 240 140 230 160 Q 220 180 200 190 Q 180 200 160 195 Q 140 190 120 180 Q 100 170 85 155 Q 70 140 75 120 Z" fill="#1a3a5c" stroke="#D4AF37" strokeWidth="0.5" />
                <path d="M 270 70 Q 320 55 370 60 Q 420 65 450 85 Q 480 105 490 130 Q 500 155 490 175 Q 480 195 460 205 Q 440 215 410 220 Q 380 225 350 220 Q 320 215 295 200 Q 270 185 260 165 Q 250 145 255 120 Q 260 95 270 70 Z" fill="#1a3a5c" stroke="#D4AF37" strokeWidth="0.5" />
                <path d="M 480 110 Q 500 95 525 100 Q 550 105 565 125 Q 580 145 575 165 Q 570 185 555 195 Q 540 205 520 205 Q 500 205 490 190 Q 480 175 478 155 Q 476 135 480 110 Z" fill="#1a3a5c" stroke="#D4AF37" strokeWidth="0.5" />
                <path d="M 90 220 Q 120 210 150 215 Q 180 220 195 240 Q 210 260 205 285 Q 200 310 180 325 Q 160 340 135 340 Q 110 340 95 325 Q 80 310 78 285 Q 76 260 85 240 Z" fill="#1a3a5c" stroke="#D4AF37" strokeWidth="0.5" />
                <path d="M 310 220 Q 350 210 380 215 Q 410 220 420 240 Q 430 260 420 280 Q 410 300 390 310 Q 370 320 345 315 Q 320 310 305 295 Q 290 280 295 260 Q 300 240 310 220 Z" fill="#1a3a5c" stroke="#D4AF37" strokeWidth="0.5" />
                <path d="M 570 100 Q 610 85 650 90 Q 690 95 715 115 Q 740 135 745 160 Q 750 185 735 205 Q 720 225 695 235 Q 670 245 640 240 Q 610 235 590 218 Q 570 201 565 178 Q 560 155 565 130 Z" fill="#1a3a5c" stroke="#D4AF37" strokeWidth="0.5" />
                <path d="M 680 240 Q 710 235 730 250 Q 750 265 748 285 Q 746 305 730 316 Q 714 327 695 325 Q 676 323 665 308 Q 654 293 658 272 Q 662 251 680 240 Z" fill="#1a3a5c" stroke="#D4AF37" strokeWidth="0.5" />
              </svg>

              {exportRegions.map((region, i) => (
                <div
                  key={region.label}
                  className="absolute"
                  style={{ left: region.cx, top: region.cy, transform: "translate(-50%, -50%)" }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.4 }}
                    className="relative flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      className="absolute w-5 h-5 bg-[#D4AF37] rounded-full"
                    />
                    <div className="relative w-3 h-3 bg-[#D4AF37] rounded-full border-2 border-white z-10" />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 mt-8 text-center">
            {exportRegions.map((r) => (
              <div key={r.label} className="text-white/50 text-xs">{r.label}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testRef} className="py-20 bg-[#F8F9FA] dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={testInView ? "visible" : "hidden"}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Client Testimonials
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Trusted by Global Buyers
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={testInView ? "visible" : "hidden"}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-7 flex flex-col gap-4"
                data-testid={`card-testimonial-${t.name.toLowerCase().replace(/\s+|\./g, "-")}`}
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-[#0A2342] flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#0A2342]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Ready to Source Premium Indian Jewellery?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-10 text-lg">
              Get in touch today for pricing, catalogues, and export inquiries.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2342] font-bold text-sm tracking-wide rounded cursor-pointer"
                  data-testid="button-download-catalogue"
                >
                  <Download className="w-4 h-4" /> Download Catalogue
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] font-semibold text-sm tracking-wide rounded hover:border-[#D4AF37] cursor-pointer"
                  data-testid="button-get-quote-cta"
                >
                  <MessageSquare className="w-4 h-4" /> Get a Quote
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
