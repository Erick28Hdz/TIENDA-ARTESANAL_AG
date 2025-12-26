interface CategoryNavButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const CategoryNavButton = ({
  label,
  active = false,
  onClick,
}: CategoryNavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center gap-1
        bg-transparent border-none 
        px-3 py-2
        text-[20px] tracking-[2px]
        cursor-pointer rounded 
        transition-all duration-200
        font-(--letra-botones)
        text-(--color-secundario)

        hover:bg-(--color-terciario)
        hover:text-(--color-cuaternario2)

        focus:outline-none
        ${active ? "bg-[#1a1f24]" : ""}

        before:content-['']
        before:absolute
        before:top-[30px]
        before:right-0
        before:w-full
        before:h-[3px]
        before:bg-[#2f81f7]
        before:rounded
        ${active ? "before:opacity-100" : "before:opacity-0"}
      `}
    >
      {label}
    </button>
  );
};

export default CategoryNavButton;
