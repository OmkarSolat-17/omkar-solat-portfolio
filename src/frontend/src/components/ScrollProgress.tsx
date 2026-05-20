import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, var(--accent), var(--primary))",
      }}
    />
  );
}
