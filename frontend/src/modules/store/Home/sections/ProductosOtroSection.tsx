import CategoriasMasBuscadas from "../layouts/CategoriasMasBuscadas";
import ProductosOtrosSection from "../layouts/ProductosOtros";

export default function ProductosLayoutSection() {
  return (
    <section className="w-[95%] mx-auto my-5 flex justify-between gap-10">
      {/* 🔹 Bloque de categorías más buscadas */}
      <CategoriasMasBuscadas />

      {/* 🔹 Bloque de otros productos */}
      <ProductosOtrosSection />
    </section>
  );
}
