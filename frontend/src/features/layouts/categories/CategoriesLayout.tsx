import VerticalCategoriesScroller from "@/features/ui/scroll/VerticalSnapScroller";
import CategorySlide from "@/features/ui/card/CategorySlide";
import { Carousel } from "react-bootstrap";

interface CategoriesShowcaseLayoutProps {
  categoryName: string;
  categoryDescription: string;
  categories: string[];
  images: {
    src: string;
    title: string;
    description: string;
  }[];
}

const CategoriesShowcaseLayout = ({
  categoryName,
  categoryDescription,
  categories,
  images,
}: CategoriesShowcaseLayoutProps) => {
  return (
    <section className="flex justify-around items-center mb-10 p-[15px] bg-(--color-cuaternario)">
      
      {/* COLUMNA IZQUIERDA */}
      <div className="w-[20%]">
        <div className="w-[150%]">
          <h2
            className="
              font-semibold 
              text-[35px] 
              relative left-[30px]
              p-[5px] 
              mb-2.5 
              rounded-[5px]
              text-(--color-cuaternario2)
            "
            style={{ backgroundColor: "var(--color-secundario)" }}
          >
            {categoryName}
          </h2>
        </div>

        <VerticalCategoriesScroller>
          {categories.map((cat) => (
            <CategorySlide key={cat} label={cat} />
          ))}
        </VerticalCategoriesScroller>
      </div>

      {/* COLUMNA DERECHA */}
      <div className="w-[80%] flex justify-evenly items-center bg-(--color-cuaternario) text-(--color-secundario)">
        
        <div className="p-2.5 text-(--color-cuaternario2)">
          <p>{categoryDescription}</p>
        </div>

        <div className="w-[80%] border-4 rounded-[5px]">
          <Carousel>
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full"
                />
                <Carousel.Caption>
                  <h3>{img.title}</h3>
                  <p>{img.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcaseLayout;
