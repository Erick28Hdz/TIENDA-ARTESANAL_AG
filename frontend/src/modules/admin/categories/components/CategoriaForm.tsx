import { useState } from "react";
import type { Categoria } from "../types/categoria";

interface CategoriaFormProps {
  onSubmit?: (
    data: Pick<Categoria, "nombre" | "descripcion" | "estado">
  ) => void;
  onCancel: () => void;
  initialData?: Partial<Categoria>;
  mode?: "create" | "edit" | "view";
}

const CategoriaForm = ({
  onSubmit,
  onCancel,
  initialData,
  mode = "create",
}: CategoriaFormProps) => {
  const isView = mode === "view";

  const [nombre, setNombre] = useState(initialData?.nombre ?? "");
  const [descripcion, setDescripcion] = useState(initialData?.descripcion ?? "");
  const [estado, setEstado] = useState<"activo" | "inactivo">(
    initialData?.estado ?? "activo"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isView || !onSubmit) return;

    onSubmit({
      nombre,
      descripcion,
      estado,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Nombre */}
      <div>
        <label className="form-label">Nombre</label>
        <input
          className="form-control"
          value={nombre}
          disabled={isView}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      {/* Descripción */}
      <div>
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control"
          rows={3}
          value={descripcion}
          disabled={isView}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      {/* Estado */}
      <div>
        <label className="form-label">Estado</label>
        <select
          className="form-control"
          value={estado}
          disabled={isView}
          onChange={(e) =>
            setEstado(e.target.value as "activo" | "inactivo")
          }
        >
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
      </div>

      {/* Acciones */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
        >
          Cerrar
        </button>

        {!isView && (
          <button type="submit" className="btn btn-success">
            Guardar
          </button>
        )}
      </div>
    </form>
  );
};

export default CategoriaForm;
