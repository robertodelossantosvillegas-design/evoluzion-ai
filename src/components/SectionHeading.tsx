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
        <span className={`mb-4 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest ${
          light
            ? "border-secondary/25 bg-secondary/8 text-secondary"
            : "border-accent/25 bg-accent/8 text-accent-400"
        }`}>
          <span className={`h-1 w-1 rounded-full ${light ? "bg-secondary" : "bg-accent"}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-primary-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-slate-500" : "text-slate-400"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
