import { motion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const dotX = useSpring(0, { damping: 40, stiffness: 500 });
  const dotY = useSpring(0, { damping: 40, stiffness: 500 });
  const ringX = useSpring(0, springConfig);
  const ringY = useSpring(0, springConfig);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setVisible(true);
    };
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    for (const el of document.querySelectorAll("a, button, [role='button']")) {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [dotX, dotY, ringX, ringY]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-accent"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: isHovering ? 10 : 6, height: isHovering ? 10 : 6 }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-accent/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovering ? 40 : 28,
          height: isHovering ? 40 : 28,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
