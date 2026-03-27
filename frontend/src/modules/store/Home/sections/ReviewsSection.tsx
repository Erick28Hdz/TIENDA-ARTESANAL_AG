import React from "react";
import MarketingText from "@/features/ui/typography/MarketingText";
import Button from "@/features/ui/button/Button";
import OpinionSection from "../../comments/layouts/opinionSection";
import ReviewsSection from "../../comments/layouts/reviewsSection";

const ReviewSection: React.FC = () => {
  return (
    <section className="w-[90%] my-2.5 mx-auto flex justify-around items-center gap-5">
      {/* Texto promocional */}
      <MarketingText variant="subtitle1" tone="tertiary" className="text-end">
        Reseñas, opiniones sobre nuestros productos y diseño empresarial
        <br />
        <br />
        <Button variant="link" className="group link-base link-cuaternario">
          <i>Ver nuestras reseñas</i>
        </Button>
      </MarketingText>

      {/* Contenedor de opiniones y reseñas */}
      <div className="flex mx-auto gap-4">
        <OpinionSection />
        <ReviewsSection />
      </div>
    </section>
  );
};

export default ReviewSection;
