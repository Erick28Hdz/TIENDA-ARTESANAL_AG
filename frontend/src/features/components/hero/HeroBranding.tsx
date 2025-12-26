import Image from "../../ui/image/Image";
import CompanyTitle from "./TitleCompany";

const HeroBranding = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/Logos/ArteGestion-1.png"
        alt="Logo ArteGestión"
        variant="logoHero"
        hoverable
      />
      <CompanyTitle />
    </div>
  );
};

export default HeroBranding;
