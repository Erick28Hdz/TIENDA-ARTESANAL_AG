import React from "react";

export type ImageVariant =
  | "logoHero"
  | "logoHeader"
  | "logoFooter"
  | "logoSquare"
  | "carouselWide"
  | "carouselTall"
  | "carouselSquare"
  | "productCard"
  | "productMini"
  | "productLarge"
  | "productCardThumbnail"
  | "fullWidth"
  | "fullHero"
  | "sectionImage"
  | "icon";

type ImageProps = {
  src: string;
  alt: string;
  variant?: ImageVariant;
  hoverable?: boolean;
  className?: string;
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  variant = "fullWidth",
  hoverable = false,
  className = "",
}) => {
  const baseStyles = "object-contain";

  const variantStyles: Record<ImageVariant, string> = {
    // 🔵 LOGOS
    logoHero: `
      w-[220px]
      object-contain
      drop-shadow-[0_0_10px_black]
    `,
    logoHeader: `
      w-[120px]
      object-contain
    `,
    logoFooter: `
      w-[50px]
      object-contain
    `,
    logoSquare: `
      w-[140px] h-[140px]
      object-cover
      rounded-md
    `,

    // 🔴 CAROUSEL
    carouselWide: `
      w-full
      h-[420px]
      object-cover
      rounded-xl
    `,
    carouselTall: `
      w-[320px]
      h-[500px]
      object-cover
      rounded-xl
    `,
    carouselSquare: `
      w-[400px]
      h-[250px]
      object-cover
      rounded-xl
    `,

    // 🟧 PRODUCTOS
    productCard: `
      w-[300px]
      h-[300px]
      object-cover
      rounded-lg
    `,
    productMini: `
      w-[80px]
      h-[80px]
      object-cover
      rounded-md
    `,
    productLarge: `
      w-[500px]
      h-[500px]
      object-cover
      rounded-xl
    `,
    productCardThumbnail: `
  w-full
  h-full
  object-cover
  rounded-md
`,

    // 🟩 LAYOUTS GENERALES
    fullWidth: `
      w-full
      h-auto
    `,
    fullHero: `
      w-full
      h-[600px]
      object-cover
    `,
    sectionImage: `
      w-[600px]
      h-[400px]
      object-cover
      rounded-xl
    `,
    icon: `
      w-[22px]
      h-[22px]
      object-contain
    `,
  };

  const hoverStyles = hoverable
    ? "transition-all duration-[2800ms] ease-in-out hover:rotate-[360deg]"
    : "";

  return (
    <img
      src={src || "/images/fallback.png"}
      alt={alt}
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
    />
  );
};

export default Image;
