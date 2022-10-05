import React from 'react'
import "../styles/HotItemCard.css"

const HotItemCard = (props) => {
    const {name, price, image, index} = props;
  return (
    <div className='HotItemCard'>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard