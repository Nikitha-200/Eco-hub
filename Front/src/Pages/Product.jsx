import { useContext } from 'react';
import React from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id ===Number(productId));
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product
