import { useState, useMemo } from "react";
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

  // 🔐 Estados de modales
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  type EstadoFiltro = "TODOS" | "activo" | "inactivo";

  // 🔎 ESTADOS DE FILTROS
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState<"asc" | "desc">("asc");
  const [filtroEstado, setFiltroEstado] = useState<EstadoFiltro>("TODOS");

  // 🧠 LÓGICA DE FILTRADO
  const categoriasFiltradas = useMemo(() => {
    let resultado = [...categorias];

    // 🔎 Búsqueda
    if (busqueda) {
      resultado = resultado.filter(
        (c) =>
          c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          c.descripcion?.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // 🟢🔴 Filtro estado
    if (filtroEstado !== "TODOS") {
      resultado = resultado.filter((c) => c.estado === filtroEstado);
    }

    // 🔠 Orden
    resultado.sort((a, b) =>
      orden === "asc"
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre)
    );

    return resultado;
  }, [categorias, busqueda, orden, filtroEstado]);

  // 🎯 Handlers
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

      {/* ==========================
          🔥 ZONA DE FILTROS
      ========================== */}
      <div className="flex gap-3 mb-3">
        <input
          className="form-control"
          placeholder="Buscar por nombre o descripción..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          className="form-select"
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value as EstadoFiltro)}
        >
          <option value="TODOS">Todos</option>
          <option value="activo">Activos</option>
          <option value="inactivo">Inactivos</option>
        </select>

        <button
          className="btn btn-secondary"
          onClick={() => setOrden(orden === "asc" ? "desc" : "asc")}
        >
          Orden: {orden === "asc" ? "A → Z" : "Z → A"}
        </button>
      </div>

      {/* ==========================
          📦 TABLA CON DATOS FILTRADOS
      ========================== */}
      <CategoriasTable
        categorias={categoriasFiltradas}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* ==========================
          🪟 MODALES
      ========================== */}
      <CreateCategoriaModal
        show={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
        // 🔥 AQUÍ
        categorias={categorias}
        onSubmit={async (data) => {
          await createCategoria(data);
          setShowCreateModal(false);
        }}
      />

      <ViewCategoriaModal
        show={showViewModal}
        categoria={selectedCategoria}
        // 🔥 AQUÍ
        categorias={categorias}
        onCancel={() => {
          setShowViewModal(false);
          setSelectedCategoria(null);
        }}
      />

      <EditCategoriaModal
        show={showEditModal}
        categoria={selectedCategoria}
        // 🔥 AQUÍ TAMBIÉN
        categorias={categorias}
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
