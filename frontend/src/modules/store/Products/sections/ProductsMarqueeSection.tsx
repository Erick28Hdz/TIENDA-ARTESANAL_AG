import ProductsMarqueeLayout from "../layouts/ProductsMarqueeLayout";
import { useTopProductsImages } from "../hooks/useTopProductsImages";

const ProductsMarqueeSection = () => {
  const { images, isLoading, error } = useTopProductsImages();

  if (isLoading) return null;
  if (error) return null;

  return <ProductsMarqueeLayout images={images} />;
};

export default ProductsMarqueeSection;
