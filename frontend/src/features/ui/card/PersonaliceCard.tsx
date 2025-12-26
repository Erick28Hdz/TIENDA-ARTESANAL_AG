import React from "react";
import Image from "@/features/ui/image/Image";
import Title from "../typography/Title";
import Text from "../typography/Text";

type ProductoPersonalizadoCardProps = {
    image: string;
    title: string;
    description: string;
};

const ProductoPersonalizadoCard: React.FC<ProductoPersonalizadoCardProps> = ({ image, title, description }) => {
    return (
        <div className="flex flex-col justify-between w-full h-[420px] bg-(--color-cuaternario2) rounded-lg overflow-hidden transition-all duration-300 p-2 hover:-translate-y-1.5 border-2 border-(--color-primario)">
            
            {/* Imagen */}
            <div className="w-full h-[40%] mb-3 overflow-hidden flex items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    variant="productCardThumbnail"
                    className="border-2 border-(--color-terciario)"
                />
            </div>

            {/* Contenido (título + texto) pegado abajo */}
            <div className="mt-auto">
                <Title variant="cardTitle" tone="tertiary">
                    {title}
                </Title>

                <Text variant="cardMeta" tone="primary" >
                    {description}
                </Text>
            </div>
        </div>
    );
};

export default ProductoPersonalizadoCard;
