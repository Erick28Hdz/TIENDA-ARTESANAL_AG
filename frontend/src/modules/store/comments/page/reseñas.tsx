import ReviewsHeaderSection from "@/modules/store/comments/sections/ReviewsHeaderSection";
import ReviewsTabsSection from "@/modules/store/comments/sections/ReviewsTabsSection";
import ReviewsContentSection from "@/modules/store/comments/sections/ReviewsContentSection";
import PublicitySection from "@/features/layouts/marketing/PublicidadSection";

const Reseñas = () => {
    return (
        <section className="tienda-virtual w-full flex flex-col gap-10 pb-2 md:py-10 lg:py-16">
            <ReviewsHeaderSection />
            <ReviewsTabsSection />
            <ReviewsContentSection />
            <PublicitySection />
        </section>
    );
};

export default Reseñas;
