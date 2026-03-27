import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative z-10 px-5 sm:px-8 py-14 sm:py-20">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto bg-card p-5 sm:p-10 md:p-12 shadow-sm rounded-2xl"
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}>
        
        <div className="grid md:grid-cols-[300px_1fr] gap-3 md:gap-10 items-center">
          <div className="mx-auto md:mx-0 w-40 sm:w-52 md:w-full">
            <img
              alt="Shofiyyah - UI/UX Designer"
              className="w-full aspect-[3/4] object-contain object-top"
              src="/lovable-uploads/98e249ef-bd7e-4f41-8769-b3bbb2400f6d.png"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              Hi, I'm <span className="text-primary italic">Shofiyyah</span>
            </h2>
            <p className="font-body text-xs sm:text-sm leading-[1.9] text-muted-foreground mb-4 sm:mb-6">
              Currently a Second-semester UI/UX Design student at Politeknik IDN.
              I am passionate about creating and learning meaningful digital
              products by combining visual, usability, and user-centered problem
              solving. I also make 3D Designs and currently into Motion graphic to
              make product showreel and basic animation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full font-body text-sm hover:opacity-90 transition-opacity">
              Let's Connect <span>→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>);

};

export default AboutSection;