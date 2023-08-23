import {BrowserRouter, Routes, Route} from "react-router-dom"


import SignUp from "../pages/SignUp"
import PrivateRouter from "./PrivateRouter"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="milestone" element={<PrivateRouter/>}>
          <Route path="" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters