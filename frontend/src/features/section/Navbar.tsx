import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import UserMenuDropdown from "../components/navbar/UserMenuDropdown";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrandComponent from "../components/navbar/NavbarBrand";
import NavbarLinks from "../components/navbar/NavbarLinks";
const NavbarComponent = () => {
    const [nombreUsuario, setNombreUsuario] = useState("Invitadx");

    useEffect(() => {
        obtenerUsuario();
    }, []);

    // Función para obtener el usuario desde el backend
    const obtenerUsuario = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const response = await fetch("http://localhost:3000/api/perfil", { // <== Usa /api/perfil
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Error al obtener usuario");
            }

            const usuario = await response.json();
            console.log("Respuesta del backend:", usuario); // <== Verifica en la consola

            localStorage.setItem("usuario", JSON.stringify(usuario));
            setNombreUsuario(usuario.nombre || "Invitadx");
        } catch (error) {
            console.error("Error al obtener usuario:", error);
            localStorage.removeItem("usuario");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        setNombreUsuario("Invitadx"); // Limpia el estado
    };

    return (
        <section className="p-0 flex h-auto">
            <Navbar variant="dark" bg="dark" expand="lg" className="w-full">
                <Container fluid>

                    <NavbarBrandComponent />

                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse
                        id="navbar-dark-example"
                        className="
                            bg-(--color-terciario)
                            justify-center
                            rounded-[20px]
                            border-2 border-(--color-primario)
                            h-[45px]
                        "
                    >
                        <div className=" w-[95%] ">
                            <NavbarLinks />
                        </div>
                        <div className="left">
                            <UserMenuDropdown
                                nombreUsuario={nombreUsuario}
                                handleLogout={handleLogout}
                            />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default NavbarComponent;
