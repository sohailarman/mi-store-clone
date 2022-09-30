import "../styles/App.css";
import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PreNavbar from "./PreNavbar.js";
import NavBar from "./NavBar";
import Slider from "./Slider"
import Offers from "./Offers.js"
import data from "../data/data.json"


function App() {

  const [toggleClass, setToggleClass] = useState(false);

  return (
  <Router>
    
    <PreNavbar />

    <NavBar toggleClass={toggleClass} logo={data.logo}/>

    <Slider toggleClass={toggleClass} setToggleClass={setToggleClass} startImage={data.banner.start} />

    <Offers offer={data.offer} />

    
    
  </Router>
  );
}

export default App;
