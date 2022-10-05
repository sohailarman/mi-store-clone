import "../styles/App.css";
import React, {useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PreNavbar from "./PreNavbar.js";
import NavBar from "./NavBar";
import Slider from "./Slider"
import Offers from "./Offers.js"
import Divider from "../components/Divider.js"
import StarProduct from "../components/StarProduct.js"
import HotAccessoriesMenu from "../components/HotAccessoriesMenu.js"
import HotAccessories from "../components/HotAccessories.js";
import data from "../data/data.json"


function App() {

  const [toggleClass, setToggleClass] = useState(false);

  return (
  <Router>
    
    <PreNavbar />

    <NavBar toggleClass={toggleClass} logo={data.logo}/>

    <Slider toggleClass={toggleClass} setToggleClass={setToggleClass} startImage={data.banner.start} />

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

    

    
    
    
  </Router>
  );
}

export default App;
