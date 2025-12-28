
import MarketingHeroMessage from "../../../../features/layouts/home/messages/MarketingHeroMessage";
import HomeIndexSection from "../../../../features/section/home/HomeIndexSection";
import ProductosTopSection from "../../../../features/section/products/ProductsTopSection";
import MarketingImpactMessage from "../../../../features/layouts/home/messages/MarketingImpactMessage";
import ProductosArtesanalesSection from "../../../../features/section/home/ProductosArtesanalesSection";
import MarketingCTASection from "../../../../features/layouts/home/messages/MarketingCTASection";
import ProductosLayoutSection from "../../../../features/section/home/ProductosOtroSection";
import PublicitySection from "../../../../features/layouts/marketing/PublicidadSection";
import DescuentosPromocionesSection from "../../../../features/section/home/DescuentosPromocionesSection";
import MarketingWhyChooseUs from "../../../../features/layouts/home/messages/MarketingTextInfo";
import ReviewSection from "../../../../features/section/home/ReviewsSection";
import MarketingFooterMessage from "../../../../features/layouts/home/messages/MarketingFooter";




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
