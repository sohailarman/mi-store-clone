import React from 'react'
import NavCard from "../components/NavCard.js"
import "../styles/NavOptions.css"



const NavOptions = (props) => {
    const {xiaomiPhones, redmiPhones, tv, laptops, accessories, home, audio, navMenuPop, setNavMenuPop} = props;

            const changeNav = () => {
                    setNavMenuPop(false)
                    window.location.pathname = "/";
            }

            
                if(navMenuPop) {
                    return (

                        <div onMouseLeave={changeNav} className={navMenuPop ? "navWrapper" : "hidden"}>
    
                        <div className='navOptions'>
                            <hr />
                            <div className='navInside'>
                            {
                                xiaomiPhones && xiaomiPhones.map((item) => (
                                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                                ))
                            }
                            {
                                redmiPhones && redmiPhones.map((item) => (
                                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                                ))
                            }
                            {
                                tv && tv.map((item) => (
                                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                                ))
                            }
                            {
                                laptops && laptops.map((item) => (
                                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                                ))
                            }
    
                            {
                                accessories && accessories.map((item) => (
                                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                                ))
                            }
                            {
                                home && home.map((item) => (
                                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                                ))
                            }
                            {
                                audio && audio.map((item) => (
                                    <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                                ))
                            }
    
                            {
                                console.log(navMenuPop)
                            }
        
                            </div>
                        </div>
                        </div>
                    )
                }

                else {
                    return (
                        <div></div>
                    )
                }

                

            
            
    }



  

export default NavOptions