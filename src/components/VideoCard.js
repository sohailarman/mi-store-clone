import React from 'react'
import "../styles/VideoCard.css"


const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M13.333 31.583V8.25l18.334 11.667Z"/></svg>


const VideoCard = (props) => {
    const {image, name} = props;
  return (
    <div className='videoCard' style={{backgroundImage: `url(${image})`}}>
        <a href="#/">{playButton}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideoCard