import React from 'react'
import '../App.css'
import '../Forminput/Forminput.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../Forminput/FormInput'
import GreyButton from './common/GreyButton/GreyButton'
import SignupLogo from './common/Signuplogo/SignupLogo'
import SignupText from './common/SignupText/SignupText'
import LeftImage from './common/LeftImage/LeftImage'

const Signup = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    confirmPassword: '',
    phone: '',
  })
  const input = [
    {
      id: 1,
      name: 'First Name',
      type: 'text',
      placeholder: 'First Name',
      errorMessage:
        "Firstname should be 3-16 characters and shouldn't include any special character!",
      label: 'First Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'last name',
      type: 'text',
      placeholder: 'Last Name',
      errorMessage:
        "Lastname should be 3-16 characters and shouldn't include any special character!",
      label: 'Last Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Email ID',
      errorMessage: 'Please enter a valid email address',
      label: 'User ID/Email ID',
      required: true,
    },
    {
      id: 4,
      name: 'Password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: 'phone number',
      type: 'text',
      placeholder: 'Phone Number',
      errorMessage: 'Please enter a valid Phone Number',
      label: 'Phone Number',
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
    <div>
      <div className="Signup">
        <div className="left">
          <div className="star">
            <div className="star">
              <LeftImage></LeftImage>
              <SignupText></SignupText>
              <div className="btn2">
                <Link to="./signin">
                  <GreyButton text="Sign In"></GreyButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <SignupLogo></SignupLogo>
          <div>
            <form onSubmit={handleSubmit}>
              {input.map((input) => (
                <FormInput
                  className="SignupInput"
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <div className="btn1">
                <GreyButton text="Sign Up"></GreyButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
