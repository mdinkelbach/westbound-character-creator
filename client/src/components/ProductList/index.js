import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ProductItem from "../ProductItem"
import { QUERY_BUSINESS } from '../../utils/queries';
import businessImage from "../../assets/supportSmallBusiness.jpg"
import productImage from "../../assets/product.png"


const ProductList = () => {
    // Retrieving value of route parameter `:id`
    const businessId = useParams();

    // Return data about QUERY_BUSINESS mutation an adding variables
    const { loading, data } = useQuery(QUERY_BUSINESS, {
        variables: { id: businessId.id },
    });
    // Chaining to check if data exists otherwise return empty array
    const business = data?.business || [];

    // Allow time for data to load
    if (loading) {
        return <h2>Loading...</h2>
    }
    // React product list for business profile
    return (
        <div className='business'>
            <div className="business-title">
                <div>
                    <img
                        alt={business.businessName}
                        src={businessImage}
                    />
                </div>
                <div className='business-info'>
                    <p>{business.businessName}</p>
                    <div>
                        <div className='business-desc'>{business.description}</div>
                        <div>{business.categories}</div>
                    </div>
                </div>
            </div>
            <h2 className='products'>Our Products</h2>
            <div className="product-list">
                {/* added checks here to see if business data and products data exist before mapping - presumed timing issue */}
                {business?.products?.map((product) => (
                    <ProductItem
                        key={product._id}
                        id={product._id}
                        image={productImage}
                        productName={product.productName}
                        price={product.price}
                        description={product.description}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;
