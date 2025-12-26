import MarketingText from "../../ui/typography/MarketingText";
import HeroButton from "./HeroButton";

const HeroMarketing = () => {
  return (
    <div className="flex items-center text-start gap-4 mt-8">
      <MarketingText variant="subtitle1" tone="secondary">
        "Contra el capitalismo vacío, levantamos la artesanía como acto de
        resistencia. Cada pieza hecha a mano es un grito de libertad y rebeldía."
      </MarketingText>

      <HeroButton />
    </div>
  );
};

export default HeroMarketing;
