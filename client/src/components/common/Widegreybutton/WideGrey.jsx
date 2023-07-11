import React from 'react'
import '../Widegreybutton/WideGrey.css'

const WideGrey = (props) => {
  const { text } = props
  return (
    <>
      <button className="Widegrey-button">{text}</button>
    </>
  )
}

export default WideGrey
