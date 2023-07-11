import React from 'react'
import Image from '../../../images/Star_7.png'
import image from '../../../images/IMG_716.png'
import './Rightimage.css'

const Rightimage = (props) => {
  const { RightImage } = props
  return (
    <>
      <img className="rightimage" src={Image} alt="" />

      <img className="logo" src={image} alt="" />

      <div>
        <h2 className="imageText_9">Employee Portal</h2>
      </div>
    </>
  )
}

export default Rightimage
