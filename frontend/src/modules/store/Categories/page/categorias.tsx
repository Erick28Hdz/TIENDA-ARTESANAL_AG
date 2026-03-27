
import TopProductsSection from "@/modules/store/Products/sections/ProductsTopSection";
import CategoriesNavSection from "@/modules/store/Categories/sections/CategoriesNavSection";
import PublicitySection from "../../../../features/layouts/marketing/PublicidadSection";
import DescuentosPromocionesSection from "../../Home/sections/DescuentosPromocionesSection";
import CategoriesShowcaseSection from "@/modules/store/Categories/sections/CategoriesSection";
import RelatedProductsSection from "@/modules/store/Products/sections/RelatedProductsSection";
import PersonalizedProductsSection from "@/modules/store/Products/sections/PersonalizedProductsSection";



const Categorias = () => {
    return (
        <section className='bg-(--color-cuaternario2) tienda-virtual'>
            <CategoriesShowcaseSection />
            <TopProductsSection />
            <CategoriesNavSection />
            <RelatedProductsSection />
            <PersonalizedProductsSection />
            <PublicitySection />
            <DescuentosPromocionesSection />
            <PersonalizedProductsSection />
        </section>


    );
};

export default Categorias;