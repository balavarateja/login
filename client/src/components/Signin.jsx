import React from 'react'
import Formlogin from '../Forminput/Formlogin'
import '../components/login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import GreyButton from './common/GreyButton/GreyButton'
import WhiteButton from './common/WhiteButton/WhiteButton'
import RightImage from './common/RightImage/RightImage'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import LoginText from './common/loginText/LoginText'
import LoginLogo from './common/LoginLogo/LoginLogo'

const Signin = () => {
  const [values, setValues] = useState({
    emailId: '',
    password: '',
    RememberMe: '',
  })
  const [visible, setVisible] = useState(true)
  const input = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email ID',
      errorMessage: 'Please enter a valid email address',
      label: 'Email ID',
      required: true,
    },
    {
      id: 2,
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
      id: 3,
      name: 'Remember me',
      type: 'checkbox',
      // text: 'Remember Me',
      // label: 'Remember me',
      placeholder: 'Remember me',
      required: true,
      setVisible,
      // input: 'remember me',
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
      <div className="Login">
        <div className="left-1">
          <form onSubmit={handleSubmit}>
            <LoginLogo></LoginLogo>
            {input.map((input) => (
              <Formlogin
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <div className="btn3">
              <GreyButton text="Login"></GreyButton>
            </div>
            <div className="btn-f">
              <Link to="/forgotpassword">
                <WhiteButton text="Forgot Password"></WhiteButton>
              </Link>
            </div>
          </form>
        </div>
        <div className="right-1">
          <div className="star_1">
            <div className="btn4">
              <Link to="/">
                <GreyButton text="Signup"></GreyButton>
              </Link>
            </div>

            <div>
              <RightImage></RightImage>
              <LoginText></LoginText>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
