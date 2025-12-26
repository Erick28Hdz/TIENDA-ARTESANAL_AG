interface CategorySlideProps {
  label: string;
}

const CategorySlide = ({ label }: CategorySlideProps) => {
  return (
    <div
      className="
        slide-categorias
        w-full
        h-[75%]
        bg-(--color-terciario)
        snap-start
        flex
        items-center
        justify-center
        border-2
        border-(--color-primario)
        rounded-[5px]
      "
    >
      <p className="text-base text-white font-bold">
        {label}
      </p>
    </div>
  );
};

export default CategorySlide;
