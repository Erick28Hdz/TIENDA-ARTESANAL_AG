import Button from "@/features/ui/button/Button";
import ProductoPersonalizadoCard from "../../../../../../features/ui/card/PersonaliceCard";
import Title from "@/features/ui/typography/Title";

import { productosPersonalizados } from "@/features/data/products/productosPersonalizados";

export default function ProductosPersonalizadosSection() {
    return (
        <div
            className="
                w-[60%]
                my-5
                bg-(--color-cuaternario)
                p-5
                border-2 border-(--color-primario)
                rounded-[5px]
                drop-shadow-[0_0_5px_var(--color-primario)]
            "
        >
            <Title
                variant="cardTitle"
                tone="secondary"
                className="w-fit drop-shadow-[0_0_1px_var(--color-primario)] uppercase"
            >
                Productos personalizados
            </Title>

            <div
                className="
                    grid grid-cols-2
                    gap-5
                    h-140
                    max-h-192
                    overflow-y-auto
                    p-[15px]
                    mt-5
                    mb-3

                    /* Scroll personalizado */
                    [&::-webkit-scrollbar]:w-3
                    [&::-webkit-scrollbar-track]:bg-(--color-cuaternario2)
                    [&::-webkit-scrollbar-track]:rounded-md
                    [&::-webkit-scrollbar-track]:border
                    [&::-webkit-scrollbar-track]:border-(--color-primario)

                    [&::-webkit-scrollbar-thumb]:bg-(--color-terciario)
                    [&::-webkit-scrollbar-thumb]:rounded-full
                "
            >
                {productosPersonalizados.map((p, i) => (
                    <ProductoPersonalizadoCard key={i} {...p} />
                ))}
            </div>

            <Button variant="link" className="group link-base link-cuaternario2">
                <i>Ver nuestro catálogo</i>
            </Button>
        </div>
    );
}
