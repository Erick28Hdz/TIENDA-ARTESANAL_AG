import React from "react";
import clsx from "clsx";

type MarketingVariant =
  // nuevas variantes
  | "title"
  | "subtitle1"
  | "subtitle2"
  | "paragraph"
  | "text"
  | "link"
  | "button"
  | "decorative";

type MarketingTone =
  | "primary"
  | "secondary"
  | "tertiary"
  | "cuaternary";

type MarketingTextProps = {
  children: React.ReactNode;
  variant?: MarketingVariant;
  tone?: MarketingTone;
  className?: string;
};

export const MarketingText: React.FC<MarketingTextProps> = ({
  children,
  variant = "paragraph",
  tone = "primary",
  className = "",
}) => {
  // 🎨 Tonos → Colores
  const toneStyles = {
    primary: "text-[var(--color-primario)]",
    secondary: "text-[var(--color-secundario)]",
    tertiary: "text-[var(--color-terciario)]",
    cuaternary: "text-[var(--color-cuaternario)]",
  }[tone];

  // 🅰️ Estilos por variante
  const variantStyles: Record<MarketingVariant, string> = {
    // 🎨 Nuevas variantes
    title: `
      text-4xl md:text-5xl
      font-bold
      tracking-tight
    `,
    subtitle1: `
      text-2xl md:text-3xl
      font-semibold
      tracking-wide
    `,
    subtitle2: `
      text-xl md:text-2xl
      font-medium
      leading-tight
    `,
    paragraph: `
      text-base md:text-lg
      leading-relaxed
    `,
    text: `
      text-lg md:text-xl
      leading-normal
    `,
    link: `
      text-base md:text-lg
      underline
      font-medium
      cursor-pointer
      tracking-wide
    `,
    button: `
      text-lg md:text-xl
      font-bold
      uppercase
      tracking-widest
    `,
    decorative: `
      text-3xl md:text-4xl
      leading-tight
      font-bold
      tracking-wider
      uppercase
    `,
  };

  // 🅵 Map de fuentes
  const fontMap: Record<MarketingVariant, string> = {


    // nuevas fuentes asignadas
    title: "var(--letra-titulos)",
    subtitle1: "var(--letra-subtitulo1)",
    subtitle2: "var(--letra-subtitulo2)",
    paragraph: "var(--letra-parrafos)",
    text: "var(--letra-textos)",
    link: "var(--letra-enlaces)",
    button: "var(--letra-botones)",
    decorative: "var(--letra-decorativa)",
  };

  return (
    <p
      className={clsx(
        variantStyles[variant],
        toneStyles,
        className
      )}
      style={{ fontFamily: fontMap[variant] }}
    >
      {children}
    </p>
  );
};

export default MarketingText;
