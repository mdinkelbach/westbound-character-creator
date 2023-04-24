import React from 'react';
import { Link } from "react-router-dom";
import { removeFaveId } from '../../utils/helpers';
import { DELETE_FAVORITE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import productImage from "../../assets/product.png"


function UserFavoriteItem(product) {

  const {
    // image,
    productName,
    _id,
    price,
    description,
    quantity
  } = product;

  const [deleteFavorite, { error }] = useMutation(DELETE_FAVORITE, {
    update(cache, { data: { deleteFavorite } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: deleteFavorite },
        });
      } catch (err) {
        console.error(err);
      }
    },
  })

  const handleRemoveFave = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log('productId:', _id)
    if (!token) {
      return false;
    }
    try {
      const { data } = await deleteFavorite({
        variables: { productId: _id },
      });
      // Upon success, remove favorite id from localStorage
      removeFaveId(_id);
    } catch (err) {
      console.error(err);
    }
  };

  // React favorite product card
  return (
    <div className="card px-1 py-1 favorite-item">
        <img
          alt={productName}
          src={productImage}
        />
        <div className='favorite-info'>
        <p>{productName}</p>
        <span>Price: {price}</span>
        <span>{quantity} in stock</span>
        <div>{description}</div>
        <button
          type="button"
          className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          onClick={() => {
            handleRemoveFave(_id);
          }}
        >
          Delete Favorite
        </button>
      </div>
    </div>
  )
}

export default UserFavoriteItem;