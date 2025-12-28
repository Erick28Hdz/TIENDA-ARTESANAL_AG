import Button from "@/features/ui/button/Button";
import ProductoPersonalizadoCard from "../../ui/card/PersonaliceCard";
import Title from "@/features/ui/typography/Title";

import { productosUnicos } from "@/features/data/products/productosUnicos";

export default function ProductosUnicosSection() {
    return (
        <div
            className="
    w-[35%]
    my-5
    bg-(--color-secundario)
    p-5
    border-2 border-(--color-terciario)
    drop-shadow-[0_0_5px_var(--color-terciario)]
    rounded-[5px]
  "
        >
            <Title
                variant="cardTitle"
                tone="primary"
                className="w-fit drop-shadow-[0_0_1px_var(--color-terciario)] uppercase"
            >
                Productos únicos
            </Title>

            <div
                className="
                    productos-unicos
                    grid
                    grid-cols-1
                    gap-5
                    h-140
                    max-h-192
                    overflow-y-auto
                    p-[15px]
                    mt-5
                    mb-3
                    scrollbar-thin

                    /* Scroll personalizado */
                    [&::-webkit-scrollbar]:w-3
                    [&::-webkit-scrollbar-track]:bg-(--color-cuaternario2)
                    [&::-webkit-scrollbar-track]:rounded-md
                    [&::-webkit-scrollbar-track]:border
                    [&::-webkit-scrollbar-track]:border-(--color-primario)

                    [&::-webkit-scrollbar-thumb]:bg-(--color-primario)
                    [&::-webkit-scrollbar-thumb]:rounded-full
                "
            >
                {productosUnicos.map((p, i) => (
                    <ProductoPersonalizadoCard image={""} key={i} {...p} />
                ))}
            </div>

            <Button variant="link" className="group link-base link-secundario">
                <i>Ver nuestro catálogo</i>
            </Button>
        </div>
    );
}
