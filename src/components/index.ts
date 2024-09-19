import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

// Exportamos todo lo relacionado a los botones, imagen y título
export * from "./ProductButtons";
export * from "./ProductImage";
export * from "./ProductTitle";

// Exportación de la estructura HOC de ProductCard
export const ProductCard = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons,
});

export default ProductCard;
