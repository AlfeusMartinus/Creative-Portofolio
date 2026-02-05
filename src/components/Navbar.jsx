import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenCV = () => {
    window.open("https://drive.google.com/file/d/1JpZnm_PY5Z2NA9rJjTzmrvtBY-ZPEI7-/view?usp=sharing", "_blank");
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
      <div
        className={`glass-pill px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-white/15 border-white/30" : "bg-white/10 border-white/20"
          }`}
      >
        <a
          href="#"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="font-display font-bold text-xl tracking-tighter"
        >
          <span className="text-primary">My</span>Porto
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium text-xs uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.title)}
              className={`hover:text-primary transition-colors duration-200 ${active === link.title ? "text-primary" : "text-slate-300"
                }`}
            >
              {link.title}
            </a>
          ))}
        </div>

        <button
          onClick={handleOpenCV}
          className="hidden md:block bg-primary/80 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary transition-all duration-200 shadow-lg border border-white/10"
        >
          Resume
        </button>

        <button
          className="md:hidden w-7 h-7 flex items-center justify-center"
          onClick={() => setToggle(!toggle)}
          aria-label="Toggle Menu"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain invert"
          />
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl overflow-hidden transition-all duration-300 origin-top ${toggle ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
      >
        <div className="p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.title);
                setToggle(false);
              }}
              className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${active === link.title
                ? "bg-primary/20 text-primary"
                : "hover:bg-white/5 text-slate-300"
                }`}
            >
              {link.title}
            </a>
          ))}
          <button
            onClick={handleOpenCV}
            className="w-full mt-2 bg-primary text-white py-3 rounded-xl font-semibold"
          >
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
