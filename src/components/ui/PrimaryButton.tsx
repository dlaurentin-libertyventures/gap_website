import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "clay" | "outline";
  external?: boolean;
  className?: string;
}

export function PrimaryButton({
  href,
  label,
  variant = "primary",
  external = false,
  className = "",
}: PrimaryButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-sans font-semibold text-sm px-6 py-3 rounded-[6px] transition-all duration-300 min-h-[44px] group";

  const variants = {
    primary:
      "bg-terra-cotta text-ivory hover:bg-[#a85e38] focus-visible:ring-2 focus-visible:ring-terra-cotta focus-visible:ring-offset-2",
    clay: "bg-clay text-dark-green hover:bg-[#d4906a] focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-dark-green",
    outline:
      "border border-sandstone text-graphite hover:border-forest-green hover:text-forest-green focus-visible:ring-2 focus-visible:ring-forest-green",
  };

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...externalProps}
    >
      {label}
      <ArrowRight
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
