"use client";
import { motion } from "framer-motion";
import { comparisonData } from "@/data/site-content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function ComparisonSection() {
  return (
    <section className="bg-cloud py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionEyebrow text="Traditional vs. GAP" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-forest-green mt-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            A different model, from the ground up.
          </motion.h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 border-t border-sandstone">
            <div className="py-3 pr-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sandstone">
                Traditional Accreditation
              </p>
            </div>
            <div className="py-3 pl-8 border-l border-sandstone">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-terra-cotta">
                GAP Model
              </p>
            </div>
          </div>
          {comparisonData.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-2 border-t border-cloud hover:bg-ivory/50 transition-colors"
            >
              <div className="py-5 pr-8">
                <p className="font-sans text-graphite line-through decoration-sandstone/50">
                  {row.traditional}
                </p>
              </div>
              <div className="py-5 pl-8 border-l border-cloud">
                <p className="font-sans font-semibold text-forest-green">
                  {row.gap}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-3">
          {comparisonData.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-ivory rounded-[6px] p-4"
            >
              <p className="font-sans text-sandstone text-sm line-through">
                {row.traditional}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-4 h-px bg-terra-cotta" />
                <p className="font-sans font-semibold text-forest-green">
                  {row.gap}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <blockquote className="border-l-2 border-terra-cotta pl-6">
            <p className="font-display font-bold text-xl text-graphite italic">
              &ldquo;Accreditation is extreme bureaucratic asphyxiation.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
