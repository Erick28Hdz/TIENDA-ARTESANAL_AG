import { Request, Response } from "express";
import {
  getCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from "../services/categorias.service";

// Obtener todas las categorías
export const obtenerCategorias = async (req: Request, res: Response): Promise<void> => {
  try {
    const categorias = await getCategorias();
    res.status(200).json(categorias);
  } catch (error: any) {
    res.status(500).json({ message: "Error al obtener categorías", error: error.message });
  }
};

// Obtener una categoría por ID
export const obtenerCategoriaPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoria = await getCategoriaById(Number(req.params.id));
    if (!categoria) {
      res.status(404).json({ message: "Categoría no encontrada" });
      return;
    }
    res.status(200).json(categoria);
  } catch (error: any) {
    res.status(500).json({ message: "Error al obtener la categoría", error: error.message });
  }
};

// Crear una categoría
export const crearCategoria = async (req: Request, res: Response): Promise<void> => {
  try {
    const nuevaCategoria = await createCategoria(req.body);
    res.status(201).json(nuevaCategoria);
  } catch (error: any) {
    res.status(500).json({ message: "Error al crear categoría", error: error.message });
  }
};

// Editar una categoría
export const editarCategoria = async (req: Request, res: Response): Promise<void> => {
  try {
    const categoriaEditada = await updateCategoria(Number(req.params.id), req.body);
    res.status(200).json(categoriaEditada);
  } catch (error: any) {
    res.status(500).json({ message: "Error al editar categoría", error: error.message });
  }
};

// Eliminar una categoría
export const eliminarCategoria = async (req: Request, res: Response): Promise<void> => {
  try {
    await deleteCategoria(Number(req.params.id));
    res.status(200).json({ message: "Categoría eliminada correctamente" });
  } catch (error: any) {
    res.status(500).json({ message: "Error al eliminar categoría", error: error.message });
  }
};
