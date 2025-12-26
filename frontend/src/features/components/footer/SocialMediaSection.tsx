// components/Footer/SocialMediaSection.tsx
import React from "react";
import Title from "@/features/ui/typography/Title";
import Text from "@/features/ui/typography/Text";
import SocialButton from "@/features/ui/button/SocialButton";


type SocialMediaSectionProps = {
  className?: string;
};

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center justify-start ${className || ""}`}>
      {/* Título */}
      <div className="mb-2">
        <Title variant="subtitulo1" tone="secondary" className="mx-auto">
          Contactanos
        </Title>
      </div>

      {/* Logos redes sociales */}
      <div className="flex w-[110%] mb-4 gap-3">
        <SocialButton
          href="https://www.facebook.com/share/1AQmKKWybD/"
          imgSrc="/images/Iconos/facebook.png"
          alt="facebook"
          gradient="bg-[var(--color-primario)]"
        />

        <SocialButton
          href="https://www.instagram.com/4rte.gestion?igsh=M3pzemEyb3MyNGZk"
          imgSrc="/images/Iconos/instagram.png"
          alt="instagram"
          gradient="bg-[var(--color-primario)]"
        />

        <SocialButton
          href="https://wa.me/message/EYJGBDZ4BRPYN1"
          imgSrc="/images/Iconos/whatsapp.png"
          alt="whatsapp"
          gradient="bg-[var(--color-primario)]"
        />

        <SocialButton
          href="https://youtube.com/@artegestion9043?si=1MQppdtmGk7FGnZB"
          imgSrc="/images/Iconos/youtube.png"
          alt="youtube"
          gradient="bg-[var(--color-primario)]"
        />

        <SocialButton
          href="https://www.tiktok.com/@4rtegestion?_t=ZS-8t9fliVTpMW&_r=1"
          imgSrc="/images/Iconos/tik-tok.png"
          alt="tiktok"
          gradient="bg-[var(--color-primario)]"
        />
      </div>

      {/* Textos footer */}
      <div className="flex flex-col text-start space-y-1.5">
        <Text variant="caption" tone="cuaternary2">Articulos favoritos</Text>
        <Text variant="caption" tone="cuaternary2">Articulos más pedidos</Text>
        <Text variant="caption" tone="cuaternary2">Articulos mejor valorados</Text>
        <Text variant="caption" tone="cuaternary2">Articulos personalizados</Text>
        <Text variant="caption" tone="cuaternary2">Articulos de pareja</Text>
        <Text variant="caption" tone="cuaternary2">Articulos digitales</Text>
      </div>
    </div>
  );
};

export default SocialMediaSection;
