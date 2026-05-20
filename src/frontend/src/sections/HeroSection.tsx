import { Button } from "@/components/ui/button";
import { PERSONAL } from "@/data/portfolio";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const TYPING_ROLES = [
  "AI-ML Student",
  "Future ML Engineer",
  "Python Developer",
  "Problem Solver",
];

function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(word.slice(0, charIndex + 1));
          if (charIndex + 1 === word.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplayed(word.slice(0, charIndex - 1));
          if (charIndex === 0) {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

function FloatingParticle({
  x,
  y,
  size,
  delay,
}: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent/30"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Number.POSITIVE_INFINITY,
        delay,
      }}
    />
  );
}

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 3,
}));

export function HeroSection() {
  const typed = useTypingEffect(TYPING_ROLES);
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.72 0.22 180) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.22 180) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <FloatingParticle key={p.id} {...p} />
        ))}
      </div>

      {/* Gradient orb */}
      <motion.div
        className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, oklch(0.72 0.22 180 / 0.3), oklch(0.72 0.22 240 / 0.15), transparent 70%)",
            filter: "blur(2px)",
          }}
        />
        <img
          src="/assets/generated/hero-orb.dim_800x800.png"
          alt="AI Neural Network Visualization"
          className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-lighten"
        />
      </motion.div>

      {/* Radial glow center-left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.22 180 / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-accent/30 bg-accent/10 text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to Internships & Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-4"
          >
            {PERSONAL.name.split(" ").map((word, i) => (
              <span
                key={word}
                className={i === 1 ? "block text-accent" : "block"}
              >
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-xl sm:text-2xl text-muted-foreground mb-6 h-8"
          >
            <span className="text-primary">{typed}</span>
            <span className="animate-pulse text-accent ml-0.5">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
          >
            {PERSONAL.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              onClick={() => scrollTo("#projects")}
              className="font-display font-semibold px-6 py-2.5 bg-accent text-accent-foreground hover:bg-accent/90 border-0 shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
              data-ocid="hero.view_projects_button"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              disabled
              className="font-display font-semibold px-6 py-2.5 border-border/60 text-muted-foreground cursor-not-allowed opacity-60"
              data-ocid="hero.download_resume_button"
              title="Resume coming soon"
            >
              <Download size={15} className="mr-2" /> Resume Soon
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo("#contact")}
              className="font-display font-semibold px-6 py-2.5 border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-300"
              data-ocid="hero.contact_button"
            >
              Contact Me <ExternalLink size={14} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="text-muted-foreground/50" size={24} />
      </motion.div>
    </section>
  );
}
