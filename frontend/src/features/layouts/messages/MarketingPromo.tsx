import React from "react";
import MarketingText from "@/features/ui/typography/MarketingText";
import Button from "@/features/ui/button/Button";

const MarketingPromoBlock: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-[280px] mx-auto">
      <MarketingText variant="subtitle1" tone="tertiary">
        Nuestras mejores promociones y descuentos
        <br />
        <br />
        <Button variant="link" className="group link-base link-cuaternario">
          <i>Ver nuestro catálogo</i>
        </Button>
      </MarketingText>
    </div>
  );
};

export default MarketingPromoBlock;
