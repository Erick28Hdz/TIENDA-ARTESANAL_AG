// components/Footer/PaymentMethodsSection.tsx
import React from "react";
import Title from "@/features/ui/typography/Title";
import Text from "@/features/ui/typography/Text";
import Image from "@/features/ui/image/Image";

type PaymentMethodsSectionProps = {
  className?: string; // <--- Permite pasar className
};

const PaymentMethodsSection: React.FC<PaymentMethodsSectionProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center justify-start ${className || ""}`}>
      {/* Título */}
      <div className="mb-2">
        <Title variant="subtitulo1" tone="secondary" className="mx-auto">
          Metodos de pago
        </Title>
      </div>

      {/* Logos de pagos */}
      <div className="flex mb-4 gap-2.5">
        <Image src="/images/Iconos/american-express.png" alt="american-express" variant="logoFooter" />
        <Image src="/images/Iconos/mastercard.png" alt="mastercard" variant="logoFooter" />
        <Image src="/images/Iconos/visa.png" alt="visa" variant="logoFooter" />
        <Image src="/images/Iconos/paypal.png" alt="paypal" variant="logoFooter" />
      </div>

      {/* Textos footer */}
      <div className="flex flex-col text-start space-y-1.5">
        <Text variant="caption" tone="cuaternary2">Compra artesania profesional</Text>
        <Text variant="caption" tone="cuaternary2">Personaliza tus productos</Text>
        <Text variant="caption" tone="cuaternary2">Productos del mes</Text>
        <Text variant="caption" tone="cuaternary2">Descuentos y promociones</Text>
        <Text variant="caption" tone="cuaternary2">Seguridad de transacción</Text>
        <Text variant="caption" tone="cuaternary2">Politicas de seguridad</Text>
      </div>
    </div>
  );
};

export default PaymentMethodsSection;
