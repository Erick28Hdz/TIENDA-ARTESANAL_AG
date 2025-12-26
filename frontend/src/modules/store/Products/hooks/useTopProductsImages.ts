export interface MarqueeImage {
  id: string;
  src: string;
  alt: string;
}

export const useTopProductsImages = () => {
  const images: MarqueeImage[] = [
    { id: "1", src: "/images/Productos/productos-top/01AR20.jpg", alt: "Producto 1" },
    { id: "2", src: "/images/Productos/productos-top/01AR20.jpg", alt: "Producto 2" },
    { id: "3", src: "/images/Productos/productos-top/01AR20.jpg", alt: "Producto 3" },
    { id: "4", src: "/images/Productos/productos-top/01AR20.jpg", alt: "Producto 4" },
    { id: "5", src: "/images/Productos/productos-top/01AR20.jpg", alt: "Producto 5" },
    { id: "6", src: "/images/Productos/productos-top/01AR20.jpg", alt: "Producto 6" },
    { id: "7", src: "/images/Productos/productos-top/01AR20.jpg", alt: "Producto 7" },
    { id: "8", src: "/images/Productos/productos-top/01AR20.jpg", alt: "Producto 8" },
    { id: "9", src: "/images/Productos/productos-top/01AR20.jpg", alt: "Producto 9" },
  ];

  return {
    images,
    isLoading: false,
    error: null,
  };
};
