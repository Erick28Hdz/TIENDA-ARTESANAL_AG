
import TopProductsSection from "@/features/section/products/ProductsTopSection";
import CategoriesNavSection from "@/features/section/categories/CategoriesNavSection";
import PublicitySection from "../../../../features/layouts/marketing/PublicidadSection";
import DescuentosPromocionesSection from "../../../../features/section/home/DescuentosPromocionesSection";
import CategoriesShowcaseSection from "@/features/section/categories/CategoriesSection";
import RelatedProductsSection from "@/features/section/products/RelatedProductsSection";
import PersonalizedProductsSection from "@/features/section/products/PersonalizedProductsSection";



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