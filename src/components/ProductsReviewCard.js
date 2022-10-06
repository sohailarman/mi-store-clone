import React from 'react'
import "../styles/ProductReviewCard.css"

const ProductsReviewCard = (props) => {
    const {image, review, name, price, index} = props;
  return (
    <div className='ProductReviewCard'>
        <img src={image} alt={`${index} product`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductsReviewCard