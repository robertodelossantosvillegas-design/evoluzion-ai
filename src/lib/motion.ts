import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;

/**
 * Shared spring used for microinteractions (hover/tap) site-wide.
 */
export const springSnappy = {
  type: "spring",
  stiffness: 400,
  damping: 26,
} as const;

/**
 * Consistent hover/tap feedback for CTAs/buttons.
 * Spread onto a motion element: {...buttonMotion}
 */
export const buttonMotion = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.97 },
  transition: springSnappy,
} as const;

/**
 * Consistent hover lift for cards (grids, pricing, FAQ, testimonials).
 * Spread onto a motion element: {...cardHover}
 */
export const cardHover = {
  whileHover: { y: -6 },
  transition: springSnappy,
} as const;
