import HeroCarousel from "../components/hero/HeroCarousel";
import HeroBranding from "../components/hero/HeroBranding";
import HeroMarketing from "../components/hero/HeroMarketing";

const Hero = () => {
  return (
    <section className="w-full bg-black py-3 px-10 tienda-virtual">

      {/* GRID PRINCIPAL */}
      <div className="grid md:grid-cols-2 items-center">
        {/* Columna Izquierda – Carousel */}
        <div className="mt-1 p-2">
          <HeroCarousel />
        </div>

        {/* Columna Derecha – Branding */}
        <HeroBranding />
      </div>

      {/* Texto Marketing + Botón */}
      <HeroMarketing />

    </section>
  );
};

export default Hero;
