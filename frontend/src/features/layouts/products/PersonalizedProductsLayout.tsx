import SectionContainer from "@/features/ui/container/Container";
import Title from "@/features/ui/typography/Title";
import ProductCard from "@/features/ui/card/ProductCard";
import type { Product } from "../../../modules/store/Products/types/product";
import HorizontalScroller from "@/features/ui/scroll/HorizontalScroller";

interface PersonalizedProductsLayoutProps {
  title: string;
  products: Product[];
}

const PersonalizedProductsLayout = ({
  title,
  products,
}: PersonalizedProductsLayoutProps) => {
  return (
    <SectionContainer variant="primary">
      {/* TÍTULO */}
      <Title variant="subtitulo1" tone="secondary">
        {title}
      </Title>

      {/* PRODUCTOS */}
      <HorizontalScroller>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </HorizontalScroller>
    </SectionContainer>
  );
};

export default PersonalizedProductsLayout;
