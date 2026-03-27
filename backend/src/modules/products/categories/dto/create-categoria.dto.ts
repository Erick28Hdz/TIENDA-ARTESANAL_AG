export interface CreateCategoriaDTO {
  nombre: string;
  descripcion?: string;
  estado?: "activo" | "inactivo";

  // 🔥 clave para jerarquía
  parent_id?: number | null;
}
