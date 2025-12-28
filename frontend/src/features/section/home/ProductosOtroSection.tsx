import CategoriasMasBuscadas from "../../layouts/home/CategoriasMasBuscadas";
import ProductosOtrosSection from "../../layouts/home/ProductosOtros";

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
