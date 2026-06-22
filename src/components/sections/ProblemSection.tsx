"use client";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { LargeStatistic } from "@/components/ui/LargeStatistic";
import { EditorialQuote } from "@/components/ui/EditorialQuote";

export function ProblemSection() {
  return (
    <section id="problem" className="bg-ivory py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky left */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionEyebrow text="The problem" />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display font-bold text-forest-green mt-3 leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
              >
                Accreditation is the choke-point for innovation in higher
                education.
              </motion.h2>
            </div>
          </div>

          {/* Scrolling right */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-8">
            {[
              "This complex and burdensome set of practices and regulations determines which institutions can exist, award degrees, and access federal aid. It rewards compliance over outcomes and incumbency over new ideas.",
              "New entrants face expensive, multi-year, and uncertain approval processes, while existing institutions rarely face meaningful consequences for poor performance.",
              "The result is a system that limits entry, fails to enforce exit, and sends weak signals about what actually adds value for students.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="font-sans text-graphite text-lg leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            <div className="pt-8 border-t border-cloud">
              <LargeStatistic
                value="4"
                label="New colleges per year earn accreditation."
              />
              {/* Abstract visualization */}
              <div className="mt-8" aria-hidden="true">
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-[4px] ${
                        i < 4 ? "bg-terra-cotta" : "bg-cloud"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-sandstone mt-2 font-sans">
                  4 out of 20+ applicants earn accreditation in a given period
                </p>
              </div>
            </div>

            <div className="pt-4">
              <EditorialQuote text="Accreditation is a long and winding road." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
