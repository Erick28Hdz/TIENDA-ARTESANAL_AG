import { useEffect, useState } from "react";
import type { Categoria, CreateCategoriaDTO, UpdateCategoriaDTO } from "../types/categoria";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const useCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [selectedCategoria, setSelectedCategoria] = useState<Categoria | null>(
    null
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🔹 Obtener categorías
  const fetchCategorias = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/categorias`);
      if (!res.ok) throw new Error("Error al obtener categorías");
      const data = await res.json();
      setCategorias(data);
    } catch {
      setError("No se pudieron cargar las categorías");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Crear
  const createCategoria = async (data: CreateCategoriaDTO) => {
    const res = await fetch(`${API_URL}/api/categorias`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al crear categoría");

    const nueva = await res.json();
    setCategorias((prev) => [...prev, nueva]);
  };

  // 🔹 Editar
  const updateCategoria = async (data: UpdateCategoriaDTO) => {
    if (!selectedCategoria) return;

    const res = await fetch(
      `${API_URL}/api/categorias/${selectedCategoria.id_categoria}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) throw new Error("Error al editar categoría");

    const actualizada = await res.json();

    setCategorias((prev) =>
      prev.map((c) =>
        c.id_categoria === actualizada.id_categoria ? actualizada : c
      )
    );
  };

  // 🔹 Eliminar
  const deleteCategoria = async (id: number) => {
    const res = await fetch(`${API_URL}/api/categorias/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Error al eliminar categoría");

    setCategorias((prev) => prev.filter((c) => c.id_categoria !== id));
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  return {
    categorias,
    selectedCategoria,
    setSelectedCategoria,
    loading,
    error,
    createCategoria,
    updateCategoria,
    deleteCategoria,
  };
};
