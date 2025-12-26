import React from "react";
import clsx from "clsx";

export type TextVariant =
  | "titulos"
  | "subtitulo1"
  | "subtitulo2"
  | "parrafos"
  | "textos"
  | "enlaces"
  | "botones"
  | "fascinate"
  | "success"
  | "warning"
  | "error"
  // --- Variantes para tarjetas ---
  | "cardTitle"
  | "cardSubtitle"
  | "cardMeta"
  | "cardCategory"
  // --- Variantes pequeñas / utilitarias ---
  | "caption"
  | "footnote"
  | "byline"
  | "smallTag";

export type TextTone = "primary" | "secondary" | "tertiary" | "cuaternary" | "cuaternary2";
export type TextSize = "xs" | "sm" | "base" | "lg" | "xl";

export type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  tone?: TextTone;
  size?: TextSize;
  className?: string;
};

const Text: React.FC<TextProps> = ({ children, variant, tone, size, className }) => {
  // -----------------------------
  // Estilos por variante
  // -----------------------------
  const variantStyles: Record<TextVariant, string> = {
    titulos: "text-4xl md:text-5xl font-bold tracking-tight",
    subtitulo1: "text-2xl md:text-3xl font-semibold tracking-wide",
    subtitulo2: "text-xl md:text-2xl font-medium leading-tight",
    parrafos: "text-base md:text-lg leading-relaxed",
    textos: "text-lg md:text-xl leading-normal",
    enlaces: "text-base md:text-lg underline font-medium cursor-pointer tracking-wide",
    botones: "text-lg md:text-xl font-bold uppercase tracking-widest",
    fascinate: "text-3xl md:text-4xl font-bold tracking-wider uppercase",
    success: "font-textos font-semibold text-green-600",
    warning: "font-textos font-semibold text-yellow-600",
    error: "font-textos font-semibold text-red-600",
    cardTitle: "text-xl md:text-2xl font-semibold leading-snug tracking-tight",
    cardSubtitle: "text-lg md:text-xl font-medium leading-normal",
    cardMeta: "text-sm md:text-base leading-tight italic",
    cardCategory: "text-xs md:text-sm uppercase tracking-widest font-bold text-[var(--color-secundario)]",
    caption: "text-xs md:text-sm",
    footnote: "text-[11px] md:text-[12px] leading-tight",
    byline: "text-sm md:text-base italic",
    smallTag: "text-[11px] md:text-[12px] uppercase tracking-wider font-semibold",
  };

  // -----------------------------
  // Tonos de color
  // -----------------------------
  const toneStyles: Record<TextTone, string> = {
    primary: "text-[var(--color-primario)]",
    secondary: "text-[var(--color-secundario)]",
    tertiary: "text-[var(--color-terciario)]",
    cuaternary: "text-[var(--color-cuaternario)]",
    cuaternary2: "text-[var(--color-cuaternario2)]",
  };

  // -----------------------------
  // Tamaños universales
  // -----------------------------
  const sizeStyles: Record<TextSize, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  // -----------------------------
  // Map de fuentes
  // -----------------------------
  const fontMap: Record<TextVariant, string> = {
    titulos: "var(--letra-titulos)",
    subtitulo1: "var(--letra-subtitulo1)",
    subtitulo2: "var(--letra-subtitulo2)",
    parrafos: "var(--letra-parrafos)",
    textos: "var(--letra-textos)",
    enlaces: "var(--letra-enlaces)",
    botones: "var(--letra-botones)",
    fascinate: "var(--letra-decorativa)",
    success: "var(--letra-textos)",
    warning: "var(--letra-textos)",
    error: "var(--letra-textos)",
    cardTitle: "var(--letra-titulos)",
    cardSubtitle: "var(--letra-subtitulo1)",
    cardMeta: "var(--letra-textos)",
    cardCategory: "var(--letra-enlaces)",
    caption: "var(--letra-textos)",
    footnote: "var(--letra-textos)",
    byline: "var(--letra-textos)",
    smallTag: "var(--letra-botones)",
  };

  const variantHasOwnColor = ["success", "warning", "error"].includes(variant || "");

  return (
    <p
      className={clsx(
        "m-0",
        variant && variantStyles[variant],
        !variantHasOwnColor && tone && toneStyles[tone],
        size && sizeStyles[size],
        className
      )}
      style={variant ? { fontFamily: fontMap[variant] } : undefined}
    >
      {children}
    </p>
  );
};

export default Text;
