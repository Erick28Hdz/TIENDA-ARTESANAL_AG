import Modal from "react-bootstrap/Modal";
import CategoriaForm from "../CategoriaForm";
import { type Categoria } from "../../types/categoria";

interface ViewCategoriaModalProps {
  show: boolean;
  categoria: Categoria | null;
  onCancel: () => void;

  // 🔥 NUEVO
  categorias: Categoria[];
}

const ViewCategoriaModal = ({
  show,
  categoria,
  onCancel,
  categorias,
}: ViewCategoriaModalProps) => {

  if (!categoria) return null;

  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detalle de categoría</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <CategoriaForm
          mode="view"
          initialData={categoria}
          onCancel={onCancel}

          // 🔥
          categoriasDisponibles={categorias}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ViewCategoriaModal;
