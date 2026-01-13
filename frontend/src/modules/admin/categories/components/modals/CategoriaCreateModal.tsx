import Modal from "react-bootstrap/Modal";
import CategoriaForm from "../CategoriaForm";
import type { CreateCategoriaDTO } from "../../types/categoria";

interface CreateCategoriaModalProps {
  show: boolean;
  onCancel: () => void;
  onSubmit: (data: CreateCategoriaDTO) => void;
}

const CreateCategoriaModal = ({
  show,
  onCancel,
  onSubmit,
}: CreateCategoriaModalProps) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Nueva categoría</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <CategoriaForm
          mode="create"
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CreateCategoriaModal;
