import React from "react";
import MarketingText from "@/features/ui/typography/MarketingText";

const MarketingFooterMessage: React.FC = () => {
  return (
    <div className="w-3/4 mx-auto my-5 flex justify-center">
      <MarketingText variant="title" tone="tertiary" className="text-center">
        Haz la diferencia con cada compra. Únete a nuestra revolución artesanal.
      </MarketingText>
    </div>
  );
};

export default MarketingFooterMessage;
