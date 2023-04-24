import React, { useState, useEffect } from 'react';
import productImage from "../../assets/product.png";
import { ADD_FAVORITE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { getFaveProductIds, saveFaveIds } from '../../utils/helpers';

function ProductItem(product) {

  const {
    id,
    // image,
    productName,
    price,
    description,
    quantity
  } = product;

  // State variables
  const [savedFaveProductIds, setSavedFaveProductIds] = useState(getFaveProductIds);
  // Return data about ADD_FAVORITE mutation
  const [addFavorite] = useMutation(ADD_FAVORITE);
  const bizId = Auth.getBusiness();

  useEffect(() => {
    return () => saveFaveIds(savedFaveProductIds)
  })

  // Grab user token if logged in 
  const handleAddFave = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // Grab product id to save to favorites
    const faveToSave = id


    if (!token) {
      return false;
    }
    try {
      await addFavorite({
        variables: { productId: faveToSave }
      });
      setSavedFaveProductIds([...savedFaveProductIds, faveToSave]);
    } catch (err) {
      console.error(err);
    }
  }

  // React Favorite product card
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
        {!bizId && (
          <button
            disabled={savedFaveProductIds?.some((savedFaveProductId) => savedFaveProductId === id)}
            type="button"
            className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 favorite-button"
            onClick={() => {
              handleAddFave();
            }}
          >
            {savedFaveProductIds?.some((savedFaveProductId) => savedFaveProductId === id)
              ? 'Saved!'
              : 'Add to Favorites'}
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductItem;
