import React from "react";
import DescuentosBlock from "../../layouts/promotions/productosDescuentos";
import PromocionesBlock from "../../layouts/promotions/productosPromociones";
import MarketingPromoBlock from "../../layouts/home/messages/MarketingPromo";

const DescuentosPromocionesSection: React.FC = () => {
  return (
    <section
      className="
        flex justify-between items-center
        gap-4
        w-[98%]
        mx-auto
        my-5
      "
    >
      <DescuentosBlock />
      <PromocionesBlock />
      <MarketingPromoBlock />
    </section>
  );
};

export default DescuentosPromocionesSection;
