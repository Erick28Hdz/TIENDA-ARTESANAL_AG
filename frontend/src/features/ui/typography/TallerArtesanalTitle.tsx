import React from "react";
import clsx from "clsx";

// Variantes
export type TA_Variant =
  | "title"
  | "hero"
  | "subtitle"
  | "label"
  | "decorative"
  | "navbar"
  | "iconLabel";

// Tonos
export type TA_Tone = "primary" | "secondary" | "tertiary";

interface TallerArtesanalTextProps {
  children?: React.ReactNode;
  variant?: TA_Variant;
  tone?: TA_Tone;
  className?: string;
}

const TallerArtesanalText: React.FC<TallerArtesanalTextProps> = ({
  children,
  variant = "title",
  tone = "primary",
  className = "",
}) => {
  // 🎨 Tonos
  const toneStyles: Record<TA_Tone, string> = {
    primary: "text-[var(--color-primario)]",
    secondary: "text-[var(--color-secundario)]",
    tertiary: "text-[var(--color-terciario)]",
  };

  // 🅰️ Estilos por variante
  const variantStyles: Record<TA_Variant, string> = {
    title: `
      text-5xl md:text-6xl
      font-bold
      tracking-tight
    `,
    hero: `
      text-5xl md:text-7xl
      font-extrabold
      tracking-wide
      uppercase
    `,
    subtitle: `
      text-3xl md:text-4xl
      font-semibold
      tracking-wide
      uppercase
    `,
    label: `
      text-xl md:text-2xl
      font-medium
      tracking-wider
      uppercase
    `,
    decorative: `
      text-4xl md:text-5xl
      font-bold
      tracking-[0.15em]
      uppercase
    `,
    navbar: `
      text-2xl md:text-2xl
      tracking-wide
      leading-none
    `,
    iconLabel: `
      text-xs md:text-sm
      font-semibold
      tracking-widest
      uppercase
    `,
  };

  // 🔤 Fuente
  const fontMap: Record<TA_Variant, string> = {
    title: "var(--letra-taller-artesanal)",
    hero: "var(--letra-taller-artesanal)",
    subtitle: "var(--letra-taller-artesanal)",
    label: "var(--letra-taller-artesanal)",
    decorative: "var(--letra-taller-artesanal)",
    navbar: "var(--letra-taller-artesanal)",
    iconLabel: "var(--letra-taller-artesanal)",
  };

  // ✏️ Grosor del contorno por variante (igual que AGText)
  const strokeByVariant: Record<TA_Variant, string> = {
    navbar: "0.5px white",
    iconLabel: "0.7px white",
    title: "1.5px white",
    hero: "2px white",
    subtitle: "1px white",
    label: "1px white",
    decorative: "1px white",
  };

  // 🎨 Colores por defecto
  const colors = {
    taller: "var(--color-secundario)",
    artesanal: "var(--color-primario)",
  };

  return (
    <span
      className={clsx(
        variantStyles[variant],
        toneStyles[tone],
        "m-0 text-right select-none",
        className
      )}
      style={{ fontFamily: fontMap[variant] }}
    >
      {children ?? (
        <>
          <span
            className="drop-shadow-[1px_0px_10px_var(--color-secundario)]"
            style={{
              WebkitTextStroke: strokeByVariant[variant],
              color: colors.taller,
            }}
          >
            Taller
          </span>

          <span className="mx-2" />

          <span
            className="drop-shadow-[1px_0px_10px_var(--color-secundario)]"
            style={{
              WebkitTextStroke: strokeByVariant[variant],
              color: colors.artesanal,
            }}
          >
            Artesanal
          </span>
        </>
      )}
    </span>
  );
};

export default TallerArtesanalText;