import RelatedProductsLayout from "@/modules/store/Products/layouts/RelatedProductsLayout";
import { useRelatedProducts } from "../hooks/useRelatedProducts";

const RelatedProductsSection = () => {
  const { products, isLoading, error } = useRelatedProducts();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar productos</div>;

  return (
    <RelatedProductsLayout
      title="Productos similares"
      products={products}
    />
  );
};

export default RelatedProductsSection;
