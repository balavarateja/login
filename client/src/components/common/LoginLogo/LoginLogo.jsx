import React from 'react'
import './LoginLogo.css'
import Image3 from '../../../images/Vector (2).png'
import Image4 from '../../../images/Vector.png'

const LoginLogo = (props) => {
  const { text } = props
  return (
    <>
      <div className="h3t">
        <h1>Sign In </h1>
      </div>
      <div className="h4t">
        <h2>with</h2>
      </div>

      <div>
        <img className="vector3" src={Image3} alt="" />
      </div>

      <div className="vector4">
        <img src={Image4} alt="" />
      </div>
    </>
  )
}

export default LoginLogo
