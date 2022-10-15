import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/nav.css"


const NavBar = (props) => {
  const {toggleClass, logo, navMenuPop, setNavMenuPop, setToggleClass} = props;

  
  const searchIcon = <svg className={toggleClass ? "searchIcon" : "searchIcon-light"} xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.475 20.15-6.25-6.25q-.75.625-1.725.975-.975.35-1.95.35-2.425 0-4.087-1.663Q3.8 11.9 3.8 9.5q0-2.4 1.663-4.063 1.662-1.662 4.062-1.662 2.4 0 4.075 1.662Q15.275 7.1 15.275 9.5q0 1.05-.375 2.025-.375.975-.975 1.65L20.2 19.45ZM9.55 14.225q1.975 0 3.35-1.362Q14.275 11.5 14.275 9.5T12.9 6.137q-1.375-1.362-3.35-1.362-2 0-3.375 1.362Q4.8 7.5 4.8 9.5t1.375 3.363q1.375 1.362 3.375 1.362Z"/></svg>

  const changeNav = () => {
    if(navMenuPop === false) {
      setNavMenuPop(true)
      setToggleClass(true)
    }
}

  return (

    <div className='nav'>


      <div className='logo' >
        <Link to="/"> <img id="logoImage" src={logo} alt="Not"/> </Link>
      </div>

      <div className='navlinks'>

      <Link onMouseEnter={(e) => document.getElementById("navlink1").click()} onClick={changeNav} id="navlink1" className={toggleClass ? "navlink" : "navlink-light"} to="/xiaomiPhones/">Xiaomi Phones</Link>
      <Link onMouseEnter={(e) => document.getElementById("navlink2").click()} onClick={changeNav} id="navlink2" className={toggleClass ? "navlink" : "navlink-light"} to="/redmiPhones/">Redmi Phones</Link>
      <Link onMouseEnter={(e) => document.getElementById("navlink3").click()} onClick={changeNav} id="navlink3" className={toggleClass ? "navlink" : "navlink-light"} to="/tv/">TV</Link>
      <Link onMouseEnter={(e) => document.getElementById("navlink4").click()} onClick={changeNav} id="navlink4" className={toggleClass ? "navlink" : "navlink-light"} to="/laptops/">Laptops & Tablets</Link>
      <Link onMouseEnter={(e) => document.getElementById("navlink5").click()} onClick={changeNav} id="navlink5" className={toggleClass ? "navlink" : "navlink-light"} to="/accessories/">Accessories</Link>
      <Link onMouseEnter={(e) => document.getElementById("navlink6").click()} onClick={changeNav} id="navlink6" className={toggleClass ? "navlink" : "navlink-light"} to="/home/">Home</Link>
      <Link onMouseEnter={(e) => document.getElementById("navlink7").click()} onClick={changeNav} id="navlink7" className={toggleClass ? "navlink" : "navlink-light"} to="/audio/">Audio</Link>

    </div>
    
    <div className={toggleClass ? "searchbox" : "searchbox-light"}>
      <input type="text" name="search" placeholder='Search Products' />
      {searchIcon}


    </div>

    

    </div>
    
  )
}

export default NavBar