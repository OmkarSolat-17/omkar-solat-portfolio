import { PERSONAL } from "@/data/portfolio";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-xl mb-3">
              <span className="text-accent">&lt;</span>OS
              <span className="text-accent">/&gt;</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {PERSONAL.title} — passionate about AI, machine learning, and
              building intelligent systems that matter.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-3 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .querySelector(href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-muted-foreground hover:text-accent text-sm transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-3 uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-border hover:border-accent/50 hover:text-accent text-muted-foreground transition-all duration-200 hover:bg-accent/5"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-border hover:border-blue-400/50 hover:text-blue-400 text-muted-foreground transition-all duration-200 hover:bg-blue-400/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="p-2.5 rounded-lg border border-border hover:border-accent/50 hover:text-accent text-muted-foreground transition-all duration-200 hover:bg-accent/5"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=omkarsolat-portfolio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              Built with love using caffeine.ai
            </a>
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-accent text-sm transition-colors duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
