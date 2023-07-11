import React from 'react'
import './SignupLogo.css'
import Image1 from '../../../images/Vector (2).png'
import Image2 from '../../../images/Vector.png'

const SignupLogo = (props) => {
  const { text } = props
  return (
    <>
      <div className="h1t">
        <h1>Sign Up </h1>
      </div>
      <div className="h2t">
        <h2>with</h2>
      </div>

      <div>
        <img className="vector1" src={Image1} alt="" />
      </div>

      <div className="vector2">
        <img src={Image2} alt="" />
      </div>
    </>
  )
}

export default SignupLogo
