import React, { CSSProperties, useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';

// Renombramos la interfaz Props a ProductImageProps
export interface ProductImageProps { 
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage: React.FC<ProductImageProps> = ({ img, className, style }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string = img || product.img || noImage;

  return (
    <img 
      src={imgToShow}
      style={style}
      className={`${styles.productImg} ${className}`} 
      alt="Product Image" 
    />
  );
};
