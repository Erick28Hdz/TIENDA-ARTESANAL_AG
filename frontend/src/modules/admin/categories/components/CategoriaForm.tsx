import { useState } from "react";
import type { Categoria } from "../types/categoria";

interface CategoriaFormProps {
  onSubmit?: (data: {
    nombre: string;
    descripcion?: string;
    estado: "activo" | "inactivo";
    parent_id: number | null;
  }) => void;

  onCancel: () => void;
  initialData?: Partial<Categoria>;
  mode?: "create" | "edit" | "view";

  categoriasDisponibles?: Categoria[];
}

const CategoriaForm = ({
  onSubmit,
  onCancel,
  initialData,
  mode = "create",
  categoriasDisponibles = [],
}: CategoriaFormProps) => {

  const isView = mode === "view";

  const [nombre, setNombre] = useState(initialData?.nombre ?? "");
  const [descripcion, setDescripcion] = useState(initialData?.descripcion ?? "");
  const [estado, setEstado] = useState<"activo" | "inactivo">(
    initialData?.estado ?? "activo"
  );

  // 🔥 AQUÍ ESTÁ LA CLAVE
  const [parentId, setParentId] = useState<number | null>(
    initialData?.padre?.id_categoria ?? null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isView || !onSubmit) return;

    onSubmit({
      nombre,
      descripcion,
      estado,
      parent_id: parentId,   // 👈 SOLO SE MANDA ID
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

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

      {/* 🔥 SELECT DE PADRE */}
      <div>
        <label className="form-label">Categoría padre</label>

        <select
          className="form-control"
          disabled={isView}
          value={parentId ?? ""}
          onChange={(e) =>
            setParentId(e.target.value ? Number(e.target.value) : null)
          }
        >
          <option value="">— Sin padre (Categoría raíz) —</option>

          {categoriasDisponibles.map((cat) => (
            <option
              key={cat.id_categoria}
              value={cat.id_categoria}
              disabled={cat.id_categoria === initialData?.id_categoria}
            >
              {cat.nombre}
            </option>
          ))}
        </select>
      </div>

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
