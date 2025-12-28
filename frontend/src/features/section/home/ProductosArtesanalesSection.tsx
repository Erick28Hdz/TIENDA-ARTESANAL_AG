import ProductosPersonalizadosSection from "../../layouts/home/ProductosPersonalizados";
import ProductosUnicosSection from "../../layouts/home/ProductosUnicos";
import MarketingText from "@/features/ui/typography/MarketingText";
export default function ProductosArtesanalesSection() {
  return (
    <section
      className="
        w-[95%] mx-auto my-10
        flex flex-col items-center justify-between
      "
    >
      <MarketingText variant="title" tone="primary">
        Nuestros productos artesanales
      </MarketingText>

      <div
        className="
          flex justify-around 
          w-full 
          gap-6 
          flex-wrap
        "
      >
        <ProductosPersonalizadosSection />
        <ProductosUnicosSection />
      </div>
    </section>
  );
}
