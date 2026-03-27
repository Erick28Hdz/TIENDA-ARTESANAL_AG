import type { SectionKey } from "../types/dashboard";

export const SIDEBAR_MENU: {
  title: string;
  items: { key: SectionKey; label: string }[];
}[] = [
  {
    title: "🗂️ Categorías",
    items: [
      { key: "categorias", label: "Ver categorías" },
    ],
  },

];
