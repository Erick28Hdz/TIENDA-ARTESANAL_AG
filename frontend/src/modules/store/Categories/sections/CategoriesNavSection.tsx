import { useState } from "react";
import CategoriesNavLayout from "@/modules/store/Categories/layouts/CategoriesNavLayout";

const CategoriesNavSection = () => {
  const categories = [
    "Hilo",
    "Madera",
    "Metal",
    "Plastico",
    "Porcelana",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <CategoriesNavLayout
      categories={categories}
      activeCategory={activeCategory}
      onChange={setActiveCategory}
    />
  );
};

export default CategoriesNavSection;
