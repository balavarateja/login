import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Reset from './components/Reset'
import Emaillink from './components/Emaillink'
import DemoComponents from './components/DemoComponents/DemoComponents'
import Success from './components/Success'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<Emaillink />} />
          <Route path="/demo" element={<DemoComponents />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
