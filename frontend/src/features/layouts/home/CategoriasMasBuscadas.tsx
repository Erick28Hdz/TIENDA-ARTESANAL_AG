import Title from "@/features/ui/typography/Title";
import Text from "@/features/ui/typography/Text";
import Button from "@/features/ui/button/Button";

const categorias = [
  "Carteras",
  "Zapatos",
  "Relojes",
  "Bolsos",
  "Sombreros",
  "Accesorios",
];

export default function CategoriasMasBuscadas() {
  return (
    <div className="bg-(--color-secundario) p-[15px] flex flex-col justify-start border-2 border-(--color-terciario) drop-shadow-[0_0_5px_var(--color-primario)] rounded-[5px] my-5">
      
      <Title
        variant="cardTitle"
        tone="primary"
        className="w-fit drop-shadow-[0_0_1px_var(--color-terciario)] uppercase"
      >
        Categorías más buscadas
      </Title>

      <ul className="w-full flex flex-col items-start list-none mt-4 ml-2 gap-2">
        {categorias.map((cat, i) => (
          <li key={i} className="mb-2">
            <Button variant="categoryModern">
              <Text
                variant="cardMeta"
                tone="cuaternary2"
                className="relative z-2 pr-4"
              >
                {cat}
              </Text>
            </Button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

