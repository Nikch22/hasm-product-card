import React, { createContext, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/ProductInterfaces';

// Creamos el contexto para el producto
export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

// Renombramos Props a ProductCardProps
export interface ProductCardProps {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  initialValues: InitialValues;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  children, 
  product, 
  className, 
  style, 
  onChange, 
  value,
  initialValues 
}) => {
  // Llamamos a nuestro custom hook para manejar el estado del producto
  const { counter, isMaxCountReached, increaseOrDecreaseCounterBy, reset } = useProduct({
    product, 
    onChange, 
    value, 
    initialValues
  });

  return (
    // Proveemos el contexto con los valores actuales del producto
    <Provider value={{ 
      counter, 
      ...initialValues,
      increaseOrDecreaseCounterBy, 
      product 
    }}>
      <div className={ `${styles.productCard} ${className ?? ''}` } style={ style }>
        { 
          // Renderizamos los children pasando las funciones y estados necesarios
          children({ 
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount, 
            product: product,
            increaseOrDecreaseCounterBy, 
            reset 
          }) 
        }
      </div>
    </Provider>
  );
};
