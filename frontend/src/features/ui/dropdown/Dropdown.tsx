import Button from "@/features/ui/button/Button";
import Text, { type TextVariant } from "@/features/ui/typography/Text";

export interface DropdownProps {
  options: string[];
  onSelect?: (value: string) => void;
  className?: string;
  itemClassName?: string;
  textVariant?: TextVariant; // <-- NUEVO
}

const Dropdown = ({
  options,
  onSelect,
  className = "",
  textVariant = "parrafos",
}: DropdownProps) => {
  return (
    <ul className={`flex flex-col gap-1 m-0 p-0 list-none ${className}`}>
      {options.map((option) => (
        <li key={option}>
          <Button
            variant="dropdownItem"
            onClick={() => onSelect?.(option)}
            className="text-(--color-cuaternario2)"
          >
            <Text variant={textVariant}>{option}</Text> {/* 👈 Aquí va la magia */}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
