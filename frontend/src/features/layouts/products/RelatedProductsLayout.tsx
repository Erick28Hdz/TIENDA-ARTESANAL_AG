import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import SectionContainer from "@/features/ui/container/Container";
import Title from "@/features/ui/typography/Title";
import ProductCard from "@/features/ui/card/ProductCard";
import ProductsGrid from "@/features/components/products/ProductsGrid";

import type { Product } from "../../../modules/store/Products/types/product";

interface RelatedProductsLayoutProps {
  title?: string;
  products: Product[];
}

const RelatedProductsLayout = ({
  title = "Productos similares",
  products,
}: RelatedProductsLayoutProps) => {
  return (
    <SectionContainer variant="primary">
      {/* HEADER */}
      <div className="w-full flex justify-between items-center">
        <Title variant="subtitulo1" tone="secondary">
          {title}
        </Title>

        <button className="flex items-center gap-2 px-3 py-1 border rounded">
          Filtros
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-4"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
      </div>

      <ProductsGrid maxRows={3}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>

      {/* PAGINACIÓN */}
      <div className="flex justify-center">
        <Stack spacing={2}>
          <Pagination count={10} color="primary" />
        </Stack>
      </div>
    </SectionContainer>
  );
};

export default RelatedProductsLayout;
