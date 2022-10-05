import React from 'react'
import "../styles/StarProduct.css"

const StarProduct = (props) => {
    const {starProduct} = props;
  return (
    <div className='starProduct'>
        
        <a className='product grid-col-span-2 grid-row-span-2' href={starProduct[0].url}> <img src={starProduct[0].image} alt="1st Product" /></a>
        <a className='product' href={starProduct[1].url}> <img src={starProduct[1].image} alt="2nd Product" /></a>
        <a className='product' href={starProduct[2].url}> <img src={starProduct[2].image} alt="3rd Product" /></a>
        <a className='product grid-col-span-2' href={starProduct[3].url}> <img src={starProduct[3].image} alt="4th Product" /></a>

    </div>
  )
}

export default StarProduct