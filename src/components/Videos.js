import React from 'react'
import VideoCard from "../components/VideoCard.js"
import "../styles/Videos.css"

const Videos = (props) => {
    const {videos} = props;
  return (
    <div className='videos'>
        {

        videos.map((item, index) => (
            <VideoCard key={index} index={index} image={item.image} name={item.name} />

        ))

        }

    </div>
  )
}

export default Videos