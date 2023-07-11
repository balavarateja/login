import React from 'react'
import './BlueButton.css'

const BlueButton = (props) => {
  const { text } = props
  return (
    <>
      <button className="blue-button">{text}</button>
    </>
  )
}

export default BlueButton
