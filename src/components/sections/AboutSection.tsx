"use client";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-dark-green py-24 md:py-36 overflow-hidden relative"
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold text-ivory/[0.03] leading-none"
          style={{ fontSize: "clamp(12rem, 30vw, 28rem)" }}
        >
          2028
        </span>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-ivory leading-snug mx-auto"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", maxWidth: "56rem" }}
        >
          GAP is an international, independent accreditation initiative that
          recognizes and certifies institutions not just for meeting minimum
          thresholds, but for leading in{" "}
          <span className="text-clay">
            creativity, resilience, and measurable impact.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14"
        >
          <p className="font-sans text-pine text-sm uppercase tracking-[0.2em] mb-2">
            Target launch
          </p>
          <p
            className="font-display font-bold text-clay leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Summer 2028
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <PrimaryButton
            href={siteConfig.giveButter.url}
            label="Support the work"
            variant="clay"
            external
          />
        </motion.div>

        <p className="mt-6 font-sans text-pine text-sm">
          GAP ensures that innovation and rigor go hand in hand.
        </p>
      </div>
    </section>
  );
}
