import React from 'react';
import productImage from "../../assets/product.png"

function BusinessProductItem(product) {

  const {
    // image,
    productName,
    // _id,
    price,
    description,
    quantity
  } = product;

  // React product 'card' with info
  return (
    <div className="card px-1 py-1">
      <img className='product-image'
        alt={productName}
        src={productImage}
      />
      <div className='product-info'>
        <p>{productName}</p>
        <div>{description}</div>
        <span>Price: {price}</span>
        <span>{quantity} in stock</span>
      </div>
    </div>
  );
}

export default BusinessProductItem;