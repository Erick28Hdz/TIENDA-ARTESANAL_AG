// src/features/ui/sections/ProductReviewsSection.tsx
import React from "react";
import Title from "@/features/ui/typography/Title";
import ReviewCard from "@/features/ui/card/reviewCard";
import { reseñasData } from "@/features/data/comments/reseñas";

const ReviewsSection: React.FC = () => {
  return (
    <div
      className="
        w-[480px]
        my-5
        bg-(--color-cuaternario2)
        p-5
        border-2 border-(--color-primario)
        rounded-[5px]
        drop-shadow-[0_0_5px_var(--color-primario)]
        select-none
      "
    >
      {/* Título */}
      <Title
        variant="cardTitle"
        tone="primary"
        className="w-fit drop-shadow-[0_0_1px_var(--color-cuaternario)]"
      >
        Reseñas de los productos
      </Title>

      {/* Contenedor scrollable solo para las tarjetas */}
      <div
        className="
          flex flex-col gap-3
          max-h-72
          overflow-y-auto
          mt-5
          p-6

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
        {reseñasData.map((reseña) => (
          <ReviewCard
            key={reseña.id}
            avatar={reseña.avatar}
            title={reseña.title}
            time={reseña.time}
            message={reseña.message}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
