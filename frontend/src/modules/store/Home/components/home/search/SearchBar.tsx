import Input from "@/features/ui/input/Input";
import Image from "@/features/ui/image/Image";

const SearchBar = () => {
  return (
    <div
      className="
        relative
        flex items-center
        w-[60px] h-[50px]
        group
        rounded-full
        overflow-hidden
        bg-(--color-cuaternario)
        shadow-[2px_2px_20px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:w-[260px]
        focus-within:w-[260px]
        cursor-text
      "
    >
      {/* Ícono de búsqueda */}
      <div
        className="
          absolute left-3
          flex items-center justify-center
          transition-all duration-300
          opacity-80
          group-hover:opacity-100
        "
      >
        <Image
          src="/images/Iconos/universales/buscar.png"
          alt="buscar"
          variant="icon"
          className="w-5 h-5"
        />
      </div>

      {/* Input */}
      <Input
        type="text"
        placeholder="Buscar..."
        className="
          bg-transparent
          w-full
          pl-12 pr-4
          text-(--color-cuaternario2)
          placeholder-(--color-cuaternario2)/60
          transition-all duration-300
          focus:outline-none
        "
      />
    </div>
  );
};

export default SearchBar;
