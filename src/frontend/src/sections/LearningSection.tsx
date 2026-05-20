import { LEARNING_JOURNEY } from "@/data/portfolio";
import { motion } from "motion/react";

export function LearningSection() {
  return (
    <section id="journey" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            {"// learning journey"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2">
            My Story
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            From writing my first Python script to architecting ML systems —
            each step forward.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-border/60 to-transparent" />

          <div className="space-y-8">
            {LEARNING_JOURNEY.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6"
                data-ocid={`journey.item.${i + 1}`}
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 rounded-xl border border-accent/40 bg-background flex items-center justify-center text-xl shadow-[0_0_15px_oklch(0.72_0.22_180_/_0.15)]"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex-1 glass rounded-xl p-5 border border-border/40 hover:border-accent/25 transition-all duration-300 mb-2"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display font-bold text-base text-foreground">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 rounded px-2 py-0.5 ml-2 flex-shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-primary font-medium mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
