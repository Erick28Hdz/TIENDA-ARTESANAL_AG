export interface Categoria {
  id_categoria: number;
  nombre: string;
  descripcion?: string;
  estado: "activo" | "inactivo";
  created_at: string;
  updated_at: string;
}

export interface CreateCategoriaDTO {
  nombre: string;
  descripcion?: string;
  estado?: "activo" | "inactivo"; // opcional
}
export interface UpdateCategoriaDTO {
  nombre?: string;
  descripcion?: string;
  estado?: "activo" | "inactivo";
}
