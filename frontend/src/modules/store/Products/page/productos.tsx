import ProductsSection from "../sections/ProductsSection";
import PersonalizedProductsSection from "@/modules/store/Products/sections/PersonalizedProductsSection";
import PublicitySection from "@/features/layouts/marketing/PublicidadSection";
import RelatedProductsSection from "../sections/RelatedProductsSection";
import ProductsMarqueeSection from "../sections/ProductsMarqueeSection";
import ProductInfoSection from "../sections/ProductInfoSection";

const Productos = () => {
  return (
    <section className="tienda-virtual">
      <ProductsSection />
      <ProductInfoSection />
      <ProductsMarqueeSection />
      <RelatedProductsSection />
      <PersonalizedProductsSection />
      <PublicitySection />
    </section>
  );
};

export default Productos;
