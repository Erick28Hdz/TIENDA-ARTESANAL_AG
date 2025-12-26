import type { MarqueeImage } from "../../../modules/store/Products/hooks/useTopProductsImages";

interface ProductsMarqueeLayoutProps {
  images: MarqueeImage[];
}

const ProductsMarqueeLayout = ({ images }: ProductsMarqueeLayoutProps) => {
  return (
    <section className="w-full py-4">
      <div className="overflow-hidden relative w-[98%] mx-auto border-2 border-(--color-secundario)ded-[5px]">
        <div className="flex gap-5 animate-scrollLeft hover:animation-play-state-paused">
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-[200px] h-auto shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsMarqueeLayout;
