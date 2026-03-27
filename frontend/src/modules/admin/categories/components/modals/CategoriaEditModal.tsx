import Modal from "react-bootstrap/Modal";
import CategoriaForm from "../CategoriaForm";
import type { Categoria, UpdateCategoriaDTO } from "../../types/categoria";

interface EditCategoriaModalProps {
  show: boolean;
  categoria: Categoria | null;
  onCancel: () => void;
  onSubmit: (data: UpdateCategoriaDTO) => void;

  // 🔥 NUEVO
  categorias: Categoria[];
}

const EditCategoriaModal = ({
  show,
  categoria,
  onCancel,
  onSubmit,
  categorias,
}: EditCategoriaModalProps) => {

  if (!categoria) return null;

  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar categoría</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <CategoriaForm
          mode="edit"

          // 🔥 AQUÍ FALTABA parent_id
          initialData={{
            nombre: categoria.nombre,
            descripcion: categoria.descripcion,
            estado: categoria.estado,
            padre: categoria.padre,   // 👈 CLAVE
          }}

          onCancel={onCancel}
          onSubmit={onSubmit}

          // 🔥 CLAVE PARA EL SELECT
          categoriasDisponibles={categorias}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditCategoriaModal;
