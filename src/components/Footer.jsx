import { SocialMedia } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display font-bold text-xl md:text-2xl tracking-tighter">
            <span className="text-primary">My</span>Porto
          </div>
          <div className="flex items-center gap-4">
            {SocialMedia.map((social) => (
              <a
                key={social.id}
                href={social.navigate}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          <p className="text-slate-500 text-xs uppercase tracking-widest text-center md:text-right">
            © {currentYear} Alfeus Martinus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
