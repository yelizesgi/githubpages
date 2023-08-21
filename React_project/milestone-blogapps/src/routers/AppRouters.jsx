import {BrowserRouters, Routes, Route} from "react-router-dom"

import React from 'react'
import { Login } from "@mui/icons-material"
import SignUp from "../pages/SignUp"

const AppRouters = () => {
  return (
    <BrowserRouters>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        
      </Routes>
    </BrowserRouters>
  )
}

export default AppRouters