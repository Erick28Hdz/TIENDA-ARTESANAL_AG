import ProductCard from "../../ui/card/ProductCard";
import Title from "@/features/ui/typography/Title";
import HorizontalScroller from "@/features/ui/scroll/HorizontalScroller";
import type { Product } from "@/modules/store/Products/types/product";

interface TopProductsLayoutProps {
  title: string;
  products: Product[];
}

const TopProductsLayout = ({ title, products }: TopProductsLayoutProps) => {
  return (
    <section className="bg-(--color-cuaternario2)
      w-[90%]
      mx-auto mb-10
      flex flex-col items-start
      p-3
      drop-shadow-[0px_0px_5px_var(--color-primario)]
      border-2 border-(--color-secundario)
      rounded-[5px]"
    >
      <Title variant="subtitulo1" tone="secondary" className="uppercase">
        {title}
      </Title>

      <HorizontalScroller className="w-[98%] m-2.5 p-4 gap-5">
        {products.map((p) => (
          <div key={p.id} className="shrink-0 w-[320px] h-[450px]">
            <ProductCard {...p} />
          </div>
        ))}
      </HorizontalScroller>
    </section>
  );
};

export default TopProductsLayout;
