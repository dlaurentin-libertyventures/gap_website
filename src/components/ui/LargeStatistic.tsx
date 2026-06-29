"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LargeStatisticProps {
  value: string;
  label: string;
  source?: string;
}

export function LargeStatistic({ value, label, source }: LargeStatisticProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col items-start gap-2">
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-display font-bold text-forest-green leading-none"
        style={{ fontSize: "clamp(7rem, 20vw, 14rem)" }}
        aria-label={`${value} — ${label}`}
      >
        {value}
      </motion.span>
      <p className="font-sans text-graphite text-lg md:text-xl max-w-md">
        {label}
      </p>
      {source && (
        <p className="font-sans text-sandstone text-sm mt-1">{source}</p>
      )}
    </div>
  );
}
