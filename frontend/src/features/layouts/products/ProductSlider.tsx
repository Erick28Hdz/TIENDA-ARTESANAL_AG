interface ProductSliderProps {
  images: string[];
}

const ProductSlider = ({ images }: ProductSliderProps) => {
  return (
    <section className="w-full">
      <div
        className="
          overflow-hidden
          whitespace-nowrap
          relative
          w-[98%]
          mx-auto
          p-2.5
          rounded-[5px]
          border-2
          border-(--color-secundario)
        "
      >
        <div
          className="
            flex
            gap-5
            p-2.5
            animate-scrollLeft
            hover:[animation-play-state:paused]
          "
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Producto ${index + 1}`}
              className="w-[200px] h-auto shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
