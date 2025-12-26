import PromotionsHeaderSection from "@/features/section/promotions/PromotionsHeaderSection";
import PromotionsFiltersSection from "@/features/section/promotions/PromotionsFiltersSection";
import PromotionsProductsSection from "@/features/section/promotions/PromotionsProductsSection";
import PublicitySection from "@/features/layouts/marketing/PublicidadSection";

const Promociones = () => {
    return (
        <section className="tienda-virtual w-full flex flex-col gap-10 pb-2 md:py-10 lg:py-16">
            <PromotionsHeaderSection />
            <PromotionsFiltersSection />
            <PromotionsProductsSection />
            <PublicitySection />
        </section>
    );
};

export default Promociones;
