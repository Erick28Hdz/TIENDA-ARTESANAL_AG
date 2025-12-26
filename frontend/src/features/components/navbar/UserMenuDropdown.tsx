import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

interface UserMenuDropdownProps {
  nombreUsuario: string;
  handleLogout: () => void;
}

const baseItemClasses =
  "flex items-center text-[13px] text-(--color-cuaternario) drop-shadow-[-1px_2px_2px_var(--color-primario)]";

const fontStyle = { fontFamily: "var(--letra-subtitulo2)" };

// Subcomponente: evita repetición masiva
function MenuItem({
  children,
  icon,
  ...props
}: {
  children: string;
  icon: string;
  [key: string]: any;
}) {
  return (
    <NavDropdown.Item className={baseItemClasses} style={fontStyle} {...props}>
      {children}
      <img src={icon} className="h-5 w-auto ml-2.5" />
    </NavDropdown.Item>
  );
}

export default function UserMenuDropdown({
  nombreUsuario,
  handleLogout,
}: UserMenuDropdownProps) {
  const isLogged = nombreUsuario !== "Invitadx";

  const menuItemsLogged = [
    { label: "Notificación", icon: "/images/Iconos/notificacion.png", href: "#action/3.1" },
    { label: "Compras", icon: "/images/Iconos/carrito-de-compras.png", href: "/Compras" },
    { label: "Envíos", icon: "/images/Iconos/envio.png", href: "#action/3.2" },
    { label: "Configuración", icon: "/images/Iconos/configuracion.png", to: "/Perfil", as: Link },
    { label: "Administración", icon: "/images/Iconos/configuracion.png", to: "/Dashboard", as: Link },
  ];

  return (
    <Nav className="w-full">
      <NavDropdown
        id="nav-dropdown-dark-example"
        menuVariant="dark"
        className="
    text-end
    [&>.dropdown-toggle]:pr-3!
    [&>.dropdown-toggle]:flex!
    [&>.dropdown-toggle]:flex-row!
    [&>.dropdown-toggle]:items-center!
    [&>.dropdown-toggle]:justify-center!
    [&>.dropdown-menu]:right-0!
    [&>.dropdown-menu]:left-auto!
  "
        title={
          <div className="flex flex-row items-center justify-center gap-2">
            <img
              src="/images/Iconos/avatar.png"
              alt="Mi perfil"
              className="w-[30px] h-[30px]"
            />
          </div>
        }
      >

        {/* Nombre del usuario */}
        <NavDropdown.Item
          disabled
          className={baseItemClasses}
          style={fontStyle}
        >
          {isLogged ? `Hola, ${nombreUsuario}` : "No has iniciado sesión"}
        </NavDropdown.Item>
        <NavDropdown.Divider />
        {isLogged ? (
          <>
            {menuItemsLogged.map((item) => (
              <MenuItem
                key={item.label}
                {...item}
                icon={item.icon}
              >
                {item.label}
              </MenuItem>
            ))}
            <NavDropdown.Divider />
            <MenuItem
              onClick={handleLogout}
              icon="/images/Iconos/cerrar-sesion.png"
            >
              Cerrar sesión
            </MenuItem>
          </>
        ) : (
          <MenuItem
            as={Link}
            to="/login"
            icon="/images/Iconos/iniciar-sesion.png"
          >
            Iniciar sesión
          </MenuItem>
        )}
      </NavDropdown>
    </Nav>

  );
}
