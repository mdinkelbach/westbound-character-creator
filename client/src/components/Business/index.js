import React from 'react';
import { Link } from "react-router-dom";
import businessImage from "../../assets/supportSmallBusiness.jpg"

function Business(business) {

  const {
    image,
    businessName,
    _id,
    categories,
    description
  } = business;

  // React business 'card' with info
  return (
    <div className="card px-1 py-1">
      <Link to={`/business/${_id}`}>
        <img className='card-image'
          alt={businessName}
          src={businessImage}
        />
        <p className='card-title'>{businessName}</p>
      </Link>
      <div>
        <div className='card-desc'>{description}</div>
        <div className='card-cata'>{categories}</div>
      </div>
    </div>
  );
}

export default Business;
