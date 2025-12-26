import type { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonNavbarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function ButtonNavbar({ children, className = "", ...props }: ButtonNavbarProps) {
  return (
    <button
      {...props}
      className={clsx(
        `
        m-0 text-base cursor-pointer relative border-none bg-transparent
        transition-[color] duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)]
        text-(--color-primario) hover:text-(--color-cuaternario)
        drop-shadow-[-1px_2px_2px_var(--color-secundario)]
        after:content-[''] after:pointer-events-none after:absolute after:-bottom-0.5
        after:left-1/2 after:w-[0%] after:h-0.5
        after:bg-(--color-secundario) after:transition-[width,left]
        after:duration-400 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]
        hover:after:w-[90%] hover:after:left-0
        focus:text-(--color-cuaternario) focus:after:w-[90%] focus:after:left-0
        uppercase
        `,
        className
      )}
      style={{
        fontFamily: "var(--letra-subtitulo1)",
        WebkitTextStroke: "0.5px var(--color-cuaternario)",
      }}
    >
      {children}
    </button>
  );
}