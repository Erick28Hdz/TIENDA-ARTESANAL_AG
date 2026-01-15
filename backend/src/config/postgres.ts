import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

import { Categoria } from "../models/products/categorias.entity";

// 🔽 Cargar el .env correcto según entorno
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});

const isDev = process.env.NODE_ENV !== "production";

export const AppDataSource = new DataSource({
  type: "postgres",

  // 👇 Aquí entra la DB correcta automáticamente
  url: process.env.DATABASE_URL,

  // 🔐 REGLA CLAVE
  synchronize: isDev,      // true solo en desarrollo
  logging: isDev,          // logs solo en desarrollo

  entities: [Categoria],
});
