"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl lg:text-5xl ${
          light ? "text-primary-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-slate-600" : "text-slate-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
