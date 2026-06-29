"use client";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { siteConfig } from "@/config/site";

export function ClosingCTA() {
  return (
    <section id="support" className="bg-dark-green py-24 md:py-36">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display font-bold text-ivory leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Join us in building the future of higher education.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-sans text-pine text-lg mt-6 mb-10 leading-relaxed"
            >
              We have a plan and we are ready to activate. But we can&apos;t do
              it alone.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <PrimaryButton
                href={siteConfig.giveButter.url}
                label={siteConfig.giveButter.label}
                variant="clay"
                external
              />
              <PrimaryButton
                href={`mailto:${siteConfig.email}`}
                label="Contact us"
                variant="outline"
                className="border-pine text-pine hover:border-clay hover:text-clay"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-sans text-pine text-sm mt-10 leading-relaxed max-w-lg"
            >
              We&apos;re grateful for your interest in our work and we&apos;d be
              delighted to include you in our circle. Care to join us in building
              the capacity needed to launch and sustain the tools, advocacy, and
              partnerships that drive change?
            </motion.p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
