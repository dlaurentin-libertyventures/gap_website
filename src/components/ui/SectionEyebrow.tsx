interface SectionEyebrowProps {
  text: string;
  light?: boolean;
  className?: string;
}

export function SectionEyebrow({
  text,
  light = false,
  className = "",
}: SectionEyebrowProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-clay" : "text-terra-cotta"
      } ${className}`}
    >
      {text}
    </p>
  );
}
