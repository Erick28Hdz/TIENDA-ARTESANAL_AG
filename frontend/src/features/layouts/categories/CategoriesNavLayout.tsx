import CategoryNavButton from "@/features/ui/button/CategoryNavButton";

interface CategoriesNavLayoutProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const CategoriesNavLayout = ({
  categories,
  activeCategory,
  onChange,
}: CategoriesNavLayoutProps) => {
  return (
    <section className="w-full">
      <div className="
        my-2 mx-auto
        w-[80%]
        flex justify-around
        bg-[#0d1117]
        rounded-[5px]
        gap-[7.5px]
        px-3 py-2
      ">
        {categories.map((category) => (
          <CategoryNavButton
            key={category}
            label={category}
            active={category === activeCategory}
            onClick={() => onChange(category)}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesNavLayout;
