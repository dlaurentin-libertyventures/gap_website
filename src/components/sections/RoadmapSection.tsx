"use client";
import { motion } from "framer-motion";
import { roadmapData } from "@/data/site-content";

export function RoadmapSection() {
  const last = roadmapData.length - 1;

  return (
    <section id="roadmap" className="bg-cloud py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-forest-green mb-16"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
        >
          A clear path to launch.
        </motion.h2>

        {/* Desktop horizontal timeline
            Each item is flex-1; dot anchored at left edge, line extends right to next dot. */}
        <div className="hidden md:flex items-start">
          {roadmapData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={i < last ? "flex-1 flex flex-col" : "flex flex-col"}
            >
              {/* Connector row: dot at left, line extends right */}
              <div className="flex items-center">
                {/* Dot */}
                <div
                  className={`shrink-0 w-3 h-3 rounded-full border-2 ${
                    item.active
                      ? "bg-terra-cotta border-terra-cotta"
                      : "bg-cloud border-pine"
                  }`}
                  aria-hidden="true"
                />
                {/* Line to next dot — only between items */}
                {i < last && (
                  <div className="flex-1 h-px bg-pine/35" aria-hidden="true" />
                )}
              </div>

              {/* Label directly below the dot */}
              <div className="mt-4 pr-4">
                <p
                  className={`font-sans text-xs font-bold uppercase tracking-[0.15em] mb-1 ${
                    item.active ? "text-terra-cotta" : "text-pine"
                  }`}
                >
                  {item.year}
                </p>
                <p className="font-sans text-graphite text-sm leading-snug">
                  {item.phase}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative">
          <div
            className="absolute top-0 bottom-0 left-[5px] w-px bg-pine/35"
            aria-hidden="true"
          />
          <div className="space-y-8 pl-8">
            {roadmapData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative"
              >
                <div
                  className={`absolute -left-[27px] top-[3px] w-3 h-3 rounded-full border-2 ${
                    item.active
                      ? "bg-terra-cotta border-terra-cotta"
                      : "bg-cloud border-pine"
                  }`}
                  aria-hidden="true"
                />
                <p
                  className={`font-sans text-xs font-bold uppercase tracking-[0.15em] mb-0.5 ${
                    item.active ? "text-terra-cotta" : "text-pine"
                  }`}
                >
                  {item.year}
                </p>
                <p className="font-sans text-graphite text-sm">{item.phase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
