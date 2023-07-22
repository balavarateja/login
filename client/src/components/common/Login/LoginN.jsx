import React, { useState } from 'react'
import './Login.css'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import styled from '@emotion/styled'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const LoginN = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  // const { visible, setVisible } = useState(true)

  const EndAdorment = (visible, setVisible) => {
    return (
      <>
        <InputAdornment position="end">
          <div>
            <IconButton
              // aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
        </InputAdornment>
      </>
    )
  }

  return (
    <div>
      <div className="A">
        <div>
          <input
            className="LoginEmailInput"
            label="email"
            variant="outlined"
            type="email"
            placeholder="User Id / Email Id"
          />
        </div>
        <div className="B">
          <input
            className="InputPassword"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            styles={{ border: 'hiddden' }}
          />
          <IconButton className="Icon" styles={{}}>
            <EndAdorment />
          </IconButton>
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
      </div>
    </div>
  )
}

export default LoginN
