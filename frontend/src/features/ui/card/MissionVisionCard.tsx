interface MissionVisionCardProps {
  title: string;
  description: string;
}

const MissionVisionCard = ({
  title,
  description,
}: MissionVisionCardProps) => {
  return (
    <div
      className="
        relative
        w-[300px]
        h-[300px]
        rounded-xl
        shadow-lg
        overflow-hidden
        group
        bg-(--color-terciario)
      "
    >
      {/* FRONT */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          transition-all duration-700
          ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:-translate-y-[30%]
        "
      >
        <p
          className="
            text-[32px]
            font-bold
            text-(--color-primario)
            transition-opacity duration-700
            group-hover:opacity-0
          "
        >
          {title}
        </p>
      </div>

      {/* CONTENT */}
      <div
        className="
          absolute inset-0
          flex flex-col
          items-center justify-center
          text-center
          gap-3
          px-5
          text-(--color-cuaternario2)
          bg-(--color-primario)
          translate-y-[96%]
          transition-all duration-700
          ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:translate-y-0
        "
      >
        <h5 className="text-[32px] font-bold">{title}</h5>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default MissionVisionCard;
