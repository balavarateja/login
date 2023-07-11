import React from 'react'
import Formemaillink from '../Forminput/Formemaillink'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../components/forgotpassword.css'
import Rightimage from './common/Rightimage1/Rightimage'
import Forgottext from './common/forgottext.jsx/Forgottext'
import WhiteButton from './common/WhiteButton/WhiteButton'
import WideGrey from './common/Widegreybutton/WideGrey'
import EmailId from './common/EmailId/EmailId'

const Emaillink = () => {
  return (
    <div>
      <div className="Emaillink">
        <Forgottext></Forgottext>
        <div className="left-2">
          <EmailId></EmailId>
          <div className="btn-fp">
            <WideGrey text="Request reset password link "></WideGrey>
          </div>
          <div className="btn-c">
            <WhiteButton text="Cancel"></WhiteButton>
          </div>
        </div>
        <div className="right-2">
          <div className="star_1">
            <div>
              <Rightimage></Rightimage>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emaillink
