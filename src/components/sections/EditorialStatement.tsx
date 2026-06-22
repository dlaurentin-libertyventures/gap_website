"use client";
import { motion } from "framer-motion";

export function EditorialStatement() {
  return (
    <section className="bg-cloud py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <div className="h-px bg-sandstone mb-10 w-16" />
          <h2
            className="font-display font-bold text-forest-green leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Want real change in higher education?
            <br />
            We first need real change in{" "}
            <em className="not-italic text-terra-cotta">accreditation.</em>
          </h2>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px bg-sandstone flex-1 max-w-[60px]" />
            <p className="font-sans text-sm text-sandstone uppercase tracking-widest">
              GAP
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
