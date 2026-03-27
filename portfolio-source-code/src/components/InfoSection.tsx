import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Globe, Sparkles } from "lucide-react";

const interests = [
  { label: "UI/UX", filled: true },
  { label: "Art", filled: false },
  { label: "Crafting", filled: true },
  { label: "Video Editing", filled: true },
  { label: "Photography", filled: false },
  { label: "3D Design", filled: false },
  { label: "Motion Graphic", filled: false },
  { label: "Projection Mapping", filled: false },
];

const InfoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section id="info" className="relative z-10 px-6 sm:px-8 py-14 sm:py-20" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-8 sm:mb-12" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          <p className="section-label mb-2">About Me</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black">
            Get to know me better
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          <motion.div
            className="bg-card rounded-2xl p-6 sm:p-7 hover:shadow-md hover:-translate-y-1 border border-border/40 transition-all duration-300"
            custom={0} variants={cardVariants}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <GraduationCap className="w-7 h-7 mb-3 text-primary" />
            <h3 className="font-heading text-lg font-bold mb-3">Education</h3>
            <div className="space-y-2.5 font-body text-xs text-muted-foreground">
              <div><p className="font-bold text-foreground text-sm">Politeknik IDN</p><p>UI/UX Design · 2nd Semester</p></div>
              <div><p className="font-bold text-foreground text-sm">SMAIT Mutiara Islam</p><p>Senior High School</p></div>
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-2xl p-6 sm:p-7 hover:shadow-md hover:-translate-y-1 border border-border/40 transition-all duration-300"
            custom={1} variants={cardVariants}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <Globe className="w-7 h-7 text-accent mb-3" />
            <h3 className="font-heading text-lg font-bold mb-3">Languages</h3>
            <div className="space-y-2.5 font-body text-xs text-muted-foreground">
              <div><p className="font-bold text-foreground text-sm">Indonesian</p><p>Native Speaker</p></div>
              <div><p className="font-bold text-foreground text-sm">English</p><p>Advanced</p></div>
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-2xl p-6 sm:p-7 hover:shadow-md hover:-translate-y-1 border border-border/40 sm:col-span-2 md:col-span-1 transition-all duration-300"
            custom={2} variants={cardVariants}
            initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            <Sparkles className="w-7 h-7 mb-3" style={{ color: "#6B8E6B" }} />
            <h3 className="font-heading text-lg font-bold mb-3">Interests</h3>
            <div className="flex flex-wrap gap-1.5">
              {interests.map((tag) => (
                <span key={tag.label} className={tag.filled ? "pill-tag-filled" : "pill-tag"}>
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
