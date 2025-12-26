import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL, // 👈 toma todo desde la variable .env
  synchronize: true, // ⚠️ sólo mantener en true en desarrollo
  logging: true,
  entities: [path.join(__dirname, "..", "entities", "**", "*.{js,ts}")],
});
