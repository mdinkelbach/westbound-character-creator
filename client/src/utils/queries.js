import { gql } from '@apollo/client';

// Future development for search funciton
export const QUERY_CATEGORIES = gql`
    {
        categories {
            _id
            name
        }
    }
`;

// Returns all products
export const QUERY_ALL_PRODUCTS = gql`
    {
        products {
            _id
            productName
            description
            image
            price
            quantity
        }
    }
`;

// Return a single product by id
export const QUERY_PRODUCT = gql`
    query product ($id: ID!) {
        product(_id: $id) {
            _id
            productName
            description
            image
            price
            quantity
        }
    }
`;

// Return all businesses
export const QUERY_BUSINESSES = gql`
    query businesses {
        businesses {
            _id
            businessName
            email
            description
            image
            category {
                _id
                name
            }
            products {
                _id
                productName
                description
                image
                price
                quantity
            }
        }
    }
`;

// Return single business by id
export const QUERY_BUSINESS = gql`
    query business ($id: ID!) {
        business(businessId: $id) {
            _id
            businessName
            email
            description
            image
            category {
                _id
                name
            }
            products {
                _id
                productName
                description
                image
                price
                quantity
            }
        }
    }
`;

// Return single user
export const QUERY_ME = gql`
{
    me {
        userName
        email
        favorites {
            _id
            productName
            description
            image
            price
            quantity
        }
    }
}
`;