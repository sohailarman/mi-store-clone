import Carousel from 'react-bootstrap/Carousel'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/slider.css"




const Slider = ({setToggleClass, startImage}) => {

  function getImageBrightness(image) {

    var img = document.createElement("img");
    img.src = image;
    img.crossOrigin = 'anonymous';
    img.style.display = "none";
    document.body.appendChild(img);
  
    var colorSum = 0;
  
    img.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
  
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this,0,0);
  
        var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        var data = imageData.data;
        var r,g,b,avg;
  
          for(var x = 0, len = data.length; x < len; x+=4) {
            r = data[x];
            g = data[x+1];
            b = data[x+2];
  
            avg = Math.floor((r+g+b)/3);
            colorSum += avg;
        }
  
        var brightness = Math.floor(colorSum / (this.width*this.height));
        // console.log(brightness);
        // console.log(image);
  
        if (brightness > 95) {
          setToggleClass(true)

        }
        else {
          setToggleClass(false)
        }
  
    }
  }

  

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




  



