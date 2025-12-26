import React from "react";
import ProductInfoLayout from "../../layouts/products/DescritionProductsLayout";
import { useProducts } from "../../../modules/store/Products/hooks/useProducts";

const ProductInfoSection: React.FC = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p className="text-center mt-10">Cargando productos...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!products.length) return <p className="text-center mt-10">No hay productos</p>;

  const product = products[0]; // solo mostrar un producto

  return (
    <section>
      <ProductInfoLayout product={product} />
    </section>
  );
};

export default ProductInfoSection;
