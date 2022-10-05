import React from 'react'
import HotItemCard from "../components/HotItemCard.js"
import "../styles/HotAccessories.css"

const HotAccessories = (props) => {
    const {music, musicCover, smartDevices, smartDevicesCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover} = props;
  return (
    <div className='HotAccessories'>
        <div>
        <img src={musicCover || smartDevicesCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="Cover" />
        </div>

        <div>
            {
                
            
            music && music.map((item, index) => (
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
            
            }
            {
            
            smartDevices && smartDevices.map((item, index) => (
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
            
            }
            {
            
            home && home.map((item, index) => (
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
            
            }
            {
            
            lifeStyle && lifeStyle.map((item, index) => (
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
            
            }
            {
            
            mobileAccessories && mobileAccessories.map((item, index) => (
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))
            
            }

            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
            
        </div>

    </div>
  )
}

export default HotAccessories