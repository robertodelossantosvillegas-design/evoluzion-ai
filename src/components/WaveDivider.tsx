"use client";

/**
 * Subtle SVG wave divider to smooth transitions between light and dark sections.
 * `from` is the color the wave fills with (the section it sits on top of);
 * `flip` mirrors it vertically so it can point either way.
 */
export default function WaveDivider({
  fill = "#0A0A0F",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none -mb-px w-full overflow-hidden leading-[0] ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="h-12 w-full sm:h-16"
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,80 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
