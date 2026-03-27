import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Info", href: "#info" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="frosted-nav fixed top-0 left-0 right-0 z-40 px-6 md:px-8 py-4 flex items-center justify-between">
      <a href="#" className="font-heading text-xl font-bold text-foreground">Shofiyyah</a>

      {/* Desktop */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 frosted-nav border-t border-border/50 flex flex-col py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm text-muted-foreground hover:text-foreground px-6 py-3 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
