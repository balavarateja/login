import { useState } from 'react'
import './Login.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/ionicons/eye'
import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Login = () => {
  const { password, setPassword } = useState()
  const { visible, setVisible } = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
  }
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

  const sxStyles = {
    padding: '15px',
    width: '325px',
    height: '55px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '29px',
    margin: '10px 5px 10px 5px',
    border: '1px solid grey',
    borderRadius: '100px',
    color: ' #cacaca',
  }

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
            placeholder="User Id / Email Id"
          />
        </div>

        {/* <FormControl sx={sxStyles} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            styles={{
              border: 'hide',
            }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
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
      </form>
    </div>
  )
}

export default Login
