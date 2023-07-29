import { useState } from 'react'
import './Login.css'
import axios from 'axios'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import * as React from 'react'
import GreyButton from '../GreyButton/GreyButton'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [visible, setVisible] = useState(true)

  const handleEmailId = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const handlepassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (event) => {
    debugger
    event.preventDefault()
    console.log('emaila nd password', email, password)
    axios
      .post('http://localhost:8000/api/users/signIn', {
        email: email,
        password: password,
      })
      .then((response) => {
        debugger
        console.log(response.data)
        alert('Successfully LoggedIn')
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
        alert(err.response.data.error.message)
      })
  }
  const EndAdorment = (visible, setVisible) => {
    return (
      <>
        <InputAdornment position="end">
          <div>
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              className="Icon"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
        </InputAdornment>
      </>
    )
  }

  // const sxStyles = {
  //   padding: '15px',
  //   width: '325px',
  //   height: '55px',
  //   fontFamily: 'Inter',
  //   fontStyle: 'normal',
  //   fontWeight: 400,
  //   fontSize: '24px',
  //   lineHeight: '29px',
  //   margin: '10px 5px 10px 5px',
  //   border: '1px solid grey',
  //   borderRadius: '100px',
  //   color: ' #cacaca',
  // }

  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form className="Login" onSubmit={handleSubmit}>
        <div>
          <input
            className="LoginEmailInput"
            label="email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailId}
            placeholder="User Id / Email Id"
            required
          />
        </div>

        <div className="B">
          <input
            className="InputPassword"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={handlepassword}
            required
            styles={{ border: 'hiddden' }}
          />
          {/* <IconButton className="Icon" styles={{}}></IconButton> */}
          <EndAdorment />
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            placeholder="Remember Me "
            text="Remember me "
          />
          <label className="RM" htmlFor="checkbox">
            Remember Me
          </label>
        </div>
        <div className="btn3">
          <GreyButton
            text="Login"
            type="submit"
            value="Login"
            onClick={handleSubmit}
          ></GreyButton>
        </div>
        <input className="btn3" type="submit" name="submit" />
      </form>
    </div>
  )
}

export default Login
