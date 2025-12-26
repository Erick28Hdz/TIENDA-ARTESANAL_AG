export interface Product {
  manufactureDate: string;
  price: number;
  sizes: string[];
  reviewsCount: number;
  recommendationPercentage: number;
  quality: number;
  satisfaction: number;
  id: number;
  name: string;
  description: string;
  images: { src: string; alt: string }[];
  rating?: number;
}

export const useProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción del producto 1",
      manufactureDate: "2025-01-15",
      price: 120000,
      sizes: ["XS", "S", "M", "L", "XL"],
      reviewsCount: 20,
      recommendationPercentage: 80,
      quality: 90,
      satisfaction: 85,
      rating: 3,
      images: [
        { src: "/images/Productos/hero/01P20.jpg", alt: "Imagen 1" },
        { src: "/images/Productos/hero/01P20.jpg", alt: "Imagen 2" },
        { src: "/images/Productos/hero/01P20.jpg", alt: "Imagen 3" },
      ],
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del producto 2",
      manufactureDate: "2025-03-10",
      price: 95000,
      sizes: ["S", "M", "L", "XL", "XLL"],
      reviewsCount: 35,
      recommendationPercentage: 95,
      quality: 85,
      satisfaction: 90,
      rating: 5,
      images: [
        { src: "/images/Productos/hero/01P20.jpg", alt: "Imagen 1" },
        { src: "/images/Productos/hero/01P20.jpg", alt: "Imagen 2" },
      ],
    },
  ];

  return {
    products,
    isLoading: false,
    error: null,
  };
};
