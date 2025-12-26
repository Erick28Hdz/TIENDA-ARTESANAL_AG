import type { ReactNode } from "react";

interface VerticalCategoriesScrollerProps {
  children: ReactNode;
  height?: string;
  className?: string;
}

const VerticalCategoriesScroller = ({
  children,
  height = "h-[400px]",
  className = "",
}: VerticalCategoriesScrollerProps) => {
  return (
    <div
      className={`
        scroll-categorias
        overflow-auto
        snap-y snap-mandatory
        rounded-[5px]
        ${height}
        ${className}
      `}
    >
      <div
        className="
          scroll-snap-card
          h-[100px]
          w-auto
          snap-y snap-mandatory
          rounded-[10px]
          flex flex-col
          gap-3
        "
      >
        {children}
      </div>
    </div>
  );
};

export default VerticalCategoriesScroller;
