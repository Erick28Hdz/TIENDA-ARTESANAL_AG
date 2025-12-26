import TopProductsLayout from "@/features/layouts/products/ProductosTopSection";
import { productosTop } from "@/features/data/products/productosTop";

const TopProductsSection = () => {
  const products = productosTop.map((p) => ({
    ...p,
    id: p.id.toString(),
    price: p.price.toString(),
  }));

  return (
    <TopProductsLayout
      title="Productos TOP de nuestra tienda"
      products={products}
    />
  );
};

export default TopProductsSection;
