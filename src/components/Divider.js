import React from 'react'
import "../styles/Divider.css"

const Divider = (props) => {
    const {text} = props;
  return (
    <div className='heading'>

        <div></div>
        <p>{text}</p>
        <div></div>

    </div>
  )
}

export default Divider