import React from "react";
import clsx from "clsx";

interface ProductsGridProps {
  children: React.ReactNode;
  className?: string;

  /** Máximo de filas visibles antes de mostrar scroll */
  maxRows?: number;

  /** Altura estimada de cada card (debe coincidir con ProductCard) */
  cardHeight?: number;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  children,
  className,
  maxRows = 3,
  cardHeight = 500,
}) => {
  return (
    <div
      className={clsx("", className)}
      style={{
        maxHeight: maxRows * cardHeight,
      }}
    >
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-2
          lg:grid-cols-4
          xl:grid-cols-4
          gap-3
        "
      >
        {children}
      </div>
    </div>
  );
};

export default ProductsGrid;
