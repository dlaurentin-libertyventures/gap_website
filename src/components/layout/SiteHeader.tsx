"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const navLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#opportunity", label: "Our Solution" },
  { href: "#leadership", label: "Leadership" },
  { href: "#about", label: "About" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm border-b border-cloud"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src={scrolled ? "/logos/gap-working-logo-mark.png" : "/logos/gap-working-logo-mark-ivory.png"}
                alt="GAP"
                width={36}
                height={36}
                className="h-9 w-auto transition-opacity duration-300"
              />
            </Link>

            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-sm transition-colors duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-terra-cotta"
                      : scrolled
                      ? "text-graphite hover:text-forest-green"
                      : "text-ivory/90 hover:text-ivory"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <PrimaryButton
                href={siteConfig.giveButter.url}
                label={siteConfig.giveButter.label}
                external
                className="hidden md:inline-flex text-xs px-4 py-2"
              />
              <button
                className="md:hidden p-2 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu
                  className={`w-5 h-5 ${
                    scrolled ? "text-graphite" : "text-ivory"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-dark-green flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between px-4 h-16">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/logos/gap-working-logo-mark-ivory.png"
                alt="GAP"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <button
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-ivory" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="flex flex-col gap-1 px-4 pt-8 flex-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display font-bold text-3xl text-ivory py-3 border-b border-pine/30 hover:text-clay transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-4 pb-12">
            <PrimaryButton
              href={siteConfig.giveButter.url}
              label={siteConfig.giveButter.label}
              variant="clay"
              external
              className="w-full justify-center"
            />
          </div>
        </div>
      )}
    </>
  );
}
