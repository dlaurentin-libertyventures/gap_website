import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#opportunity", label: "Our Approach" },
  { href: "#vision", label: "Our Vision" },
  { href: "#leadership", label: "Leadership" },
  { href: "#roadmap", label: "Roadmap" },
];

export function SiteFooter() {
  return (
    <footer className="bg-dark-green border-t border-pine/20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logos/gap-working-logo-ivory.png"
                alt="Global Accreditation Project"
                width={560}
                height={112}
                className="h-20 sm:h-24 w-auto max-w-full"
              />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block mt-4 font-sans text-sm text-pine hover:text-clay transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>

          <nav
            className="md:col-span-4 md:col-start-6"
            aria-label="Footer navigation"
          >
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-pine hover:text-clay transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 md:col-start-10">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="font-sans text-sm text-pine hover:text-clay transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pine/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-sans text-xs text-sandstone">
            © {new Date().getFullYear()} Global Accreditation Project. All
            rights reserved.
          </p>
          <p className="font-sans text-xs text-sandstone/60">
            Accrediting the Future
          </p>
        </div>
      </div>
    </footer>
  );
}
