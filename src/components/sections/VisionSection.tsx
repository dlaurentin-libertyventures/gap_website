"use client";
import { motion } from "framer-motion";
import {
  Layers,
  TrendingUp,
  CheckCircle,
  Unlock,
  Globe,
  Copy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { visionData } from "@/data/site-content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  TrendingUp,
  CheckCircle,
  Unlock,
  Globe,
  Copy,
};

export function VisionSection() {
  return (
    <section id="vision" className="bg-ivory py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow text="Our vision" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-forest-green mt-3"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            A new accreditor for the next era of higher education.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {visionData.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="pt-8 pb-8 pr-0 sm:pr-10 border-t border-sandstone"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-sans text-xs font-semibold text-sandstone tracking-[0.2em]">
                    {item.number}
                  </span>
                  {Icon && (
                    <Icon
                      className="w-5 h-5 text-pine"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
                <h3 className="font-display font-bold text-forest-green text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-graphite text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
