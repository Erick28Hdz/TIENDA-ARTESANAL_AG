import PersonalizedProductsLayout from "@/features/layouts/products/PersonalizedProductsLayout";
import { usePersonalizedProducts } from "@/modules/store/Products/hooks/usePersonalizedProducts";

const PersonalizedProductsSection = () => {
  const { products, isLoading, error } = usePersonalizedProducts();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar productos</div>;

  return (
    <PersonalizedProductsLayout
      title="Productos personalizados"
      products={products}
    />
  );
};

export default PersonalizedProductsSection;
