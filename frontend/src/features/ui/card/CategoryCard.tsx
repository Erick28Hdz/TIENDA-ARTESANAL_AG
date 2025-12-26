interface CategoryCardProps {
  label: string;
}

const CategoryCard = ({ label }: CategoryCardProps) => {
  return (
    <div className="
      w-full
      h-[75%]
      bg-(--color-terciario)
      snap-start
      flex items-center justify-center
      border-2 border-(--color-primario)
      rounded-[5px]
    ">
      <p className="text-base text-white font-bold">{label}</p>
    </div>
  );
};

export default CategoryCard;
