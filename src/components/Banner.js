import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Banner = (props) => {
    const {banner} = props;
  return (
    <div>
        <Carousel fade keyboard={true}>


            {banner.map((item, index) => (
            
            <Carousel.Item key={item.image} id={"banner"} interval={3000}>
            
                <img className='d-block w-100' id='bannerImage' src={item.image} alt={`${index} banner`} />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.source}</p>
                        <u>Read More</u>
                    </Carousel.Caption>

                </Carousel.Item>
            ))}




        </Carousel>

    </div>
  )
}

export default Banner