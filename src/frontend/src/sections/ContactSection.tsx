import { PERSONAL } from "@/data/portfolio";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const CONTACT_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    sublabel: "@omkarsolat",
    href: PERSONAL.github,
    color: "#ffffff",
    borderHover: "hover:border-foreground/40",
    bgHover: "hover:bg-foreground/5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sublabel: "in/omkarsolat",
    href: PERSONAL.linkedin,
    color: "#0A66C2",
    borderHover: "hover:border-blue-500/40",
    bgHover: "hover:bg-blue-500/5",
  },
  {
    icon: Mail,
    label: "Email",
    sublabel: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color: "#00d4ff",
    borderHover: "hover:border-accent/40",
    bgHover: "hover:bg-accent/5",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            {"// get in touch"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2 mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            I'm always open to discussing internship opportunities, AI/ML
            collaborations, or just talking tech. Reach out — I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {CONTACT_LINKS.map(
            (
              {
                icon: Icon,
                label,
                sublabel,
                href,
                color,
                borderHover,
                bgHover,
              },
              i,
            ) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass rounded-2xl p-6 border border-border/50 ${borderHover} ${bgHover} transition-all duration-300 group flex flex-col items-center gap-3`}
                data-ocid={`contact.${label.toLowerCase()}_link`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}12`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    {label}
                  </div>
                  <div className="text-muted-foreground text-xs mt-0.5 font-mono">
                    {sublabel}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                  Connect <ArrowRight size={12} />
                </div>
              </motion.a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
