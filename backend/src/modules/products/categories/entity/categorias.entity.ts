import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate
} from "typeorm";

@Entity({ name: "categorias" })
export class Categoria {

  @PrimaryGeneratedColumn("increment")
  id_categoria: number;

  @Column({ length: 100, unique: true })
  nombre: string;

  // 🔥 NUEVO SLUG
  @Column({ length: 120, unique: true })
  slug: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @Column({ type: "enum", enum: ["activo", "inactivo"], default: "activo" })
  estado: "activo" | "inactivo";

  // 🔁 RELACIÓN PADRE
  @ManyToOne(() => Categoria, (categoria) => categoria.hijos, {
    nullable: true,
    onDelete: "CASCADE"
  })
  @JoinColumn({ name: "parent_id" })
  padre: Categoria;

  // 🔁 RELACIÓN HIJOS
  @OneToMany(() => Categoria, (categoria) => categoria.padre)
  hijos: Categoria[];

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

  // ==================================================
  // 🔧 GENERAR SLUG AUTOMÁTICO
  // ==================================================

  @BeforeInsert()
  @BeforeUpdate()
  generarSlug() {
    if (this.nombre) {
      this.slug = this.nombre
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // quitar tildes
        .replace(/[^a-z0-9]+/g, "-")     // espacios y símbolos → guiones
        .replace(/^-+|-+$/g, "");        // quitar guiones inicio/fin
    }
  }
}
