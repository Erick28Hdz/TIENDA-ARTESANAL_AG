import CategoriesShowcaseLayout from "@/features/layouts/categories/CategoriesLayout";

const CategoriesShowcaseSection = () => {
  const categories = [
    "Categoria 1",
    "Categoria 2",
    "Categoria 3",
    "Categoria 4",
    "Categoria 5",
    "Categoria 6",
  ];

  const images = [
    {
      src: "/images/Productos/hero/01P20.jpg",
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      src: "/images/Productos/hero/01P20.jpg",
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      src: "/images/Productos/hero/01P20.jpg",
      title: "Third slide label",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  return (
    <CategoriesShowcaseLayout
      categoryName="Nombre de la categoria"
      categoryDescription="Descripción de la categoria"
      categories={categories}
      images={images}
    />
  );
};

export default CategoriesShowcaseSection;
