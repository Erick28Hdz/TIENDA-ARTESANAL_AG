import Text from "../ui/typography/Text";


import AboutUsSection from "../components/footer/AboutUsSection";
import CustomerSupportSection from "../components/footer/CustomerSupportSection";
import PaymentMethodsSection from "../components/footer/PaymentMethodsSection";
import SocialMediaSection from "../components/footer/SocialMediaSection";

const Footer = () => {
  return (
    <section className="flex flex-col w-full bg-black tienda-virtual px-4 py-6 md:px-10 md:py-8">
      <section className="flex flex-wrap justify-between gap-6 max-w-full">
        <AboutUsSection className="flex-1 min-w-[220px] max-w-[280px]" />
        <CustomerSupportSection className="flex-1 min-w-[220px] max-w-[280px]" />
        <SocialMediaSection className="flex-1 min-w-[220px] max-w-[280px]" />
        <PaymentMethodsSection className="flex-1 min-w-[220px] max-w-[280px]" />
      </section>
      <section className="flex justify-center mt-10">
        <Text variant="subtitulo2" tone="cuaternary2" className="text-center">
          © {new Date().getFullYear()} Taller Artesanal Arte Gestión. Todos los derechos reservados.
        </Text>
      </section>
    </section>
  );
};

export default Footer;
