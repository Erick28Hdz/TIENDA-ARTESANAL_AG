import React from "react";
import clsx from "clsx";

type PriceVariant =
  | "default"
  | "small"
  | "large"
  | "discount"
  | "old"
  | "highlight"
  | "success"
  | "warning"
  | "error"
  | "description";

type PriceProps = {
  value: string | number;
  variant?: PriceVariant;
  active?: boolean; // simula estado activo/inactivo
  className?: string;
};

const priceVariants: Record<
  PriceVariant,
  { active: string; inactive: string }
> = {
  default: {
    active: "text-[var(--color-cuaternario)] text-base font-medium",
    inactive: "text-gray-300 text-base font-medium",
  },
  small: {
    active: "text-[var(--color-primario)] text-sm font-bold",
    inactive: "text-gray-300 text-sm font-medium",
  },
  large: {
    active: "text-[var(--color-primario)] text-2xl font-bold",
    inactive: "text-gray-400 text-2xl font-bold",
  },
  discount: {
    active: "text-[var(--color-terciario)] font-semibold text-lg",
    inactive: "text-gray-300 font-semibold text-lg",
  },
  old: {
    active: "text-[var(--color-cuaternario)]/50 line-through text-sm",
    inactive: "text-gray-300/30 line-through text-sm",
  },
  highlight: {
    active: "text-[var(--color-secundario)] font-bold text-lg",
    inactive: "text-gray-400 font-bold text-lg",
  },
  success: {
    active: "text-green-600 font-semibold",
    inactive: "text-gray-300 font-semibold",
  },
  warning: {
    active: "text-yellow-600 font-semibold",
    inactive: "text-gray-300 font-semibold",
  },
  error: {
    active: "text-red-600 font-semibold",
    inactive: "text-gray-300 font-semibold",
  },
  description: {
    active: "text-[var(--color-terciario)] font-medium",
    inactive: "text-gray-400 font-medium",
  },
};

const Price: React.FC<PriceProps> = ({
  value,
  variant = "default",
  active = true,
  className = "",
}) => {
  const variantStyle = active
    ? priceVariants[variant].active
    : priceVariants[variant].inactive;

  return <span className={clsx(variantStyle, className)}>${value}</span>;
};

export default Price;
