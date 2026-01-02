import { useState } from "react";
import Button from "@/features/ui/button/Button";
import LoginFormSection from "@/features/section/login/LoginFormSection";
import RegisterFormSection from "@/features/section/register/RegisterFormSection";
import Image from "@/features/ui/image/Image";
import CompanyTitle from "@/features/components/hero/TitleCompany";

type AuthMode = "login" | "register";

const LoginAuthLayout = () => {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <section className="tienda-virtual min-h-screen bg-[linear-gradient(150deg,var(--color-terciario)_0%,var(--color-terciario)_45%,var(--color-primario)_45%,var(--color-primario)_100%)]">
      <div className="max-w-6xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-5">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/images/Logos/ArteGestion-1.png"
            alt="Logo ArteGestión"
            variant="logoHero"
            hoverable
          />
          <CompanyTitle />
        </div>

        {/* COLUMNA DERECHA */}
        <div className="flex flex-col items-center gap-4">
          
          {/* 🔹 NAVBAR / TOGGLE */}
          <div className="flex gap-4">
            <Button
              type="button"
              size="md"
              variant={mode === "login" ? "secondary" : "text"}
              onClick={() => setMode("login")}
            >
              Iniciar sesión
            </Button>

            <Button
              type="button"
              size="md"
              variant={mode === "register" ? "secondary" : "text"}
              onClick={() => setMode("register")}
            >
              Registrarse
            </Button>
          </div>

          {/* 🔹 FORM */}
          {mode === "login" ? (
            <LoginFormSection onSwitchMode={() => setMode("register")} />
          ) : (
            <RegisterFormSection onSwitchMode={() => setMode("login")} />
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginAuthLayout;
