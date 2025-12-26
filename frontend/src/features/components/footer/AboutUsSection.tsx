import Title from "../../ui/typography/Title";
import Text from "../../ui/typography/Text";
import Image from "../../ui/image/Image";
import ArteGestionText from "@/features/ui/typography/ArteGestionTitle";

type AboutUsSectionProps = {
    className?: string; // <-- permite recibir className externo
};

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ className }) => {
    return (
        <div className={`flex flex-col items-center ${className || ""}`}>
            {/* Sobre nosotros */}
            <div className="mb-2">
                <Title variant="subtitulo1" tone="secondary" className="mb-2">
                    Sobre nosotrxs
                </Title>
            </div>

            {/* Descripción */}
            <div>
                <Text variant="parrafos" tone="cuaternary2" className="text-justify">
                    Somos una tienda artesanal y autogestionada que teje la creatividad y la tradición. Cada producto es único, hecho con amor y compromiso           con la sostenibilidad y el talento local.
                </Text>
            </div>
            {/* Logos */}
            <div className="flex mt-2 space-x-2.5">
                {[
                    "/images/Logos/ArteGestion-1.png",
                    "/images/Logos/ArteGestion-1.2.png",
                    "/images/Logos/ArteGestion-1.3.png",
                    "/images/Logos/ArteGestion-1.4.png",
                    "/images/Logos/ArteGestion-1.5.png",
                ].map((src, index) => (
                    <div key={index} className="logo-ag">
                        <Image src={src} alt={`logo${index + 1}`} variant="logoFooter" hoverable />
                    </div>
                ))}
            </div>

            {/* Título principal */}
            <div className="mt-4 text-center">
                <ArteGestionText
                    variant="agSubtitle"
                />
            </div>
        </div>
    );
};

export default AboutUsSection;
