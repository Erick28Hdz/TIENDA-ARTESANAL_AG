import Carousel from "react-bootstrap/Carousel";
import type { Product } from "../../../modules/store/Products/hooks/useProducts";


interface ProductLayoutProps {
  product: Product;
}

const ProductLayout = ({ product }: ProductLayoutProps) => {
  return (
    <section className="flex flex-col md:flex-row justify-around items-center mt-2 p-4 bg-(--color-cuaternario) rounded-lg shadow-lg">
      {/* Información */}
      <div className="flex flex-col md:w-1/3 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p>{product.description}</p>
        
      </div>

      {/* Carrusel */}
      <div className="md:w-2/3 w-full border-4 rounded-[5px] overflow-hidden">
        <Carousel>
          {product.images.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProductLayout;
