import "../styles/App.css";
import React, {useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PreNavbar from "./PreNavbar.js";
import NavBar from "./NavBar";
import NavOptions from "../components/NavOptions.js"
import Slider from "./Slider"
import Offers from "./Offers.js"
import Divider from "../components/Divider.js"
import StarProduct from "../components/StarProduct.js"
import HotAccessoriesMenu from "../components/HotAccessoriesMenu.js"
import HotAccessories from "../components/HotAccessories.js";
import ProductReviews from "../components/ProductReviews.js"
import Videos from "../components/Videos.js"
import Banner from "../components/Banner.js"
import Footer from "../components/Footer.js"
import data from "../data/data.json"



function App() {

  const [toggleClass, setToggleClass] = useState(false);
  const [navMenuPop, setNavMenuPop] = useState(false);

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
  <Router>
    
    <PreNavbar />

    <NavBar toggleClass={toggleClass} setToggleClass={setToggleClass} logo={data.logo} navMenuPop={navMenuPop} setNavMenuPop={setNavMenuPop}/>

    <Routes>
    <Route path ="/" exact element={  <NavOptions setNavMenuPop={setNavMenuPop} navMenuPop={navMenuPop} xiaomiPhones={data.miPhones} />  }  />
    <Route path ="/xiaomiPhones/" exact element={  <NavOptions setNavMenuPop={setNavMenuPop} navMenuPop={navMenuPop} xiaomiPhones={data.miPhones} />  }  />
    <Route path ="/redmiPhones/" exact element={  <NavOptions setNavMenuPop={setNavMenuPop} navMenuPop={navMenuPop} redmiPhones={data.redmiPhones} />  }  />
    <Route path ="/tv/" exact element={  <NavOptions setNavMenuPop={setNavMenuPop} navMenuPop={navMenuPop} tv={data.tv} />  }  />
    <Route path ="/laptops/" exact element={  <NavOptions setNavMenuPop={setNavMenuPop} navMenuPop={navMenuPop} laptops={data.laptop} />  }  />
    <Route path ="/accessories/" exact element={  <NavOptions setNavMenuPop={setNavMenuPop} navMenuPop={navMenuPop}  accessories={data.accessories} />  }  />
    <Route path ="/home/" exact element={  <NavOptions setNavMenuPop={setNavMenuPop} navMenuPop={navMenuPop} home={data.home} />  }  />
    <Route path ="/audio/" exact element={  <NavOptions setNavMenuPop={setNavMenuPop} navMenuPop={navMenuPop} audio={data.audio}/>  }  />
    </Routes>

    

    <Slider getImageBrightness={getImageBrightness} toggleClass={toggleClass} startImage={data.banner.start} />

    <Offers offer={data.offer} />

    <Divider text={"STAR PRODUCTS"}/>

    <StarProduct starProduct={data.starProduct} />
    
    <Divider text={"HOT ACCESSORIES"}/>

    <HotAccessoriesMenu />

    <Routes>
    <Route exact path ="/" element={  <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />  }  />
    <Route exact path ="/music" element={  <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />  }  />
    <Route exact path ="/smartDevices" element={  <HotAccessories smartDevices={data.hotAccessories.smartDevice} smartDevicesCover={data.hotAccessoriesCover.smartDevice} />  }  />
    <Route exact path ="/home" element={  <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />  }  />
    <Route exact path ="/lifeStyle" element={  <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />  }  />
    <Route exact path ="/mobileAccessories" element={  <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />  }  />
    </Routes>

    <Divider text={"PRODUCT REVIEWS"}/>

    <ProductReviews productReviews={data.productReviews}/>

    <Divider text={"VIDEOS"}/>

    <Videos videos={data.videos}/>

    <Divider text={"IN THE PRESS"}/>

    <Banner banner={data.banner.end}/>
    
    <Footer footer={data.footer}/>



  </Router>
  )
}

export default App;
