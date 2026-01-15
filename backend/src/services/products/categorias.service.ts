import { AppDataSource } from "../../config/postgres";
import { Categoria } from "../../models/products/categorias.entity";

// Obtener todas las categorías
export const getCategorias = async () => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);
  return await categoriaRepo.find();
};

// Obtener una categoría por ID
export const getCategoriaById = async (id: number) => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);
  return await categoriaRepo.findOne({
    where: { id_categoria: id },
  });
};

// Crear una categoría
export const createCategoria = async (data: Partial<Categoria>) => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);
  const nuevaCategoria = categoriaRepo.create(data);
  return await categoriaRepo.save(nuevaCategoria);
};

// Editar una categoría
export const updateCategoria = async (id: number, data: Partial<Categoria>) => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);

  const categoria = await categoriaRepo.findOne({
    where: { id_categoria: id },
  });

  if (!categoria) {
    throw new Error("Categoría no existe");
  }

  await categoriaRepo.update({ id_categoria: id }, data);

  return await categoriaRepo.findOne({
    where: { id_categoria: id },
  });
};

// ❗ ELIMINAR CON VALIDACIONES DE NEGOCIO
export const deleteCategoria = async (id: number) => {
  const categoriaRepo = AppDataSource.getRepository(Categoria);

  const categoria = await categoriaRepo.findOne({
    where: { id_categoria: id },
  });

  if (!categoria) {
    throw new Error("Categoría no existe");
  }

  if (categoria.estado === "activo") {
    throw new Error("No se puede eliminar una categoría activa");
  }

  await categoriaRepo.delete({ id_categoria: id });
};
