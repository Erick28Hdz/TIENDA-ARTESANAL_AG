import { useState } from "react";
import type { Product } from "../types/product"; 

export const usePersonalizedProducts = () => {
  const [products] = useState<Product[]>([
    {
      id: "1",
      image: "/images/Productos/productos-top/01AR20.jpg",
      title: "Producto personalizado 1",
      description: "Descripción",
      price: "$80",
    },
    {
      id: "2",
      image: "/images/Productos/productos-top/01AR20.jpg",
      title: "Producto personalizado 2",
      description: "Descripción",
      price: "$90",
    },
    {
      id: "3",
      image: "/images/Productos/productos-top/01AR20.jpg",
      title: "Producto personalizado 3",
      description: "Descripción",
      price: "$100",
    },
    {
      id: "4",
      image: "/images/Productos/productos-top/01AR20.jpg",
      title: "Producto personalizado 4",
      description: "Descripción",
      price: "$100",
    },
    {
      id: "5",
      image: "/images/Productos/productos-top/01AR20.jpg",
      title: "Producto personalizado 5",
      description: "Descripción",
      price: "$100",
    },
  ]);

  return {
    products,
    isLoading: false,
    error: null,
  };
};
