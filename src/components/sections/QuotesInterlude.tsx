"use client";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "like a horse-drawn cart in a world of self-driving cars.",
    prefix: "Modern accreditation is",
    align: "left",
    size: "xl",
    color: "ivory",
  },
  {
    text: "We've created 4,500 institutions that are all like McDonald's hamburgers—with the same pickles, lettuce, and onions.",
    prefix: null,
    align: "right",
    size: "md",
    color: "ivory",
  },
  {
    text: "it's like you're guilty until proven innocent.",
    prefix: "With modern accreditation,",
    align: "left",
    size: "lg",
    color: "ivory",
  },
  {
    text: "Accreditation is extreme bureaucratic asphyxiation.",
    prefix: null,
    align: "right",
    size: "lg",
    color: "clay",
  },
];

const sizeMap = {
  xl: "clamp(1.75rem, 3.2vw, 2.75rem)",
  lg: "clamp(1.35rem, 2.2vw, 2rem)",
  md: "clamp(1.1rem, 1.8vw, 1.5rem)",
};

export function QuotesInterlude() {
  return (
    <section className="bg-dark-green">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="py-10 border-b border-pine/20 flex items-center gap-3">
          <div className="w-5 h-px bg-pine/50" aria-hidden="true" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-pine">
            In their own words
          </p>
        </div>

        {/* Quote rows */}
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`py-10 border-b border-pine/20 flex ${
              q.align === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div className={`max-w-3xl ${q.align === "right" ? "text-right" : "text-left"}`}>
              {q.prefix && (
                <p className="font-sans text-pine text-sm italic mb-2">
                  {q.prefix}
                </p>
              )}
              <p
                className={`font-display font-bold leading-tight italic ${
                  q.color === "clay" ? "text-clay" : "text-ivory"
                }`}
                style={{ fontSize: sizeMap[q.size as keyof typeof sizeMap] }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
