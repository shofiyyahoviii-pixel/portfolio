import figma from "@/assets/tools/figma.png";
import blender from "@/assets/tools/blender.png";
import capcut from "@/assets/tools/capcut.png";
import canva from "@/assets/tools/canva.png";
import inshot from "@/assets/tools/inshot.png";
import aftereffects from "@/assets/tools/aftereffects.png";

const tools = [
  { name: "Figma", icon: figma },
  { name: "Blender", icon: blender },
  { name: "CapCut", icon: capcut },
  { name: "Canva", icon: canva },
  { name: "InShot", icon: inshot },
  { name: "After Effects", icon: aftereffects },
];

const ToolsCarousel = () => {
  return (
    <section className="relative z-10 py-8 sm:py-12 overflow-hidden">
      <div className="tools-carousel-mask group">
        <div className="tools-carousel-track">
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex flex-col items-center justify-center gap-2 flex-shrink-0 mx-5 sm:mx-6"
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:shadow-md overflow-hidden"
                style={{ transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
              >
                <img src={tool.icon} alt={tool.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              </div>
              <span className="font-body text-[10px] sm:text-xs text-muted-foreground">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;
