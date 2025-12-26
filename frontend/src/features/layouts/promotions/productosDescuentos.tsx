import React from "react";
import Title from "@/features/ui/typography/Title";
import DiscountCard from "@/features/ui/card/DiscountCard";
import { descuentos } from "@/features/data/products/descuentos";

const DescuentosBlock: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-[490px] bg-(--color-cuaternario2) p-2.5 border-2 border-(--color-terciario) drop-shadow-[0_0_5px_var(--color-terciario)] rounded-[5px]">
      
        <Title
          variant="cardTitle"
          tone="tertiary"
          className="w-fit drop-shadow-[0_0_1px_var(--color-secundario)] uppercase"
        >
          Descuentos
        </Title>
        <div
        className="
          flex flex-col gap-3
          max-h-80
          overflow-y-auto
          mt-3
          p-4

          /* Scroll personalizado */
          [&::-webkit-scrollbar]:w-3
          [&::-webkit-scrollbar-track]:bg-(--color-cuaternario2)
          [&::-webkit-scrollbar-track]:rounded-md
          [&::-webkit-scrollbar-track]:border
          [&::-webkit-scrollbar-track]:border-(--color-primario)

          [&::-webkit-scrollbar-thumb]:bg-(--color-terciario)
          [&::-webkit-scrollbar-thumb]:rounded-full
        "
      >
          {descuentos.map((d) => (
            <DiscountCard
              key={d.id}
              image={d.image}
              category={d.category}
              heading={d.heading}
              author={d.author}
              date={d.date}
              reverse={d.reverse}
              theme="primary"
            />
          ))}
        </div>
      </div>
    
  );
};

export default DescuentosBlock;
