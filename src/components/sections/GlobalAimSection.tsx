"use client";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function GlobalAimSection() {
  return (
    <section id="global-aim" className="bg-ivory py-20 md:py-32 border-t border-cloud">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow text="The global aim" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-forest-green mt-3 mb-8"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Global is earned, not declared.
          </motion.h2>

          {[
            "Accreditation and quality assurance are nationally situated. Recognition is granted by national authorities, not declared by a global body. So we are building GAP in the United States first, and seeking recognition from the U.S. Department of Education at a moment when the regulatory environment is open to a different model.",
            "Recognition here is the foundation, not the ceiling. Once established, we will build toward mutual recognition with quality assurance agencies and education ministries abroad, so that an institution judged sound by GAP carries a signal that travels.",
            "Global is the direction. We earn it through national credibility rather than claim it ahead of the work.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-sans text-graphite text-lg leading-relaxed mb-5 last:mb-0"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
