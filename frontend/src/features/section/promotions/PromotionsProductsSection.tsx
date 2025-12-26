import PromocionesBlock from "@/features/layouts/promotions/productosPromociones";
import DescuentosBlock from "@/features/layouts/promotions/productosDescuentos";

const PromotionsProductsSection = () => {
    return (
        <section className="w-full flex justify-center">
            {/* CONTENEDOR */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">

                {/* DESCUENTOS */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <h3 className="text-lg font-semibold">
                        Productos con descuento
                    </h3>
                    <PromocionesBlock />
                    <PromocionesBlock />
                </div>

                {/* PROMOCIONES */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <h3 className="text-lg font-semibold">
                        Promociones especiales
                    </h3>
                    <DescuentosBlock />
                    <DescuentosBlock />
                </div>

            </div>
        </section>
    );
};

export default PromotionsProductsSection;
