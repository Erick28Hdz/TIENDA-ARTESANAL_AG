import React from "react";
import clsx from "clsx";

type VerticalScrollerProps = {
  children: React.ReactNode;
  className?: string;
};

const VerticalScroller: React.FC<VerticalScrollerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        `
        flex flex-col gap-4
        overflow-y-auto scroll-smooth
        px-2 py-3
        max-h-[400px]   /* Ajusta a tu gusto */

        /* Scrollbar vertical */
        [&::-webkit-scrollbar]:w-2.5
        [&::-webkit-scrollbar-track]:bg-(--color-cuaternario)
        [&::-webkit-scrollbar-track]:rounded-md
        [&::-webkit-scrollbar-track]:border
        [&::-webkit-scrollbar-track]:border-(--color-primario)

        [&::-webkit-scrollbar-thumb]:bg-(--color-secundario)
        [&::-webkit-scrollbar-thumb]:rounded-full
      `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default VerticalScroller;
