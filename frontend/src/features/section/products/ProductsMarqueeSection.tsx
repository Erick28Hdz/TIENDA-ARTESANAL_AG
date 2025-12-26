import ProductsMarqueeLayout from "../../layouts/products/ProductsMarqueeLayout";
import { useTopProductsImages } from "../../../modules/store/Products/hooks/useTopProductsImages";

const ProductsMarqueeSection = () => {
  const { images, isLoading, error } = useTopProductsImages();

  if (isLoading) return null;
  if (error) return null;

  return <ProductsMarqueeLayout images={images} />;
};

export default ProductsMarqueeSection;
