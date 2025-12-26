import UniversalCarousel from "../../ui/carousel/Carousel";

type HeroCarouselProps = {
  variant?: "carouselWide" | "carouselTall" | "carouselSquare";
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  variant = "carouselWide",
}) => {
  const heroImages = [
    "/images/Productos/hero/01B21.jpg",
    "/images/Productos/hero/01P20.jpg",
    "/images/Productos/hero/08P20-1.jpg",
    "/images/Productos/hero/10C21-3.jpg",
    "/images/Productos/hero/Primer-diseno-2.jpg",
  ];

  return (
    <UniversalCarousel
      images={heroImages}
      imageVariant={variant}
      carouselVariant="elevated"
      controls={false}
      indicators={false}
    />
  );
};

export default HeroCarousel;
