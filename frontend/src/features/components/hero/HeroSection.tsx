import HeroCarousel from "./HeroCarousel";
import HeroBranding from "./HeroBranding";
import HeroMarketing from "./HeroMarketing";

const HeroSection = () => {
  return (
    <section className="w-full bg-black py-3 px-10 tienda-virtual">
      <div className="grid md:grid-cols-2 items-center">
        <HeroCarousel />
        <HeroBranding />
      </div>

      <HeroMarketing />
    </section>
  );
};

export default HeroSection;
