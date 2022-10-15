import Carousel from 'react-bootstrap/Carousel'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/slider.css"




const Slider = ({startImage, getImageBrightness}) => {

  
  return (

    <div>

      

      <div className='carousel-slider-img'>

  

        <Carousel variant={"dark"} prevLabel={false} nextLabel={false} indicators={false} fade={true} interval={5000} 
        
        onSlid={(banner) => {
          
          getImageBrightness(startImage[banner])
          
        }}> 
          

    {
      
      startImage.map((item, index) => (
      

        <Carousel.Item banner={item} key={index.toString()}>
            
          <img className='d-block w-100' id="carousel-img" src={item} alt="" />
        
        </Carousel.Item>

        

      ))


     }

        </Carousel>
    </div>

    </div>    

    
  )
  
}

export default Slider




  



