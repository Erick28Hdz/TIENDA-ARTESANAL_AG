import MarketingText from "@/features/ui/typography/MarketingText";
import Button from "@/features/ui/button/Button";

export default function MarketingCTASection() {
    return (
        <section className="w-[80%] mx-auto my-10">
            <MarketingText
                variant="text"
                tone="primary"
                className="italic leading-relaxed"
            >
                En nuestra tienda no solo encuentras productos, sino arte con alma,
                diseño con propósito y creatividad que transforma vidas. Explora nuestras
                colecciones y lleva contigo algo más que un objeto:{" "}
                <b>una historia, un cambio, una revolución artesanal.</b>

                {/* 🔹 Separación visual */}
                <br />
                <br />

                {/* 🔹 BLOQUE CENTRADO */}
                <div className="w-full items-center text-center gap-3">
                    <span>🛍️ Explora ahora y encuentra tu pieza única.</span>

                    <Button
                        variant="link"
                        className="group link-base link-cuaternario"
                    >
                        <i>Ver nuestro catálogo</i>
                    </Button>
                </div>
            </MarketingText>
        </section>
    );
}
