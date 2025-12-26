import MarketingText from "@/features/ui/typography/MarketingText";

const MarketingHeroMessage = () => {
  return (
    <MarketingText
      variant="title"
      tone="primary"
      className="text-center mx-5 p-5 "
    >
      Tu tienda, tu estilo.
    </MarketingText>
  );
};

export default MarketingHeroMessage;
