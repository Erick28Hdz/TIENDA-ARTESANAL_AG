export interface Categoria {
  id_categoria: number;

  nombre: string;

  slug: string;

  descripcion?: string;

  estado: "activo" | "inactivo";

  // 🔥 Jerarquía
  padre?: {
    id_categoria: number;
    nombre: string;
    slug: string;
  } | null;

  // 🔥 Para la tabla y árbol
  hijos?: Categoria[];

  created_at: string;
  updated_at: string;
}

// ================================
// DTO CREAR
// ================================

export interface CreateCategoriaDTO {
  nombre: string;

  descripcion?: string;

  padre?: number | null;

  estado?: "activo" | "inactivo";
}

// ================================
// DTO ACTUALIZAR
// ================================

export interface UpdateCategoriaDTO {
  nombre?: string;

  descripcion?: string;

  padre?: number | null;

  estado?: "activo" | "inactivo";

  // 🔥 opcional por si algún día permites editar slug
  slug?: string;
}
