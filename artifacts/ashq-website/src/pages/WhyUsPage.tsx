import { motion } from "framer-motion";
import { TrendingUp, Globe, Package, Shield, Clock, Award, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const benefits = [
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    stat: "30%",
    statLabel: "avg. savings vs. retail",
    desc: "We work directly with manufacturers and leverage volume relationships to pass meaningful savings to our buyers. No middlemen, no inflated margins.",
    points: [
      "Direct manufacturer relationships across 3 states",
      "Volume pricing passed to buyers",
      "Transparent pricing with no hidden fees",
      "Price-matching on repeat orders",
    ],
  },
  {
    icon: Globe,
    title: "Export Experience",
    stat: "15+",
    statLabel: "years of merchant export",
    desc: "Over a decade and a half of experience navigating India's export ecosystem — from the Foreign Trade Policy to freight forwarding.",
    points: [
      "15+ years of active merchant export",
      "Deep knowledge of Indian export compliance",
      "Established freight and customs relationships",
      "Fluent in international trade documentation",
    ],
  },
  {
    icon: Package,
    title: "Reliable Supply Chain",
    stat: "200+",
    statLabel: "verified suppliers",
    desc: "We have built and vetted a network of over 200 manufacturers across India's top jewellery production hubs.",
    points: [
      "200+ verified manufacturing partners",
      "Mumbai, Gujarat, and Rajasthan sourcing hubs",
      "Backup suppliers for every product category",
      "Seasonal capacity planning",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    stat: "100%",
    statLabel: "pre-shipment inspection",
    desc: "Every shipment undergoes rigorous quality checks before it leaves India. We reject and replace defective goods before your cargo is packed.",
    points: [
      "Pre-shipment inspection on every order",
      "Plating durability and finish checks",
      "Dimensional accuracy verification",
      "Photographic inspection reports available",
    ],
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    stat: "98%",
    statLabel: "on-time delivery rate",
    desc: "We understand that your business runs on schedule. Our logistics coordination ensures your goods arrive when expected.",
    points: [
      "Committed production and dispatch timelines",
      "Regular shipment status updates",
      "Sea and air freight options",
      "Proactive delay communication",
    ],
  },
  {
    icon: Award,
    title: "Customized Orders",
    stat: "OEM",
    statLabel: "/ ODM available",
    desc: "From adjustable MOQs to fully custom designs, we adapt to the needs of importers of all sizes.",
    points: [
      "Flexible MOQs for new buyers",
      "Custom design and OEM manufacturing",
      "Private labelling and branded packaging",
      "Seasonal and trend-driven ordering",
    ],
  },
];

const badges = [
  { title: "IEC Registered", desc: "Valid Import Export Code under India's DGFT" },
  { title: "GST Compliant", desc: "Fully registered and compliant with Indian GST regulations" },
  { title: "MSME Recognized", desc: "Recognized small business under India's MSME framework" },
  { title: "FEMA Compliant", desc: "All foreign exchange transactions in compliance with FEMA" },
];

export default function WhyUsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2342] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="why-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#why-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Our Advantage
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Why Choose ASHQ?
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              Six compelling reasons why international buyers trust ASHQ as their preferred Indian jewellery supply partner.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-[#D4AF37]">{b.stat}</div>
                    <div className="text-muted-foreground text-xs">{b.statLabel}</div>
                  </div>
                </div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{b.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{b.desc}</p>
                <ul className="space-y-2">
                  {b.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-[#0E8A6A] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${i % 2 !== 0 ? "md:order-1" : ""} aspect-[4/3] rounded-lg bg-gradient-to-br from-[#0A2342] to-[#0d3060] flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id={`why-grid-${i}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M40 0 L0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#why-grid-${i})`} />
                  </svg>
                </div>
                <div className="relative text-center">
                  <b.icon className="w-20 h-20 text-[#D4AF37] opacity-20 mx-auto" />
                  <div className="mt-4 text-5xl font-serif font-bold text-[#D4AF37]">{b.stat}</div>
                  <div className="text-white/50 text-sm mt-1">{b.statLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-[#0A2342]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Certifications & Compliance
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold text-white">
              Verified. Compliant. Trusted.
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {badges.map((badge) => (
              <motion.div
                key={badge.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-[#D4AF37]/30 rounded-lg p-7 text-center"
                data-testid={`badge-${badge.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif font-bold text-white text-base mb-2">{badge.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{badge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
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
              Experience the ASHQ Difference
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              Join 1,000+ international buyers who trust ASHQ for their Indian imitation jewellery supply.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2342] font-bold text-sm tracking-wide rounded cursor-pointer hover:bg-[#c9a230] transition-colors"
                  data-testid="button-partner-with-us"
                >
                  Partner with ASHQ
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
