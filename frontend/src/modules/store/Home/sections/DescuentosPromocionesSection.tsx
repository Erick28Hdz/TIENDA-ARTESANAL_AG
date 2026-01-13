import React from "react";
import DescuentosBlock from "../../promotions/layouts/productosDescuentos";
import PromocionesBlock from "../../promotions/layouts/productosPromociones";
import MarketingPromoBlock from "../../../../features/layouts/messages/MarketingPromo";

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
