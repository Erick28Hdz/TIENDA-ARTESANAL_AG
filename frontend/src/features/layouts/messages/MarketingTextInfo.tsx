import React from "react";
import MarketingText from "@/features/ui/typography/MarketingText";

const MarketingWhyChooseUs: React.FC = () => {
  return (
    <section className="w-3/4 mx-auto my-10">
      {/* Título */}
      <MarketingText
        variant="subtitle1"
        tone="tertiary"
        className="italic mb-4 text-center"
      >
        ¿Por qué elegirnos?
      </MarketingText>

      {/* Lista de beneficios */}
      <ul className="space-y-4">
        <li>
          <MarketingText variant="text" className="leading-relaxed">
            🔵 <b>Impacto real:</b> Con cada compra, apoyas directamente a artesanos
            y emprendedores independientes.
          </MarketingText>
        </li>

        <li>
          <MarketingText variant="text" className="leading-relaxed">
            🌿 <b>Sostenibilidad:</b> Materiales ecoamigables, procesos éticos y
            comercio justo.
          </MarketingText>
        </li>

        <li>
          <MarketingText variant="text" className="leading-relaxed">
            💡 <b>Más que un producto, un propósito:</b> Cada pieza representa una
            historia de esfuerzo, talento y superación.
          </MarketingText>
        </li>

        <li>
          <MarketingText variant="text" className="leading-relaxed">
            🔥 <b>Empoderamiento:</b> Fomentamos la autonomía económica de artistas
            y comunidades locales.
          </MarketingText>
        </li>
      </ul>
    </section>
  );
};

export default MarketingWhyChooseUs;
