# HASM-PRODUCT-CARD

Este es un paquete de pruebas de despliegue en NPM

#### ~HASM

## Ejemplo

```
import { ProductImage, ProductTitle, ProductButtons } form 'hasm-product-card'
```

```
<ProductCard
product={ product }
initialValues= { {
  count: 4,
  maxCount: 10
} }
>

{
  ( { reset, increaseOrDecreaseCounterBy, isMaxCountReached, count } ) => (

    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
    
    )
  }

</ProductCard>
```