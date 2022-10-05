import React from 'react'
import { Link, Route } from 'react-router-dom'
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
  return (

    <div className='hotAccessoriesMenu'>
        <Link onMouseEnter={(e) => document.getElementById("hotaccess1").click()} id='hotaccess1' className='HotAccessoriesLink' to="/music">Music Store</Link>
        <Link onMouseEnter={(e) => document.getElementById("hotaccess2").click()} id='hotaccess2' className='HotAccessoriesLink' to="/smartDevices">Smart Devices</Link>
        <Link onMouseEnter={(e) => document.getElementById("hotaccess3").click()} id='hotaccess3' className='HotAccessoriesLink' to="/home">Home</Link>
        <Link onMouseEnter={(e) => document.getElementById("hotaccess4").click()} id='hotaccess4' className='HotAccessoriesLink' to="/lifestyle">Lifestyle</Link>
        <Link onMouseEnter={(e) => document.getElementById("hotaccess5").click()} id='hotaccess5' className='HotAccessoriesLink' to="/mobileAccessories">Mobile Accessories</Link>

    </div>
  )
}

export default HotAccessoriesMenu