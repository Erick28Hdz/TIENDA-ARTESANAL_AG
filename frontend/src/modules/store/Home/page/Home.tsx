
import MarketingHeroMessage from "../../../../features/layouts/messages/MarketingHeroMessage";
import HomeIndexSection from "../sections/HomeIndexSection";
import ProductosTopSection from "../../Products/sections/ProductsTopSection";
import MarketingImpactMessage from "../../../../features/layouts/messages/MarketingImpactMessage";
import ProductosArtesanalesSection from "../sections/ProductosArtesanalesSection";
import MarketingCTASection from "../../../../features/layouts/messages/MarketingCTASection";
import ProductosLayoutSection from "../sections/ProductosOtroSection";
import PublicitySection from "../../../../features/layouts/marketing/PublicidadSection";
import DescuentosPromocionesSection from "../sections/DescuentosPromocionesSection";
import MarketingWhyChooseUs from "../../../../features/layouts/messages/MarketingTextInfo";
import ReviewSection from "../sections/ReviewsSection";
import MarketingFooterMessage from "../../../../features/layouts/messages/MarketingFooter";




const Home = () => {
  return (
    <main className="bg-cuaternario2 tienda-virtual">
      {/* 🔹 Hero Publicitario Independiente */}
      <MarketingHeroMessage />
      {/* 🔹 Sección de botones e índice */}
      <HomeIndexSection />
      {/* 🔹 Nueva sección reutilizable de productos top */}
      <ProductosTopSection />
      {/* 🔹 Bloque de mensaje de impacto */}
      <MarketingImpactMessage />
      {/* 🔹 Bloque de productos personalizados y únicos */}
      <ProductosArtesanalesSection />
      {/* 🔹 Sección texto marketing */}
      <MarketingCTASection />
      {/* 🔹 Sección de categorías y otros productos */}
      <ProductosLayoutSection />
      {/* 🔹 Bloque de Publicidad */}
      <PublicitySection />
      {/* 🔹 Sección descuentos y promociones productos */}
      <DescuentosPromocionesSection />
      {/* 🔹 Sección texto marketing */}
      <MarketingWhyChooseUs />
      {/* 🔹 Bloque CTA nuevo */}
      <ReviewSection />
      {/* 🔹 Sección texto marketing */}
      <MarketingFooterMessage />
    </main>
  );
};

export default Home;
