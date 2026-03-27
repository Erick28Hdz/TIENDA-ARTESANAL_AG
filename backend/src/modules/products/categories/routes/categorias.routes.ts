import { Router } from "express";
import {
  obtenerCategorias,
  obtenerCategoriasArbol,
  obtenerCategoriaPorId,
  obtenerCategoriaPorSlug,
  crearCategoria,
  editarCategoria,
  eliminarCategoria,
} from "../controller/categorias.controller";

const router = Router();

// 🔥 ORDEN ES CLAVE

// 1. Especiales primero
router.get("/arbol", obtenerCategoriasArbol);
router.get("/slug/:slug", obtenerCategoriaPorSlug);

// 2. Generales
router.get("/", obtenerCategorias);

// 3. Por ID al final para evitar conflictos
router.get("/:id", obtenerCategoriaPorId);

router.post("/", crearCategoria);
router.put("/:id", editarCategoria);
router.delete("/:id", eliminarCategoria);

export default router;
