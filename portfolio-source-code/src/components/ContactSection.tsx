import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Send } from "lucide-react";

import linkedinLogo from "@/assets/contact/linkedin.png";
import instagramLogo from "@/assets/contact/instagram.png";
import behanceLogo from "@/assets/contact/behance.png";
import shutterstockLogo from "@/assets/contact/shutterstock.png";
import gmailLogo from "@/assets/contact/gmail.png";

const contacts = [
{ icon: linkedinLogo, label: "LinkedIn", url: "https://www.linkedin.com/in/shofiyyah-3a3b63370/", display: "linkedin.com/in/shofiyyah" },
{ icon: instagramLogo, label: "Instagram", url: "https://www.instagram.com/sfy_alma/", display: "instagram.com/sfy_alma" },
{ icon: behanceLogo, label: "Behance", url: "https://www.behance.net/shofiyyahovi", display: "behance.net/shofiyyahovi" },
{ icon: shutterstockLogo, label: "Shutterstock", url: "https://www.shutterstock.com/g/Shofiyyahyfs", display: "shutterstock.com/g/Shofiyyahyfs" },
{ icon: gmailLogo, label: "Email", url: "mailto:shofiyyah503@gmail.com", display: "shofiyyah503@gmail.com" }];


const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:shofiyyah503@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-card text-foreground font-body text-sm placeholder:text-muted-foreground/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <section id="contact" className="relative z-10 px-6 sm:px-8 py-14 sm:py-20" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10">
          
          <p className="section-label mb-2">Contact</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-3">
            Let's build something{" "}
            <span className="italic text-primary">beautiful</span>{" "}
            together.
          </h2>
          <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Feel free to reach out for collaborations, questions, or just to say hi!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Social Links */}
          <motion.div
            className="space-y-1.5 py-0 px-0"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            
            {contacts.map((c) =>
            <a
              key={c.label}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row group py-[8px]">
              
                <img src={c.icon} alt={c.label} className="w-8 h-8 rounded-lg object-contain flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-body text-xs font-bold">{c.label}</p>
                  <p className="font-body text-[11px] text-muted-foreground group-hover:text-background/70 truncate">{c.display}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
          </motion.div>

          {/* Message Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}>
            
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className={inputClasses} />
            
            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className={inputClasses} />
            
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className={`${inputClasses} resize-none`} />
            
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-foreground hover:bg-foreground/90 text-background font-body text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300">
              
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>);

};

export default ContactSection;