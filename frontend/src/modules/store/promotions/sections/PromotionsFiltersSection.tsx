const PromotionsFiltersSection = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-6 items-center mx-8">

            {/* TEXTO */}
            <div className="flex-1 text-sm md:text-base leading-relaxed text-center">
                <p>
                    🔥 <b>¡Rebeldía y arte con descuento!</b> 🎨⚡<br />
                    El caos se convierte en creatividad y ahora también en descuentos.
                    <br />🖤 Promociones exclusivas en piezas únicas.
                </p>
            </div>

            {/* FILTROS */}
            <div className="w-full lg:w-64 flex flex-col gap-3 border rounded-lg p-4">
                <button className="flex items-center justify-between px-3 py-2 border rounded-md">
                    <span>Filtros</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4"
                    >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                </button>

                <div className="flex flex-col gap-2 text-sm">
                    {["All", "Option 1", "Option 2", "Option 3"].map(option => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="promo-filter" />
                            {option}
                        </label>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default PromotionsFiltersSection;
