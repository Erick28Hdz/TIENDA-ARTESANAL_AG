import React from "react";
import Title from "@/features/ui/typography/Title";
import DiscountCard from "@/features/ui/card/DiscountCard";
import { promociones } from "@/features/data/products/promociones";

const PromocionesBlock: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-[490px] bg-(--color-cuaternario2) p-2.5 border-2 border-(--color-cuaternario) drop-shadow-[0_0_5px_var(--color-cuaternario)] rounded-[5px]">

      <Title
        variant="cardTitle"
        tone="primary"
        className="w-fit drop-shadow-[0_0_1px_var(--color-cuaternario)] uppercase"
      >
        Promociones
      </Title>
      <div className="
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

          [&::-webkit-scrollbar-thumb]:bg-(--color-cuaternario)
          [&::-webkit-scrollbar-thumb]:rounded-full
        ">
        {promociones.map((p) => (
          <DiscountCard
            key={p.id}
            image={p.image}
            category={p.category}
            heading={p.heading}
            author={p.author}
            date={p.date}
            reverse={p.reverse}
            theme="secondary"
          />
        ))}
      </div>
    </div>
  );
};

export default PromocionesBlock;
