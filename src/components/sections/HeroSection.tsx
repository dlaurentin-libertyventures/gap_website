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
      className="relative h-screen min-h-[600px] bg-forest-green overflow-hidden flex flex-col"
    >
      <div
        className="absolute top-0 right-0 w-px h-full bg-pine/20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-20 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          <div className="lg:col-span-7 lg:pr-12">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-clay mb-5 md:mb-6"
            >
              Global Accreditation Project
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-ivory leading-[1.06] max-w-2xl"
              style={{ fontSize: "clamp(2.5rem, 4.8vw, 3.75rem)" }}
            >
              Judge the Practice,
              <br />
              Not the Paperwork.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display font-bold text-ivory text-xl md:text-2xl leading-snug mt-6 md:mt-8 max-w-md"
            >
              GAP is building a{" "}
              <span className="text-clay">new path</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-8 md:mt-10"
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

          <motion.div
            className="hidden lg:flex lg:col-span-5 items-center justify-center relative"
            style={{ y: logoY, opacity: logoOpacity }}
            aria-hidden="true"
          >
            <div className="absolute w-[400px] h-[400px] rounded-full border border-pine/15" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-pine/10" />
            <Image
              src="/logos/gap-working-logo-mark-ivory.png"
              alt=""
              width={260}
              height={260}
              className="relative z-10 w-[200px] opacity-90"
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 md:pb-7">
        <motion.a
          href="#problem"
          style={{ opacity: arrowOpacity }}
          className="inline-flex items-center gap-2 text-pine/60 hover:text-pine transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </motion.div>
          <span className="font-sans text-xs tracking-widest uppercase">
            Scroll
          </span>
        </motion.a>
      </div>
    </section>
  );
}
