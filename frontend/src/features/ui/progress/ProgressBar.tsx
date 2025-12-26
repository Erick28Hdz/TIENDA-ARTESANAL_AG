interface SkillBarProps {
  label: React.ReactNode;
  percentage: number;
}

const SkillBar = ({ label, percentage }: SkillBarProps) => {
  return (
    <div className="w-full my-4">
      {/* Título */}
      <span className="block text-sm font-semibold text-(--color-primario)">
        {label}
      </span>

      {/* Barra */}
      <div className="relative mt-1 h-2 w-full rounded-md bg-(--color-cuaternario)">
        <div
          className="
            relative
            h-full
            rounded-md
            bg-(--color-secundario)
            transition-all
            duration-500
            ease-in-out
          "
          style={{ width: `${percentage}%` }}
        >
          {/* Tooltip */}
          <span
            className="
              absolute
              -top-7
              right-0
              text-[10px]
              font-bold
              text-(--color-cuaternario2)
              bg-(--color-cuaternario)
              px-1.5 py-0.5
              rounded
              z-20

              before:content-['']
              before:absolute
              before:left-1/2
              before:-bottom-1
              before:w-2.5
              before:h-2.5
              before:bg-transparent
              before:-translate-x-1/2
              before:rotate-45
            "
          >
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
