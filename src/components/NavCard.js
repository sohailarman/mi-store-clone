import React from 'react'
import "../stylesNavCard.css"

const NavCard = (props) => {
    const {name, price, image, index} = props;
  return (
    <div className='NavCardOuter'>
    <div className='NavCard'>
        <img src={image} alt={`${index} phone`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
    </div>
  )
}

export default NavCard