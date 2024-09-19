import styles from '../styles/styles.module.css';
import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

// Renombramos la interfaz Props a ProductTitleProps
export interface ProductTitleProps { 
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle: React.FC<ProductTitleProps> = ({ title, className, style }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title || product.title}
    </span>
  );
};
