// src/components/Navbar/NavbarBrand.jsx

import Navbar from "react-bootstrap/Navbar";
import TallerArtesanalText from "@/features/ui/typography/TallerArtesanalTitle";

export default function NavbarBrandComponent() {
  return (
    <div className="flex flex-row ml-[15px] mr-[30px] items-center">
      <Navbar.Brand href="/">
        <img
          src="/images/Logos/ArteGestion-1.png"
          alt="Logo"
          className="
            h-[45px] w-auto
            drop-shadow-[0px_0px_5px_var(--color-primario)]
            transition-transform duration-1500 ease-[ease]
            hover:rotate-360
          "
        />
      </Navbar.Brand>

      <TallerArtesanalText variant="navbar" />
    </div>
  );
}
