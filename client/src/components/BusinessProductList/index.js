import React from 'react';
import Auth from "../../utils/auth";
import { useQuery } from '@apollo/client';
import BusinessProductItem from "../BusinessProductItem"
import { QUERY_BUSINESS } from '../../utils/queries';

function BusinessProductList() {

    const businessId = Auth.getBusiness();

    // Return data about QUERY_BUSINESS mutation an adding variables
    const { loading, data } = useQuery(QUERY_BUSINESS, {
        variables: { id: businessId },
    });
    // Chaining to check if data exists otherwise return empty array
    const business = data?.business || [];

    // Allow time for data to load
    if (loading) {
        return <h2>Loading...</h2>
    }
    // React container to map over mulitple business products in array
    return (
        <div className='business-products'>
            <h2>Your Products</h2>
            <div className="flex-row">
                {business.products.map((product) => (
                    <BusinessProductItem
                        key={product._id}
                        image={product.image}
                        productName={product.productName}
                        price={product.price}
                        description={product.description}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </div>
    );
}

export default BusinessProductList;