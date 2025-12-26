import React from "react";
import Image from "@/features/ui/image/Image";
import Title from "../typography/Title";
import Text from "../typography/Text";

type DiscountCardProps = {
  image: string;
  category: string;
  heading: string;
  author: string;
  date: string;
  reverse?: boolean; // para invertir el layout
  theme?: "primary" | "secondary"; // nueva prop de color
};

const DiscountCard: React.FC<DiscountCardProps> = ({
  image,
  category,
  heading,
  author,
  date,
  reverse = false,
  theme = "primary",
}) => {
  // Definir colores según el tema
  const bgColor = theme === "primary" ? "bg-(--color-cuaternario2)" : "bg-(--color-cuaternario2)";
  const borderColor = theme === "primary" ? "border-(--color-terciario)" : "border-(--color-cuaternario)";
  const shadowColor = theme === "primary" ? "shadow-[0_4px_8px_var(--color-terciario)]" : "shadow-[0_4px_8px_var(--color-primario)]";

  return (
    <div
      className={`
        flex ${reverse ? "flex-row-reverse" : "flex-row"} 
        items-center 
        w-[400px] 
        ${bgColor} 
        p-2 
        rounded-md 
        ${shadowColor} 
        border ${borderColor}
      `}
    >
      {/* Imagen */}
      <div className="w-[180px] h-[120px] shrink-0 overflow-hidden rounded-md">
        <Image src={image} alt={heading} variant="productCardThumbnail"  />
      </div>

      {/* Contenido textual */}
      <div className={`flex flex-col ${reverse ? "mr-4" : "ml-4"}`}>
        <Title variant="cardTitle" tone="tertiary" className="mb-1">
          {category}
        </Title>

        <Text variant="parrafos" tone="primary" className="mb-2 leading-tight">
          {heading}
        </Text>

        <Text variant="byline" tone="tertiary">
          By <span className="font-semibold">{author}</span> {date}
        </Text>
      </div>
    </div>
  );
};

export default DiscountCard;
