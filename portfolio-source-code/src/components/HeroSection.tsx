import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const springTransition = "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12 gap-[13px]">
      <motion.div
        className="w-full flex flex-wrap justify-center sm:justify-between mb-6 sm:mb-10 max-w-5xl mx-0 px-[16px] sm:gap-[57px] py-[7px] gap-[10px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        
        {["Hello,", "Welcome!", "Let's", "Get", "to", "Know", "Me"].map((word, i) =>
        <span key={i} className="font-body text-[10px] sm:text-sm tracking-[0.12em] sm:tracking-[0.2em] text-muted-foreground">{word}</span>
        )}
      </motion.div>

      <motion.div
        className="relative mb-8 sm:mb-10"
        style={{ width: "clamp(260px, 55vw, 520px)", height: "clamp(150px, 25vw, 240px)", overflow: "visible" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        
        <div
          className="card-grain absolute rounded-md"
          style={{
            inset: "-10px",
            background: "hsl(var(--grey-card))",
            transform: hovered ? "rotate(-10deg) translateY(-8px)" : "rotate(-5deg)",
            transition: springTransition
          }} />
        
        <div
          className="card-grain absolute inset-0 flex flex-col justify-center px-5 sm:px-10 md:px-12 py-5 sm:py-8 rounded-md"
          style={{
            background: "hsl(var(--blue-card))",
            transform: hovered ? "rotate(5deg) translateY(-12px)" : "rotate(2deg)",
            transition: springTransition,
            overflow: "visible"
          }}>
          
          <div className="relative z-10 flex flex-col h-full justify-center">
            <div className="flex justify-between items-start mb-1">
              <span className="font-heading italic text-lg sm:text-2xl text-primary font-semibold md:text-4xl">Designer</span>
              <span className="font-body mt-0.5 text-secondary-foreground text-lg">2026</span>
            </div>
            <h1
              className="font-heading leading-[0.95]"
              style={{
                fontWeight: 900,
                fontSize: "clamp(38px, 7vw, 72px)",
                color: "hsl(var(--foreground))",
                textShadow: "3px 5px 0px rgba(0,0,0,0.1)"
              }}>
              
              Portfolio
            </h1>
            <div className="flex justify-end mt-2 sm:mt-4">
              <span
                className="font-bold text-xs bg-accent text-accent-foreground py-[7px] px-[26px] sm:text-lg border border-secondary-foreground border-solid rounded-2xl font-serif"
                style={{
                  borderRadius: "50px",
                  padding: "8px 22px",
                  transform: "translateY(50%)",
                  display: "inline-block"
                }}>
                
                Shofiyyah
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}>
        
        <a href="#about" className="bg-foreground text-background rounded-full font-body text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 py-[8px] px-[20px]">
          View My Work <span>→</span>
        </a>
        <a href="#contact" className="border-2 border-foreground text-foreground rounded-full font-body text-sm hover:bg-foreground hover:text-background transition-colors text-center py-[8px] px-[20px]">
          Contact Me
        </a>
      </motion.div>

      <motion.div
        className="w-full flex flex-wrap justify-center sm:justify-between max-w-5xl mt-8 sm:mt-10 py-[9px] sm:gap-[66px] gap-[52px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}>
        
        {["UI/UX", "Designer", "2026"].map((word, i) =>
        <span key={i} className="font-body text-[10px] sm:text-sm tracking-[0.12em] sm:tracking-[0.2em] text-muted-foreground">{word}</span>
        )}
      </motion.div>

      <motion.div
        className="absolute bottom-6"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}>
        
        <ArrowDown className="w-5 h-5 text-muted-foreground py-0 text-lg" />
      </motion.div>
    </section>);

};

export default HeroSection;