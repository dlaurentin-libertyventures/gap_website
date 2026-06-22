"use client";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { siteConfig } from "@/config/site";

export function ReportCTA() {
  return (
    <section className="bg-cloud py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-terra-cotta mb-3">
                New research
              </p>
              <h2
                className="font-display font-bold text-forest-green"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
              >
                The State of Accreditation
              </h2>
              <p className="font-sans text-graphite text-lg mt-4 mb-8 leading-relaxed">
                A closer look at the system constraining innovation—and the path
                toward a better model.
              </p>
              <PrimaryButton
                href={siteConfig.report.url}
                label="Download the report"
                external
              />
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="aspect-[3/4] bg-forest-green rounded-[8px] p-8 flex flex-col justify-between"
              aria-hidden="true"
            >
              <div>
                <div className="w-8 h-0.5 bg-clay mb-6" />
                <p className="font-display font-bold text-ivory text-lg leading-snug">
                  The State of Accreditation
                </p>
                <p className="font-sans text-pine text-sm mt-2">
                  Global Accreditation Project
                </p>
              </div>
              <div>
                <div className="h-px bg-pine/40 mb-4" />
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-clay/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-clay" />
                  </div>
                  <p className="font-sans text-xs text-pine">
                    Research Report · 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
