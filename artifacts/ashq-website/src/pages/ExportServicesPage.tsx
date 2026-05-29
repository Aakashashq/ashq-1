import { motion } from "framer-motion";
import { Package, Search, Shield, Box, FileText, Truck, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const services = [
  {
    icon: Package,
    title: "Merchant Export Services",
    desc: "End-to-end export handling from sourcing to final delivery. We act as your single point of contact for all Indian supply chain operations.",
    features: [
      "Single-window export handling",
      "IEC-backed legal export operations",
      "Multi-currency invoicing",
      "FEMA-compliant transactions",
    ],
  },
  {
    icon: Search,
    title: "Product Sourcing",
    desc: "Access to 200+ verified manufacturers across Mumbai, Gujarat, and Rajasthan. We find the right product at the right price.",
    features: [
      "Curated manufacturer network",
      "Price negotiation on your behalf",
      "Factory vetting and verification",
      "Sample procurement",
    ],
  },
  {
    icon: Shield,
    title: "Quality Inspection",
    desc: "Rigorous pre-shipment quality control on every batch. We check finishing, plating durability, sizing, and packaging before goods leave India.",
    features: [
      "Pre-shipment inspection on every order",
      "Plating and finish quality checks",
      "Dimensional and weight verification",
      "Defect rejection and replacement",
    ],
  },
  {
    icon: Box,
    title: "Packaging",
    desc: "Export-grade packaging tailored to your market requirements. Private labelling and custom branding available.",
    features: [
      "Export-safe protective packaging",
      "Custom branded boxes and pouches",
      "Retail-ready packaging options",
      "Eco-friendly packaging on request",
    ],
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Complete export documentation handled in-house. We ensure all paperwork is accurate, timely, and compliant with Indian export regulations.",
    features: [
      "Commercial invoice and packing list",
      "GR Form and shipping bill",
      "Country of Origin certificate",
      "RCMC and bank documents",
    ],
  },
  {
    icon: Truck,
    title: "International Logistics",
    desc: "Sea and air freight coordination through trusted freight forwarding partners. Door-to-port and door-to-door options available.",
    features: [
      "Sea and air freight options",
      "LCL and FCL shipments",
      "Real-time shipment tracking",
      "Insurance coverage available",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Inquiry",
    desc: "Share your product requirements, quantities, and target price. We respond within 24 hours with options.",
  },
  {
    step: "02",
    title: "Sampling",
    desc: "We procure samples from our manufacturer network. Review, approve, and request modifications before committing.",
  },
  {
    step: "03",
    title: "Order",
    desc: "Confirm the order, finalize packaging and documentation requirements, and make the advance payment.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Production, quality inspection, packaging, and shipment. You receive tracking details and complete documentation.",
  },
];

export default function ExportServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2342] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="es-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#es-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              What We Offer
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Export Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive merchant export services — from sourcing and quality control to documentation and international delivery.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Services
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold text-foreground">
              Full-Spectrum Export Support
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(10,35,66,0.12)" }}
                className="bg-card border border-border rounded-lg p-7"
                data-testid={`card-service-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                  <svc.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif font-bold text-foreground text-xl mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
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
              How It Works
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-serif font-bold text-white">
              Our Export Process
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-[#D4AF37]/30" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="relative text-center flex flex-col items-center"
                >
                  <div className="relative z-10 w-24 h-24 rounded-full bg-[#061829] border-2 border-[#D4AF37]/40 flex flex-col items-center justify-center mb-5">
                    <span className="text-[#D4AF37]/50 text-xs font-mono">{step.step}</span>
                    <span className="text-white font-serif font-bold text-sm">{step.title}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <ArrowRight className="md:hidden w-6 h-6 text-[#D4AF37]/40 mt-4" />
                  )}
                </motion.div>
              ))}
            </div>
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
              Ready to Start Importing from India?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              Share your requirements and let ASHQ handle the rest — from sourcing to your doorstep.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2342] dark:bg-[#D4AF37] text-white dark:text-[#0A2342] font-bold text-sm tracking-wide rounded cursor-pointer hover:opacity-90 transition-opacity"
                  data-testid="button-start-inquiry"
                >
                  Start an Inquiry
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
