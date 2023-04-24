import React from 'react';
import { useQuery } from '@apollo/client';
import Business from '../Business'
import { QUERY_BUSINESSES } from '../../utils/queries';

function BusinessList() {

  const { loading, data } = useQuery(QUERY_BUSINESSES);
  // Chaining to check if data exists otherwise return empty array
  const businesses = data?.businesses || [];

  // Give time for data to load
  if(loading) {
    return <div>Loading...</div>
  }
  // React container to map over mulitple businesses in array
  return (
    <div className='business-container'>
      <h2>Bexar Market Businesses</h2>
        <div className="business-list">
          {businesses.map((business) => (
            <Business
              key={business._id}
              _id={business._id}
              image={business.image}
              businessName={business.businessName}
              description={business.description}
              category={business.category}
            />
          ))}
        </div>
    </div>    
  );
}

export default BusinessList;
