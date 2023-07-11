import React from 'react'
import GreyButton from '../common/GreyButton/GreyButton'
import WhiteButton from '../common/WhiteButton/WhiteButton'
import BlueButton from '../common/BlueButton/BlueButton'
import LeftImage from '../common/LeftImage/LeftImage'
import RightImage from '../common/RightImage/RightImage'
import Forgottext from '../common/forgottext.jsx/Forgottext'

const DemoComponents = (props) => {
  return (
    <>
      {/* <GreyButton text="This is demo grey button"></GreyButton>
      <WhiteButton
        style={{ marginTop: '50px' }}
        text="This is demo white button"
      ></WhiteButton>
      <BlueButton
        style={{ marginTop: '50px' }}
        text="This is demo blue button"
      ></BlueButton>
      <LeftImage></LeftImage>
      <RightImage></RightImage> */}
      <Forgottext></Forgottext>
    </>
  )
}

export default DemoComponents
