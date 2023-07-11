import React from 'react'
import './Forgottext.css'

const Forgottext = (props) => {
  const { text } = props
  return (
    <>
      <div className="text1">
        <h4>Forgot Password </h4>
      </div>

      <div className="text2">
        <h6>Enter the Email Associated with your</h6>
      </div>
      <div className="text3">
        <h6>account we'll send a link to reset</h6>
      </div>
      <div className="text4">
        <h6>your password</h6>
      </div>
    </>
  )
}

export default Forgottext
