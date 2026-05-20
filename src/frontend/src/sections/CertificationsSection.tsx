import { CERTIFICATIONS } from "@/data/portfolio";
import type { Certification } from "@/data/portfolio";
import { motion } from "motion/react";

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass rounded-xl overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-300 group"
      data-ocid={`certifications.item.${index + 1}`}
    >
      {/* Badge header */}
      <div className={`h-2 bg-gradient-to-r ${cert.badgeColor}`} />

      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
            style={{
              background: `${cert.platformColor}18`,
              border: `1px solid ${cert.platformColor}30`,
            }}
          >
            {cert.icon}
          </div>
          <div className="min-w-0">
            <h3
              className="font-display font-semibold text-sm text-foreground leading-tight truncate"
              title={cert.title}
            >
              {cert.title}
            </h3>
            <p className="text-muted-foreground text-xs mt-0.5">
              {cert.issuer}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span
            className="text-xs font-medium px-2 py-1 rounded"
            style={{
              background: `${cert.platformColor}15`,
              color: cert.platformColor,
              border: `1px solid ${cert.platformColor}25`,
            }}
          >
            {cert.platform}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {cert.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">
            {"// certifications"}
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-2">
            Credentials
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Continuous learning through industry-recognized programs and
            platforms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
