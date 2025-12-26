import React from "react";
import Label, { type LabelVariant } from "../label/Label";

export type TextareaVariant =
  | "default"
  | "outline"
  | "filled"
  | "underline"
  | "floatingModern"
  | "soft"
  | "danger"
  | "success";

type TextareaSize = "sm" | "md" | "lg";

type TextareaProps = {
  id: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  label?: React.ReactNode;
  labelVariant?: LabelVariant;
  size?: TextareaSize;
  variant?: TextareaVariant;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  rows?: number;
};

const Textarea = ({
  id,
  name,
  value = "",
  onChange,
  placeholder = " ",
  label,
  labelVariant = "default",
  variant = "default",
  size = "md",
  disabled = false,
  required = false,
  errorMessage,
  iconLeft,
  iconRight,
  className = "",
  rows = 4,
}: TextareaProps) => {
  const baseContainer = `
    relative flex items-center w-full
    [--clr:#1f1f1f] dark:[--clr:#999999]
  `;

  const sizeStyles = {
    sm: "text-sm py-1",
    md: "text-base py-2",
    lg: "text-lg py-3",
  }[size];

  const variantStyles = {
    default: `
      border border-gray-300 dark:border-zinc-700
      bg-white dark:bg-zinc-800
      rounded-[10px]
      focus-visible:border-[--color-primario]
      focus-visible:ring-4 focus-visible:ring-[--color-primario]/20
    `,
    outline: `
      border border-[--color-primario]
      bg-transparent
      rounded-[10px]
      focus-visible:ring-4 focus-visible:ring-[--color-primario]/25
    `,
    filled: `
      bg-zinc-100 dark:bg-zinc-700
      border border-transparent
      rounded-[10px]
      focus-visible:border-[--color-primario]
      focus-visible:ring-4 focus-visible:ring-[--color-primario]/20
    `,
    underline: `
      border-b border-gray-400 dark:border-zinc-600
      bg-transparent rounded-none
      focus-visible:border-[--color-primario]
      focus-visible:ring-0
    `,
    floatingModern: `
      border border-gray-300 dark:border-zinc-700
      bg-white dark:bg-zinc-800 rounded-[10px]
      peer focus-visible:border-teal-500
      focus-visible:ring-4 focus-visible:ring-[#71717a2e]
      dark:focus-visible:ring-[#14b8a61a]
    `,
    soft: `
      bg-[--color-cuaternario] border-none
      rounded-[12px]
      focus-visible:ring-4 focus-visible:ring-[--color-primario]/20
    `,
    danger: `
      border border-red-500 bg-red-50 dark:bg-red-900/20
      rounded-[10px]
      focus-visible:ring-4 focus-visible:ring-red-400/30
    `,
    success: `
      border border-green-500 bg-green-50 dark:bg-green-900/20
      rounded-[10px]
      focus-visible:ring-4 focus-visible:ring-green-400/30
    `,
  }[variant];

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed bg-zinc-200 dark:bg-zinc-700"
    : "";

  return (
    <div className={`${baseContainer} ${className}`}>
      {iconLeft && (
        <span className="absolute left-0 top-0 bottom-0 w-10 flex items-start justify-center text-[--clr] pointer-events-none pt-2">
          {iconLeft}
        </span>
      )}

      <textarea
        id={id}
        name={name}
        defaultValue={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={!!errorMessage}
        className={`
          peer w-full resize-none outline-none
          ${iconLeft ? "pl-10" : "pl-3"}
          ${iconRight ? "pr-10" : "pr-3"}
          ${sizeStyles}
          ${variantStyles}
          ${disabledStyles}
        `}
      />

      {label && (
        <Label
          htmlFor={id}
          variant={labelVariant}
          className={variant === "floatingModern" ? "absolute" : ""}
          required={required}
        >
          {label}
        </Label>
      )}

      {iconRight && (
        <span className="absolute right-0 top-0 bottom-0 w-10 flex items-start justify-center text-[--clr] pt-2">
          {iconRight}
        </span>
      )}

      {errorMessage && (
        <span className="absolute -bottom-5 left-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Textarea;
