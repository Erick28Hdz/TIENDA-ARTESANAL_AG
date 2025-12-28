import React from "react";
import NavbarComponent from "@/features/section/Navbar";
import Hero from "@/features/layouts/hero/Hero";
import Footer from "@/features/layouts/footer/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* 🔹 Header o Navbar (si lo tienes, lo reemplazamos luego) */}
      <NavbarComponent />
      <Hero/>
      {/* 🔹 Contenido principal */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* 🔹 Footer real */}
      <Footer />
    </>
  );
};

export default MainLayout;
