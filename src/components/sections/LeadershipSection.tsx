"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { leadershipData } from "@/data/site-content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function LeadershipSection() {
  return (
    <section id="leadership" className="bg-cloud py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionEyebrow text="Leadership" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-forest-green mt-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Built by people who know the system—and know what must change.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leadershipData.map((person, i) => (
            <motion.article
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-sandstone/20 rounded-[6px] overflow-hidden mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="h-0.5 w-8 bg-terra-cotta mb-3" />
              <h3 className="font-display font-bold text-forest-green text-xl">
                {person.name}
              </h3>
              <p className="font-sans text-sm text-pine mb-3">{person.role}</p>
              <p className="font-sans text-graphite text-sm leading-relaxed">
                {person.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
