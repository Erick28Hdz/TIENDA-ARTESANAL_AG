import React from "react";
import Image from "@/features/ui/image/Image";
import Title from "../typography/Title";
import Text from "../typography/Text";
import Price from "@/features/ui/utils/Price";
import Rating from "@/features/ui/utils/Rating";
import Button from "@/features/ui/button/Button";

export type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: string | number;
  rating?: number; // 1–5
  onAddToCart?: () => void;
  titleVariant?: "titulos" | "subtitulo1" | "subtitulo2" | "fascinate" | "cardTitle" | "cardSubtitle";
  titleTone?: "primary" | "secondary" | "tertiary" | "cuaternary" | "cuaternary2";
  descriptionVariant?: "parrafos" | "textos" | "caption" | "footnote";
  descriptionTone?: "primary" | "secondary" | "tertiary" | "cuaternary" | "cuaternary2";
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  rating = 0,
  onAddToCart,
  titleVariant,
  titleTone,
  descriptionVariant,
  descriptionTone,
}) => {
  return (
    <div
      className="
        relative 
        min-w-[260px]
        h-[450px]
        p-3 
        bg-(--color-cuaternario2) 
        rounded 
        border border-(--color-terciario)
        shadow-[0_1px_3px_var(--color-secundario)] 
        flex flex-col
        transition-all duration-300
        hover:-translate-y-[3px]
        hover:shadow-[0_4px_12px_var(--color-secundario)]
      "
    >
      {/* IMAGEN */}
      <div
        className="
          w-full
          h-[180px]
          rounded
          overflow-hidden
          border border-(--color-secundario)
          bg-(--color-cuaternario)
          flex items-center justify-center
        "
      >
        <Image
          src={image}
          alt={title}
          variant="productCardThumbnail"
        />
      </div>

      {/* CONTENIDO */}
      <div className="flex flex-col flex-1 justify-between mt-3">
        <div>
          <Title
            variant={titleVariant || "cardTitle"}
            tone={titleTone || "tertiary"}
            className="leading-tight"
          >
            {title}
          </Title>

          <Text
            variant={descriptionVariant || "textos"}
            tone={descriptionTone || "primary"}
            className="mt-1 line-clamp-2"
          >
            {description}
          </Text>
        </div>

        {/* FOOTER */}
        <div
          className="
            w-full 
            flex justify-between items-center 
            mt-4 pt-3 
            border-t border-(--color-primario)
          "
        >
          <div className="flex flex-col items-start gap-1">
            <Price
              value={price}
              variant="small"
              active={true}
            />

            <Rating
              value={rating}
              size="sm"
              variant="default"
              onChange={(val) => console.log(`Seleccionaste ${val} estrellas`)}
            />
          </div>

          <Button
            variant="cart"
            onClick={onAddToCart}
            icon="/images/Iconos/universales/carrito-de-compras.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
