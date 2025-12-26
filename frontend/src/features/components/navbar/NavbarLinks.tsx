// src/components/Navbar/NavbarLinks.jsx
import ButtonNavbar from "@/features/ui/button/NavbarButton";
import ButtonNavbarLink from "@/features/ui/button/NavbarLinkButton";

export default function NavbarLinks() {
  // Lista para no repetir código
  const items = [
    { icon: "/images/Iconos/universales/catalogo.png", label: "Catálogo PDF", link: null },
    { icon: "/images/Iconos/universales/categoria.png", label: "Categorías", link: "/Categorias" },
    { icon: "/images/Iconos/universales/producto.png", label: "Productos", link: "/Productos" },
    { icon: "/images/Iconos/universales/promocion.png", label: "Promociones", link: "/Promociones" },
    { icon: "/images/Iconos/universales/resena.png", label: "Reseñas", link: "/Reseñas" },
    { icon: "/images/Iconos/universales/informacion.png", label: "Nosotrxs", link: "/about" },
  ];

  return (
    <div className="flex w-full justify-around">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <img
            src={item.icon}
            alt=""
            className="w-[25px] h-auto drop-shadow-[-1px_2px_2px_var(--color-secundario)]"
          />

          {item.link ? (
            <ButtonNavbarLink to={item.link}>{item.label}</ButtonNavbarLink>
          ) : (
            <ButtonNavbar>{item.label}</ButtonNavbar>
          )}
        </div>
      ))}
    </div>
  );
}
