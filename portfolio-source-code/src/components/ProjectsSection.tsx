import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import kasirizyImg from "@/assets/projects/kasirizy.png";
import finzzImg from "@/assets/projects/finzz.png";
import shofiFrozenImg from "@/assets/projects/shofifrozen.png";
import kasirizyShowreelImg from "@/assets/projects/kasirizy-showreel.png";

const categoryStyles: Record<string, { bg: string; text: string }> = {
  "UI/UX Design": { bg: "hsl(207 30% 80%)", text: "hsl(207 40% 35%)" },
  "Graphic Design": { bg: "hsl(280 30% 85%)", text: "hsl(280 40% 35%)" },
  "Motion Graphic": { bg: "hsl(25 60% 80%)", text: "hsl(25 50% 30%)" },
};

const filters = ["All Projects", "UI/UX Design", "Graphic Design", "Motion Graphic"];

const projects = [
  {
    title: "Kasirizy App Homepage",
    category: "UI/UX Design",
    description: "The homepage of Kasirizy, a POS application designed to help store owners track finances, manage transactions, and monitor inventory through a clear and intuitive dashboard.",
    thumbnail: kasirizyImg,
    links: [
      { label: "View on Behance →", url: "https://www.behance.net/gallery/242419797/Point-of-Sales-App-Homepage-Kasirizy" },
    ],
  },
  {
    title: "Finzz App Design & Prototype",
    category: "UI/UX Design",
    description: "A UI/UX design and prototype for Finzz, a personal finance app that helps users track expenses, manage budgets, and better understand their spending habits.",
    thumbnail: finzzImg,
    links: [
      { label: "View on Behance →", url: "https://www.behance.net/gallery/244176361/Finzz-App-Prototype" },
    ],
  },
  {
    title: "Kasirizy App Showreel",
    category: "Motion Graphic",
    description: "A showreel highlighting the design and functionality of Kasirizy, a POS application that helps store owners manage sales, finances, and inventory efficiently.",
    thumbnail: kasirizyShowreelImg,
    links: [
      { label: "Watch Video ▶", url: "https://drive.google.com/file/d/1GZKJz6eI5HpC1L3HgiUt6kuqLhL_Uhi0/view?usp=sharing" },
    ],
  },
  {
    title: "Shofi Frozen Store Logo",
    category: "Graphic Design",
    description: "A logo design for Shofi Frozen Store, developed to create a recognizable brand identity for a frozen food business while conveying freshness and quality.",
    thumbnail: shofiFrozenImg,
    links: [
      { label: "View on Behance →", url: "https://www.behance.net/gallery/236419333/Shofi-Frozen-Logo-Design" },
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filtered = activeFilter === "All Projects"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative z-10 px-6 sm:px-8 py-14 sm:py-20" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-2">Selected Work</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black mb-2">
            My Recent <span className="italic text-primary">Projects</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-muted-foreground">
            A mix of UI/UX, Graphic, 3D Design, and Motion Graphic work
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-body text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-300 ${
                activeFilter === f
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Horizontal carousel */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 scrollbar-hide">
          <motion.div
            className="flex gap-3 sm:gap-5"
            style={{ minWidth: "min-content" }}
            layout
          >
            {filtered.map((project, i) => {
              const cat = categoryStyles[project.category];
              return (
                <motion.div
                  key={project.title}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm flex-shrink-0 w-[calc(50%-6px)] sm:w-[300px] border border-border/30"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 24px -6px rgba(0,0,0,0.1)" }}
                  layout
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3.5 sm:p-5">
                    <div className="flex items-start gap-1.5 mb-1.5 flex-wrap">
                      <h3 className="font-heading text-xs sm:text-sm font-bold text-foreground leading-tight">
                        {project.title}
                      </h3>
                      <span
                        className="px-2 py-0.5 rounded-full font-body font-bold whitespace-nowrap"
                        style={{ background: cat.bg, color: cat.text, fontSize: "9px" }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <p className="font-body text-[10px] sm:text-[11px] text-muted-foreground mb-2.5 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="font-body text-xs sm:text-sm text-muted-foreground mb-3">Want to see more?</p>
          <a
            href="https://www.behance.net/shofiyyahovi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full font-body text-sm hover:opacity-90 transition-opacity"
          >
            Visit My Behance <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
