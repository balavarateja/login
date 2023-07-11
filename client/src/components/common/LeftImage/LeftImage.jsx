import React from 'react'
import './LeftImage.css'
import image from '../../../images/Star_4.png'

const LeftImage = (props) => {
  const { LeftImage } = props
  return (
    <div>
      <img className="Left-Image" src={image} alt="" />
    </div>
  )
}

export default LeftImage
