import ReviewsHeaderSection from "@/features/section/reviews/ReviewsHeaderSection";
import ReviewsTabsSection from "@/features/section/reviews/ReviewsTabsSection";
import ReviewsContentSection from "@/features/section/reviews/ReviewsContentSection";
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
