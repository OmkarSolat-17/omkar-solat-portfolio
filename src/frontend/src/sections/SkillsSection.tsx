import { SKILLS } from "@/data/portfolio";
import type { Skill } from "@/data/portfolio";
import { motion } from "motion/react";

function SkillBadge({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      whileHover={{ scale: 1.08, y: -2 }}
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-sm font-medium transition-all duration-300 cursor-default ${
        skill.level === "current"
          ? "border-border/60 bg-muted/20 text-foreground hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
          : "border-primary/30 bg-primary/5 text-primary/80 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
      }`}
    >
      <span>{skill.icon}</span>
      <span>{skill.name}</span>
      {skill.level === "future" && (
        <span className="text-[10px] font-mono text-primary/60 border border-primary/20 rounded px-1 ml-0.5">
          soon
        </span>
      )}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            {"// technical skills"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2">
            My Toolkit
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Technologies I work with today — and those I'm actively leveling up
            into.
          </p>
          <div className="flex gap-4 mt-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded border border-border/60 bg-muted/20 inline-block" />
              <span className="text-muted-foreground">Current</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded border border-primary/30 bg-primary/5 inline-block" />
              <span className="text-muted-foreground">Coming soon</span>
            </span>
          </div>
        </motion.div>

        <div className="space-y-10">
          {SKILLS.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-widest mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, i) => (
                  <SkillBadge key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
