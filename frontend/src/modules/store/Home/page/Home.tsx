
import MarketingHeroMessage from "../components/home/messages/MarketingHeroMessage";
import HomeIndexSection from "../components/home/layouts/HomeIndexSection";
import ProductosTopSection from "../../../../features/section/products/ProductsTopSection";
import MarketingImpactMessage from "../components/home/messages/MarketingImpactMessage";
import ProductosArtesanalesSection from "../components/home/layouts/ProductosArtesanalesSection";
import MarketingCTASection from "../components/home/messages/MarketingCTASection";
import ProductosLayoutSection from "../components/home/layouts/ProductosOtroSection";
import PublicitySection from "../../../../features/layouts/marketing/PublicidadSection";
import DescuentosPromocionesSection from "../components/home/layouts/DescuentosPromocionesSection";
import MarketingWhyChooseUs from "../components/home/messages/MarketingTextInfo";
import ReviewSection from "../components/home/layouts/ReviewsSection";
import MarketingFooterMessage from "../components/home/messages/MarketingFooter";




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
