import React from "react";
import DescuentosBlock from "../../../../../../features/layouts/promotions/productosDescuentos";
import PromocionesBlock from "../../../../../../features/layouts/promotions/productosPromociones";
import MarketingPromoBlock from "../messages/MarketingPromo";

const DescuentosPromocionesSection: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-5 w-[95%] mx-auto my-5">
      <DescuentosBlock />
      <PromocionesBlock />
      <MarketingPromoBlock />
    </section>
  );
};

export default DescuentosPromocionesSection;
