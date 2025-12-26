import ArteGestionText from "../../ui/typography/ArteGestionTitle";
import TallerArtesanalText from "../../ui/typography/TallerArtesanalTitle";

const CompanyTitle = () => {
  return (
    <div className="flex flex-col
                  items-center
                  rotate-[-5deg]
                  drop-shadow-[0_0_1px_var(--color-terciario)]
                  shrink-0
                  z-1
                "
    >
      {/* Arte Gestión — versión grande */}
      <ArteGestionText
        variant="agHero"
      />

      {/* Taller Artesanal — versión pequeña */}
      <TallerArtesanalText
        variant="title"
      />
    </div>
  );
};

export default CompanyTitle;
