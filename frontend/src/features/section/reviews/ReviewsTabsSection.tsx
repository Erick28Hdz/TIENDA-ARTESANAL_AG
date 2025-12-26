const ReviewsTabsSection = () => {
    return (
        <section className="flex justify-center">
            <div className="flex gap-6 border-b">

                <button className="pb-2 text-sm font-medium border-b-2 border-black">
                    Reseñas
                </button>

                <button className="pb-2 text-sm font-medium text-gray-400">
                    Opiniones
                </button>

                <button className="pb-2 text-sm font-medium text-gray-400">
                    Preguntas
                </button>

            </div>
        </section>
    );
};

export default ReviewsTabsSection;
