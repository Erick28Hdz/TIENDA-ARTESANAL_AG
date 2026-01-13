import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

import { Categoria } from "../models/categorias.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true, // SOLO desarrollo
  logging: true,
  entities: [Categoria], // 👈 IMPORTANTE
});
