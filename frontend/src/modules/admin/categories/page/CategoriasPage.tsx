import { useState } from "react";
import { useCategorias } from "../hooks/useCategorias";
import type { Categoria } from "../types/categoria";

import CreateCategoriaModal from "../components/modals/CategoriaCreateModal";
import ViewCategoriaModal from "../components/modals/CategoriaViewModal";
import EditCategoriaModal from "../components/modals/CategoriaEditModal";
import CategoriasTable from "../components/CategoriasTable";
import CategoriasHeader from "../components/CategoriasHeader";

const CategoriasPage = () => {
  const {
    categorias,
    selectedCategoria,
    setSelectedCategoria,
    createCategoria,
    updateCategoria,
    deleteCategoria,
    loading,
    error,
  } = useCategorias();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleView = (categoria: Categoria) => {
    setSelectedCategoria(categoria);
    setShowViewModal(true);
  };

  const handleEdit = (categoria: Categoria) => {
    setSelectedCategoria(categoria);
    setShowEditModal(true);
  };

  const handleDelete = async (categoria: Categoria) => {
    await deleteCategoria(categoria.id_categoria);
  };

  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <CategoriasHeader onCreate={() => setShowCreateModal(true)} />

      <CategoriasTable
        categorias={categorias}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CreateCategoriaModal
        show={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
        onSubmit={async (data) => {
          await createCategoria(data);
          setShowCreateModal(false);
        }}
      />

      <ViewCategoriaModal
        show={showViewModal}
        categoria={selectedCategoria}
        onCancel={() => {
          setShowViewModal(false);
          setSelectedCategoria(null);
        }}
      />

      <EditCategoriaModal
        show={showEditModal}
        categoria={selectedCategoria}
        onCancel={() => {
          setShowEditModal(false);
          setSelectedCategoria(null);
        }}
        onSubmit={async (data) => {
          await updateCategoria(data);
          setShowEditModal(false);
          setSelectedCategoria(null);
        }}
      />
    </div>
  );
};

export default CategoriasPage;
