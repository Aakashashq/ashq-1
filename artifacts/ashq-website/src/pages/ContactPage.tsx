import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  country: z.string().min(2, "Country is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Phone number is required"),
  productInterest: z.string().min(1, "Please select a product category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const inquirySchema = z.object({
  quantity: z.string().min(1, "Quantity is required"),
  productType: z.string().min(1, "Please select a product type"),
  destinationCountry: z.string().min(2, "Destination country is required"),
  budgetRange: z.string().min(1, "Please select a budget range"),
});

type ContactForm = z.infer<typeof contactSchema>;
type InquiryForm = z.infer<typeof inquirySchema>;

const productCategories = ["Earrings", "Necklaces", "Bangles", "Bracelets", "Rings", "Bridal Sets", "Fashion Jewellery", "Custom Designs", "Mixed Assortment"];
const budgetRanges = ["Under $1,000", "$1,000 – $5,000", "$5,000 – $10,000", "$10,000 – $50,000", "Above $50,000"];

export default function ContactPage() {
  const { toast } = useToast();
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const contactForm = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", country: "", email: "", phone: "", productInterest: "", message: "" },
  });

  const inquiryForm = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { quantity: "", productType: "", destinationCountry: "", budgetRange: "" },
  });

  const onContactSubmit = (_data: ContactForm) => {
    setContactSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    contactForm.reset();
  };

  const onInquirySubmit = (_data: InquiryForm) => {
    setInquirySubmitted(true);
    toast({ title: "Export inquiry received!", description: "Our export team will contact you shortly." });
    inquiryForm.reset();
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A2342] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="contact-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Get in Touch
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              Ready to source premium Indian imitation jewellery? Our export team is available Monday through Saturday.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-5"
            >
              <motion.div variants={fadeUp}>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Business Information</h2>
              </motion.div>
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content: "Room No. 4, Nazir Mohd Chawl, NR. Ramesh Hotel, Daftary Road, Kurar Village, Malad East, Suburban, Malad East, Mumbai, Maharashtra, India, 400097",
                },
                { icon: Phone, title: "Phone", content: "[Add Contact Number]" },
                { icon: Mail, title: "Email", content: "[Add Email Address]" },
                { icon: Clock, title: "Working Hours", content: "Monday – Saturday: 10:00 AM – 7:00 PM IST" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex gap-4 p-5 bg-card border border-border rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wide mb-1">{item.title}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{item.content}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 bg-card border border-border rounded-lg p-8"
            >
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send a Message</h2>

              {contactSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-14 h-14 text-[#0E8A6A] mb-4" />
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setContactSubmitted(false)} className="mt-6 text-[#D4AF37] text-sm font-semibold hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <Form {...contactForm}>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField control={contactForm.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={contactForm.control} name="company" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Ltd." {...field} data-testid="input-company" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField control={contactForm.control} name="country" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input placeholder="United Kingdom" {...field} data-testid="input-country" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={contactForm.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField control={contactForm.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone / WhatsApp</FormLabel>
                          <FormControl>
                            <Input placeholder="+44 7000 000000" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={contactForm.control} name="productInterest" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-product-interest">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {productCategories.map((cat) => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={contactForm.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Please describe your requirements, quantities, and any specific designs..." rows={5} {...field} data-testid="textarea-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3 bg-[#D4AF37] text-[#0A2342] font-bold text-sm tracking-wide rounded hover:bg-[#c9a230] transition-colors"
                      data-testid="button-submit-contact"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#F8F9FA] dark:bg-[#061829] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-8"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-serif font-bold text-foreground">
              Find Us in Mumbai
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-2">
              Malad East, Mumbai, Maharashtra — India's jewellery export hub
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-border shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4779!2d72.8605!3d19.1897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b8b8b8b8b8%3A0x0!2sMalad+East%2C+Mumbai%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ASHQ Location — Malad East, Mumbai"
              data-testid="map-embed"
            />
          </motion.div>
        </div>
      </section>

      {/* Export Inquiry Form */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-10"
          >
            <motion.span variants={fadeUp} className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3 block">
              Export Inquiry
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-serif font-bold text-foreground">
              Quick Export Inquiry
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mt-3">
              Share your basic requirements and our export team will follow up with pricing and availability.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            {inquirySubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle className="w-14 h-14 text-[#0E8A6A] mb-4" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Inquiry Received!</h3>
                <p className="text-muted-foreground">Our export team will contact you within 24 hours.</p>
                <button onClick={() => setInquirySubmitted(false)} className="mt-6 text-[#D4AF37] text-sm font-semibold hover:underline">
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <Form {...inquiryForm}>
                <form onSubmit={inquiryForm.handleSubmit(onInquirySubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField control={inquiryForm.control} name="quantity" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity Needed</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 500 pieces" {...field} data-testid="input-quantity" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={inquiryForm.control} name="productType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-product-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {productCategories.map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField control={inquiryForm.control} name="destinationCountry" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Destination Country</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. United Kingdom" {...field} data-testid="input-destination" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={inquiryForm.control} name="budgetRange" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range (USD)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-budget">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>{range}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3 bg-[#0A2342] dark:bg-[#D4AF37] text-white dark:text-[#0A2342] font-bold text-sm tracking-wide rounded hover:opacity-90 transition-opacity"
                    data-testid="button-submit-inquiry"
                  >
                    Submit Export Inquiry
                  </motion.button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
