import React from "react";
import clsx from "clsx";

type HorizontalScrollerProps = {
  children: React.ReactNode;
  className?: string;
};

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        `
        flex
        gap-5
        overflow-x-auto
        overflow-y-hidden
        scroll-smooth
        px-2 py-4

        snap-x snap-mandatory

        *:shrink-0
        *:snap-start

        [&::-webkit-scrollbar]:h-2.5
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

export default HorizontalScroller;


