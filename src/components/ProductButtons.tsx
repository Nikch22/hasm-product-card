import styles from '../styles/styles.module.css';
import React, { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

// Definimos una interfaz específica para los botones
export interface ProductButtonsProps { 
  className?: string; 
  style?: CSSProperties;
}

export const ProductButtons: React.FC<ProductButtonsProps> = ({ className, style }) => {
  const { counter, count, maxCount, increaseOrDecreaseCounterBy } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => counter === maxCount,
    [counter, maxCount],
  );
  

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button 
        className={styles.buttonMinus}
        onClick={() => increaseOrDecreaseCounterBy(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button 
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} 
        onClick={() => increaseOrDecreaseCounterBy(+1)}
      >
        +
      </button>
    </div>
  );
};
