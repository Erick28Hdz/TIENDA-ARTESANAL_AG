import UITable from "@/features/ui/table/table";
import type { Categoria } from "../types/categoria";
import CategoriaActions from "./CategoriaActions";

interface CategoriasTableProps {
  categorias: Categoria[];
  onView: (categoria: Categoria) => void;
  onEdit: (categoria: Categoria) => void;
  onDelete: (categoria: Categoria) => void;
}

const CategoriasTable = ({
  categorias,
  onView,
  onEdit,
  onDelete,
}: CategoriasTableProps) => {

  const getNombrePadre = (row: Categoria) => {
    return row.padre?.nombre || "—";
  };

  return (
    <UITable<Categoria>
      data={categorias}
      rowKey={(row) => row.id_categoria}

      columns={[
        { key: "id_categoria", label: "#", width: "60px" },

        { key: "nombre", label: "Nombre", grow: 1 },

        { key: "slug", label: "Slug", grow: 1 },

        {
          key: "padre",                // 🔥 CAMBIO AQUÍ
          label: "Categoría padre",
          width: "160px",
        },

        {
          key: "hijos",
          label: "Subcategorías",
          width: "140px",
        },

        { key: "estado", label: "Estado", width: "120px" },

        { key: "acciones", label: "Acciones", width: "160px" },
      ]}

      renderCell={{

        padre: (row) => getNombrePadre(row),   // 🔥 CAMBIO AQUÍ

        hijos: (row) => row.hijos?.length || 0,

        estado: (row) => (
          <span
            className={
              row.estado === "activo"
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
            }
          >
            {row.estado}
          </span>
        ),

        acciones: (row) => (
          <CategoriaActions
            categoria={row}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ),
      }}
    />
  );
};


export default CategoriasTable;
