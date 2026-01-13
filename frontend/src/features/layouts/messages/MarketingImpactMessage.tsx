import MarketingText from "@/features/ui/typography/MarketingText";
import Text from "@/features/ui/typography/Text";

const MarketingImpactMessage = () => {
    return (
        <section
            className="
        w-[95%] 
        mx-auto 
        my-6 
        flex 
        flex-col 
        items-center 
        justify-between
      "
        >
            {/* 🔹 Mensaje llamativo principal */}
            <div
                className="
    w-[80%]
    mx-auto
    flex
    items-center
    gap-[30px]
  "
            >
                <MarketingText
                    variant="decorative"
                    tone="tertiary"
                    className="text-end"
                >
                    <i>"Cada pieza es una historia, cada compra es un impacto."</i>
                </MarketingText>

                <Text
                    variant="textos"
                    tone="primary"
                    className="text-justify m-0 italic"
                >
                    En nuestra tienda no solo adquieres productos; abrazas historias, apoyas
                    manos creadoras y te conviertes en parte de un movimiento de cambio. Cada pieza
                    es un testimonio de independencia, de lucha y de pasión.
                    <br />
                    Creemos en el arte como herramienta de revolución social y en la autosuficiencia
                    como un camino hacia la libertad. Cuando compras aquí, no solo obtienes algo hermoso,
                    sino que contribuyes a un modelo de comercio justo y sostenible.
                    <br />
                    <b>Compra diferente, compra con impacto.</b>
                </Text>
            </div>
        </section>
    );
};

export default MarketingImpactMessage;
