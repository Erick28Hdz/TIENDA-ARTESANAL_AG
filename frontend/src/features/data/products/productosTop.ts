// data/productosTop.ts
export type ProductoTop = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string | number;
  rating: number;
};

export const productosTop: ProductoTop[] = [
  {
    id: 1,
    image: "/images/Productos/productos-top/01AR20.jpg",
    title: "Camisa de lino",
    description: "Camisa fresca y ligera para clima cálido",
    price: "20.000",
    rating: 4,
  },
  {
    id: 2,
    image: "/images/Productos/productos-top/02AR20.jpg",
    title: "Pantalón denim",
    description: "Pantalón clásico azul oscuro de mezclilla resistente",
    price: "25.000",
    rating: 5,
  },
  {
    id: 3,
    image: "/images/Productos/productos-top/03AR20.jpg",
    title: "Chaqueta liviana",
    description: "Ideal para media estación, con cierre metálico y bolsillos frontales",
    price: "35.000",
    rating: 4,
  },
  {
    id: 4,
    image: "/images/Productos/productos-top/04AR20.jpg",
    title: "Blusa floral",
    description: "Blusa de algodón con estampado floral y cuello en V",
    price: "22.000",
    rating: 5,
  },
  {
    id: 5,
    image: "/images/Productos/productos-top/05AR20.jpg",
    title: "Zapatillas urbanas",
    description: "Cómodas y ligeras, perfectas para el uso diario",
    price: "40.000",
    rating: 5,
  },
  {
    id: 6,
    image: "/images/Productos/productos-top/06AR20.jpg",
    title: "Bolso tote",
    description: "Bolso amplio con asas reforzadas y acabado textil elegante",
    price: "28.000",
    rating: 4,
  },
  {
    id: 7,
    image: "/images/Productos/productos-top/07AR20.jpg",
    title: "Reloj minimalista",
    description: "Reloj unisex con correa de cuero y esfera metálica elegante",
    price: "30.000",
    rating: 5,
  },
];
