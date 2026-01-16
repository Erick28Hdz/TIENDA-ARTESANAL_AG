import { Request, Response } from "express";
import {
  getCategorias,
  getCategoriaById,
  getCategoriasArbol,
  getCategoriaBySlug,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from "../services/categorias.service";

// ======================================================
// Obtener todas las categorías (lista plana)
// ======================================================
export const obtenerCategorias = async (req: Request, res: Response): Promise<void> => {
  try {
    const categorias = await getCategorias();
    res.status(200).json(categorias);

  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener categorías",
      error: error.message,
    });
  }
};

// ======================================================
// Obtener árbol jerárquico 🔥
// ======================================================
export const obtenerCategoriasArbol = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categorias = await getCategoriasArbol();
    res.status(200).json(categorias);

  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener árbol de categorías",
      error: error.message,
    });
  }
};

// ======================================================
// Obtener por ID
// ======================================================
export const obtenerCategoriaPorId = async (
  req: Request,
  res: Response
): Promise<void> => {

  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ message: "ID inválido" });
    return;
  }

  try {
    const categoria = await getCategoriaById(id);

    if (!categoria) {
      res.status(404).json({ message: "Categoría no encontrada" });
      return;
    }

    res.status(200).json(categoria);

  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener la categoría",
      error: error.message,
    });
  }
};

// ======================================================
// Obtener por SLUG 🔥
// ======================================================
export const obtenerCategoriaPorSlug = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {
    const categoria = await getCategoriaBySlug(req.params.slug);

    if (!categoria) {
      res.status(404).json({ message: "Categoría no encontrada" });
      return;
    }

    res.status(200).json(categoria);

  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener la categoría",
      error: error.message,
    });
  }
};

// ======================================================
// Crear
// ======================================================
export const crearCategoria = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {
    const nuevaCategoria = await createCategoria(req.body);

    res.status(201).json(nuevaCategoria);

  } catch (error: any) {

    res.status(400).json({
      message: error.message,
    });
  }
};

// ======================================================
// Editar
// ======================================================
export const editarCategoria = async (
  req: Request,
  res: Response
): Promise<void> => {

  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ message: "ID inválido" });
    return;
  }

  try {
    const categoriaEditada = await updateCategoria(id, req.body);

    res.status(200).json(categoriaEditada);

  } catch (error: any) {

    res.status(400).json({
      message: error.message,
    });
  }
};

// ======================================================
// Eliminar
// ======================================================
export const eliminarCategoria = async (
  req: Request,
  res: Response
): Promise<void> => {

  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ message: "ID inválido" });
    return;
  }

  try {
    await deleteCategoria(id);

    res.status(200).json({
      message: "Categoría eliminada correctamente",
    });

  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
