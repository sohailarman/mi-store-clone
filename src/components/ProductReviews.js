import React from 'react'
import ProductsReviewCard from "../components/ProductsReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = (props) => {
    const {productReviews} = props;
  return (
    <div className='ProductReviews'>
        {
            productReviews.map((item, index) => (
                <ProductsReviewCard price={item.price} name={item.name} image={item.image} index={index} review={item.review} key={item.image} />
            ))
        }
    </div>
  )
}

export default ProductReviews