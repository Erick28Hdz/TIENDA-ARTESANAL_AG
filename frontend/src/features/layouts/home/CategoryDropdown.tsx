import { useState, useRef, useEffect } from "react";
import Dropdown from "@/features/ui/dropdown/Dropdown";
import Button from "@/features/ui/button/Button";
import Title from "@/features/ui/typography/Title";

const CategoryDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = ["Ropa", "Accesorios", "Hogar", "Joyería"];

  const handleSelect = (category: string) => {
    console.log("Seleccionaste:", category);
    setOpen(false); // cerrar al seleccionar
  };

  // Cerrar si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-[16px]" ref={dropdownRef}>
      {/* Botón circular (hamburguesa) */}
      <Button
        variant="category"
        icon="/images/Iconos/universales/producto.png"
        onClick={() => setOpen(!open)}
      />

      {/* Menú emergente */}
      {open && (
        <nav
          className="absolute left-0 top-[3.55em] w-[180px] py-2
                     bg-(--color-terciario) border-3 border-(--color-primario)
                     rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.25)]
                     z-10"
        >
          <Title variant="cardSubtitle" tone="cuaternary2" className="text-center">
            Categorías
          </Title>

          <Dropdown
            options={categories}
            onSelect={handleSelect}
            className="m-0 p-0 list-none"
            textVariant="cardSubtitle"
          />
        </nav>
      )}
    </div>
  );
};

export default CategoryDropdown;
