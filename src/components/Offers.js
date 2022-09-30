import React from 'react'
import OfferImage from './OfferImage.js'
import '../styles/Offer.css'

const Offers = (props) => {
  const {offer} = props;
  return (
    <div className='offersSection'>

        {offer.map((item, index) => (
          <OfferImage key={item.image} index={index} src={item.image} link={item.url} />
        ))}


    </div>
  )
}

export default Offers