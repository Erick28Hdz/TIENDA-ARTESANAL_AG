import Title from "@/features/ui/typography/Title";
import Button from "@/features/ui/button/Button";
import ProductoPersonalizadoCard from "@/features/ui/card/PersonaliceCard";
import { otrosProductos } from "@/features/data/products/productosOtros";

export default function ProductosOtrosSection() {
  return (
    <div
      className="
        my-5
        p-5
        bg-(--color-cuaternario)
        text-(--color-secundario)
        drop-shadow-[0px_0px_5px_var(--color-primario)]
        border-2
        border-(--color-primario)
        rounded-[5px]
        mx-auto
      "
    >
      <Title
        variant="cardHero"
        tone="secondary"
        className="w-fit drop-shadow-[0_0_1px_var(--color-primario)] uppercase"
      >
        Otros productos
      </Title>

      {/* GRID DE PRODUCTOS */}
      <div
        className="
          w-full
          mt-6
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          p-4
          max-h-[600px]
          overflow-y-auto

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
        {otrosProductos.map((p) => (
          <ProductoPersonalizadoCard
            key={p.id}
            image={p.img}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>

      {/* BOTÓN CTA */}
      <Button
        variant="link"
        className="group link-base link-cuaternario2 mt-4"
      >
        <i>Ver nuestro catálogo</i>
      </Button>
    </div>
  );
}
