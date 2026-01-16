import type { Categoria } from "@/modules/admin/categories/types/categoria";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const categoriasApi = {

  // ==========================================
  // 🔹 LISTA PLANA
  // ==========================================
  getAll: async (): Promise<Categoria[]> => {
    const res = await fetch(`${API_URL}/api/categorias`);
    if (!res.ok) throw new Error("Error al obtener categorías");
    return res.json();
  },

  // ==========================================
  // 🔥 ÁRBOL JERÁRQUICO
  // ==========================================
  getArbol: async (): Promise<Categoria[]> => {
    const res = await fetch(`${API_URL}/api/categorias/arbol`);
    if (!res.ok) throw new Error("Error al obtener árbol de categorías");
    return res.json();
  },

  // ==========================================
  // 🔥 POR SLUG (SEO)
  // ==========================================
  getBySlug: async (slug: string): Promise<Categoria> => {
    const res = await fetch(`${API_URL}/api/categorias/slug/${slug}`);
    if (!res.ok) throw new Error("Error al obtener categoría");
    return res.json();
  },

  // ==========================================
  // CREAR
  // ==========================================
  create: async (
    data: Omit<Categoria, "id_categoria" | "slug" | "created_at" | "updated_at">
  ) => {
    const res = await fetch(`${API_URL}/api/categorias`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al crear categoría");
    return res.json();
  },

  // ==========================================
  // ACTUALIZAR
  // ==========================================
  update: async (id: number, data: Partial<Categoria>) => {
    const res = await fetch(`${API_URL}/api/categorias/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al editar categoría");
    return res.json();
  },

  // ==========================================
  // ELIMINAR
  // ==========================================
  delete: async (id: number) => {
    const res = await fetch(`${API_URL}/api/categorias/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Error al eliminar categoría");
  },
};
