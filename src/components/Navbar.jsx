import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResumeAlert, setShowResumeAlert] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenCV = () => {
    setShowResumeAlert(true);
  };

  const handleConfirmResume = () => {
    setShowResumeAlert(false);
    window.open("https://drive.google.com/file/d/1JpZnm_PY5Z2NA9rJjTzmrvtBY-ZPEI7-/view?usp=sharing", "_blank");
  };

  return (
    <>
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

      {
        showResumeAlert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowResumeAlert(false)}
            />

            <div className="relative glass rounded-2xl p-6 max-w-md w-full border border-white/20 shadow-2xl animate-fade-in">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-center mb-2">
                Request Access Required
              </h3>
              <p className="text-slate-300 text-center text-sm mb-6 leading-relaxed">
                This resume is stored on a private Google Drive. Please click continue to request access, and I'll approve your request as soon as possible.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowResumeAlert(false)}
                  className="flex-1 py-3 px-4 rounded-xl bg-white/10 text-slate-300 font-semibold hover:bg-white/20 transition-all duration-200 border border-white/10"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmResume}
                  className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Navbar;
