import React from 'react'
import Image from '../images/Star 4.png'
import '../components/reset.css'

const Reset = () => {
  return (
    <div className="reset">
      <div>
        <div className="left">
          <button className="btnl">Reset Via Link</button>
        </div>
        <div>
          <button className="btnc">Reset Via Code</button>
        </div>
      </div>

      <div className="right">
        <img src={Image} className="fstar" alt="" />
      </div>
    </div>
  )
}

export default Reset
