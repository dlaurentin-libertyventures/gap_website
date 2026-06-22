"use client";
import { motion } from "framer-motion";

interface EditorialQuoteProps {
  text: string;
  light?: boolean;
}

export function EditorialQuote({ text, light = false }: EditorialQuoteProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative pl-6 border-l-2 ${
        light
          ? "border-clay text-ivory"
          : "border-terra-cotta text-forest-green"
      }`}
    >
      <p className="font-display font-bold text-xl md:text-2xl leading-snug italic">
        &ldquo;{text}&rdquo;
      </p>
    </motion.blockquote>
  );
}
