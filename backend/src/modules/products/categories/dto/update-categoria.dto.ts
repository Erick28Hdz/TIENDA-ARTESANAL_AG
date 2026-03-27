export interface UpdateCategoriaDTO {
  nombre?: string;
  descripcion?: string;
  estado?: "activo" | "inactivo";

  parent_id?: number | null;

  slug?: string;
}
