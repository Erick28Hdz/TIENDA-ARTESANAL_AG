import { Router } from "express";
import {
  obtenerCategorias,
  obtenerCategoriaPorId,
  crearCategoria,
  editarCategoria,
  eliminarCategoria,
} from "../../controllers/products/categorias.controller";

const router = Router();

// Definir rutas para categorías
router.get("/", obtenerCategorias);
router.get("/:id", obtenerCategoriaPorId);
router.post("/", crearCategoria);
router.put("/:id", editarCategoria);
router.delete("/:id", eliminarCategoria);

export default router;
