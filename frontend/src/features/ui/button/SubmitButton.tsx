import React from 'react';

interface NeumorphicButtonProps {
  text: string;
  onClick?: () => void;
}

const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative
        rounded-lg!
        border-2 border-(--color-terciario)
        px-4 py-2
        text-[18px] font-bold
        cursor-pointer
        outline-none
        select-none
        transition-all duration-300
        shadow-[inset_0_-6px_18px_-6px_rgba(3,15,20,0),inset_-1px_-1px_6px_var(--color-cuaternario),inset_12px_0_12px_-6px_rgba(3,15,20,0),inset_-12px_0_12px_-6px_rgba(3,15,20,0),-1px_-1px_6px_var(--color-cuaternario)]
        hover:shadow-[inset_0_-6px_18px_-6px_var(--color-secundario),inset_0_6px_18px_-6px_var(--color-secundario),inset_12px_0_12px_-6px_rgba(3,15,20,0),inset_-12px_0_12px_-6px_rgba(3,15,20,0),-1px_-1px_6px_var(--color-cuaternario)]
        active:shadow-[inset_0_-12px_12px_-6px_var(--color-secundario),inset_0_12px_12px_-6px_var(--color-secundario),inset_12px_0_12px_-6px_var(--color-secundario),inset_-12px_0_12px_-6px_var(--color-secundario),-1px_-1px_6px_var(--color-cuaternario)]
        bg-(--color-primario)
      "
    >
      <span className="text-(--color-cuaternario2) transition-transform duration-300 hover:scale-90 active:scale-80">
        {text}
      </span>
    </button>
  );
};

export default NeumorphicButton;
