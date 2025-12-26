const PersonalizeButton = () => {
  return (
    <button
      className="
        group
        relative
        flex items-center gap-1
        px-9 py-2
        rounded-full!
        font-semibold text-[16px]
        text-(--color-secundario)
        bg-transparent
        shadow-[0_0_0_2px_var(--color-secundario)]
        cursor-pointer
        overflow-hidden
        transition-all duration-600
        ease-[cubic-bezier(0.23,1,0.32,1)]
        hover:rounded-xl
        hover:text-(--color-cuaternario)
        hover:shadow-[0_0_0_12px_transparent]
        active:scale-95
        active:shadow-[0_0_0_4px_var(--color-secundario)]
      "
    >
      {/* Flecha izquierda */}
      <svg
        viewBox="0 0 24 24"
        className="
          absolute
          left-[-25%]
          w-6 h-6
          fill-(--color-secundario)
          z-10
          transition-all duration-800
          ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:left-4
          group-hover:fill-(--color-cuaternario)
        "
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      {/* Texto */}
      <span
        className="
          relative z-10
          -translate-x-3
          transition-all duration-800
          ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:translate-x-3
        "
      >
        Personalizar producto
      </span>

      {/* Círculo */}
      <span
        className="
          absolute
          top-1/2 left-1/2
          w-5 h-5
          bg-(--color-primario)
          rounded-full
          opacity-0
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-800
          ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:w-[220px]
          group-hover:h-[220px]
          group-hover:opacity-100
        "
      />

      {/* Flecha derecha */}
      <svg
        viewBox="0 0 24 24"
        className="
          absolute
          right-4
          w-6 h-6
          fill-(--color-secundario)
          z-10
          transition-all duration-800
          ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:right-[-25%]
          group-hover:fill-(--color-cuaternario)
        "
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </button>
  );
};

export default PersonalizeButton;
