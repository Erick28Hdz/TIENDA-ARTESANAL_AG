import React from "react";
import clsx from "clsx";

type AGVariant =
  | "agTitle"
  | "agHero"
  | "agSubtitle"
  | "agDisplay"
  | "agDecorative"
  | "agNavbar"
  | "agIconLabel";

type AGTone =
  | "primary"
  | "secondary"
  | "tertiary"
  | "cuaternary"
  | "cuaternary2";

type ArteGestionTextProps = {
  children?: React.ReactNode;
  variant?: AGVariant;
  tone?: AGTone;
  className?: string;
};

const ArteGestionText: React.FC<ArteGestionTextProps> = ({
  children,
  variant = "agTitle",
  tone = "primary",
  className = "",
}) => {
  // 🎨 Tonos → Colores
  const toneStyles: Record<AGTone, string> = {
    primary: "text-[var(--color-primario)]",
    secondary: "text-[var(--color-secundario)]",
    tertiary: "text-[var(--color-terciario)]",
    cuaternary: "text-[var(--color-cuaternario)]",
    cuaternary2: "text-[var(--color-cuaternario2)]",
  };

  // 🅰️ Estilos por variante
  const variantStyles: Record<AGVariant, string> = {
    agTitle: `
      text-4xl md:text-6xl
      font-extrabold
      tracking-tight
      uppercase
    `,
    agHero: `
      text-5xl md:text-7xl
      font-bold
      tracking-wide
      uppercase
      leading-tight
    `,
    agSubtitle: `
      text-3xl md:text-4xl
      font-semibold
      tracking-wide
      uppercase
    `,
    agDisplay: `
      text-4xl md:text-5xl
      font-bold
      tracking-wider
      uppercase
    `,
    agDecorative: `
      text-4xl md:text-5xl
      font-bold
      tracking-[0.15em]
      uppercase
    `,
    agNavbar: `
      text-2xl md:text-2xl

      tracking-wide
      uppercase
      leading-none
    `,
    agIconLabel: `
      text-xs md:text-sm
      font-semibold
      tracking-widest
      uppercase
    `,
  };

  // 🔤 Fuente usada por variante
  const fontMap: Record<AGVariant, string> = {
    agTitle: "var(--letra-arte-gestion)",
    agHero: "var(--letra-arte-gestion)",
    agSubtitle: "var(--letra-arte-gestion)",
    agDisplay: "var(--letra-arte-gestion)",
    agDecorative: "var(--letra-arte-gestion)",
    agIconLabel: "var(--letra-arte-gestion)",
    agNavbar: "var(--letra-arte-gestion)",
  };

  // ✏️ Grosor del contorno por variante
  const strokeByVariant: Record<AGVariant, string> = {
    agNavbar: "0.2px white",
    agIconLabel: "0.7px white",
    agTitle: "1.5px white",
    agHero: "2px white",
    agSubtitle: "1px white",
    agDisplay: "1px white",
    agDecorative: "1px white",
  };

  // 🎨 Colores exclusivos de las palabras por defecto
  const colors = {
    arte: "var(--color-secundario)",
    gestion: "var(--color-primario)",
  };

  return (
    <span
      className={clsx(
        variantStyles[variant],
        toneStyles[tone],
        "m-0 select-none",
        className
      )}
      style={{ fontFamily: fontMap[variant] }}
    >
      {children ?? (
        <>
          {/* ARTE */}
          <span
            className="drop-shadow-[1px_0px_10px_var(--color-secundario)]"
            style={{
              WebkitTextStroke: strokeByVariant[variant],
              color: colors.arte,
            }}
          >
            Arte
          </span>
          {/* GESTIÓN */}
          <span
            className="drop-shadow-[1px_0px_10px_var(--color-terciario)]"
            style={{
              WebkitTextStroke: strokeByVariant[variant],
              color: colors.gestion,
            }}
          >
            Gestión
          </span>
        </>
      )}
    </span>
  );
};

export default ArteGestionText;
