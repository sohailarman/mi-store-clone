import React from 'react'

const OfferImage = (props) => {
    const {src, link, index} = props;

  return (

        <a href={link}> 
        
        <img src={src} alt={`${index} Offers`} /> 
        
        </a>
  )
}

export default OfferImage