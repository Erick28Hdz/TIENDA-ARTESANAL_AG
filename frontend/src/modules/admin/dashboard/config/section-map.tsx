import type { SectionKey } from "../types/dashboard";
import type { JSX } from "react";

// IMPORTA PANTALLAS
import CategoriasPage from "../../categories/page/CategoriasPage";

export const SECTION_COMPONENT_MAP: Record<SectionKey, JSX.Element> = {
    categorias: <CategoriasPage />,
};
