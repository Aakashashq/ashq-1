import { Link } from "wouter";
import { Diamond, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Export Services", href: "/export-services" },
  { label: "Why Choose Us", href: "/why-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  "Earrings",
  "Necklaces",
  "Bangles",
  "Bracelets",
  "Rings",
  "Bridal Sets",
  "Fashion Jewellery",
  "Custom Designs",
];

export function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-sm flex items-center justify-center">
                  <Diamond className="w-5 h-5 text-[#0A2342]" />
                </div>
                <div>
                  <div className="text-xl font-serif font-bold text-[#D4AF37] tracking-widest">ASHQ</div>
                  <div className="text-[9px] text-white/50 tracking-[0.2em] uppercase">Merchant Exports</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Mumbai-based proprietorship merchant export firm specializing in premium imitation jewellery manufacturing and international export to 30+ countries.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#25D366] transition-colors text-white"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0077B5] transition-colors text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E1306C] transition-colors text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-serif text-base font-semibold mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-serif text-base font-semibold mb-4 tracking-wide">Product Categories</h4>
              <ul className="space-y-2">
                {productLinks.map((item) => (
                  <li key={item}>
                    <Link href="/products">
                      <span className="text-white/60 text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-serif text-base font-semibold mb-4 tracking-wide">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm leading-relaxed">
                    Room No. 4, Nazir Mohd Chawl, NR. Ramesh Hotel, Daftary Road, Kurar Village, Malad East, Mumbai, Maharashtra 400097
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">[Add Contact Number]</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">[Add Email Address]</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">Mon – Sat: 10:00 AM – 7:00 PM IST</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} ASHQ Merchant Exports. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              IEC Registered · GST Compliant · Mumbai, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
