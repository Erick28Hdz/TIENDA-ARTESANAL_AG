import { Carousel } from "react-bootstrap";

import Image, { type ImageVariant } from "../image/Image";


type CarouselStyleVariant =
  | "basic"
  | "elevated"
  | "minimal"
  | "floating"
  | "glass"
  | "luxury"
  | "cinematic"
  | "3d"
  | "framed";

type UniversalCarouselProps = {
  images: string[];
  imageVariant?: ImageVariant;
  carouselVariant?: CarouselStyleVariant;
  controls?: boolean;
  indicators?: boolean;
  className?: string;
};

const styleVariants: Record<CarouselStyleVariant, string> = {
  /** 🌑 1. Minimal Pro — ultra limpio, estilo Apple */
  minimal: `
    rounded-xl
    shadow-none
    border-none
    bg-transparent
  `,

  /** 🌤 2. Elevated Soft — sombra suave premium con tono Terciario */
  elevated: `
    rounded-2xl
    border-2 border-[var(--color-terciario)]
    shadow-[0_8px_20px_black]
    overflow-hidden
    bg-[var(--color-cuaternario)/10]
  `,

  /** ☁️ 3. Floating Depth — flotación elegante con brillo Terciario+Secundario */
  floating: `
    rounded-2xl
    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
    shadow-[0_6px_18px_var(--color-secundario)]
    hover:scale-[1.035]
    hover:shadow-[0_12px_28px_var(--color-terciario)]
    overflow-hidden
  `,

  /** 🪞 4. Glassmorphism — efecto cristal adaptado a paleta */
  glass: `
    rounded-2xl
    backdrop-blur-[14px]
    bg-[var(--color-primario)/10]
    border border-[var(--color-primario)/20]
    shadow-[0_8px_30px_var(--color-terciario)/50]
    overflow-hidden
  `,

  /** 💎 5. Luxury Frame — borde premium con degradado (Terciario → Secundario) */
  luxury: `
    rounded-xl
    border-[3px]
    border-[var(--color-terciario)]
    shadow-[0_5px_25px_var(--color-secundario)/40,0_8px_30px_var(--color-terciario)/40]
    backdrop-blur-sm
    overflow-hidden
  `,

  /** 🎥 6. Cinematic — estilo cine usando Cuaternario como marco */
  cinematic: `
    rounded-xl
    shadow-[0_10px_35px_var(--color-secundario)/60]
    border-y-[6px] border-[var(--color-cuaternario2)]
    overflow-hidden
  `,

  /** 🔮 7. 3D Motion Pro — profundidad realista con giro y sombras de marca */
  "3d": `
    rounded-2xl
    transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
    hover:scale-[1.03]
    hover:-rotate-[1.5deg]
    hover:shadow-[0_15px_45px_var(--color-primario)]
    overflow-hidden
  `,
  basic: "",
  framed: ""
};

const UniversalCarousel: React.FC<UniversalCarouselProps> = ({
  images,
  imageVariant = "carouselWide",
  carouselVariant = "basic",
  controls = false,
  indicators = false,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      <Carousel controls={controls} indicators={indicators}>
        {images.map((src, index) => (
          <Carousel.Item key={index}>
            <Image
              src={src}
              alt={`slide-${index}`}
              variant={imageVariant}
              className={`
                mx-auto
                ${styleVariants[carouselVariant]}
              `}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default UniversalCarousel;
