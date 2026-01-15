import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
//import { Subcategoria } from "./subcategoria.entity";

@Entity({ name: "categorias" })
export class Categoria {
  @PrimaryGeneratedColumn("increment")
  id_categoria: number;

  @Column({ length: 100, unique: true })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @Column({ type: "enum", enum: ["activo", "inactivo"], default: "activo" })
  estado: "activo" | "inactivo";

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;
}
