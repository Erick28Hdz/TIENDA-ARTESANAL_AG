import React from "react";
import clsx from "clsx";

type RatingVariant =
  | "default"
  | "highlight"
  | "success"
  | "warning"
  | "error"
  | "description";

type RatingProps = {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: RatingVariant;
  readonly?: boolean;
  onChange?: (value: number) => void;
};

// ---------------------------
// 🎨 Estilos por variante
// ---------------------------
const ratingVariants: Record<RatingVariant, { active: string; inactive: string }> = {
  default: {
    active: "text-[var(--color-secundario)]",
    inactive: "text-gray-300",
  },

  highlight: {
    active: "text-[var(--color-secundario)] underline decoration-[var(--color-secundario)]",
    inactive: "text-gray-300",
  },

  success: {
    active: "text-green-600",
    inactive: "text-gray-300",
  },

  warning: {
    active: "text-yellow-600",
    inactive: "text-gray-300",
  },

  error: {
    active: "text-red-600",
    inactive: "text-gray-300",
  },

  description: {
    active: "text-[var(--color-terciario)]",
    inactive: "text-gray-400",
  },
};

// ---------------------------
// 🔠 Tamaños
// ---------------------------
const ratingSizes = {
  sm: "text-[17px]",
  md: "text-[22px]",
  lg: "text-[30px]",
};

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = "md",
  variant = "default",
  readonly = false,
  onChange,
}) => {
  const handleClick = (star: number) => {
    if (!readonly && onChange) onChange(star);
  };

  const { active, inactive } = ratingVariants[variant];

  return (
    <div className="flex flex-row-reverse justify-end gap-1">
      {Array.from({ length: max }, (_, i) => max - i).map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          className={clsx(
            ratingSizes[size],
            "transition-colors duration-150",
            readonly ? "cursor-default" : "cursor-pointer",
            value >= star ? active : inactive
          )}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
