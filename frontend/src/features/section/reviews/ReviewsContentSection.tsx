import OpinionSection from "@/features/layouts/comments/opinionSection";
import ReviewsSection from "@/features/layouts/comments/reviewsSection";

const ReviewsContentSection = () => {
    return (
        <section className="w-full flex justify-center px-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* TEXTO */}
                <div className="text-sm md:text-base leading-relaxed">
                    <p>
                        ⭐ <b>Tu voz es nuestra revolución</b> ⭐<br />
                        Cada pieza es más que un producto: es una expresión de arte y rebeldía.
                        Tu opinión inspira a otros espíritus libres. 🖤🔥
                    </p>
                </div>

                {/* CONTENIDO */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-lg font-semibold text-center">
                        ¿Qué dicen los clientes de nuestros productos?
                    </h3>

                    <div className="flex flex-col gap-6">
                        <OpinionSection />
                        <ReviewsSection />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ReviewsContentSection;
