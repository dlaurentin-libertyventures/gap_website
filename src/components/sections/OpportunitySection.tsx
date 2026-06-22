"use client";
import { motion } from "framer-motion";
import { opportunityData } from "@/data/site-content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function OpportunitySection() {
  return (
    <section id="opportunity" className="bg-forest-green py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionEyebrow text="The opportunity" light />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-ivory mt-3"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            A rare window for transformational change.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-pine/40">
          {opportunityData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-10 md:pr-10 border-b md:border-b-0 md:border-r border-pine/30 last:border-0 last:pr-0 md:pl-10 first:pl-0"
            >
              <p className="font-display font-bold text-clay text-4xl mb-4">
                {item.number}
              </p>
              <h3 className="font-display font-bold text-ivory text-xl mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-pine text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
