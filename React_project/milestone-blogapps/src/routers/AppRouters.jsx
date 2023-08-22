import {BrowserRouters, Routes, Route} from "react-router-dom"


import SignUp from "../pages/SignUp"
import PrivateRouter from "./PrivateRouter"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"

const AppRouters = () => {
  return (
    <BrowserRouters>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="stock" element={<PrivateRouter/>}>
          <Route path="" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouters>
  )
}

export default AppRouters