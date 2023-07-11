import React, { useState } from 'react'
import Formemaillink from '../../../Forminput/Formemaillink'
import '../EmailId/EmailId.css'

const EmailId = (props) => {
  const { text } = props
  const [values, setValues] = useState({
    emailId: '',
  })

  const input = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email ID',
      errorMessage: 'Please enter your registered email',
      required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="EmailId"
          type="email"
          placeholder="Email Id"
          name="Email Id"
          errorMessage="Please enter a valid email address"
        ></input>
      </form>
    </>
  )
}

export default EmailId
