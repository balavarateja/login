import React from 'react'
import Image from '../../../images/Star_7.png'
import './RightImage.css'

const RightImage = (props) => {
  const { RightImage } = props
  return (
    <div>
      <img className="right-image" src={Image} alt="" />
    </div>
  )
}

export default RightImage
