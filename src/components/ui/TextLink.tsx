import Link from "next/link";

interface TextLinkProps {
  href: string;
  label: string;
  light?: boolean;
  external?: boolean;
  className?: string;
}

export function TextLink({
  href,
  label,
  light = false,
  external = false,
  className = "",
}: TextLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 font-sans text-sm underline underline-offset-4 transition-colors duration-200 ${
        light
          ? "text-clay hover:text-ivory"
          : "text-forest-green hover:text-terra-cotta"
      } ${className}`}
      {...externalProps}
    >
      {label}
    </Link>
  );
}
