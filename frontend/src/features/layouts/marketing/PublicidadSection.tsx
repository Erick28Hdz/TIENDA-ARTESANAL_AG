import React from "react";
import MarketingText from "@/features/ui/typography/MarketingText";

const PublicitySection: React.FC = () => {
    return (
        <section className="bg-(--color-primario)">
            <div className="text-center">
                <MarketingText variant="title" tone="secondary">
                    Publicidad
                </MarketingText>
            </div>
        </section>
    );
};

export default PublicitySection;
