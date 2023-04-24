import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import UserFavoriteItem from "../UserFavoriteItem"

function UserFavoriteList() {
    // Return data about QUERY_ME mutation
    const { loading, data } = useQuery(QUERY_ME);

    // React container to map over mulitple products in favorites array
    return (loading ? <div>Loading data...</div> : (
        <div className='favorite-group'>
            <h2>Your Favorited Products</h2>
            <div className="favorite-group-items">
                {data.me.favorites?.map((favorite, index) => (
                    <UserFavoriteItem
                        key={favorite._id}
                        _id={favorite._id}
                        image={favorite.image}
                        productName={favorite.productName}
                        price={favorite.price}
                        description={favorite.description}
                        quantity={favorite.quantity}
                    />
                ))}
            </div>
        </div>
    ));
}

export default UserFavoriteList;