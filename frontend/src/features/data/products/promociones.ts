// data/promociones.ts
export type Promocion = {
  id: number;
  image: string;
  category: string;
  heading: string;
  author: string;
  date: string;
  reverse?: boolean;
};

export const promociones: Promocion[] = [
  {
    id: 1,
    image: "/images/Productos/productos-top/01AR20.jpg",
    category: "Illustration",
    heading: "A heading that must span over two lines",
    author: "Abi",
    date: "4 days ago",
  },
  {
    id: 2,
    image: "/images/Productos/productos-top/01AR20.jpg",
    category: "Illustration",
    heading: "A heading that must span over two lines",
    author: "Abi",
    date: "4 days ago",
    reverse: true,
  },
  {
    id: 3,
    image: "/images/Productos/productos-top/01AR20.jpg",
    category: "Illustration",
    heading: "A heading that must span over two lines",
    author: "Abi",
    date: "4 days ago",
  },
  {
    id: 4,
    image: "/images/Productos/productos-top/01AR20.jpg",
    category: "Illustration",
    heading: "A heading that must span over two lines",
    author: "Abi",
    date: "4 days ago",
    reverse: true,
  },
];
