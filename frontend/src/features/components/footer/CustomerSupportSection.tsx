// components/Footer/CustomerSupportSection.tsx
import React from "react";
import ContactCardGold from "@/features/ui/card/ContactCardGold";

type CustomerSupportSectionProps = {
  className?: string;
};

const CustomerSupportSection: React.FC<CustomerSupportSectionProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className || ""}`}>
      <ContactCardGold />
    </div>
  );
};

export default CustomerSupportSection;
