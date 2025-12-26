import React from "react";
import clsx from "clsx";
import Text from "../typography/Text";

type SizeSelectorProps = {
  label?: string;
  sizes: string[];
  value?: string;
  onChange?: (size: string) => void;
};

const SizeSelector: React.FC<SizeSelectorProps> = ({
  label = "Tallas",
  sizes,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Label */}
      <Text variant="byline" tone="secondary">
        {label}
      </Text>

      {/* Lista de tallas */}
      <ul className="flex p-0 items-center gap-2">
        {sizes.map((size) => {
          const isActive = value === size;

          return (
            <li key={size} className="list-none">
              <button
                type="button"
                onClick={() => onChange?.(size)}
                className={clsx(
                  `
        w-8 h-8
        flex items-center justify-center
        text-sm font-semibold
        rounded-md
        border-2
        transition-all duration-200
        `,
                  isActive
                    ? `
            bg-(--color-terciario)
            text-(--color-cuaternario2)
            border-(--color-cuaternario)
            shadow-sm
          `
                    : `
            bg-(--color-cuaternario2)
            text-(--color-terciario)
            border-(--color-secundario)
            hover:border-(--color-primario)
            hover:text-(--color-secundario)
          `
                )}
              >
                {size}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SizeSelector;
