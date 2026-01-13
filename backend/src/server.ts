import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import { AppDataSource } from "./config/postgres";
import { connectMongo } from "./config/mongo";
import categoriasRoutes from "./routes/categorias.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (_req, res) => {
  res.send("🚀 Backend conectado a PostgreSQL y MongoDB correctamente");
});

// 👉 REGISTRAR RUTAS
app.use("/api/categorias", categoriasRoutes);

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("✅ PostgreSQL conectado");

    await connectMongo();
    console.log("✅ MongoDB conectado");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error al conectar bases de datos:", err);
  }
};

startServer();
