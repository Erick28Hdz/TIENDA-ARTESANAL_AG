import { AppDataSource } from "../../../../config/postgres";
import { Categoria } from "../entity/categorias.entity";
import { CreateCategoriaDTO } from "../dto/create-categoria.dto";
import { UpdateCategoriaDTO } from "../dto/update-categoria.dto";
// Obtener todas las categorías
export const getCategorias = async () => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);

  return await categoriaRepo.find({
    relations: ["padre", "hijos"],
  });
};

// Obtener una categoría por ID
export const getCategoriaById = async (id: number) => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);

  return await categoriaRepo.findOne({
    where: { id_categoria: id },

    // 🔥 AQUÍ ESTÁ LA CLAVE
    relations: ["padre", "hijos"],
  });
};
export const getCategoriasArbol = async () => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);

  return await categoriaRepo.find({
    relations: [
      "padre",                 // 🔥 agregado
      "hijos",
      "hijos.hijos",
      "hijos.hijos.hijos"
    ],
  });
};
export const getCategoriaBySlug = async (slug: string) => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);

  return await categoriaRepo.findOne({
    where: { slug },

    // 🔥 también necesita padre
    relations: ["padre", "hijos"],
  });
};
// Crear una categoría
export const createCategoria = async (data: CreateCategoriaDTO) => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);

  // Objeto que se enviará al create de TypeORM
  const input: Partial<Categoria> = {
    nombre: data.nombre,
    descripcion: data.descripcion,
    estado: data.estado ?? "activo",
  };

  // 🔥 Si viene padre, lo validamos
  if (data.parent_id) {
    const padre = await categoriaRepo.findOne({
      where: { id_categoria: data.parent_id },
    });

    if (!padre) {
      throw new Error("La categoría padre no existe");
    }

    // 👇 Relación real con la entidad
    (input as any).padre = padre;
  }

  const nuevaCategoria = categoriaRepo.create(input);

  return await categoriaRepo.save(nuevaCategoria);
};

// Editar una categoría
export const updateCategoria = async (
  id: number,
  data: UpdateCategoriaDTO
) => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);

  const categoria = await categoriaRepo.findOne({
    where: { id_categoria: id },
    relations: ["padre"],
  });

  if (!categoria) {
    throw new Error("Categoría no existe");
  }

  // 🔹 Objeto seguro tipado
  const input: Partial<Categoria> = {
    nombre: data.nombre,
    descripcion: data.descripcion,
    estado: data.estado,
    slug: data.slug,
  };

  // 🔥 MANEJO DE PADRE
  if (data.parent_id !== undefined) {

    // ❌ No puede ser su propio padre
    if (data.parent_id === id) {
      throw new Error("Una categoría no puede ser su propio padre");
    }

    // 🟡 Si es null → se vuelve categoría raíz
    if (data.parent_id === null) {
      (input as any).padre = null;

    } else {
      const padre = await categoriaRepo.findOne({
        where: { id_categoria: data.parent_id },
        relations: ["padre"],
      });

      if (!padre) {
        throw new Error("La categoría padre no existe");
      }

      // ❌ Evitar ciclo directo
      if (padre.id_categoria === id) {
        throw new Error("Relación circular no permitida");
      }

      // ❌ Evitar ciclo indirecto
      if (padre.padre?.id_categoria === id) {
        throw new Error("Relación circular no permitida");
      }

      // ✅ Relación correcta
      (input as any).padre = padre;
    }
  }

  // 🔥 Merge seguro
  Object.assign(categoria, input);

  await categoriaRepo.save(categoria);

  // Retorno con relaciones
  return await categoriaRepo.findOne({
    where: { id_categoria: id },
    relations: ["padre", "hijos"],
  });
};

// ❗ ELIMINAR CON VALIDACIONES DE NEGOCIO
export const deleteCategoria = async (id: number) => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);

  const categoria = await categoriaRepo.findOne({
    where: { id_categoria: id },
    relations: ["hijos"],
  });

  if (!categoria) {
    throw new Error("Categoría no existe");
  }

  if (categoria.estado === "activo") {
    throw new Error("No se puede eliminar una categoría activa");
  }

  // 🔥 NUEVO
  if (categoria.hijos?.length > 0) {
    throw new Error("No se puede eliminar una categoría con subcategorías");
  }

  await categoriaRepo.delete({ id_categoria: id });
};
