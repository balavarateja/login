import React from 'react'
import '../components/Success.css'
import Image from '../images/Rectangle 1175.png'
import Image1 from '../images/Star_4.png'
import { Link } from 'react-router-dom'
import GreyButton from './common/GreyButton/GreyButton'
import LeftImage from './common/LeftImage/LeftImage'
import SignupText from './common/SignupText/SignupText'

const Success = () => {
  return (
    <div className="full">
      <img src={Image} alt="" />
      <div className="left">
        <div className="star">
          <LeftImage></LeftImage>
          <SignupText></SignupText>

          <div className="btn2">
            <Link to={'/signin'}>
              <GreyButton text="Sign In"></GreyButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="t1">
          <h3>Congratulations</h3>
        </div>
        <div className="t2">
          <p>You Are Successfully Signup</p>
        </div>
      </div>
    </div>
  )
}

export default Success
