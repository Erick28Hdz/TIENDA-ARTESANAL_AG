import React from "react";
import clsx from "clsx";
import type { JSX } from "react/jsx-runtime";

export type TitleVariant =
  | "titulos"
  | "subtitulo1"
  | "subtitulo2"
  | "fascinate"
  | "cardTitle"
  | "cardTitleSmall"
  | "cardHero"
  | "cardOverline"
  | "cardSubtitle"
  | "cardSubtitleSmall"
  | "cardLabel"
  | "cardMini";

export type TitleTone =
  | "primary"
  | "secondary"
  | "tertiary"
  | "cuaternary"
  | "cuaternary2";

export type TitleProps = {
  children: React.ReactNode;
  variant?: TitleVariant;
  tone?: TitleTone;
  as?: keyof JSX.IntrinsicElements; // puedes sobrescribir el tag si quieres
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, variant, tone, as, className }) => {
  // Map de etiquetas HTML según variante
  const tagMap: Record<TitleVariant, keyof JSX.IntrinsicElements> = {
    titulos: "h1",
    subtitulo1: "h2",
    subtitulo2: "h3",
    fascinate: "h4",
    cardTitle: "h4",
    cardTitleSmall: "h5",
    cardHero: "h3",
    cardOverline: "span",
    cardSubtitle: "p",
    cardSubtitleSmall: "p",
    cardLabel: "span",
    cardMini: "span",
  };

  const Tag = as || (variant ? tagMap[variant] : "p");

  // Estilos por variante
  const variantStyles: Record<TitleVariant, string> = {
    titulos: "text-4xl md:text-5xl font-bold tracking-tight leading-tight",
    subtitulo1: "text-3xl md:text-4xl font-semibold tracking-wide leading-snug pb-2",
    subtitulo2: "text-xl md:text-2xl font-medium leading-tight pb-1",
    fascinate: "text-3xl md:text-4xl font-bold uppercase tracking-widest leading-tight",
    cardTitle: "text-xl md:text-2xl font-bold tracking-tight",
    cardTitleSmall: "text-lg md:text-xl font-semibold tracking-tight",
    cardHero: "text-2xl md:text-3xl font-bold leading-snug",
    cardOverline: "text-sm md:text-base uppercase tracking-widest font-medium opacity-80",
    cardSubtitle: "text-base md:text-lg font-medium opacity-90",
    cardSubtitleSmall: "text-sm md:text-base font-normal opacity-80",
    cardLabel: "text-xs md:text-sm uppercase tracking-wide font-semibold opacity-70",
    cardMini: "text-xs font-medium leading-tight opacity-70",
  };

  // Tonos de color, inline style sobrescribe cualquier h1-h6 global
  const toneColors: Record<TitleTone, string> = {
    primary: "var(--color-primario)",
    secondary: "var(--color-secundario)",
    tertiary: "var(--color-terciario)",
    cuaternary: "var(--color-cuaternario)",
    cuaternary2: "var(--color-cuaternario2)",
  };

  // Map de fuentes
  const fontMap: Record<TitleVariant, string> = {
    titulos: "var(--letra-titulos)",
    subtitulo1: "var(--letra-subtitulo1)",
    subtitulo2: "var(--letra-subtitulo2)",
    fascinate: "var(--letra-decorativa)",
    cardTitle: "var(--letra-titulos)",
    cardTitleSmall: "var(--letra-subtitulo2)",
    cardHero: "var(--letra-titulos)",
    cardOverline: "var(--letra-labels)",
    cardSubtitle: "var(--letra-parrafos)",
    cardSubtitleSmall: "var(--letra-textos)",
    cardLabel: "var(--letra-labels)",
    cardMini: "var(--letra-labels)",
  };

  return (
    <Tag
      className={clsx(variant && variantStyles[variant], className)}
      style={{
        fontFamily: variant ? fontMap[variant] : undefined,
        color: tone ? toneColors[tone] : undefined, // sobrescribe h1-h6 global
      }}
    >
      {children}
    </Tag>
  );
};

export default Title;
