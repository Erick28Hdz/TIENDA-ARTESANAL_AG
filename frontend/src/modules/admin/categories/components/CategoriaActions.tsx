import type { Categoria } from "../types/categoria";

interface CategoriaActionsProps {
  categoria: Categoria;
  onView: (categoria: Categoria) => void;
  onEdit: (categoria: Categoria) => void;
  onDelete: (categoria: Categoria) => void;
}

const CategoriaActions = ({
  categoria,
  onView,
  onEdit,
  onDelete,
}: CategoriaActionsProps) => {
  return (
    <div className="flex gap-2">
      <button
        className="btn btn-sm btn-info"
        onClick={() => onView(categoria)}
      >
        Ver
      </button>

      <button
        className="btn btn-sm btn-warning"
        onClick={() => onEdit(categoria)}
      >
        Editar
      </button>

      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDelete(categoria)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CategoriaActions;
