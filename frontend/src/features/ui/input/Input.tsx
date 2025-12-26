import React from "react";
import clsx from "clsx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  icon?: string;
}

const Input = ({
  label,
  error,
  helperText,
  fullWidth = false,
  className,
  icon,
  ...props
}: InputProps) => {
  return (
    <div className={clsx("flex flex-col", { "w-full": fullWidth })}>
      {/* Label opcional */}
      {label && (
        <label
          className="mb-1 text-sm font-medium text-(--color-secundario) font-textos"
        >
          {label}
        </label>
      )}

      {/* Contenedor con icono opcional */}
      <div className="flex items-center gap-2">
        {icon && (
          <span className="flex items-center justify-center">
            {typeof icon === "string" ? (
              <img src={icon} alt="icon" className="w-5 h-5 opacity-80" />
            ) : (
              icon
            )}
          </span>
        )}


        {/* Campo de entrada */}
        <input
          {...props}
          className={clsx(
            "w-full bg-transparent focus:outline-none font-textos text-(--color-cuaternario2) placeholder-gray-500",
            className
          )}
        />
      </div>
      {/* Mensaje de error o ayuda */}
      {(error || helperText) && (
        <p
          className={clsx("mt-1 text-xs font-textos", {
            "text-red-500": error,
            "text-(--color-secundario)": !error,
          })}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
