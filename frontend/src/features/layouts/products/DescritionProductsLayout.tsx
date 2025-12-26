import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "@/features/ui/typography/Title";
import Rating from "@/features/ui/utils/Rating";
import ProgressBar from "@/features/ui/progress/ProgressBar";
import PersonalizeButton from "@/features/ui/button/PersonalizeButton";
import type { Product } from "../../../modules/store/Products/hooks/useProducts";
import Text from "@/features/ui/typography/Text";
import BuyButton from "@/features/ui/button/PayButton";
import LikeCheckbox from "@/features/ui/chechbox/LikeCheckbox";
import SizeSelector from "@/features/ui/utils/Size";

interface ProductInfoLayoutProps {
  product: Product;
}

const ProductInfoLayout: React.FC<ProductInfoLayoutProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );
  return (
    <section className="flex flex-col md:flex-row w-11/12 my-5 mx-auto gap-2">
      {/* Lado izquierdo: información básica */}
      <div className="flex-1
    flex flex-col
    gap-6
    p-4
    border border-(--color-cuaternario)
    rounded-xl
    bg-white/50">
        {/* Header del producto */}
        <div className="flex flex-col items-center gap-3">
          <Title variant="fascinate" tone="primary">
            {product.name}
          </Title>

          <Text variant="parrafos" tone="tertiary">
            {product.description}
          </Text>
        </div>

        {/* Info del producto: precio + fecha | tallas */}
        <div
          className="   
    grid
    grid-cols-1
    md:grid-cols-2
  "
        >
          {/* Lado izquierdo: Precio + Fecha */}
          <div className="flex flex-col justify-center gap-3">
            {/* Precio */}
            <div className="flex flex-col items-center ">
              <Text variant="byline" tone="secondary">
                Precio
              </Text>
              <Text variant="subtitulo2" tone="primary" className="font-bold">
                {product.price ? `$${product.price}` : "Consultar"}
              </Text>
              <Text variant="byline" tone="secondary">
                Fabricación
              </Text>
              <Text variant="subtitulo2" tone="primary" className="font-bold">
                {product.manufactureDate || "N/A"}
              </Text>
            </div>
          </div>

          {/* Lado derecho: Tallas */}
          <div className="flex flex-col gap-3">
            {/* Selector de tallas */}
            <div className="flex justify-center">
              <SizeSelector
                sizes={product.sizes ?? []}
                value={selectedSize}
                onChange={setSelectedSize}
              />
            </div>

            <div className="flex justify-center">
              <Link
                to="/tallas"
                className="text-xs text-(--color-primario) underline"
              >
                Ver guía de tallas
              </Link>
            </div>
          </div>
        </div>

        {/* Acciones (botones) */}
        <div className="flex justify-center items-center gap-3 pt-2 border-t border-(--color-cuaternario)">
          <LikeCheckbox />
          <BuyButton variant="buy" />
          <BuyButton variant="cart" />
        </div>
      </div>

      {/* Lado derecho: reseñas */}
      <div className="flex-1
    flex flex-col
    gap-6
    p-4
    border border-(--color-cuaternario)
    rounded-xl
    bg-white/50">
        <Title variant="fascinate" tone="primary">
          Reseñas del producto
        </Title>
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {/* IZQUIERDA — Resumen */}
          <div className="flex flex-col items-center gap-4">
            {/* Rating */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-(--color-primario)">
                {product.rating?.toFixed(1) || "0.0"}
              </span>

              <div className="flex flex-col gap-1">
                <Rating
                  value={product.rating || 0}
                  size="sm"
                  variant="default"
                  readonly
                />
                <Text variant="caption" tone="tertiary" size="xs">
                  {product.reviewsCount || 0} reseñas
                </Text>
              </div>
            </div>

            {/* Recomendación */}
            <div className="flex  gap-3 text-sm">
              {/* Porcentaje protagonista */}
              <div
                className="
    flex items-center justify-center
    w-12 h-8
    rounded-full
    bg-(--color-primario)/15
  "
              >
                <Text variant="byline" tone="primary" className="font-bold">
                  {product.recommendationPercentage || 80}%
                </Text>
              </div>

              {/* Texto */}
              <Text variant="cardMeta" tone="tertiary">
                de clientes recomiendan este producto
              </Text>
            </div>
          </div>

          {/* DERECHA — Barras */}
          <div className="flex flex-col w-full justify-center ">
            <ProgressBar
              label={
                <Text variant="byline" tone="secondary">
                  Calidad
                </Text>
              }
              percentage={product.quality || 90}
            />
            <ProgressBar
              label={
                <Text variant="byline" tone="secondary">
                  Satisfacción
                </Text>
              }
              percentage={product.satisfaction || 75}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-(--color-cuaternario)" />

        {/* CTA inferior */}
        <div className="pt-2  border-(--color-cuaternario2) flex justify-center">
          <PersonalizeButton />
        </div>
      </div>
    </section>
  );
};

export default ProductInfoLayout;
