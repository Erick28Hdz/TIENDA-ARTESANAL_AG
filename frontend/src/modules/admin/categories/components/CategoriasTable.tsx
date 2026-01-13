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
  return (
    <UITable<Categoria>
      data={categorias}
      rowKey={(row) => row.id_categoria} // 👈 AQUÍ
      columns={[
        { key: "id_categoria", label: "#", width: "80px" },
        { key: "nombre", label: "Nombre" },
        { key: "descripcion", label: "Descripción", grow: 2 },
        { key: "estado", label: "Estado", width: "120px" },
        { key: "acciones", label: "Acciones", width: "160px" },
      ]}
      renderCell={{
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
