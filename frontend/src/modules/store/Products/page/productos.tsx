import ProductsSection from "../../../../features/section/products/ProductsSection";
import PersonalizedProductsSection from "@/features/section/products/PersonalizedProductsSection";
import PublicitySection from "@/features/layouts/marketing/PublicidadSection";
import RelatedProductsSection from "../../../../features/section/products/RelatedProductsSection";
import ProductsMarqueeSection from "../../../../features/section/products/ProductsMarqueeSection";
import ProductInfoSection from "../../../../features/section/products/ProductInfoSection";

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
