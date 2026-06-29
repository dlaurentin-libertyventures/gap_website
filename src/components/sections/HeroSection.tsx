"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TextLink } from "@/components/ui/TextLink";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[640px] bg-forest-green overflow-hidden flex flex-col"
    >
      {/* Subtle right-edge texture */}
      <div
        className="absolute top-0 right-0 w-px h-full bg-pine/20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main content — grows to fill available space */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">

          {/* Left column */}
          <div className="lg:col-span-7 lg:pr-16 flex flex-col justify-center">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-6 h-px bg-clay" aria-hidden="true" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-clay">
                Global Accreditation Project
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-ivory leading-[1.08]"
              style={{ fontSize: "clamp(2.25rem, 3.6vw, 3.25rem)" }}
            >
              Unlocking an Era of
              <br />
              Innovation and Accountability
              <br />
              in Higher Education
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="origin-left my-7 h-px bg-pine/50 w-full max-w-xs"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-lg mb-8"
            >
              <p className="font-sans text-ivory/70 text-base md:text-lg leading-relaxed">
                Accreditation determines which institutions can exist, award
                degrees, and access federal aid. Today, it rewards compliance over
                outcomes and incumbency over innovation.
              </p>
              <p className="font-display font-bold text-ivory text-xl md:text-2xl leading-snug mt-4 md:whitespace-nowrap">
                GAP is building a new path.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <PrimaryButton
                href={siteConfig.giveButter.url}
                label={siteConfig.giveButter.label}
                variant="clay"
                external
              />
              <TextLink href="#problem" label="Explore our approach" light />
            </motion.div>
          </div>

          {/* Right column — logo mark */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 items-center justify-center relative mt-16"
            style={{ y: logoY, opacity: logoOpacity }}
            aria-hidden="true"
          >
            <div className="absolute w-[420px] h-[420px] rounded-full border border-pine/15" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-pine/10" />
            <Image
              src="/logos/gap-working-logo-mark-ivory.png"
              alt=""
              width={260}
              height={260}
              className="relative z-10 w-[220px] opacity-90"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom bar — pinned to bottom */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-7">
        <div className="border-t border-pine/30 pt-5 flex items-center justify-between">
          <motion.a
            href="#problem"
            style={{ opacity: arrowOpacity }}
            className="flex items-center gap-2 text-pine/60 hover:text-pine transition-colors group"
            aria-label="Scroll down"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </motion.div>
            <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          </motion.a>

          <p className="font-sans text-xs text-pine/40 tracking-wide">
            Target launch: Summer 2028
          </p>
        </div>
      </div>
    </section>
  );
}
