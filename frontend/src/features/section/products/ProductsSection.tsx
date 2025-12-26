import { useProducts } from "../../../modules/store/Products/hooks/useProducts";
import ProductLayout from "../../layouts/products/ProductSectionLayout";

const ProductsSection = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p className="text-center mt-10">Cargando productos...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (products.length === 0) return <p className="text-center mt-10">No hay productos</p>;

  // Tomamos solo el primer producto
  const firstProduct = products[0];

  return (
    <div className="px-4 md:px-8">
      <ProductLayout product={firstProduct} />
    </div>
  );
};

export default ProductsSection;
