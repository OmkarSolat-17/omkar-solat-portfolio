import { Brain, Code2, Rocket, Trophy } from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  { icon: Trophy, value: "5+", label: "Projects Built" },
  { icon: Brain, value: "AI/ML", label: "Specialization" },
  { icon: Code2, value: "BTech", label: "CSE Student" },
  { icon: Rocket, value: "2025+", label: "Goals Ahead" },
];

const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          {...FADE_UP}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            {"// about me"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div {...FADE_UP} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-foreground font-semibold">
                  Omkar Solat
                </span>
                , a BTech Computer Science student specializing in Artificial
                Intelligence and Machine Learning at a leading engineering
                institution in India.
              </p>
              <p>
                My passion lies at the intersection of{" "}
                <span className="text-accent font-medium">
                  intelligent algorithms
                </span>{" "}
                and real-world impact. I don't just study machine learning — I
                build systems that learn, adapt, and solve genuine problems.
              </p>
              <p>
                From training my first scikit-learn classifier to architecting
                multi-component Python applications, each project has sharpened
                my understanding of how{" "}
                <span className="text-primary font-medium">
                  data-driven engineering
                </span>{" "}
                can transform industries.
              </p>
              <p>
                My near-term goal: contribute to production-grade ML systems at
                a cutting-edge AI company — whether that's in applied ML, MLOps,
                or building intelligent products from the ground up.
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            {...FADE_UP}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <div className="font-display font-bold text-3xl text-foreground mb-1">
                  {value}
                </div>
                <div className="text-muted-foreground text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
