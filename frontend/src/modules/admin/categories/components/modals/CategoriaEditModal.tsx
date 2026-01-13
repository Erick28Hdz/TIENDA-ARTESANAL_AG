import Modal from "react-bootstrap/Modal";
import CategoriaForm from "../CategoriaForm";
import type { Categoria } from "../../types/categoria";
import type { UpdateCategoriaDTO } from "../../types/categoria";

interface EditCategoriaModalProps {
  show: boolean;
  categoria: Categoria | null;
  onCancel: () => void;
  onSubmit: (data: UpdateCategoriaDTO) => void;
}

const EditCategoriaModal = ({
  show,
  categoria,
  onCancel,
  onSubmit,
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
          initialData={{
            nombre: categoria.nombre,
            descripcion: categoria.descripcion,
            estado: categoria.estado,
          }}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditCategoriaModal;
